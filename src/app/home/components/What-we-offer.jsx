"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from "next/image";
import Styles from '../css/What-we-offer.module.css';

export default function Whatweoffers() {

  const satelliteCards = [
    {
      img: "/assets/Training-satelite.png",
      title: "Training",
      content: "Our Mission Operation Services guarantee smooth and successful execution of space missions",
    },
    {
      img: "/assets/satelite-2.png",
      title: "Training",
      content: "Our Mission Operation Services guarantee smooth and successful execution of space missions",
    },
    {
      img: "/assets/payload -hosting.png",
      title: "Payload Hosting",
      content: "Our Mission Operation Services guarantee smooth and successful execution of space missions",
    },
    {
      img: "/assets/mission-as-a-service.png",
      title: "Mission as a service",
      content: "Our Mission Operation Services guarantee smooth and successful execution of space missions",
    },
  ];

  return (
    <section className={`${Styles.whatWeOfferSection}`}>
      <div className='container-main'>
        <div className='flex flex-column gap-30'>
          <div className='flex gap-4 width-fit-content'>
            <svg width="246" height="27" viewBox="0 0 246 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 26L22.8575 4H231" stroke="#2F2F2F"/>
              <rect x="237" width="9" height="9" rx="4.5" fill="white"/>
            </svg>
            <span className='text-4'>offerings</span>
          </div>
          <h6 className='heading-1'>What <span className='highlightDark'>we offer</span></h6>
        </div>
      </div>
      {/* Marquee Slider for Satellite Cards */}
      <div className={`${Styles.offerMarqueeWrapper}`}>
        <Marquee speed={50} gradient={false} >
          {satelliteCards.map((card, index) => (
            <div key={index} className={`${Styles.offerSateliteContainer} flex flex-column justify-center`} style={{ marginRight: '2rem' }}>
              <Image
                src={card.img}
                alt={card.title}
                width={350}
                height={350}
              />
              <div className='flex align-items-center items-center justify-between'>
                  <div className={`${Styles.sateliteBoxContent}`}>
                      <span className={`${Styles.sateliteBoxContentTitle} heading-3`}>{card.title}</span>
                      <p className={`${Styles.sateliteBoxContentContent} text-1 color-6 opcty-5`}>{card.content}</p>
                  </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                  <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                  <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                  <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                </svg>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}