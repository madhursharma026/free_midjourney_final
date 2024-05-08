import sendMail from "@/utils/emailService"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest, context: any) {
    
    try {
        const response = await sendMail({
            toEmail: 'moizratlamwala78652@gmail.com',
            toName: 'moiz ratlamwala',
            subject: 'Your email flight plan!',
            text: "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
            html: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        })

        return NextResponse.json({
            success: true,
            response: response.body,
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success: false,
            error,
        })
    }
}