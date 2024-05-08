import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { protectedRoute } from "../../../middleware";
import User from "../../../modals/users";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest, context: any) {
    try {
        const { token, new_password, confirm_password } = await request.json();

        const payload: { username: string, email: string } = jwt.decode(token) as any;
        if (!payload) {
            return NextResponse.json({
                success: false,
                error: 'Link is invalid/expired!'
            }, { status: 400 })
        }

        const user = await User.findOne({
            where: { username: payload.username, email: payload.email }
        })

        if (new_password !== confirm_password) return NextResponse.json({ error: "Passwords do not match!" }, { status: 400 })

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