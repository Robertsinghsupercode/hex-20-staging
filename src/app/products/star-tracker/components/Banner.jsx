"use client"
import React from 'react'
import Styles from '../css/banner.module.css'
import Image from 'next/image'
import useFloatingImages from '../../../../app/components/useFloatingImg'

export default function Banner() {
    useFloatingImages();
  return (
    <section className={`${Styles.bannerSec}`}>
        <div className={`${Styles.bannerImgSec}`}>
                <div className='flex justify-center'>
                    <div className={`${Styles.bannerContent} flex flex-column gap-4`}>
                        <h1 className='heading-1 heading-1-sm'>Star tracker</h1>
                        <p className='text-1 text-1-sm'>
                            A compact, radiation-tolerant star tracker for micro and small satellites, seamlessly 
                            compatible with any third-party ADCS.
                        </p>
                    </div>
                </div>
                <div className={`${Styles.productimgContainerWrap}`}>
                    
                    <div className={`${Styles.productimgContainer}`}>
                        <Image
                            src="/assets/star-tracker-product.png"
                            alt="Star tracker"
                            width={602}
                            height={420}
                            className={`${Styles.starTrackerProduct}`}
                        />
                    </div>
                    <div className={`${Styles.productimgName}`}>
                        <Image
                            src="/assets/bannerStartracker.png"
                            alt="Star tracker"
                            width={1440}
                            height={509}
                            className={`width-100 ${Styles.bannerImg} floating-img`}
                        />
                    </div>
                </div>
        </div>
        <div>
            <div className='container-main'>
                <div className='flex justify-end'>
                    <div className={`${Styles.bannerDes} flex`}>
                        <p className={`text-1 text-1-sm text-align-right ${Styles.description}`}>
                            Offering arcsecond-level accuracy, onboard processing, optimized optics, 
                            autonomous operation, star detection up to magnitude 6, and stray light 
                            management, it ensures precise and dependable orientation in even the most 
                            challenging orbital conditions
                        </p>
                        <svg className={Styles.lineSvg} xmlns="http://www.w3.org/2000/svg" width="198" height="28" viewBox="0 0 198 28" fill="none">
                            <path d="M197 1L175 23H13" stroke="#2E34DB"/>
                            <path d="M0 23C0 20.5147 2.01472 18.5 4.5 18.5C6.98528 18.5 9 20.5147 9 23C9 25.4853 6.98528 27.5 4.5 27.5C2.01472 27.5 0 25.4853 0 23Z" fill="#2E34DB"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
