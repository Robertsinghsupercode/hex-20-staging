"use client"

import React, { useRef, useEffect, useState } from 'react';
import Styles from '../css/Banner.module.css';
import SatelliteModel from '@/app/components/SatelliteModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const satelliteWrapRef = useRef(null);
  const bannerEarth = useRef(null);
  const bannerContentRef = useRef(null);
  const bannerContentImgRef = useRef(null);
  const satelliteRef = useRef(null);
  const bannerStarsRef = useRef(null);
  const satelliteModelTextRef = useRef(null);
  const bannerFalconImgRef = useRef(null);
  const falconImgTextRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (satelliteWrapRef.current) {
      ScrollTrigger.create({
        trigger: satelliteWrapRef.current,
        endTrigger: bannerEarth.current,
        start: "top top",
        end: "top top", 
        pin: true,
        scrub: 3,
        markers: false,
        onUpdate: (self) => {
          // ---- ROTATION ----
          if (satelliteRef.current && satelliteRef.current.updateRotation) {
            const rotationProgress = self.progress;
            satelliteRef.current.updateRotation(rotationProgress);
          }

          // ---- SCALE DOWN ----
          if (satelliteRef.current && satelliteRef.current.updateScale) {
            const scaleProgress = self.progress;
            const initialScale = isMobile ? 0.018 : 0.035;
            const finalScale = isMobile ? 0.010 : 0.014;
            const scale = initialScale - scaleProgress * (initialScale - finalScale);

            satelliteRef.current.updateScale(scale);
          }

        },
      });
    }

    // BannerContent pin and fade out animation
    if (bannerContentRef.current && bannerContentImgRef.current) {
      ScrollTrigger.create({
        trigger: bannerContentRef.current,
        start: "top top",
        end: "bottom center",
        pin: bannerContentImgRef.current,
        pinSpacing: false,
        scrub: 2,
        markers: false,
        onUpdate: (self) => {
          // Fade out the BannerContent as user scrolls
          const opacity = 1 - self.progress;
          gsap.set(bannerContentRef.current, { opacity: opacity });
          
          if (satelliteModelTextRef.current) {
            const textOpacity = self.progress;
            gsap.set(satelliteModelTextRef.current, { opacity: textOpacity });
          }
        },
      });
    }

    // SatelliteModelText fade out animation - starts after BannerContent finishes
    if (satelliteModelTextRef.current) {
      ScrollTrigger.create({
        trigger: bannerContentRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: 3,
        markers: false,
        onUpdate: (self) => {
          // Fade out the satelliteModelText as user continues scrolling
          if (satelliteModelTextRef.current) {
            const textOpacity = 1 - self.progress;
            gsap.set(satelliteModelTextRef.current, { opacity: Math.max(0, textOpacity) });
          }
        },
      });
    }

    // BannerStars animation - starts after bannerContentRef finishes
    if (bannerStarsRef.current) {
      const stars = bannerStarsRef.current.querySelectorAll('circle, ellipse');
      
      const starsTimeline = gsap.timeline({ paused: true });
      // Add each star to the timeline with a slight stagger
      stars.forEach((star, index) => {
        starsTimeline.to(star, {
          opacity: 1,
          duration: 0.3,
          ease: "power3.out"
        }, index * 0.05); 
      });
      
      ScrollTrigger.create({
        trigger: bannerContentRef.current,
        start: "bottom center",
        end: "bottom top",
        scrub: 2,
        markers: false,
        onUpdate: (self) => {
          starsTimeline.progress(self.progress);
        },
      });
    }

    // BannerFalconImg animation - slides from left to current position when BannerEarth reaches top center
    if (bannerFalconImgRef.current && bannerEarth.current) {
      // Set initial state
      gsap.set(bannerFalconImgRef.current, { 
        x: "-100%",
        opacity: 0,
        transformOrigin: "left center"
      });

      ScrollTrigger.create({
        trigger: bannerEarth.current,
        start: "top 70%",
        end: "top 5%",
        scrub: 3, 
        markers: false,
        onUpdate: (self) => {
          // Smooth slide-in animation with opacity fade-in
          const translateX = -100 + (self.progress * 100); 
          const opacity = self.progress; 
          
          gsap.to(bannerFalconImgRef.current, { 
            x: `${translateX}%`,
            opacity: opacity,
            duration: 0.3, 
            ease: "power3.out"
          });
        },
      });
    }

    // FalconImgText fade-in animation - triggers when bannerFalconImgRef reaches top 10%
    if (falconImgTextRef.current && bannerFalconImgRef.current) {
      ScrollTrigger.create({
        trigger: bannerFalconImgRef.current,
        start: "top 30%",
        end: "bottom bottom",
        scrub: 2,
        markers: false,
        onUpdate: (self) => {
          // Fade in the falconImgText
          const opacity = self.progress;
          gsap.to(falconImgTextRef.current, { 
            opacity: opacity,
            duration: 0.2,
            ease: "power3.out"
          });
        },
      });
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  return (
    <>
      <section ref={satelliteWrapRef} className={Styles?.SatelliteModelWrap}>
        <div className={Styles?.satelliteModelItem}>
          <SatelliteModel satelliteRef={satelliteRef} />

          <div ref={satelliteModelTextRef} className={Styles?.satelliteModelText}>
            <h3 className='text-3'>India's First Privately-Built Payload-Hosting Satellite</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="197" height="27" viewBox="0 0 197 27" fill="none">
              <path d="M196 26L174 4H12" stroke="#1F23AD"/>
              <rect width="9" height="9" rx="4.5" transform="matrix(1 0 0 -1 0 9)" fill="#2E34DB"/>
            </svg>
          </div>
        </div>
      </section>

      <section ref={bannerContentRef} className={Styles?.BannerContent}>
        <img
          src="/assets/nilaText.svg"
          alt="Nila Background"
          ref={bannerContentImgRef}
        />
      </section>

      <section ref={bannerStarsRef} className={Styles?.bannerStars}>
        <svg width="1415" height="562" viewBox="0 0 1415 562" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="428.871" cy="457.298" r="0.54772" fill="#D9D9D9"/>
          <circle cx="297.968" cy="556.985" r="0.54772" fill="#D9D9D9"/>
          <circle cx="305.635" cy="243.138" r="0.54772" fill="#D9D9D9"/>
          <circle cx="371.362" cy="345.559" r="0.54772" fill="#D9D9D9"/>
          <circle cx="746.002" cy="486.325" r="0.54772" fill="#D9D9D9"/>
          <circle cx="781.603" cy="350.489" r="0.54772" fill="#D9D9D9"/>
          <circle cx="914.7" cy="273.263" r="0.54772" fill="#D9D9D9"/>
          <circle cx="602.499" cy="560.817" r="0.54772" fill="#D9D9D9"/>
          <ellipse cx="490.491" cy="365.829" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
          <ellipse cx="544.165" cy="410.196" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
          <circle cx="0.54772" cy="346.087" r="0.54772" fill="#D9D9D9"/>
          <circle cx="8.21471" cy="32.2469" r="0.54772" fill="#D9D9D9"/>
          <circle cx="73.9423" cy="134.669" r="0.54772" fill="#D9D9D9"/>
          <circle cx="484.184" cy="139.598" r="0.54772" fill="#D9D9D9"/>
          <circle cx="617.28" cy="62.3719" r="0.54772" fill="#D9D9D9"/>
          <circle cx="110.091" cy="36.6297" r="0.54772" fill="#D9D9D9"/>
          <ellipse cx="110.913" cy="47.0321" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
          <ellipse cx="193.072" cy="154.934" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
          <circle cx="1025.95" cy="74.493" r="0.54772" fill="#D9D9D9"/>
          <circle cx="838.08" cy="245.38" r="0.54772" fill="#D9D9D9"/>
          <circle cx="714.844" cy="31.2235" r="0.54772" fill="#D9D9D9"/>
          <circle cx="1413.73" cy="0.54772" r="0.54772" fill="#D9D9D9"/>
          <circle cx="780.57" cy="133.645" r="0.54772" fill="#D9D9D9"/>
          <circle cx="1155.21" cy="274.411" r="0.54772" fill="#D9D9D9"/>
          <circle cx="1190.81" cy="138.571" r="0.54772" fill="#D9D9D9"/>
          <circle cx="1323.91" cy="61.3407" r="0.54772" fill="#D9D9D9"/>
          <circle cx="1400.04" cy="191.157" r="0.54772" fill="#D9D9D9"/>
          <ellipse cx="817.54" cy="46.0087" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
          <ellipse cx="899.7" cy="153.907" rx="0.27386" ry="0.54772" fill="#D9D9D9"/>
        </svg>
      </section>

      <section ref={bannerEarth} className={Styles?.BannerEarth}>
        <div ref={bannerFalconImgRef} className={Styles?.bannerFalconImg}>
          <img
            src="/assets/spacexFalcon.png"
            alt="Nila Background"
          />

          <div ref={falconImgTextRef} className={Styles?.falconImgText}>
            <svg xmlns="http://www.w3.org/2000/svg" width="198" height="28" viewBox="0 0 198 28" fill="none">
              <path d="M1.00003 1L23 23H185" stroke="#2E34DB"/>
              <rect x="0.5" y="-0.5" width="8" height="8" rx="4" transform="matrix(1 0 0 -1 189 27)" fill="#2E34DB" stroke="#2E34DB"/>
            </svg>
            <h3 className='text-3'>NILA was launched aboard SpaceX's Falcon 9 Transporter-13, deployed via Exolaunch</h3>
          </div>
        </div>
        <div className={Styles?.bannerEarthImg}>
          <img
            src={isMobile ? "/assets/globeOne-mobile.png" : "/assets/globeOne.png"}
            alt="Nila Background"
          />
        </div>
      </section>
    </>
  )
}
