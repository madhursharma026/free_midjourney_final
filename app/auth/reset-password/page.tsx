import { redirect } from "next/navigation"
import { Metadata } from "next"
import { cookies } from "next/headers"
import Form from "./form"

export const metadata: Metadata = {
  title: 'Reset Password - Free MidJourney AI',
  description: 'Effortlessly reset your password on FreeMidJourneyAI. Securely regain access to your account with a streamlined process on our Reset Password page.',
  robots: "noindex, nofollow"
}

export default async function SignIn() {
  const cookiesStore = cookies()
  if (cookiesStore.has('jwt-token')) redirect('/');
  return <Form />
}