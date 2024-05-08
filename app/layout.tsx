import type { Metadata } from "next";
import { Inter } from "next/font/google";
import App from "./app";
import { db } from "@/config";
import Script from "next/script";
import { Suspense } from "react";
import Loading from "./loading";
import GTag from "./components/GTag";
// import InitServices from "./components/InitServices";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "@/assets/css/style.css";
import { faqSchema, jsonLd } from "@/utils/schemas";

const dmsans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "Free Midjourney AI Image Generator Online | Text to Image",
  description: "Unlock the power of AI with Free Midjourney AI Image Generator! Create stunning AI-generated art from your photos, convert text to images effortlessly.",
  keywords: ["mid Journey free", "midJourney free", "free midjourney", "midjourney", "mid journey", "midjourney image ai generator", "dalle", "dall-e", "dalle free", "ai image generator", "ai generated images", "ai photo generator", "ai picture generator", "free ai art generator", "ai headshot generator", "free ai image generator", "ai art generator free", "ai image generator free", "best ai art generator", "ai drawing generator", "image generator ai", "text to image ai", "best ai image generator", "ai image generator from text", "image ai", "ai photo", "ai image creator", "ai graphic generator", "ai image", "ai art generator from photo", "ai art generator from text", "ai picture generator free", "image ai generator", "ai image generator"],
  alternates: {
    canonical: "https://www.freemidjourneyai.com",
  },
  openGraph: {
    title: "Free Midjourney AI Image Generator Online | Text to Image",
    siteName: "Free midjourney",
    url: "https://www.freemidjourneyai.com",
    type: "website",
    description: "Unlock the power of AI with Free Midjourney AI Image Generator! Create stunning AI-generated art from your photos, convert text to images effortlessly.",  
  }
};

if (!db.initialized) {
  db.init();
  db.initialized = true;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta itemProp="name" content="braindtormai" />
        <meta itemProp="description" content="Manifest your creative visions with Free midjourney magical free AI art generator. Our intuitive platform uses advanced deep learning to turn text descriptions into gorgeous ai AI-generated images for anyone to enjoy a free tier of AI artistry. Unleash your imagination today!" />
        <meta itemProp="image" content="https://freemidjourneyai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO.1ef6dad9.png&w=750&q=75" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-6H64NRXT5V" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${dmsans.className}`}>
        <GTag />
        <Suspense fallback={<Loading />}>
          <App>
            {children}
          </App>
        </Suspense>
      </body>
    </html>
  );
}
