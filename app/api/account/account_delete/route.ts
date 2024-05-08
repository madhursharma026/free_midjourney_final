import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import Image from "../../modals/images";
import Order from "../../modals/orders";

export async function POST(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const body = await request.json();
        if (body.confirm !== 'CONFIRM DELETE') {
            return NextResponse.json({
                error: "Cannot delete account!"
            })
        }

        const user = await User.findOne({
            where: { username }
        })
        await Image.destroy({
            where: {
                user_id: user.getDataValue('id')
            }
        })
        await Order.destroy({
            where: {
                user_id: user.getDataValue('id')
            }
        })
        await user.destroy()

        return NextResponse.json({
            success: true,
            message: "Account deleted successfully!"
        })
    } catch (error) {
        return NextResponse.json({
            error: error?.message || 'Failed to update password!'
        }, { status: error?.status || 500 })
    }
}