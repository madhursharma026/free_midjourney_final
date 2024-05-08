'use client'

import { useEffect, useState } from "react"
import FactData from "@/facts"

const PageLoader = () => {
    const [facts, setFacts] = useState(FactData);
    const [currentFactIndex, setCurrentFactIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFactIndex(prevIndex => (prevIndex + 1) % facts.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [facts]);

  return (
    <div className="loader-with-fact">
        <span className="page-loader"></span>
        <div className="funfact text-center mt-4 pt-3">
            <p>Fun fact: {facts[currentFactIndex]?.fact}</p>
        </div>
    </div>
  )
}

export default PageLoader