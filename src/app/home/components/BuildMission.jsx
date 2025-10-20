"use client";

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import Styles from '../css/build-you-mission.module.css';

export default function BuildMission() {

  return (
    <section className={`${Styles.buildSection}`}>
        <div className={`${Styles.gradientTop}`}></div>
        <div className='container-main'>
            <div className={`${Styles.buildHeadingContainerWrap} flex justify-center`}>
                <div className={`${Styles.buildHeadingContainer} flex justify-center gap-20`}>
                    <div className='flex flex-column justify-center items-center gap-20 text-align-center'>
                        <h6 className='heading-1'>
                            Build your 
                            mission
                        </h6>
                        <p className='text-1 color-7 width-40'>
                            Tell us about your requirement and let us help you 
                            find the right platform
                        </p>
                    </div>
                    <svg className={`${Styles.plusIconLeft}`} xmlns="http://www.w3.org/2000/svg" width="80" height="81" viewBox="0 0 80 81" fill="none">
                        <line x1="40.5068" y1="0.0820313" x2="40.5068" y2="80.082" stroke="#2E34DB"/>
                        <line x1="80.002" y1="40.5869" x2="0.00195308" y2="40.5869" stroke="#2E34DB"/>
                    </svg>
                    <svg className={`${Styles.plusIconRight}`} xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <line x1="40.5068" y1="2.18557e-08" x2="40.5068" y2="80" stroke="#2E34DB"/>
                        <line x1="80.002" y1="40.5049" x2="0.00195308" y2="40.5049" stroke="#2E34DB"/>
                    </svg>
                </div>
            </div>

            <div className={`${Styles.dropdownContainerWrap} flex justify-center gap-6`}>
                <div className={`${Styles.dropdownContainer} flex items-center justify-between`}>
                    <div className='flex flex-column'>
                        <span className='text-5 opcty-5'>Payload Size</span>
                        <span className='text-1'>10Kg</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                        <path d="M12.002 1L6.50198 6L1.00195 1" stroke="white"/>
                    </svg>
                </div>
                <div className={`${Styles.dropdownContainer} flex items-center justify-between`}>
                    <div className='flex flex-column'>
                        <span className='text-5 opcty-5'>Orbit</span>
                        <span className='text-1'>LEO</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                        <path d="M12.002 1L6.50198 6L1.00195 1" stroke="white"/>
                    </svg>
                </div>
                <div className={`${Styles.dropdownContainer} flex items-center justify-between`}>
                    <div className='flex flex-column'>
                        <span className='text-5 opcty-5'>Volume</span>
                        <span className='text-1'>10Kg</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                        <path d="M12.002 1L6.50198 6L1.00195 1" stroke="white"/>
                    </svg>
                </div>
                <Link href="#" className='cta-btn'>
                    Find Suitable platform
                    <svg width="25" height="13" viewBox="0 0 25 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.0021 0.999512L24.0021 6.49949L19.0021 11.9995" stroke="#090909"/>
                        <path opacity="0.3" d="M9.00208 0.999512L14.0021 6.49949L9.00208 11.9995" stroke="#090909"/>
                        <path opacity="0.1" d="M1.00208 0.999512L6.00208 6.49949L1.00208 11.9995" stroke="#090909"/>
                    </svg>
                </Link>
            </div>
      </div>
    </section>
  );
}