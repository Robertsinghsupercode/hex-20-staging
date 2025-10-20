'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Styles from '../css/orbit.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Orbit() {

    const orbitSec = useRef(null);
    const earthRef = useRef(null);
    const svgRef = useRef(null);
    const orbitContentRef = useRef(null);

    useEffect(() => {
        if (orbitSec.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: orbitSec.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            tl.fromTo(
                earthRef.current,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration: 1.5 },
            );

            tl.fromTo(
                [svgRef.current, orbitContentRef.current],
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1.5 }
            );
        }

    }, []);

    return (
        <section ref={orbitSec} className={`${Styles.orbitSec} flex items-center`}>
                <div className='flex justify-between'>
                    <div ref={orbitContentRef} className={`${Styles.orbitContent}`}>
                        <p className='text-7 text-1-sm'>
                            Whether supporting internal missions or client 
                            payloads, our ground infrastructure ensures reliable, 
                            scalable, and secure communications for pre-launch 
                            testing, early orbit phase (LEOP), and sustained 
                            mission operations.
                        </p>
                    </div>
                    <div className={`${Styles.imgContainer}`}>
                        <svg ref={svgRef} className={`${Styles.svg}`} xmlns="http://www.w3.org/2000/svg" width="225" height="27" viewBox="0 0 225 27" fill="none">
                            <rect x="9" y="27" width="9" height="9" rx="4.5" transform="rotate(180 9 27)" fill="white"/>
                            <path d="M224 1L204.287 22H15" stroke="#595959"/>
                        </svg>
                        <Image
                            src="/assets/earth.png"
                            alt=""
                            width={555}
                            height={1164}
                            className={`${Styles.earth}`}
                            ref={earthRef}
                        />
                    </div>
                </div>
        </section>
    )
}