import React from "react";
import Styles from "../css/uaeasteroids.module.css";
import Image from "next/image";
import CtaBtn from '../../components/CtaBtn'

export default function UaeAsteroids() {
  return (
    <section className={`${Styles.uaeAsteroidsSec}`}>
      <div className="flex justify-center">
        <div className={`${Styles.spaceCraftBusContainer}`}>
          <div className={`${Styles.spacecraftBusContentWrap}`}>
            <div className={`flex flex-column items-end`}>
              <svg
                width="437"
                height="27"
                viewBox="0 0 437 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 26L23 4H424" stroke="#DA3C19" />
                <circle cx="432.5" cy="4.5" r="4.5" fill="#DA3C19" />
              </svg>
              <div
                className={`${Styles.spacecraftBusContent} flex flex-column`}
              >
                <span className="text-4">spacecraft bus</span>
                <span className="text-3 opcty-4">
                  spacecraft bus for the EMA Lander
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-main">
        <div className="flex justify-end">
          <div
            className={`${Styles.uaeAsteroidsContent} flex flex-column items-end gap-40`}
          >
            <h4 className="heading-1">UAE ASTEROID MISSION 2025</h4>
            <CtaBtn href="#" text="Read about the mission" />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/assets/uaeAsteroid.png"
          alt="satelite"
          width={642}
          height={697}
          className={`${Styles.uaeAsteroid}`}
        />
        <div className={`${Styles.uaeAsteroidsPopupContent}`}>
          <svg
            width="439"
            height="29"
            viewBox="0 0 439 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 28L23 6H424" stroke="#DA3C19" />
            <rect x="428" width="11" height="11" rx="5.5" fill="#DA3C19" />
          </svg>
          <div className="flex flex-column text-align-right items-end">
            <span className="text-4">asteroid 269 Justitia</span>
            <p className="text-3 opcty-5">
              deploying a <br />
              lander by 2035
            </p>
          </div>
        </div>
      </div>
      <div className={`${Styles.uaeAsteroidContentWrap} flex justify-center`}>
        <div
          className={`${Styles.uaeAsteroidContent} flex flex-column gap-30 text-align-center`}
        >
          <p className="heading-2">
            Hex20’s Mission Operation Services guarantee smooth and successful
            execution of space missions, maximizing scientific and operational
            outcomes.
          </p>
          <div className="flex gap-20 justify-center">
            <CtaBtn href="#" text="Read about the mission" />
            <CtaBtn href="#" text="Explore rideshare" />
          </div>
        </div>
      </div>
    </section>
  );
}
