import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from "next/image";
import Styles from '../css/partners.module.css';

export default function Partners() {

  const partnersLogo = [
    {
      img: "/assets/csiro-2.svg",
    },
    {
      img: "/assets/kerela-startup.svg",
    },
    {
      img: "/assets/uae-space.svg",
    },
    {
      img: "/assets/adelaide.svg",
    },
    {
      img: "/assets/australien-university.svg",
    },
    {
      img: "/assets/kfas-2.svg",
    },
    {
      img: "/assets/azista-2.svg",
    },
    {
      img: "/assets/university-sf.svg",
    },
    {
      img: "/assets/csiro-2.svg",
    },
    {
      img: "/assets/kerela-startup.svg",
    },
    {
      img: "/assets/uae-space.svg",
    },
    {
      img: "/assets/adelaide.svg",
    },
    {
      img: "/assets/australien-university.svg",
    },
    {
      img: "/assets/kfas-2.svg",
    },
    {
      img: "/assets/azista-2.svg",
    },
    {
      img: "/assets/university-sf.svg",
    },
    {
      img: "/assets/csiro-2.svg",
    },
    {
      img: "/assets/kerela-startup.svg",
    },
    {
      img: "/assets/uae-space.svg",
    },
    {
      img: "/assets/adelaide.svg",
    },
    {
      img: "/assets/australien-university.svg",
    },
    {
      img: "/assets/kfas-2.svg",
    },
    {
      img: "/assets/azista-2.svg",
    },
    {
      img: "/assets/university-sf.svg",
    },
  ];

  return (  
    <section className={`${Styles.partnersSection}`}>
      <div className='container-main'>
        <div className='flex gap-4 width-fit-content'>
          <svg width="246" height="27" viewBox="0 0 246 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 26L22.8575 4H231" stroke="#2F2F2F"/>
            <rect x="237" width="9" height="9" rx="4.5" fill="white"/>
          </svg>
          <span className='text-4'>our partners</span>
        </div>
      </div>
      <div className={`${Styles.logoSliderOverlaySection}`}>
        <Marquee speed={50} gradient={false} >
            {partnersLogo.map((card, index) => (
              <Image
                src={card.img}
                alt=""
                width={180}
                height={80}
                style={{ width: "100%", height: "80px", objectFit: "contain", padding: "0 20px", }}
              />
            ))}
          </Marquee>
          {/* overlay  */}
        <div className={`${Styles.logoSliderOverlayContainer}`}>
          <div className={`${Styles.logoSliderOverlayLeft}`}></div>
          <div className={`${Styles.logoSliderOverlayRight}`}></div>
        </div>
      </div>
    </section>
  )
}
