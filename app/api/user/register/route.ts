import { NextRequest, NextResponse } from "next/server";
import User from "../../modals/users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import {cookies} from 'next/headers';

export async function POST(request: NextRequest, context: any) {
    const cookiesStore = cookies()
    try {
        const req = await request.json();
        const hashPassword = await bcrypt.hash(req.password, 9)
        const user = await User.create({
            username: req.username,
            email: req.email,
            password: hashPassword,
        })

        const token = jwt.sign({
            username: user.getDataValue('username'),
            email: user.getDataValue('email'),
        }, process.env.NEXT_JWT_SECRET_KEY, {
            expiresIn: "1d"
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
        }, {status: 201})

        cookiesStore.set(tokenCookie)
        response.cookies.set(tokenCookie)

        return response;

    } catch (error: any) {
        return NextResponse.json({
            error: error?.errors?.[0]?.message || error?.message || "Failed to create user!",
            success: false,
        }, { status: 400 })
    }
    
}