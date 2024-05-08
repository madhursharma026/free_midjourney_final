import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function AnimationHero() {
    const [images, setImages] = useState([]);
    const [size, setSize] = useState({
        height: 0,
        width: 0,
    });

    const containerRef = useRef(null);
    const numOfImg = 10;
    let radius = 500;
    const angleIncrement = (2 * Math.PI) / numOfImg;

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=1&limit=10')
            .then((data) => data.json())
            .then((res) => setImages(res));
    }, []);

    useEffect(() => {
        const centerX = containerRef.current.offsetWidth / 2;
        const centerY = containerRef.current.offsetHeight / 2;
        const tl = gsap.timeline();
        const { width, height } = containerRef.current.getBoundingClientRect();
        setSize({
            height: height,
            width: width,
        });

        const shuffledImages = [...images];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
        }

        shuffledImages?.forEach((image, index) => {
            const angle = index * angleIncrement;
            const initalRotation = (angle * 180) / Math.PI - 90;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);

            tl.set(`.image-item-${index}`, {
                left: `${x}px`,
                top: `${y}px`,
                rotation: initalRotation,
                opacity: 0,
            });
        });

        images?.forEach((img) => {
            tl.to(`.image-item-${img.id}`, {
                duration: 0.1,
                opacity: 1,
            });
        });

        tl.to({}, { delay: 3 });
        shuffledImages?.forEach((image, index) => {
            const angle = image.id * angleIncrement;
            const a = centerX + (radius - 200) * Math.cos(angle);
            const b = centerY + (radius - 200) * Math.sin(angle);

            tl.to(`.image-item-${image.id}`, {
                left: `${a}px`,
                top: `${b}px`,
            });
        });
        // tl.to({}, { delay: 5 });

        // tl.to(containerRef.current, {
        //     rotation: 360,
        //     duration: 25,
        //     repeat: -1,
        //     ease: 'linear',
        // });
    }, [images]);

    return (
        <div ref={containerRef} className="circle-container">
            {images.map((image, i) => (
                <div className="item" key={i}>
                    <img src={image?.download_url} alt="download-image" className={`image-item-${i}`} />
                </div>
            ))}
        </div>
    );
}

export default AnimationHero;
