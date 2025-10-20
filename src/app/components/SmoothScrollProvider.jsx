"use client";

import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    // Use slower scroll speed for homepage
    const scrollConfig = isHomepage ? {
      autoRaf: false,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.05, // Slower lerp for homepage
      wheelMultiplier: 0.4, // Lower multiplier for homepage
    } : {
      autoRaf: false,
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.1,
      wheelMultiplier: 0.7,
    };

    const lenis = new Lenis(scrollConfig);

    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const onScroll = () => ScrollTrigger.update();
    lenis.on('scroll', onScroll);

    return () => {
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, [pathname]);

  return children;
}


