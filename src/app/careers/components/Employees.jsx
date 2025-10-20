"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../css/employees.module.css";

const contentData = [
  {
    id: "content-1",
    name: "Content 1",
    designation: "Designation 1",
    testimony: "“What I love here is the culture of curiosity. No idea is too small or too bold — if you can imagine it, you’ll find support to build and test it.“",
    image: "/assets/employePlaceholder-1.png",
  },
  {
    id: "content-2",
    name: "Content 2",
    designation: "Designation 2",
    testimony: "“The collaborative spirit here is unmatched. Every project feels like a team effort, with everyone bringing their unique strengths to the table.“",
    image: "/assets/employePlaceholder-2.png",
  },
  {
    id: "content-3",
    name: "Content 3",
    designation: "Designation 3",
    testimony: "“Innovation drives everything we do. It’s exciting to work in an environment where pushing boundaries is not just encouraged, but expected.“",
    image: "/assets/employePlaceholder-3.png",
  },
  {
    id: "content-4",
    name: "Content 4",
    designation: "Designation 4",
    testimony: "“What I love here is the culture of curiosity. No idea is too small or too bold — if you can imagine it, you’ll find support to build and test it.“",
    image: "/assets/employePlaceholder-1.png",
  },
  {
    id: "content-5",
    name: "Content 5",
    designation: "Designation 5",
    testimony: "“The collaborative spirit here is unmatched. Every project feels like a team effort, with everyone bringing their unique strengths to the table.“",
    image: "/assets/employePlaceholder-2.png",
  },
  {
    id: "content-6",
    name: "Content 6",
    designation: "Designation 6",
    testimony: "“Innovation drives everything we do. It’s exciting to work in an environment where pushing boundaries is not just encouraged, but expected.“",
    image: "/assets/employePlaceholder-3.png",
  },
];

export default function Employees() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Ensure navigation is initialized after Swiper mounts
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      if (swiper.navigation && typeof swiper.navigation.init === "function") {
        swiper.navigation.init();
        swiper.navigation.update();
      }
    }
  }, []);

  return (
  <section className={styles.employeswiperSec}>
    <div className="container-main">
      <div className={`${styles.employeswiperHeading} flex flex-column`}>
        <h4 className="heading-6 heading-3-sm">Hear from our employees</h4>
      </div>
    </div>
    <div className={styles.employeswiperContainer}>
      <Swiper
        ref={swiperRef}
        className={`${styles.employeswiper} carousel`}
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView="auto"
        initialSlide={0}
        dir="rtl"
        speed={600}
        navigation={{
          nextEl: `.${styles.swiperButtonNext}`,
          prevEl: `.${styles.swiperButtonPrev}`,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        autoplay="false"
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 1, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
        onInit={(swiper) => {
          // Add 'wide' class to the active slide
          if (swiper.slides && swiper.slides[swiper.activeIndex]) {
            swiper.slides[swiper.activeIndex].classList.add(styles.wide);
          }
          // Duplicate slides if less than needed for loop
          const minSlides =
            swiper.params.breakpoints[
              window.innerWidth >= 1024 ? 1024 : window.innerWidth >= 768 ? 768 : 320
            ].slidesPerView + 1;
          while (swiper.slides.length < minSlides) {
            swiper.appendSlide([...swiper.slides].map((slide) => slide.cloneNode(true)));
          }
          setActiveIndex(swiper.realIndex);
        }}
        onSlideChange={(swiper) => {
          swiper.slides.forEach((slide) => slide.classList.remove(styles.wide));
          if (swiper.slides[swiper.activeIndex]) {
            swiper.slides[swiper.activeIndex].classList.add(styles.wide);
          }
          setActiveIndex(swiper.realIndex);
        }}
      >
        {contentData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className={`${styles.swiperSlide} ${index === activeIndex ? styles.wide : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
            data-content-id={item.id}
          />
        ))}
      </Swiper>
      <div className={styles.contentContainer}>
        {contentData.map((item, index) => (
          <div
            key={item.id}
            id={item.id}
            className={`${styles.contentSection} ${index === activeIndex ? styles.contentActive : ""}`}
          >
            <div className={`${styles.testimonyContainerWrap} flex flex-column`}>
              <div className={`${styles.testimonyContainer} flex flex-column`}>
                <p className="text-7 text-6-sm">{item.testimony}</p>
                <div className={`${styles.nameDesignation}`}>
                  <div>
                    <p className="text-3">{item.name}</p>
                    <span className="text-3 opcty-4">{item.designation}</span>
                  </div>
                  <div className={styles.customBtnContainer}>
                    <div className={styles.swiperButtonPrev}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="39.5" y="39.5" width="39" height="39" transform="rotate(180 39.5 39.5)" stroke="black" strokeOpacity="0.08" />
                        <path opacity="0.1" d="M32 26L27 20.5L32 15" stroke="#090909" />
                        <path opacity="0.3" d="M23 26L18 20.5L23 15" stroke="#090909" />
                        <path d="M14 26L9 20.5L14 15" stroke="#090909" />
                      </svg>
                    </div>
                    <div className={styles.swiperButtonNext}>
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="39" stroke="black" strokeOpacity="0.08" />
                        <path opacity="0.1" d="M8 14L13 19.5L8 25" stroke="#090909" />
                        <path opacity="0.3" d="M17 14L22 19.5L17 25" stroke="#090909" />
                        <path d="M26 14L31 19.5L26 25" stroke="#090909" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  );
}