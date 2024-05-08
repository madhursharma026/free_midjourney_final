import { ImageType } from '@/utils/types';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {
    images: ImageType[],
    activeImg: ImageType,
    setActiveImg: (img: ImageType) => void,
}

const ResultImage = ({ images, activeImg, setActiveImg}: Props) => {

    useEffect(() => {
        if(images?.length && !activeImg) {
            setActiveImg(images[0]);
        }
    }, [images])

    return (
        <div className='result-image-slider overflow-hidden'>
            {activeImg && <Image className='w-auto h-auto rounded-3xl object-contain scale-[0.99]' src={activeImg?.url} width={400} height={400} alt="result" />}

            <div className='images-dots absolute bottom-5 w-full h-auto left-0 flex items-end justify-center gap-3'>
                {images.map((img) => (
                    <div key={img?.url} className={`img-item w-20 h-20 cursor-pointer ${activeImg?.url === img?.url ? 'active' : ''}`} onClick={() => setActiveImg(img)}>
                        <Image className='rounded-md w-full h-full' src={img?.url} width={150} height={150} alt="result" />
                    </div>
                ))}
            </div>

            <div className='navigation absolute top-1/2 flex items-center justify-between w-full h-fit left-0 -translate-y-1/2'>
                <button className='inline-block border-0 w-12 h-12 bg-transparent text-white text-2xl -translate-x-1/2' disabled={images.findIndex(img => img?.url === activeImg?.url) === 0} onClick={() => setActiveImg(images[images.findIndex(img => img?.url === activeImg?.url)-1])}><FaChevronLeft /></button>
                <button className='inline-block border-0 w-12 h-12 bg-transparent text-white text-2xl translate-x-1/2' disabled={images.length-1 === images.findIndex(img => img?.url === activeImg?.url)} onClick={() => setActiveImg(images[images.findIndex(img => img?.url === activeImg?.url)+1])}><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default ResultImage