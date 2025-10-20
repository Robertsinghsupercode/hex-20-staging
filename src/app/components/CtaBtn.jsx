"use client";
import Link from "next/link";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import styles from "./css/ctabtn.module.css";

export default function CtaBtn({ href, text, variant = "light", className, onClick }) {
  const [hovered, setHovered] = useState(false);

  // Choose initial stroke and fill colors based on variant
  const strokeColor = variant === "dark" ? "var(--color-3)" : "var(--color-4)";
  const fillColor = variant === "dark" ? "var(--color-4)" : "var(--color-3)";

  const commonProps = {
    className: `${styles["cta-btn"]} ${variant === "dark" ? styles["cta-btn-dark"] : ""} ${
      className ? styles[className] : ""
    }`,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
  };

  if (onClick) {
    return (
      <button style={{background:"transparent" , border:"none", outline:"none"}} type="button" onClick={onClick} {...commonProps}>
        <span className={styles["ctn-btn-text"]}>
          <ScrambleText text={text} trigger={hovered} />
        </span>

        <svg
          className={styles["svg-bg"]}
          width="310"
          height="56"
          viewBox="0 0 268 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className={styles["btn-border"]}
            d="M267.5 0.5V38.373L259.048 47.5H0.5V9.63672L9.74219 0.5H267.5Z"
            stroke={strokeColor}
          />
          <path
            className={styles["btn-bg"]}
            d="M268 38.5697L259.266 48H0V9.42816L9.53761 0H268V38.5697Z"
            fill={fillColor}
          />
        </svg>

        <svg
          className={styles["svg-arrow"]}
          width="25"
          height="13"
          viewBox="0 0 25 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.1" d="M1 1L6 6.5L1 12" stroke={strokeColor} />
          <path opacity="0.3" d="M9 1L14 6.5L9 12" stroke={strokeColor} />
          <path d="M19 1L24 6.5L19 12" stroke={strokeColor} />
        </svg>
        
        <svg className={styles["svg-arrow-down"]} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5.99998 5L11 1" stroke="white"/>
        </svg>
      </button>
    );
  }

  return (
    <Link
      href={href}
      {...commonProps}
    >
      <span className={styles["ctn-btn-text"]}>
        <ScrambleText text={text} trigger={hovered} />
      </span>

      <svg
        className={styles["svg-bg"]}
        width="310"
        height="56"
        viewBox="0 0 268 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          className={styles["btn-border"]}
          d="M267.5 0.5V38.373L259.048 47.5H0.5V9.63672L9.74219 0.5H267.5Z"
          stroke={strokeColor}
        />
        <path
          className={styles["btn-bg"]}
          d="M268 38.5697L259.266 48H0V9.42816L9.53761 0H268V38.5697Z"
          fill={fillColor}
        />
      </svg>

      <svg
        className={styles["svg-arrow"]}
        width="25"
        height="13"
        viewBox="0 0 25 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.1" d="M1 1L6 6.5L1 12" stroke={strokeColor} />
        <path opacity="0.3" d="M9 1L14 6.5L9 12" stroke={strokeColor} />
        <path d="M19 1L24 6.5L19 12" stroke={strokeColor} />
      </svg>
    </Link>
  );
}