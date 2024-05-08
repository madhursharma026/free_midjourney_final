import client from '@/utils/paypal'
import paypal from '@paypal/checkout-server-sdk'
import { NextRequest, NextResponse } from 'next/server'
import Order from '../../modals/orders';
import { protectedRoute } from '../../middleware';
import User from '../../modals/users';

export async function POST(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)
        const body = await request.json();
        const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;

        if (!body.order_id)
            return NextResponse.json({ success: false, message: "Please Provide Order ID" }, { status: 400 })

        //Capture order to complete payment
        const { order_id } = body
        const PaypalClient = client()
        const _request = new paypal.orders.OrdersCaptureRequest(order_id)
        const response = await PaypalClient.execute(_request)
        if (!response) {
            return NextResponse.json({ success: false, message: "Some Error Occured at backend" }, {status: 500})
        }

        const user = await User.findOne({
            where: { username }
        })

        const order = await Order.findOne({
            where: { id: order_id, user_id: user.getDataValue('id') }
        })

        if (!order) {
            return NextResponse.json({ success: false, message: "Order Not Found!" }, { status: 400 })
        }

        const amount = order.getDataValue('amount');
        // const product_id = order.getDataValue('product_id');
        
        // if (product_id === 'PRODUCT_ONE' && amount === '3.00') {
        //     await user.update({
        //         credits: user.getDataValue('credits') + 10,
        //         is_premium: true,
        //     });
        // }

        // if (product_id === 'PRODUCT_TWO' && amount === '15.00') {
        //     await user.update({
        //         credits: user.getDataValue('credits') + 50,
        //         is_premium: true,
        //     });
        // }

        if (/* product_id === 'PRODUCT_CUSTOM' && */ amount) {
            await user.update({
                credits: user.getDataValue('credits') + (Number(amount) * creditsPerUnit),
                is_premium: true,
            });
        }

        await order.update({
            status: response.result?.status,
        })

        return NextResponse.json({ success: true, message: "Order completed successfully!" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: error?.message || "Some Error Occured at backend"
        }, { status: error?.status || 500 })
    }
}
