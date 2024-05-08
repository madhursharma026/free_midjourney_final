"use client";

import React, { useEffect } from 'react'

const GTag = () => {

    useEffect(() => {
        // Your Google Analytics script
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            window.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-6H64NRXT5V');
    }, []);

    return (
        null
    )
}

export default GTag