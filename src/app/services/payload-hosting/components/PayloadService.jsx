"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Styles from '../css/payloadservice.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PayloadService() {
    const [isMobile, setIsMobile] = useState(false);
    const sectionRef = useRef(null);
    const lunarOrbitWrapperRef = useRef(null);
    const svgArrowWrapperRef = useRef(null);
    const lunarRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (sectionRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
    
            // Animate lunar orbit wrapper first
            tl.fromTo(
                lunarOrbitWrapperRef.current,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 2 }
            );
    
            // Animate svg arrow wrapper next
            tl.fromTo(
                svgArrowWrapperRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.5"
            );

            tl.fromTo(
                lunarRef.current,
                { opacity: 0, x: -50 },
                { opacity: 1, x: 0, duration: 1 },
                "-=0.5"
            );
    
        }
    }, []);

    return (
        <section ref={sectionRef} className={`bg-color-4 ${Styles.payloadServiceSec}`}>
            <div ref={lunarOrbitWrapperRef} className={`${Styles.lunarOrbitWrapper} lunarOrbitWrapper`}>
                <Image
                    src={isMobile ? "/assets/lunar-img-sm.png" : "/assets/lunar-orbital.png"}
                    alt="Lunar Orbit"
                    width={853}
                    height={600}
                    className={Styles.img}
                />
            </div>

            <div className={`container-main`}>
                <div className={`flex flex-row gap-20 ${Styles.payloadContent}`}>
                    <div ref={svgArrowWrapperRef} className={Styles.svgArrowWrapper}>
                        <svg
                            className={Styles.svgArrow}
                            width="307"
                            height="27"
                            viewBox="0 0 307 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="298" width="9" height="9" rx="4.5" fill="white" />
                            <path d="M1 26L28.3526 5H291" stroke="#595959" />
                        </svg>
                    </div>
                    <div ref={lunarRef} className="flex flex-column">
                        <h3 className="heading-6 width-60 text-4-sm ">
                            LUNAR ORBITER PAYLOAD SERVICES
                        </h3>
                        <p className={`text-6 text-1-sm ${Styles.description}`}>
                            Through our partner iSpace HEX20 is pleased to offer payload host services for up to 3U of payload volume on our lunar orbiter platform.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}