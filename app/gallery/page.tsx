import { Metadata } from "next"
import Gallery from "./Gallery"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: 'Gallery - Free MidJourney AI',
    description: 'Craft your visual haven in the FreeMidJourneyAI Gallery. Revisit the images that inspire you most – your handpicked favorites thoughtfully organized in one space. Immerse yourself in a personalized collection tailored to elevate your creative journey',
    robots: "noindex, nofollow"
}

export default async function GalleryPage() {
    const cookiesStore = cookies()
    if (!cookiesStore.has('jwt-token')) redirect('/auth/signin');
    return <Gallery />
}