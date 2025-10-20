"use client"
import React from 'react'
import styles from '../css/banner.module.css'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {AutoScroll} from '@splidejs/splide-extension-auto-scroll';
import LineAnimation from '@/app/components/LineAnimation';

export default function Banner() {
  const logos = [
    { src: "/assets/training-img-1.png", alt: "traning" },
    { src: "/assets/training-1.png", alt: "traning" },
    { src: "/assets/training-img-2.png", alt: "traning" },
    { src: "/assets/training-2.png", alt: "traning" },
    { src: "/assets/training-img-3.png", alt: "traning" },
    { src: "/assets/training-3.png", alt: "traning" },
  ];

  return (
    <section className={`${styles.trainingBanner}`}>
        <div className={`${styles.trainingBannerContent} container-main flex justify-center items-center flex-column gap-20 text-align-center`}>
            <h1 className="heading-1 heading-1-sm">The XORBIT Program</h1>
            <p className="text-7 text-1-sm">
               Accelerated Space programme for Universities
            </p>
        </div>
        <div className={`${styles.bannerSlider} training-banner-slider`}>
       <Splide
        options={{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            focus: 'center',
            arrows: false,
            pagination: false,
            autoScroll: {
            speed: 1,
            pauseOnHover: false,
            },
            breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1.5 },
            480: { perPage: 1 },
            },
        }}
        extensions={{ AutoScroll }}
        >
        {logos.map((logo, index) => (
            <SplideSlide key={index}>
            <Image 
                src={logo.src} 
                alt={logo.alt} 
                width={646} 
                height={492} 
                className={styles.logoImage}
            />
            </SplideSlide>
        ))}
        </Splide>
        </div>
    </section>
  )
}
