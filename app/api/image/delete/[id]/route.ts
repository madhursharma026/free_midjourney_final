import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../../middleware";
import User from "../../../modals/users";
import Image from "../../../modals/images";

export async function DELETE(request: NextRequest, context: any) {
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const id = context.params.id;

        const img = await Image.findOne({
            where: {
                id,
                user_id: user.getDataValue('id'),
            }
        })

        if(img) {
            await Image.destroy({
                where: {id: img.getDataValue('id')}
            })

            return NextResponse.json({
                success: true,
                message: 'Image deleted successfully!'
            })
        }
        
        return NextResponse.json({
            success: false,
            error: "Image not found!"
        })
    } catch (error) {
        return NextResponse.json({
            error: error?.message || "Failed to generate Image",
        }, { status: error?.status || 400 })
    }
}