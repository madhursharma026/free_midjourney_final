import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import sendMail from "@/utils/emailService";
import jwt from "jsonwebtoken";
import { forgotPasswordTemplate } from "@/utils/emailTemplates";

export async function POST(request: NextRequest, context: any) {
    try {
        const { email } = await request.json();

        const user = await User.findOne({
            where: { email }
        })
console.log('user', user)
        if (user) {
            const token = jwt.sign({
                username: user.getDataValue('username'),
                email: user.getDataValue('email'),
                forgot_password: true,
            }, process.env.NEXT_JWT_SECRET_KEY, {
                expiresIn: 300  // 5mins
            })

            const r = await sendMail({
                toEmail: email,
                toName: user.getDataValue('username'),
                subject: 'Password Reset for Your Freemidjourneyai Account',
                html: forgotPasswordTemplate({ username: user.getDataValue('username'), link: `https://freemidjourneyai.com/auth/password-change/?access_token=${token}` }),
            })

            console.log('rrrrrrrrrrrrrr', r)
        }
            
        return NextResponse.json({
            success: true,
            message: "Forgot password link has been sent successfully to your email!"
        })

    } catch (error) {
        return NextResponse.json({
            error: error?.message || 'Failed to send link!'
        }, { status: error?.status || 500 })
    }
}