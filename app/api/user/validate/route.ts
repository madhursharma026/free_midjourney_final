import { NextRequest, NextResponse } from "next/server";
import User from "../../modals/users";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers';

export async function GET(request: NextRequest, context: any) {
    const cookiesStore = cookies();
    try {
        if (cookiesStore.get('jwt-token')) throw new Error('Token expired!')
        return NextResponse.json({
            success: true,
            cookie: cookiesStore.get('jwt-token')
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            success: false,
        }, { status: 401 })
    }

}