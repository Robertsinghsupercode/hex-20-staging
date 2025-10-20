"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrambleText from "@/app/components/ScrambleText";
import styles from './css/line.module.css'

export default function LineAnimation({
  duration,
  className,
  shortLength,
  textLines,
  color = "#595959",
  direction = "normal",
}) {
  const containerRef = useRef(null);
  const svgRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation when in viewport
            svgRefs.current.forEach((svg) => {
              if (!svg) return;
              const path = svg.querySelector("path");
              const circle = svg.querySelector("circle");
              if (!path || !circle) return;

              const length = path.getTotalLength();
              gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

              // Determine scale based on direction
              let scaleX = 1;
              let scaleY = 1;
              if (direction === "reverseX") scaleX = -1;
              if (direction === "reverseY") scaleY = -1;
              if (direction === "reverseXY") {
                scaleX = -1;
                scaleY = -1;
              }

              const tl = gsap.timeline();

              gsap.set(svg, { scaleX, scaleY, transformOrigin: "center center" });

              tl.to(path, {
                strokeDashoffset: 0,
                duration: 0.7,
                ease: "power1.inOut",
              });

              tl.fromTo(
                circle,
                { opacity: 0, scale: 0 },
                { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)", transformOrigin: "center" },
                "-=0.2"
              );
            });

            // Once animated, stop observing
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [duration, direction]);

  return (
    <div ref={containerRef} className={`${styles.lineContainer} ${styles[className]}`}>
      <div className={`${styles.lineBlock} ${styles.lineBlockRight}`}>
        <svg
          ref={(el) => (svgRefs.current[0] = el)}
          xmlns="http://www.w3.org/2000/svg"
          width={shortLength + 40}
          height="60"
          viewBox={`0 0 ${shortLength + 40} 50`}
          fill="none"
        >
          <path
            d={`M0 20 H${shortLength} L${shortLength + 15} 40`}
            className={styles.animatedPath}
            stroke={color}
          />
          <circle
            cx={shortLength + 23}
            cy="50"
            r="3"
            className={styles.animatedCircle}
            stroke={color}
            fill={color}
          />
        </svg>

        <div className="line-text" style={{ left: `${shortLength / 2}px` }}>
          {textLines.map((line, i) => (
            <div key={i} className="text-4">
              <ScrambleText text={line.content} trigger={true} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}