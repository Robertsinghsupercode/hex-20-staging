"use client";

import React from 'react';
import Styles from '../css/satellite.module.css';
import Image from 'next/image';
import useFloatingImages from "@/app/components/useFloatingImg";

const satellites = [
  {
    name: "SENTINEL -1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi.",
    svgCircle: (
      <svg width="241" height="241" viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120.5" cy="120.5" r="120.5" fill="#1E2A28" />
      </svg>
    ),
    image: "/assets/sentinel-image.png",
    alt: "Sentinel-1",
    width: 572,
    height: 359,
    specs: [
      { label: "SPACECRAFT MASS", value: "50KG (INCLUDING SEPARATION RING)" },
      { label: "PAYLOAD MASS", value: "UP TO 30KG" },
      { label: "SPACECRAFT VOLUME", value: "40cm * 40cm * 40cm" },
    ],
    reverse: false,
  },
  {
    name: "OPTIMUS",
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi.",
    svgCircle: (
      <svg width="241" height="241" viewBox="0 0 241 241" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="120.5" cy="120.5" r="120.5" fill="#1E2A28" />
      </svg>
    ),
    image: "/assets/optimus-img.png",
    alt: "Optimus",
    width: 609,
    height: 362,
    specs: [
      { label: "SPACECRAFT MASS", value: "10KG" },
      { label: "PAYLOAD MASS", value: "UP TO 6KG" },
      { label: "SPACECRAFT VOLUME", value: "100mm * 226.3mm * 366mm" },
    ],
    reverse: true,
  },
];

export default function Satellite() {
  useFloatingImages();

  return (
    <section className={Styles.satelliteSec}>
      <div className="container-main">
        <div className={Styles.satelliteGrid}>
          {satellites.map((sat, index) => (
            <div
              key={index}
              className={Styles.satelliteCard}
            >
              <div className='mobile-only flex width-100'>
                <h3
                    className={`heading-6 color-3 heading-2-sm`}
                  >
                    {sat.name}
                  </h3>
              </div>

              <div className={Styles.imageWrapper}>

                <Image
                  src={sat.image}
                  alt={sat.alt}
                  width={sat.width}
                  height={sat.height}  
                  className={`floating-img ${Styles.satelliteImage}`}
                />
                {sat.svgCircle}
              </div>
              <div className={Styles.content}>
                <h3
                  className={`heading-6 color-3 heading-2-sm desktop-only ${Styles.borderBottom}`}
                >
                  {sat.name}
                </h3>
                <ul className={Styles.specs}>
                  {sat.specs.map((spec, i) => (
                    <li
                      key={i}
                      className={`text-4 color-3 ${
                        i < sat.specs.length - 1 ? Styles.borderBottom : ""
                      }`}
                    >
                     <span className="text-3 text-2-sm opcty-5">{spec.label}</span>{" "}
                      {spec.label === "SPACECRAFT VOLUME" ? (
                        <span style={{ textTransform: 'lowercase', width:"100%", display:"inline" }}>{spec.value}</span>
                      ) : (
                        <span style={{width:"260px"}}>{spec.value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
