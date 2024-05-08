import { NextRequest, NextResponse } from "next/server";
import User from "../../modals/users";

export async function POST(request: NextRequest, context: any) {

    try {
        const body = await request.json();
        const user = await User.findOne({
            where: { email: body.email }
        })
        if (!user) {
            return NextResponse.json({
                success: false,
                error: "User not found!"
            }, { status: 400 })
        }
        
        return NextResponse.json({
            success: true,
            user,
        })
    } catch (error) {
        return NextResponse.json({
            error
        }, { status: 400 })
    }

}