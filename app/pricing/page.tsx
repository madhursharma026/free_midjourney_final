import { Metadata } from "next"
import Pricing from "./Pricing"

export const metadata: Metadata = {
    title: 'Ai Image Generator From Image | Ai Drawing Graphic Generator',
    description: 'Discover Midjourney, the online platform offering a free AI image generator and drawing tool. Create stunning images from text or existing images effortlessly.',
    openGraph: {
        title: 'Ai Image Generator From Image | Ai Drawing Graphic Generator',
        description: 'Discover Midjourney, the online platform offering a free AI image generator and drawing tool. Create stunning images from text or existing images effortlessly.',
    },
    robots: "index, follow"
}

export default async function GalleryPage() {
    return <Pricing />
}