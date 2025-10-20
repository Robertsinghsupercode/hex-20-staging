"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function useFloatingImg(selector = ".floating-img") {
  useEffect(() => {
    const imgs = document.querySelectorAll(selector);

    imgs.forEach((img, i) => {
      gsap.to(img, {
        y: 50,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, [selector]);
}