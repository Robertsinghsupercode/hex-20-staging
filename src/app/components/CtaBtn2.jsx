"use client";
import Link from "next/link";
import { useState } from "react";
import ScrambleText from "./ScrambleText";
import Styles from './css/ctabtn.module.css'

export default function CtaBtn2({ href, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`${Styles['cta-btn-2']}'}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-center">
        <span className="text-4">
          <ScrambleText text={text} trigger={hovered} />
        </span>

        <svg
          width="25"
          height="13"
          viewBox="0 0 25 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 1L24 6.5L19 12" stroke="white" />
          <path opacity="0.3" d="M9 1L14 6.5L9 12" stroke="white" />
          <path opacity="0.1" d="M1 1L6 6.5L1 12" stroke="white" />
        </svg>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="273"
        height="24"
        viewBox="0 0 273 24"
        fill="none"
      >
        <path d="M272 1L250 23H0" stroke="#2F2F2F" />
      </svg>
    </Link>
  );
}