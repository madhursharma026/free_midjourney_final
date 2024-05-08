'use client'
import Image from "next/image";
import React, { useMemo, useEffect, useState } from "react";
import { Button, Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";

import { IoDownloadOutline } from "react-icons/io5";
import { IoMdShareAlt } from "react-icons/io";
import gsap from "gsap";
import { toggleCollection } from "@/utils/api";
import Heart from "@/assets/images/heart.svg";
import HeartAnim from "@/assets/images/heart-anim.gif";
import ImgLoading from "@/assets/images/img-loading.png";
import ImgLoadingUp from "@/assets/images/up-loading.svg";
import ResultImage from "./ResultImage";
import { ImageType } from "@/utils/types";
import { useRouter, useSearchParams } from "next/navigation";

const cfgScale = +process.env.NEXT_PUBLIC_AI_CFG_SCALE
const imageHeight = +process.env.NEXT_PUBLIC_AI_HEIGHT
const imageWidth = +process.env.NEXT_PUBLIC_AI_WIDTH
const steps = +process.env.NEXT_PUBLIC_AI_STEPS

const Result = ({ generateImages, prompt, isLoading }) => {
  const [images, setImages] = useState<ImageType[]>(generateImages);
  const [activeImg, setActiveImg] = useState<ImageType>()
  const location = useSearchParams();

  const handleAddToCollection = async () => {
    try {
      const { data } = await toggleCollection({ img_url: activeImg.url, prompt: promptValue, id: activeImg?.id });
      images.forEach(img => img.id = img.url === activeImg.url ? data.id : img.id);
      setImages([...images]);
      setActiveImg({...activeImg, id: data.id});
    } catch (error) {
    }
  }

  useEffect(() => {
    if (generateImages?.length) {
      setImages(generateImages);
      setActiveImg(generateImages[0]);
    };
  }, [generateImages])

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .to(".result-image", {
        opacity: 1,
        visibility: "visible",
        duration: 1,
      })
      .to(
        ".action-btn button",
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.1,
          stagger: 0.1,
        },
        "-=0.1"
      )
      .to(".prompt h2, .prompt p", {
        opacity: 1,
        y: 0,
        visibility: "visible",
        duration: 1,
        stagger: 0.1,
      })
      .to(
        ".image-info",
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          stagger: 0.1,
        },
        "-=0.050"
      )
      .to(
        ".image-info ul li",
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          stagger: 0.1,
        },
        "-=0.1"
      );
  }, []);

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>, img: any) => {
    e.stopPropagation();
    let a = document.createElement('a');
    console.log('prompt :>> ', prompt);
    a.download = `${prompt.slice(0, 50)}.jpg`;
    a.href = img.url;
    document.body.appendChild(a);
    a.click();
    a.remove();
    
}

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const promptValue = useMemo<string>(() => prompt, [isLoading]);

  return (
    <div className="result-page">
      <div className="grid grid-cols-2 xl:items-start items-center">
        <div className="result-image h-[calc(100%_-_50px)] w-[calc(100%_-_50px)] text-center relative">
          {isLoading ? <span className="loading">
            <Image src={ImgLoadingUp} width={500} height={500} alt="loading" />
            {/* <Image src={ImgLoading} width={500} height={500} alt="" /> */}
            </span> : (
              <ResultImage activeImg={activeImg} setActiveImg={setActiveImg} images={images} />
          )}
        </div>

        <div className="result-content">
          <div className="action-btn flex items-center justify-end gap-3">
            {!location.get('share_prompt') && (
              <OverlayTrigger overlay={<Tooltip>Add to Collection</Tooltip>}>
                <Button className="bg-[#211e36] rounded-lg min-w-16 min-h-16 text-xl p-0 shadow-lg translate-y-8 flex justify-center items-center border-1 border-indigo-500 hover:bg-transparent" onClick={handleAddToCollection}>
                  {activeImg?.id ? <Image src={HeartAnim} width={50} alt="heart" /> : <Image src={Heart} width={20} alt="heart" />}
                </Button>
              </OverlayTrigger>
            )}

            <OverlayTrigger overlay={<Tooltip>Download</Tooltip>}>
              <Button className="bg-[#211e36] rounded-lg min-w-16 min-h-16 text-xl p-0 shadow-lg translate-y-8 flex justify-center items-center border-1 border-indigo-500 hover:bg-transparent" onClick={(e) => handleDownload(e, activeImg)}>
                <IoDownloadOutline />
              </Button>
            </OverlayTrigger>

            {/* {!location.get('share_prompt') && (
              <Button onClick={handleShare}>
                <IoMdShareAlt /> Share
              </Button>
            )} */}
          </div>

          <div className="my-6">
            <h2 className="text-gray-400 font-Mona_Medium text-base">Prompt</h2>
            <p className="text-gray-200 font-Mona_Regular text-xl">{promptValue}</p>
          </div>

          <div className="image-info bg-[#100d20] rounded-lg p-6 w-3/4 border-1 border-indigo-500 ">
            <ul className="p-0 m-0 grid grid-cols-3 gap-6 items-center justify-between">
              <li>
                <h3 className="text-sm text-gray-300">Image Size</h3>
                <p className="text-white text-base">{imageWidth}x{imageHeight}</p>
              </li>
              {/* <li>
                <h3>Ratio</h3>
                <p>1:1 - landscape</p>
              </li> */}
              {/* <li>
                <h3>Modal</h3>
                <p>Art</p>
              </li> */}
              <li>
                <h3 className="text-sm text-gray-300">Steps</h3>
                <p className="text-white text-base">{steps}</p>
              </li>
              <li>
                <h3 className="text-sm text-gray-300">CFG Scale</h3>
                <p className="text-white text-base">{cfgScale}</p>
              </li>
              {/* <li>
                <h3>Time</h3>
                <p>1 sec ago</p>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
