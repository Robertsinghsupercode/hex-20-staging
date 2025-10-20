"use client";
import React, { useState, useEffect } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, trigger }) {
  const [displayText, setDisplayText] = useState(text);

  const runScramble = () => {
    let iteration = 0;
    const target = text;

    const interval = setInterval(() => {
      setDisplayText(() =>
        target
          .split("")
          .map((letter, index) => {
            if (index < iteration) return target[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= target.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 15);

    return () => clearInterval(interval);
  };

  // Run when parent sends trigger
  useEffect(() => {
    if (trigger) {
      runScramble();
    }
  }, [trigger, text]);

  return (
    <span
      style={{ transition: "color .3s ease" }}
      // Only attach mouse hover if no trigger prop
      onMouseEnter={!trigger ? runScramble : undefined}
    >
      {displayText}
    </span>
  );
}