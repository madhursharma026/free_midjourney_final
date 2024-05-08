import React from "react";
import PageHeader from "@/app/components/layout/PageHeader";
import { Metadata } from "next";
import Container from "../components/Ui/Container";

export const metadata: Metadata = {
  title: 'Ai Art Generator | Ai Painting Generator | Midjourney Bot Free',
  description: 'Explore the best AI art generator and image creator with Midjourney! Generate stunning AI art for free, Ai Art Generator From Text, create headshots and paintings.',
  openGraph: {
    title: 'Ai Art Generator | Ai Painting Generator | Midjourney Bot Free',
    description: 'Explore the best AI art generator and image creator with Midjourney! Generate stunning AI art for free, Ai Art Generator From Text, create headshots and paintings.',
  },
  robots: "index, follow"
}

export default async function AboutUs () {
  return (
    <>
      <PageHeader title="About us" />

      <main className="py-28">
        <Container>
          <h1 className="heading leading-normal mb-6">welcome to Free MidJourney, where imagination meets artificial intelligence.</h1>
          <p className="mb-3 text">Welcome to MidJourney Free, your go-to destination for hassle-free and captivating image generation powered by cutting-edge artificial intelligence technology. At Free MidJourney, we believe in making creativity accessible to everyone, and our user-friendly platform reflects that commitment. Whether you're a seasoned designer or someone exploring the world of digital art for the first time, our AI image generator empowers you to effortlessly create stunning visuals with just a few clicks.</p>
          <p className="text">Our team is passionate about bridging the gap between technology and creativity, and we've designed Free MidJourney to be intuitive and straightforward. Say goodbye to complex interfaces and steep learning curves – with us, generating eye-catching images is as simple as it gets. As we continue on this journey, we are dedicated to constantly refining and expanding our AI capabilities to bring you an ever-evolving and delightful image creation experience. Join us at Free MidJourney, where imagination knows no bounds, and the path to stunning visuals is paved with simplicity and innovation.
          </p>
        </Container>
      </main>
    </>
  );
};
