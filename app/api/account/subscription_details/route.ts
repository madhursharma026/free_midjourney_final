import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import Image from "../../modals/images";
import Order from "../../modals/orders";

export async function GET(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const order = await Order.findOne({
            where: {
                user_id: user.getDataValue('id'),
                status: "COMPLETED",
            }
        })

        if(!order) {
            return NextResponse.json({
                success: false,
                subscription: null,
            })
        }

        return NextResponse.json({
            success: true,
            subscription: {
                status: order.getDataValue('status'),
                createdAt: order.getDataValue('createdAt'),
                amount: order.getDataValue('amount'),
                credits: user.getDataValue('credits'),
                email: user.getDataValue('email'),
            }
        })
    } catch (error) {
        return NextResponse.json({
            error: error?.message || 'Failed to update password!'
        }, { status: error?.status || 500 })
    }
}