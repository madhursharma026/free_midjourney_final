import { NextRequest, NextResponse } from "next/server";
import User from "../../../modals/users";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers';

export async function POST(request: NextRequest, context: any) {
    const cookiesStore = cookies()
    try {
        const { token: googleToken } = await request.json();
        const googlePayload: any = jwt.decode(googleToken);

        const user = await User.findOne({
            where: { email: googlePayload.email }
        })

        if (!user || !user.getDataValue('is_google_user')) {
            return NextResponse.json({
                success: false,
                error: "User not found!"
            }, { status: 400 })
        }

        const token = jwt.sign({
            username: user.getDataValue('username'),
            email: user.getDataValue('email'),
        }, process.env.NEXT_JWT_SECRET_KEY, {
            expiresIn: "1d",
        })

        const tokenCookie = {
            name: 'jwt-token',
            value: token,
            // httpOnly: true,
            maxAge: 60 * 60 * 24
        }

        const response = NextResponse.json({
            success: true,
            user: user.dataValues
        })

        cookiesStore.set(tokenCookie)
        response.cookies.set(tokenCookie)

        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
            error
        }, { status: 400 })
    }

}