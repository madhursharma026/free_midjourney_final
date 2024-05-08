import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function GET(request: NextRequest, context: any) {
    try {

        const payload: { username: string, email: string } = jwt.decode(context.params.token) as any;
        if (!payload) {
            return NextResponse.json({
                success: false,
                error: 'Link is invalid/expired!'
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            error: null
        })

    } catch (error) {
        return NextResponse.json({
            error: error?.message || 'Failed to verify link!'
        }, { status: error?.status || 500 })
    }
}