import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from "next/image";
import styles from './css/marquee.module.css';

export default function MarqueeSlider({logos, className}) {

  return (
      <div className={`${styles.logoSliderOverlaySection} ${styles[className]}`}>
        <Marquee speed={50} gradient={false} >
            {logos.map((card, index) => (
              <Image
                  src={card.img}
                  alt={card.title}
                  width={180}
                  height={80}
                />
            ))}
          </Marquee>
          {/* overlay  */}
        <div className={`${styles.logoSliderOverlayContainer}`}>
          <div className={`${styles.logoSliderOverlayLeft}`}></div>
          <div className={`${styles.logoSliderOverlayRight}`}></div>
        </div>
      </div>
  )
}
