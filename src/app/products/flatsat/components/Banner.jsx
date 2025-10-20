"use client"
import React from 'react'
import Image from 'next/image'
import Styles from '../css/banner.module.css'
import useFloatingImages from '../../../../app/components/useFloatingImg'

export default function Banner() {
    useFloatingImages();
  return (
    <section className={`${Styles.banner}`}>
        <div className="container-main">
            <div className="flex flex-column items-center gap-4 text-align-center">
                <div className={`${Styles.bannerContact} flex flex-column gap-4`}>
                    <h1 className="heading-1 heading-1-sm color-4">
                        Flatsat
                    </h1>
                    <p className="text-1 text-1-sm color-4">
                        Validated on the ground, proven in orbit. HEX20’s FLATSAT delivers hardware-in-the-loop 
                        validation for payloads and subsystems — cutting risk, accelerating 
                        development, and ensuring satellites launch mission-ready.
                    </p>
                </div>
            </div>        
        </div>
        <div className={`${Styles.imgContainer}`}>
            <div className={`${Styles.productimgContainer}`}>
                <Image
                    src="/assets/bannerProductImg.png"
                    alt="Team"
                    width={602}
                    height={488}
                    className={`${Styles.bannerProductImg}`}
                />
            </div>
            <Image
                src="/assets/flatsat-banner.png"
                alt="Team"
                width={1440}
                height={509}
                className={`width-100 ${Styles.bannerImg} floating-img`}
            />
        </div>
    </section>

  )
}
