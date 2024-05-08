"use client";
import React from 'react'
import { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import Result from "../../components/Result";
import { generateImage, getImageDetailsById } from "@/utils/api";
import Star from "@/assets/images/star.svg"
import Image from "next/image";
import toast from "react-hot-toast";
import Loader from "../../components/common/Loader";
import { userContext } from "../UserContextProvider";
import { useRouter, useSearchParams } from "next/navigation";
import { ImageType } from '@/utils/types';

const SearchInput = () => {
    const searchBar = useRef<HTMLInputElement>(null);
    const [heroContentDiv, setHeroContentDiv] = useState(null);
    const { refreshUser, user } = useContext(userContext)
    const [generateImages, setGenerateImages] = useState<ImageType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>("");
    const [samples, setSamples] = useState('1');

    const router = useRouter();
    const location = useSearchParams();

    gsap.registerPlugin(Flip);

    const searchFixed = {
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
    };

    useEffect(() => {
        setHeroContentDiv(document.getElementById("heroContentDiv"));
    }, [])

    useEffect(() => {
        if (user?.email) {
            if (location.get('prompt')) {
                setSearchValue(location.get('prompt'));
                handleSubmit(location.get('prompt'));
            } else if (location.get('share_prompt')) {
                fetchImageDetails(location.get('share_prompt'));
            }
        }
    }, [user?.email])

    const fetchImageDetails = async (imageId: string) => {
        setIsLoading(true);
        try {
            const { data } = await getImageDetailsById({ imageId });
            gsapAnimation();
            handleRemoveDiv();
            setGenerateImages([data.image]);
            setSearchValue(data.image.prompt);
        } catch (error) {
            toast.error(error?.response?.data?.error)
        } finally {
            setIsLoading(false);
        }
    }

    const handleSubmit = async (prompt: string) => {
        if (!prompt) return;
        router.push(`/?prompt=${prompt}`);
        setIsLoading(true);
        try {
            const { data } = await generateImage({ prompt, samples });
            gsapAnimation();
            handleRemoveDiv();
            setGenerateImages(data.images);
            refreshUser();
            setTimeout(() => setIsLoading(false), 100)
        } catch (error) {
            toast.error(error?.response?.data?.error)
            setIsLoading(false);
        }
    };

    const gsapAnimation = () => {
        let initialState = Flip.getState(searchBar.current);
        Object.assign(searchBar.current.style, searchFixed);
        let finalState = Flip.getState(searchBar.current);

        Flip.from(initialState, {
            to: finalState,
            duration: 1,
            ease: "circ.out",
            scale: true,
            // onUpdate: () => Flip.applyStyles(searchBar.current),
        });
    };

    const handleRemoveDiv = () => {
        gsap.to(heroContentDiv, {
            opacity: 0,
            y: -50,
            duration: 0.5,
            onComplete: removeDiv,
        });
    };

    const removeDiv = () => {
        gsap.to(heroContentDiv, {
            height: 0,
            margin: 0,
            padding: 0,
            visibility: "hidden",
            duration: 0.5,
        });
    };

    // const searchBarAnim = {
    //   transform: isDivVisible ? "scale(1.03)" : "scale(1)",
    // };

    return (
        <>
            {generateImages?.length > 0 && <Result generateImages={generateImages} isLoading={isLoading} prompt={searchValue} />}
            <div className="relative h-20 z-50 outer-searchbar">
                <div ref={searchBar} className="pq-image-generator mx-auto lg:max-w-4xl md:max-w-2xl sm:flex-wrap w-full">
                    <div className="search-bar shadow-lg flex bg-white p-2.5 rounded-2xl z-10 transition w-full">
                        <textarea
                            id="pq-search-txt"
                            className="block border-none bg-transparent min-h-14 text-base outline-none shadow-none font-normal resize-none leading-6 p-0 m-0 flex-1"
                            placeholder="Describe what you want"
                            onChange={({ currentTarget }) => setSearchValue(currentTarget.value)}
                            value={searchValue}
                        />
                        <div className='sample-select'>
                            <select className='w-16 border border-slate-300 border-solid text-center pr-5 mr-1 text-base h-full outline-none' onChange={({ target }) => setSamples(target.value)} value={samples} aria-label='sample'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <button type="button" onClick={() => handleSubmit(searchValue)} className="pq-button-flat sm:w-full" disabled={!searchValue || isLoading}>
                            {isLoading ? <Loader /> : <span className="flex items-center justify-center">Generate <span className='mx-2'>|</span> {samples} <Image src={Star} alt="star" /></span>}
                        </button>
                    </div>
                </div>
            </div>
        </>
            
    )
}

export default SearchInput;
