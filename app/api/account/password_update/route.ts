import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";

export async function POST(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const { old_password, new_password, confirm_new_password } = await request.json();

        if (!old_password) return NextResponse.json({ error: "Old password is required!" }, { status: 400 })
        if (new_password !== confirm_new_password) return NextResponse.json({ error: "Passwords do not match!" }, { status: 400 })

        const userOldHashPassword = user?.getDataValue('password');
        const isValidPassword = await bcrypt.compare(old_password, userOldHashPassword)
        if (!isValidPassword) {
            return NextResponse.json({
                error: "Old Password is incorrect!"
            }, { status: 400 })
        }

        const newHashPassword = await bcrypt.hash(new_password, 9)
        await user.update({ password: newHashPassword });

        return NextResponse.json({
            success: true,
            message: "Password updated successfully!"
        })
    } catch (error) {
        return NextResponse.json({
            error: error?.message || 'Failed to update password!'
        }, { status: error?.status || 500 })
    }
}