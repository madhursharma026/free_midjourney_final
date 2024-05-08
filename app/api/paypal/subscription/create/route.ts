import { NextRequest, NextResponse } from 'next/server'
import Order from '../../../modals/orders';
import { protectedRoute } from '../../../middleware';
import User from '../../../modals/users';

export async function POST(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)
        const body = await request.json();
        const creditsPerUnit = +process.env.NEXT_PUBLIC_CREDITS_PER_UNIT;
        const clientIdDev = process.env.NEXT_PUBLIC_CLIENT_ID_DEV
        const clientSecretDev = process.env.NEXT_PAYPAL_CLIENT_SECRET_DEV

        if (!body.order_price)
            return NextResponse.json({ success: false, message: "Please Provide order_price And user_id" }, { status: 400 })

        const user = await User.findOne({
            where: {
                username,
            }
        })

        try {

            const payload = {
                "plan_id": "P-7RY04320C4610134KMXPRT7I",
                "application_context": {
                    "brand_name": "Default Application",
                    "locale": "en-US",
                    "user_action": "SUBSCRIBE_NOW",
                    "payment_method": {
                        "payer_selected": "PAYPAL",
                        "payee_preferred": "IMMEDIATE_PAYMENT_REQUIRED"
                    },
                }
            }

            console.log('payload', { 'Authorization': 'Basic ' + Buffer.from(clientIdDev + ":" + clientSecretDev).toString("base64"), })

            const res = await fetch('https://api-m.sandbox.paypal.com/v1/billing/subscriptions', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + Buffer.from(clientIdDev + ":" + clientSecretDev).toString("base64"),
                    'Content-Type': 'application/json',
                    'Prefer': 'return=representation'
                },
                body: JSON.stringify(payload)
            });

            const response = await res.json();
            console.log('response', response)
            console.log('order created', {
                id: response.id,
                user_id: user.getDataValue('id'),
                product_id: response.plan_id,
                status: response.status,
                order_create_time: response.create_time,
                amount: parseInt(body.order_price),
                currency_code: "USD",
                credits: 10,
            })

            await Order.create({
                id: response.id,
                user_id: user.getDataValue('id'),
                product_id: response.plan_id,
                status: response.status,
                order_create_time: response.create_time,
                amount: parseInt(body.order_price),
                currency_code: "USD",
                credits: 10,
            })

            return NextResponse.json({ success: true, order_id: response.id })
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
