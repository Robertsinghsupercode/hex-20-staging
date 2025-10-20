"use client";

import React, { useRef, useEffect, forwardRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Model";
import gsap from "gsap";
import { useIsMobile } from "../../utilities/functions";

const AnimatedModel = forwardRef(({ onAnimationComplete, isMobile }, ref) => {
  const modelRef = useRef();
  const animated = useRef(false);
  const animationComplete = useRef(false);

  React.useImperativeHandle(ref, () => ({
    current: modelRef.current,
    updateRotation: (progress) => {
      if (!animationComplete.current || !modelRef.current) return;

      const maxRotation = Math.PI * 0.4;
      const rotationX = -2.6 - progress * maxRotation;

      // Use direct property assignment for smooth scroll performance
      modelRef.current.rotation.x = rotationX;
    },
    updateScale: (scale) => {
      if (!modelRef.current) return;
      
      gsap.to(modelRef.current.scale, {
        x: scale,
        y: scale,
        z: scale,
        duration: 0.3,
        ease: "power2.out",
      });
    },
  }), []);

  useEffect(() => {
    if (!animated.current && modelRef.current) {
      animated.current = true;

      const startX = isMobile ? -0.5 : -2.0;
      const endX = isMobile ? -3.0 : -5.0;

      try {
        gsap.fromTo(
          modelRef.current.position,
          { x: startX, y: -4.0, z: 10 }, 
          { x: endX, y: isMobile ? -1.5 : -2.5, z: -10, duration: 6, ease: "power2.out" } 
        );

        gsap.fromTo(
          modelRef.current.rotation,
          { y: Math.PI, x: -2.6 },
          {
            y: -0.3,
            x: -2.6,
            duration: 6,
            ease: "power2.out",
            onComplete: () => {
              animationComplete.current = true;
              onAnimationComplete?.();
            },
          }
        );
      } catch (error) {
        console.error("Error in satellite model animation:", error);
        animationComplete.current = true;
        onAnimationComplete?.();
      }
    }

    return () => {
      // Cleanup GSAP animations
      if (modelRef.current) {
        gsap.killTweensOf(modelRef.current);
      }
    };
  }, [onAnimationComplete, isMobile]);

  const modelScale = isMobile ? 0.018 : 0.035;
  const modelPosition = isMobile ? [-3.0, -1.5, -10] : [-5.0, -2.5, -10]; 

  return (
    <Model
      ref={modelRef}
      position={modelPosition}
      rotation={[-2.6, -0.3, -1.8]}
      scale={modelScale}
    />
  );
});

export default function SatelliteModel({ onAnimationComplete, satelliteRef }) {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }}>
        <ambientLight intensity={1.3} />
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <directionalLight position={[-5, -5, 5]} intensity={0.5} />
        <AnimatedModel
          ref={satelliteRef}
          onAnimationComplete={onAnimationComplete}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
}