"use client";
import React, { useEffect, useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleTextAuto({ text, delay = 0, start = false }) {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (!start) return; // only start scrambling when start is true

    const startTimeout = setTimeout(() => {
      let iteration = 0;
      const target = text;
      const length = target.length;

      const interval = setInterval(() => {
        setDisplayText(() =>
          target
            .split("")
            .map((letter, i) => {
              if (i < iteration) {
                return target[i];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("")
        );

        if (iteration >= length) {
          clearInterval(interval);
        }

        iteration += 1 / 1;
      }, 50);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, start]);

  return (
    <span
      style={{
        display: "inline-block",
        opacity: displayText ? 1 : 0,
        transition: "opacity .3s ease",
      }}
    >
      {displayText}
    </span>
  );
}