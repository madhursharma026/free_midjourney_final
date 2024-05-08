import React from "react";
import PageHeader from "../components/layout/PageHeader";
import { Metadata } from "next";
import Container from "../components/Ui/Container";


export const metadata: Metadata = {
  title: 'Contact us Midjourney Ai Free Trial | Image Generator Ai',
  description: 'Try Midjourney for free with our AI image generator and art creation tool. Generate stunning images effortlessly. Midjourney is your gateway to AI-powered creativity.',
  openGraph: {
    title: 'Contact us Midjourney Ai Free Trial | Image Generator Ai',
    description: 'Try Midjourney for free with our AI image generator and art creation tool. Generate stunning images effortlessly. Midjourney is your gateway to AI-powered creativity.',
  },
  robots: "index, follow"
}


const ContactUs = () => {
  return (
    <>
      <PageHeader title="Contact us" />

      <section className="contact-form text-center py-36">
        <Container>
          <h3 className="text-5xl font-Mona_EB mb-6">Have a <span>Question</span>, <span>Concern,</span> or <span>Feedback</span>?</h3>
          <p className="text mb-5">We're here to listen and assist you in any way we can. Our dedicated team values your input and aims to provide prompt and helpful responses to all inquiries. Your thoughts and inquiries matter to us, and we look forward to hearing from you soon!</p>
          <p className="text-3xl font-Mona_Bold text-slate-700 underline underline-offset-8"> <a href="mailto:freemidjourneyai@gmail.com">freemidjourneyai@gmail.com</a></p>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
