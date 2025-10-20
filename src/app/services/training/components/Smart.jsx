"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../css/smart.module.css'

export default function Smart() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`${styles.smartWrapper}`}>
      <div className="container-main">
        <h2 className='heading-1 heading-1-sm'>Smart</h2>
        <Image
          src={isMobile ? "/assets/smart-sm.svg" : "/assets/smart-svg-v2.svg"}
          alt="Smart"
          width={1440}
          height={936}
          className={styles.smartSvg}
        />
      </div>
    </section>
  )
}
