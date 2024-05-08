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

        if (!body.order_price)
            return NextResponse.json({ success: false, message: "Please Provide order_price And user_id" }, { status: 400 })

        const user = await User.findOne({
            where: {
                username,
            }
        })

        try {
            const PaypalClient = client()
            //This code is lifted from https://github.com/paypal/Checkout-NodeJS-SDK
            const request = new paypal.orders.OrdersCreateRequest()
            request.headers['prefer'] = 'return=representation'
            request.requestBody({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: body.order_price + "",
                        },
                        items: [
                            {
                                name: 'basic',
                                unit_amount: {
                                    currency_code: 'USD',
                                    value: body.order_price + "",
                                },
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                            }
                        ]
                    },
                ],

            })
            const response = await PaypalClient.execute(request)
            if (response.statusCode !== 201) {
                return NextResponse.json({ success: false, message: "Some Error Occured at backend" }, {status: 500})
            }

            let credits: Number;
            // if (body.product_id === 'PRODUCT_ONE' && response.result?.purchase_units?.[0]?.amount.value === '3.00') {
            //     credits = 10;
            // }

            // if (body.product_id === 'PRODUCT_TWO' && response.result?.purchase_units?.[0]?.amount.value === '15.00') {
            //     credits = 50;
            // }

            if (/* body.product_id === 'PRODUCT_CUSTOM' && */ response.result?.purchase_units?.[0]?.amount.value) {
                credits = Number(response.result?.purchase_units?.[0]?.amount.value) * creditsPerUnit;
            }

            await Order.create({
                id: response.result?.id,
                user_id: user.getDataValue('id'),
                product_id: body.product_id,
                status: response.result?.status,
                reference_id: response.result?.purchase_units?.[0]?.reference_id,
                amount: response.result?.purchase_units?.[0]?.amount.value,
                currency_code: response.result?.purchase_units?.[0]?.amount.currency_code,
                payee_email: response.result?.purchase_units?.[0].payee.email_address,
                payee_merchant_id: response.result?.purchase_units?.[0].payee.merchant_id,
                order_create_time: response.result?.create_time,
                credits,
            })

            return NextResponse.json({ success: true, order_id: response.result.id })
        }
        catch (err) {
            console.log("Err at Create Order: ", err)
            return NextResponse.json({ success: false, message: "Could Not Found the user" }, { status: 500 })
        }
    } catch (error) {
        return NextResponse.json({
            error: error?.message || "Some Error Occured at backend"
        }, { status: error?.status || 500 })
    }

}
