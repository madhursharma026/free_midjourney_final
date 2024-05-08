import { redirect } from "next/navigation"
import { Metadata } from "next"
import { cookies } from "next/headers"
import Form from "./form"

export const metadata: Metadata = {
  title: 'Sign up - Free MidJourney AI',
  description: 'Ready to unleash the power of our AI Image Generator? Sign up now and join the creative revolution! Register today to access a world of visual possibilities and bring your ideas to life.',
  openGraph: {
    title: 'Sign up - Free MidJourney AI',
    description: 'Ready to unleash the power of our AI Image Generator? Sign up now and join the creative revolution! Register today to access a world of visual possibilities and bring your ideas to life.',
  },
  robots: "index, follow"
}

export default async function Register() {
  const cookiesStore = cookies()
  if (cookiesStore.has('jwt-token')) redirect('/');
  return <Form />
}