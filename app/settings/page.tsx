import { Metadata } from "next"
import Settings from "./Settings"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: 'Account Settings - Free MidJourney AI',
    description: 'Craft your unique FreeMidJourneyAI experience with precision on the Account Settings page. Tailor your creative haven by personalizing preferences, fortifying security, and seamlessly managing your account details. Dive into a world of limitless possibilities with a personalized touch – because your creativity deserves nothing less!',
    robots: "noindex, nofollow"
}

export default async function SettingsPage() {
    const cookiesStore = cookies();
    if (!cookiesStore.has('jwt-token')) redirect('/auth/signin');
    return <Settings />
}