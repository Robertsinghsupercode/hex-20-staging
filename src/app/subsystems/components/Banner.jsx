"use client";
import React, { useEffect, useRef } from "react";
import Styles from "../css/banner.module.css";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

export default function Banner() {
  const svgRef = useRef(null);

useEffect(() => {
    const svg = svgRef.current;
    const lines = svg.querySelectorAll("line");
    const paths = svg.querySelectorAll("path");
  
    // Lines
    gsap.set(lines, { drawSVG: "0% 0%" });
    gsap.to(lines, {
      drawSVG: "0% 100%",
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.05,
    });
  
    // Paths
    gsap.set(paths, { drawSVG: "100% 100%" });
    gsap.to(paths, {
      drawSVG: "100% 0%",
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.05,
      delay: 0.1,
    });
  }, []);

  return (
    <section className={`${Styles.bannerSec}`}>
      <svg
        ref={svgRef}
        className={`${Styles.subSystemBanner}`}
        width="734"
        height="491"
        viewBox="0 0 734 491"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_110_1999)">
          <g clipPath="url(#clip1_110_1999)">
            <line x1="201.754" y1="302.241" x2="720.918" y2="8.13378" stroke="#484848" />
            <path d="M494.98 464.682L202.001 302.676" stroke="#484848" />  
            <path d="M285.334 491.023L202.297 301.623" stroke="#484848" /> 
            <path d="M77.7947 140.737L202.675 302.301" stroke="#484848" />
            <path d="M45.1508 284.452L202.969 301.251" stroke="#484848" />
            <path d="M178.51 428.02L202.296 301.628" stroke="#484848" />
            <path d="M105.953 404.141L202.295 301.63" stroke="#484848" />
            <path d="M10.3555 433.797L202.296 301.633" stroke="#484848" />
            <path d="M22.4941 412.867L201.623 302.008" stroke="#484848" />
            <path d="M322.013 345.052L202.298 301.627" stroke="#484848" />
            <path d="M501.599 236.588L202.298 301.627" stroke="#484848" />
            <path d="M333.083 175.426L201.625 302.008" stroke="#484848" />
            <path d="M250.513 -55.7566L202.674 302.305" stroke="#484848" />
            <path d="M181.398 156.956L202 302.676" stroke="#484848" />
            <path d="M231.361 162.563L201.922 300.953" stroke="#484848" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_110_1999">
            <rect width="734" height="491" fill="white" />
          </clipPath>
          <clipPath id="clip1_110_1999">
            <rect width="1003" height="588" fill="white" transform="translate(-141)" />
          </clipPath>
        </defs>
      </svg>
      <div className="container-main">
        <div className={`flex justify-center items-center text-align-center ${Styles.bannerContainer}`}>
          <div className={`${Styles.bannerContent} flex flex-column gap-20`}>
            <h1 className="heading-1 heading-1-sm">Subsystems</h1>
            <p className={`text-1 text-1-sm ${Styles.description}`}>
              HEX20’s subsystems are the building blocks that keep satellites reliable, efficient, and mission-ready. Each module is designed with precision, tested for resilience, and optimized for performance in orbit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}