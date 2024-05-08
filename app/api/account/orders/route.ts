import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import Order from "../../modals/orders";

export async function GET(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const orders = await Order.findAll({
            where: {
                user_id: user.getDataValue('id'),
            }
        })

        return NextResponse.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: error?.message || "Failed to generate Image",
        }, { status: error?.status || 400 })
    }
}