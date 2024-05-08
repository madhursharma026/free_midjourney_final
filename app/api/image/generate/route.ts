import { NextRequest, NextResponse } from "next/server";
import { protectedRoute } from "../../middleware";
import User from "../../modals/users";
import axios from "axios";

export async function POST(request: NextRequest, context: any) {
    const engineId = process.env.NEXT_PUBLIC_ENGINE_ID;
    const apiHost = process.env.NEXT_PUBLIC_API_HOST;
    const apiKey = process.env.NEXT_STABILITY_API_KEY;
    const cfgScale = +process.env.NEXT_PUBLIC_AI_CFG_SCALE
    const imageHeight = +process.env.NEXT_PUBLIC_AI_HEIGHT
    const imageWidth = +process.env.NEXT_PUBLIC_AI_WIDTH
    const steps = +process.env.NEXT_PUBLIC_AI_STEPS
    try {
        const { username } = protectedRoute(request)

        const user = await User.findOne({
            where: { username }
        })

        const remainingCredits = user.getDataValue('credits')

        if (remainingCredits <= 0) {
            return NextResponse.json({
                error: "Credits are exhausted!",
            }, { status: 400 })
        }

        const body = await request.json();

        if (remainingCredits < body.samples) {
            return NextResponse.json({
                error: "Insufficient credits: not enough credits available for your request.",
            }, { status: 400 })
        }

        const res = await fetch(`${apiHost}/v1/generation/${engineId}/text-to-image`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                text_prompts: [
                    {
                        text: body.prompt,
                    },
                    {
                        text: "(((deformed))), blurry, bad anatomy, disfigured, poorly drawn face, mutation, mutated, (extra_limb), (ugly), (poorly hands), fused fingers, messy drawing, broken legs censor, censored, censor_bar, multiple breasts, (mutated hands and fingers:1.5), (long body :1.3), (mutation, :1.2), black-white, liquid body, liquidtongue, malformed, anatomical nonsense, text font ui, error, malformed hands, long neck, blurred, lowers, low res, proportions, shadow, uncoordinated unnatural huge extra heavy missingbreasts, haunch, thighs, calf, hand, missing disappearing arms, thigh, legs, fusedears, ears, old photo, black white, white filter, colorless, tongue, bad, cartoon, cartoonish, Rendered poor facial details, rendered resolution, Images cut out at the top left right bottom, composition, mutated parts, blurry image, oversaturated, deformed features, picture-frame",
                        weight: -1
                    },
                ],
                cfg_scale: cfgScale,
                height: imageHeight,
                width: imageWidth,
                steps: steps,
                samples: +(body.samples || 1),
            }),
        })

        const data = await res.json()

        if(!res.ok) {
            return NextResponse.json({
                error: data.message
            }, { status: res.status })
        }

        await User.update(
            { credits: remainingCredits - (body.samples || 1) },
            { where: { username } }
        )

        return NextResponse.json({
            success: true,
            images: data.artifacts?.map(({base64}) => ({url: `data:image/png;base64,${base64}`, id: null})) || []
        })
    } catch (error) {
        console.log('errrorr', error)
        return NextResponse.json({
            error: error?.message || 'Failed to generate image'
        }, { status: error?.status || 500 })
    }
}