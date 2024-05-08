import Form from "./form"
import { redirect } from "next/navigation"
import { Metadata } from "next"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: 'Sign in - Free MidJourney AI',
  description: 'Access the full suite of our AI Image Generator by logging in with your credentials. Elevate your creative endeavors with a secure and seamless login process, enabling you to harness the power of advanced visual technology.',
  robots: "index, follow"
}

export default async function SignIn() {
  const cookiesStore = cookies()
  if (cookiesStore.has('jwt-token')) redirect('/');
  return <Form />
}