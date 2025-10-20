"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Styles from "../css/products.module.css";
import CtaBtn from "@/app/components/CtaBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { sateliteProducts } from "../sateliteProduct.js";
import useFloatingImages from "@/app/components/useFloatingImg";

gsap.registerPlugin(ScrollTrigger);

// Reusable Arrow Icon
const ArrowIcon = ({ stroke = "#090909", width = 25, height = 12 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 12"
    fill="none"
  >
    <path d="M19 0.5L24 6L19 11.5" stroke={stroke} />
    <path opacity="0.3" d="M9 0.5L14 6L9 11.5" stroke={stroke} />
    <path opacity="0.1" d="M1 0.5L6 6L1 11.5" stroke={stroke} />
  </svg>
);

// Reusable SVG Background (for left-aligned images)
const SvgBackgroundLeft = () => {
  const circleRef = useRef(null);
  const circleRef2 = useRef(null);

  useEffect(() => {
    [circleRef.current, circleRef2.current].forEach((circle) => {
      const length = circle.getTotalLength();
      circle.style.strokeDasharray = length;
      circle.style.strokeDashoffset = length;

      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: circle,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <svg width="665" height="622" viewBox="0 0 665 622" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1309_5568)">
        <circle ref={circleRef} cx="144" cy="546" r="520.5" stroke="url(#paint0_linear_1309_5568)" />
        <circle ref={circleRef2} opacity="0.4" cx="144" cy="546" r="379.5" stroke="url(#paint1_linear_1309_5568)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1309_5568" x1="565.5" y1="-114" x2="266" y2="271.5" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_1309_5568" x1="451.428" y1="64.6181" x2="232.983" y2="345.789" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_1309_5568">
          <rect width="665" height="622" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Reusable SVG Background (for right-aligned images)
const SvgBackgroundRight = () => {
  const circleRef = useRef(null);
  const circleRef2 = useRef(null);

  useEffect(() => {
    [circleRef.current, circleRef2.current].forEach((circle) => {
      const length = circle.getTotalLength();
      circle.style.strokeDasharray = length;
      circle.style.strokeDashoffset = length;

      gsap.to(circle, {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: circle,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });
  }, []);

  return (
    <svg width="743" height="517" viewBox="0 0 743 517" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1309_5599)">
        <circle ref={circleRef} cx="521" cy="521" r="520.5" transform="matrix(-1 0 0 1 1078 0)" stroke="url(#paint0_linear_1309_5599)" />
        <circle ref={circleRef2} opacity="0.4" cx="380" cy="380" r="379.5" transform="matrix(-1 0 0 1 937 141)" stroke="url(#paint1_linear_1309_5599)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_1309_5599" x1="942.5" y1="-139" x2="643" y2="246.5" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_1309_5599" x1="687.428" y1="-101.382" x2="468.983" y2="179.789" gradientUnits="userSpaceOnUse">
          <stop />
          <stop offset="1" stopColor="white" />
        </linearGradient>
        <clipPath id="clip0_1309_5599">
          <rect width="743" height="517" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

// Reusable ProductCard Component
const ProductCard = ({
  id,
  name,
  formFactor,
  payloadVolume,
  orbitCompatibility,
  description,
  specifications,
  image,
  isEven,
}) => (
  <div className={`${Styles.productContainer} grid align-items-center`}>
    <div
      className={`${Styles.productImgContainer} ${isEven ? Styles.orderLast : Styles.orderFirst}`}
    >
      <div>
        <p className={`${Styles.productHeading} heading-8 heading-5-sm extra-bold desktopHide`}>{name}</p>
      </div>

      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className={`${Styles.productImg} floating-img`}
      />
      {isEven ? <SvgBackgroundRight /> : <SvgBackgroundLeft />}
    </div>
    <div
      className={`${Styles.productDetailsContainer} ${isEven ? Styles.orderFirst : Styles.orderLast}`}
    >
      <div className={Styles.productDetails}>
        <div className={`${Styles.productHeader} flex flex-column`}>
          <div>
            <p className={`${Styles.tabHeading} heading-8 heading-5-sm extra-bold mobileHide`}>{name}</p>
          </div>
          
          <div className={`${Styles.productDescribe} flex gap-60`}>
            <div className="flex gap-30">
              <div className="flex flex-column gap-2">
                <p className="text-4 text-3-sm opcty-5">Form Factor</p>
                <p className="heading-7 text-5-sm">{formFactor}</p>
              </div>
              <div className="flex flex-column gap-2">
                <p className="text-4 text-3-sm opcty-5">Payload Volume</p>
                <p className="heading-7 text-5-sm">{payloadVolume}</p>
              </div>
            </div>
            {/* <div className="flex flex-column gap-2">
              <p className="text-4 text-3-sm opcty-5">Orbit Compatibility</p>
              <p className="heading-7 text-5-sm">{orbitCompatibility}</p>
            </div> */}
          </div>
        </div>
        <div className={Styles.productDescription}>
          <p className="text-1 text-1-sm">{description}</p>
        </div>
        <div className={Styles.productSutablity}>
          <div className={Styles.productSutablityBody}>
            <ul className={Styles.productSutablityUl}>
              {specifications.map((spec, index) => (
                <li key={index} className="flex items-start gap-20">
                  <ArrowIcon />
                  <div className="text-3 text-2-sm flex flex-column gap-1 sentence-case">
                    <p className="color-9">{spec.text}</p>
                    <p className="color-4">{spec.highlight}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={Styles.productBtnContainer}>
              <CtaBtn href={`/products/satellite-platforms/${name.toLowerCase().replace(/\s+/g, '-')}`} text="Learn more" variant="dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Products() {
  useFloatingImages();

  return (
    <section className={Styles.productSec} id="ax-03">
      <div className="container-main">
        {sateliteProducts.map((product, index) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            name={product.name}
            formFactor={product.formFactor}
            payloadVolume={product.payloadVolume}
            orbitCompatibility={product.orbitCompatibility}
            description={product.description}
            specifications={product.specifications}
            image={product.image}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}