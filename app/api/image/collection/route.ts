import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import Image from "../../modals/images";
import { Model } from "sequelize";

export async function POST(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const { img_url, prompt, id } = await request.json();

        if (id) {
            await Image.destroy({
                where: { id, user_id: user.getDataValue('id') }
            })
            return NextResponse.json({
                success: true,
                id: null
            })
        } else {
            const img = await Image.create({
                id: Date.now(),
                img_url,
                prompt,
                user_id: user.getDataValue('id'),
            })

            return NextResponse.json({
                success: true,
                id: img.getDataValue('id')
            })
        }
    } catch (error) {
        return NextResponse.json({
            error: error?.message || "Failed to generate Image",
        }, { status: error?.status || 400 })
    }
}

export async function GET(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const images = await Image.findAll({
            where: {
                user_id: user.getDataValue('id'),
            },
            attributes: {
                exclude: ["user_id"]
            }
        })

        return NextResponse.json({
            success: true,
            images
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: error?.message || "Failed to generate Image",
        }, { status: error?.status || 400 })
    }
}