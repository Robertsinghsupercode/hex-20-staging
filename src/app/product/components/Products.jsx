"use client"
import React from 'react'
import Image from 'next/image'
import CtaBtn from '@/app/components/CtaBtn'
import Styles from '../css/products.module.css'
import useFloatingImages from '../../components/useFloatingImg'

export default function Products() {
  const productsData = [
    {
      title: 'Satellite platforms',
      description:
        'HEX20 Satellite platform is a flight-proven, cost-effective system tailored to meet the performance requirements for a wide range of applications.',
      image: '/assets/satelite-platform.png',
      ctaText: 'See what we offer',
      ctaLink: 'products/satellite-platforms',
    },
    {
      title: 'Subsystems',
      description:
        'HEX20’s subsystems are the building blocks that keep satellites reliable, efficient, and mission-ready. Each module is designed with precision, tested for resilience, and optimized for performance in orbit.',
      image: '/assets/substems.png',
      ctaText: 'See what we offer',
      ctaLink: 'subsystems',
    },
    {
      title: 'Flatsat',
      description:
        'Validated on the ground, proven in orbit. HEX20’s FLATSAT delivers hardware-in-the-loop validation for payloads and subsystems — cutting risk, accelerating development, and ensuring satellites launch mission-ready.',
      image: '/assets/flat-sat.png',
      ctaText: 'See what we offer',
      ctaLink: 'products/flatsat',
    },
    {
      title: 'Star tracker',
      description:
        'A compact, radiation-tolerant star tracker for micro and small satellites, seamlessly compatible with any third-party ADCS.',
      image: '/assets/star-tracker.png',
      ctaText: 'See what we offer',
      ctaLink: 'products/star-tracker',
    },
  ]

  useFloatingImages();
  return (
    <section className={Styles.productSec}>
      <div className='container-main'>
        {productsData.map((product, index) => (
         <div
           key={index}
           className={`${Styles.productContainer} flex items-center${index % 2 === 1 ? ' flex-row-reverse' : ''}`}
         >
            <div className={Styles.productImgContainer}>
            <p className='heading-6 heading-2-sm mobile-only'>{product.title}</p>
              <Image
                src={product.image}
                alt={product.title}
                width={596}
                height={570}
                className="floating-img"
              />
            </div>
            <div className='flex justify-end justify-center-md'>
              <div className={`${Styles.desContainer} flex flex-column gap-50`}>
                <div className='flex flex-column gap-10'>
                  <p className='heading-6 heading-2-sm desktop-only'>{product.title}</p>
                  <p className='text-1 text-9-sm'>{product.description}</p>
                </div>
                <CtaBtn href={product.ctaLink} text={product.ctaText} variant='dark' />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
