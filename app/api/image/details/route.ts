import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import Image from "../../modals/images";

export async function GET(request: NextRequest, context: any) {
    try {

        const url = new URL(request.url)
        const imageId = url.searchParams.get('imageId');

        const image = await Image.findOne({
            where: {
                id: imageId,
            },
            attributes: {
                exclude: ["user_id", 'img_url'],
                include: [['img_url', 'url']]
            },
        })

        if (!image) {
            return NextResponse.json({
                error: "Image details not found!",
            }, { status: 400 })
        }

        return NextResponse.json({
            success: true,
            image: {...image.dataValues},
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error: error?.message || "Failed to generate Image",
        }, { status: error?.status || 500 })
    }
}