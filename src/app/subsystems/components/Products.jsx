"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CtaBtn from '@/app/components/CtaBtn';
import Styles from '../css/product.module.css';
import { subsystemProducts } from '../subsystemProducts';
import { gsap } from 'gsap';

// Icon component
const Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
    <path d="M19 1L24 6.49997L19 12" stroke="white"/>
    <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
    <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
  </svg>
);

export default function Products() {
  const productImgsRef = useRef([]); // Array to store image refs
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Apply GSAP animations to image refs
  useEffect(() => {
    // Delay animation slightly to ensure images are rendered
    const timer = setTimeout(() => {
      const images = productImgsRef.current.filter(el => el); // Filter out null/undefined refs
      images.forEach((el, i) => {
        gsap.to(el, {
          y: 50, // Floating animation
          repeat: -1,
          yoyo: true,
          duration: 2,
          ease: "sine.inOut",
          delay: i * 0.3, // Staggered animation
        });
      });
    }, 100); // 100ms delay to ensure DOM is ready

    // Cleanup timeout on unmount
    return () => clearTimeout(timer);
  }, []); // Run once on mount

  return (
    <section className={`${Styles.productsSec}`}>
      <div className='container-main'>
        <div className={`${Styles.productsWrap} flex flex-column`}>
          {subsystemProducts.map((product, index) => (
            <div key={product.id} className={`${Styles.productsWrapContainer} flex justify-between flex-column-md`}>
              {isMobile ? (
                <>
                  <div className={`${Styles.productimgContainer}`}>
                    <div className={`${Styles.imgCircle}`}></div>
                    <p className='heading-6 heading-3-sm mobile-only'>{product.title}</p>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={product.width}
                      height={product.height}
                      className={Styles.productImg} // Keep class for styling, not animation
                      ref={el => {
                        productImgsRef.current[index] = el; // Assign ref directly
                      }}
                      priority={index < 2} // Eager loading for first two images
                    />
                  </div>
                  <div className={`${Styles.productcontentContainer}`}>
                    <div className={`${Styles.productContent} flex flex-column gap-10`}>
                      <p className='heading-6 desktop-only'>{product.title}</p>
                    </div>
                    <ul className={`${Styles.productUl} flex flex-column gap-10`}>
                      {product.items.map((item, itemIndex) => (
                        <li key={`${product.id}-${itemIndex}`}>
                          <Icon />
                          <div className='text-3'>
                            <p className='opcty-5 text-1-sm'>{item.text}</p>
                            <span  className={`${Styles.textdefault} text-1-sm`}>{item.highlight}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {product.title && typeof product.title === 'string' ? (
                      <CtaBtn
                        href={`/subsystems/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                        text="learn more"
                      />
                    ) : (
                      <CtaBtn href="#" text="learn more" disabled />
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className={`${Styles.productimgContainer}`}>
                    <div className={`${Styles.imgCircle}`}></div>
                    <p className='heading-6 heading-3-sm mobile-only'>{product.title}</p>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={product.width}
                      height={product.height}
                      className={Styles.productImg} // Keep class for styling, not animation
                      ref={el => {
                        productImgsRef.current[index] = el; // Assign ref directly
                      }}
                      priority={index < 2} // Eager loading for first two images
                    />
                  </div>
                  <div className={`${Styles.productcontentContainer}`}>
                    <div className={`${Styles.productContent} flex flex-column gap-10`}>
                      <p className='heading-6 heading-3-sm desktop-only'>{product.title}</p>
                    </div>
                    <ul className={`${Styles.productUl} flex flex-column gap-10`}>
                      {product.items.map((item, itemIndex) => (
                        <li key={`${product.id}-${itemIndex}`}>
                          <Icon />
                          <div className='text-3 text-1-sm flex flex-column gap-1 sentence-case'>
                            <p className='opcty-5'>{item.text}</p>
                            <span className={`${Styles.textdefault}`}>{item.highlight}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {product.title && typeof product.title === 'string' ? (
                      <CtaBtn
                        href={`/subsystems/${product.title.toLowerCase().replace(/\s+/g, '-')}`}
                        text="learn more"
                      />
                    ) : (
                      <CtaBtn href="#" text="learn more" disabled />
                    )}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}