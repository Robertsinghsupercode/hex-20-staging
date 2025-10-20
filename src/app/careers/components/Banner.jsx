import React from 'react'
import Image from 'next/image'
import CtaBtn from '@/app/components/CtaBtn'
import Styles from '../css/banner.module.css'

export default function Banner() {
  return (
    <section className={`${Styles.careersBanner}`}>
        <Image
        src="/assets/sky.png"
        alt="Team"
        width={1440}
        height={540}
        className={`${Styles.skyImg}`}
        />
        <div className='container-main'>
            <div className='flex justify-center'>
                <div className={`${Styles.careersBannerHead} flex flex-column items-center gap-30 text-align-center`}>
                    <h1 className='heading-6 heading-1-sm'>
                        Look up at the stars,
                        and do wonders
                    </h1>
                    <CtaBtn href="#" text="See what we offer" />
                </div>
            </div>
        </div>
        <Image
        src="/assets/careers-banner.png"
        alt="Team"
        width={1440}
        height={540}
        style={{ objectFit: 'contain' }}
        className={`${Styles.careersTeamImg}`}
        />
        <div className='container-main'>
            <div className={`${Styles.careersBannerContentContainer} flex flex-column-md justify-between`}>
                <p className='heading-6 heading-2-sm'>Life at HEX20</p>
                <p className={`${Styles.careersBannerContent} text-1 opcty-8`}>
                    HEX20 is space technology company building cost-effective, reliable satellite 
                    platforms for academic, commercial, and government missions in LEO, 
                    cislunar, and deep-space.
                </p>
            </div>
        </div>
    </section>
  )
}
