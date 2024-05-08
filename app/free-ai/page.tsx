import { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: 'Free Midjourney: Intuitive AI Art Generator | Free MidJourney',
  openGraph: {
    title: 'Free Midjourney: Intuitive AI Art Generator | Free MidJourney',
    description: "Elevate your creative journey with our free AI image generator! Unleash the power of artificial intelligence inspired by DALL - E and Midjourney.Transform text into captivating visual art effortlessly.Our platform offers a seamless experience for generating stunning images.Sign up for a free account and explore the endless possibilities.No hidden costs, just pure artistic expression.With our user - friendly interface, you can bring your ideas to life with ease.Don't miss out – try our AI image generator today and witness the magic of AI-driven creativity for free!",
  },
  robots: "index, follow"
}

export default function FreeAi () {
  return <Home />
}
