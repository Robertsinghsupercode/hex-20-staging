"use client"
import React from 'react';
import Image from 'next/image';
import Styles from '../css/content.module.css'
import useFloatingImages from "@/app/components/useFloatingImg"

const Content = ({ product }) => {
  useFloatingImages();
  return (
    <section className={`${Styles.contentSec}`}>
      <div className='container-main'>
        <div className={`${Styles.contentContainer} flex`}>
          <div className='desktop-only'>
            <Image
              src={product.image}
              alt={product.alt}
              width={product.width}
              height={product.height}
              className={`${Styles.productImg} floating-img`}
            />
          </div>
          <div>
            <div className='flex flex-column'>
              <p className='heading-6 heading-3-sm'>{product.innerPage.tag}</p>
              
            </div>
            <div className={`${Styles.listContent}`}>
                {product.innerPage.specifications.map((spec, index) => (
                    <div className='flex gap-20' key={index}>
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <path d="M19 0.5L24 5.99997L19 11.5" stroke="#090909"/>
                            <path opacity="0.3" d="M9 0.5L14 5.99997L9 11.5" stroke="#090909"/>
                            <path opacity="0.1" d="M1 0.5L6 5.99997L1 11.5" stroke="#090909"/>
                        </svg>
                        </span>
                        <div className='flex flex-column gap-1'>
                            <p className='text-3 opcty-5 text-2-sm sentence-case'>{spec.title}</p>
                            {spec.items.length > 1 ? (
                              <ul>
                                {spec.items.map((item, i) => (
                                  <li key={i}>
                                    <p className='text-4 text-1-sm'>{item.text}</p>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className='text-4 text-1-sm'>{spec.items[0].text}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;