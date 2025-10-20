import React from "react";
import Styles from "../css/gravitymission.module.css";
import Image from "next/image";

export default function GravityAssistMission() {
  return (
    <section className={`${Styles.asteroidsSec}`}>
      {/* gradient  */}
      <div className={`${Styles.gradientOrange}`}></div>
      <Image
        src="/assets/asteroidsLeft.png"
        alt="satelite"
        width={780}
        height={1079}
        className={`${Styles.asteroidsLeft}`}
      />
      <Image
        src="/assets/spacecraftBus.png"
        alt="satelite"
        width={303}
        height={290}
        className={`${Styles.asteroidsSpacecraftBus}`}
      />
      <Image
        src="/assets/asteroidsRight.png"
        alt="satelite"
        width={695}
        height={1031}
        className={`${Styles.asteroidsRight}`}
      />

      <div className="flex justify-center">
        <div className={`${Styles.asteroidsContentWrap}`}>
          <svg
            className={`${Styles.asteroidsPlusIcon}`}
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="40.5049"
              y1="2.18557e-08"
              x2="40.5049"
              y2="80"
              stroke="#FF8563"
            />
            <line
              x1="80"
              y1="40.5049"
              x2="-4.37114e-08"
              y2="40.5049"
              stroke="#FF8563"
            />
          </svg>
          <div className={`${Styles.asteroidsContent}`}>
            <p className="heading-2">
              A 5-billion-kilometer journey that will utilize gravity assist
              maneuvers from Venus, Earth, and Mars to reach the main asteroid
              belt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
