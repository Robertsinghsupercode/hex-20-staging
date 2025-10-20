'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from '../css/missionsIntro.module.css';
import useFloatingImages from "@/app/components/useFloatingImg";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MissionsIntro({ missionRefs, missionsData }) {
  useFloatingImages();
  const svgRefs = useRef([]);

  useEffect(() => {
    svgRefs.current.forEach((svg) => {
      const path = svg.querySelector('path:first-child');
      const length = path.getTotalLength();

      // Reset initial state
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className={Styles.missionIntroSec}>
      <div className="container-main">
        <div className={Styles.missionIntroWrap}>
          {missionsData.map((mission, idx) => (
            <div
              ref={missionRefs.current[idx]}
              key={mission.name + mission.year}
              className={`${Styles.missionIntro} flex`}
            >
              <div className="desktop-only">
                <Image
                  src={mission.imageDesktop.src}
                  alt={mission.imageDesktop.alt}
                  width={536}
                  height={463}
                  className={`floating-img ${Styles.missionSatelites}`}
                />
              </div>

              <div className={`flex gap-50 ${Styles.missionItem}`}>
                <div>
                  <svg
                    ref={(el) => (svgRefs.current[idx] = el)}
                    className={Styles.dividerSvg}
                    width="28"
                    height="512"
                    viewBox="0 0 28 512"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0006 12L14 512"
                      stroke="url(#paint0_linear_1082_7452)"
                    />
                    <path
                      d="M25.624 7.28809V20.7109L14 27.4229L2.37598 20.7109V7.28809L14 0.576172L25.624 7.28809Z"
                      stroke="#585858"
                    />
                    <path
                      d="M11.4019 9.5C13.0096 8.5718 14.9904 8.5718 16.5981 9.5C18.2058 10.4282 19.1962 12.1436 19.1962 14C19.1962 15.8564 18.2058 17.5718 16.5981 18.5C14.9904 19.4282 13.0096 19.4282 11.4019 18.5C9.79423 17.5718 8.80385 15.8564 8.80385 14C8.80385 12.1436 9.79423 10.4282 11.4019 9.5Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1082_7452"
                        x1="14.0003"
                        y1="12"
                        x2="14.0003"
                        y2="512"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#BEBEBE" />
                        <stop offset="1" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className={`${Styles.missionIntroContent} flex flex-column`}>
                  <div>
                    <p className="heading-6 fw-700 heading-4-sm">{mission.year}</p>
                  </div>
                  <div className="mobile-only">
                    <Image
                      src={mission.imageMobile.src}
                      alt={mission.imageMobile.alt}
                      width={248}
                      height={150}
                      className={Styles.missionSatelites}
                    />
                  </div>
                  <div className={`flex flex-column gap-10 ${Styles.missionContent}`}>
                    <p className="heading-7 text-5-sm">{mission.name}</p>
                    <p className="text-1 text-1-sm opcty-5">{mission.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}