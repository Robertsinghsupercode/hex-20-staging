"use client";

import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import Image from 'next/image';
import Styles from '../css/slider.module.css';

const images = [
  {
    src: "/assets/groundSystem-1.png",
    alt: "Slider Image 1",
  },
  {
    src: "/assets/groundSystem-2.png",
    alt: "Slider Image 2",
  },
  {
    src: "/assets/groundSystem-3.png",
    alt: "Slider Image 3",
  },
  {
    src: "/assets/groundSystem-4.png",
    alt: "Slider Image 4",
  },
  {
    src: "/assets/groundSystem-5.png",
    alt: "Slider Image 5",
  },
  {
    src: "/assets/groundSystem-6.png",
    alt: "Slider Image 6",
  },
];

export default function Slider() {
  return (
    <section className={`${Styles.sliderSec}`}>
      {/* Slider */}
      <Splide
        options={{
          type: 'loop',
          drag: 'free',
          focus: 'center',
          perPage: 2.5,
          gap: 20,
          arrows: false,
          pagination: false,
          fixedWidth: 646,
          autoScroll: {
            speed: 1,
            pauseOnFocus: false,
            pauseOnHover: false,
          },
          breakpoints: {
            767: {
              perPage: 1,
              fixedWidth: '280px',
              gap: 40,
              autoScroll: {
                speed: 0.8,
              },
            },
          },
        }}
        extensions={{ AutoScroll }}
        className={`${Styles.customSlider}`}
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className={`${Styles.slideContent}`}>
              <Image
                src={image.src}
                alt={image.alt}
                width={646}
                height={492}
                className={`${Styles.slideImage}`}
                style={{ objectFit: 'contain' }}
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Content */}
      <div className="container-main">
        <div className="flex justify-center">
          <div className={`${Styles.sliderContent} flex flex-column gap-4`}>
            <div className="flex flex-column gap-4">
              <h2 className="text-8 text-6-sm">
                HEX20 Labs is equipped with a fully integrated ground station
                infrastructure designed to support end-to-end mission operations
                for small satellites.
              </h2>
              <p className="text-1 text-6-sm">
                Our ground segment includes advanced Very High Frequency (VHF) and
                Ultra High Frequency (UHF) communication systems optimized for
                Telemetry, Tracking, and Command (TT&C) operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}