import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Styles from '../css/uaeflatsat.module.css'
import ScrambleText from '../../components/ScrambleText'
import CtaBtn from '@/app/components/CtaBtn'

export default function UaeFlatsat() {
  return (
    <section className={`${Styles.uaeflatsatSec}`}>
        <div className='container-main'>
            <div className={`${Styles.uaeflatsatContent} flex items-center justify-between`}>
                <div className={`${Styles.missionIntroContentWrap} desktop-only flex flex-column`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="647" height="27" viewBox="0 0 647 27" fill="none">
                        <path d="M1 26L33.6016 1H647" stroke="#2F2F2F"/>
                    </svg>
                    <div className={`${Styles.missionIntroContentContainer} flex flex-column`}>
                        <div className='flex flex-column gap-10'>
                            <p className='heading-6'>UAE Flatsat</p>
                            <p className='text-1 opcty-5'>
                                Curabitur vel ante ac augue congue feugiat. Donec lectus lectus, 
                                hendrerit nec venenatis in, commodo ut nisi.
                            </p>
                        </div>
                        {/* <CtaBtn href="/about" text="Learn more" /> */}
                    </div>
                </div>
                <div className={`desktop-only ${Styles.missionImgtWrap}`}>
                    <svg className={`${Styles.missionIntroSvgOne}`} xmlns="http://www.w3.org/2000/svg" width="81" height="83" viewBox="0 0 81 83" fill="none">
                        <path opacity="0.2" d="M80.5 83V1H0" stroke="white"/>
                    </svg>
                        <Image
                        src="/assets/uaeflatSat.png"
                        alt="nila"
                        width={572}
                        height={431}
                        className={`${Styles.uaeflatSat}`}
                        /> 
                    <svg className={`${Styles.missionIntroSvgTwo}`} xmlns="http://www.w3.org/2000/svg" width="92" height="93" viewBox="0 0 92 93" fill="none">
                        <path opacity="0.2" d="M80.5 0V82H0" stroke="white"/>
                        <line y1="-0.5" x2="22" y2="-0.5" transform="matrix(4.37114e-08 1 1 -4.37114e-08 80.5 71)" stroke="#4A4A4A"/>
                        <line y1="-0.5" x2="22" y2="-0.5" transform="matrix(1 -8.74228e-08 -8.74228e-08 -1 69.5 82)" stroke="#4A4A4A"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
  )
}
