export const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Free MidJourneyAI",
    "url": "https://freemidjourneyai.com/",
    "image": "https://freemidjourneyai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO.1ef6dad9.png&w=750&q=75",
    "description": "Discover Midjourney Free, your gateway to effortless and cost-free image creation. With our powerful AI-driven image generator, unlock boundless creativity, craft captivating visuals, and bring your ideas to life seamlessly. Start your creative journey now!",
    "publisher": {
        "@type": "Organization",
        "name": "Free MidJourneyAI",
        "logo": {
            "@type": "ImageObject",
            "url": "https://freemidjourneyai.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO.1ef6dad9.png&w=750&q=75",
            "width": 600,
            "height": 60
        }
    },
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://freemidjourneyai.com/?prompt={search_term_string}",
            "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
            ]
        },
        "query-input": "required name=search_term_string"
    }
}

export const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is FreeMidjourneyAI?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "FreeMidjourneyAI is an image generator that provides 10 free credits to new users. It offers a variety of tools and features to create stunning visuals. Additional credits can be purchased for continued use."
            }
        },
        {
            "@type": "Question",
            "name": "How can I use FreeMidjourneyAI?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To use FreeMidjourneyAI, sign up and enjoy 10 free credits as a new user. Explore the different tools available. After using the free credits, additional credits can be purchased to continue generating images."
            }
        },
        {
            "@type": "Question",
            "name": "Is FreeMidjourneyAI really free?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "FreeMidjourneyAI provides 10 free credits to new users. While there are free credits, additional credits for continued use can be purchased."
            }
        },
        {
            "@type": "Question",
            "name": "How can I purchase additional credits?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "To purchase additional credits, visit the credits section on our website. Choose a credit package that suits your needs and follow the purchase process to continue using FreeMidjourneyAI beyond the initial 10 free credits."
            }
        },
        {
            "@type": "Question",
            "name": "Is there a registration process to use FreeMidjourneyAI?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, registration is required to use FreeMidjourneyAI. New users receive 10 free credits upon signing up, and additional credits can be purchased for continued access to the image generation tools."
            }
        }
    ]
};