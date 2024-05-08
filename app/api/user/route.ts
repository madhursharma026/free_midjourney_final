import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../middleware";
import User from "../modals/users";

export async function GET(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username },
        })

        return NextResponse.json({
            success: true,
            user: user.dataValues
        })
    } catch (error) {
        return NextResponse.json({
            error: error?.message || "Failed to get user details",
        }, { status: error?.status || 500 })
    }
}