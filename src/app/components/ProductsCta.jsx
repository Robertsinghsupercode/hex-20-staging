"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import CtaBtn from './CtaBtn';
import Styles from './css/productscta.module.css';

export default function ProductsCta() {
  const pathname = usePathname();

  const products = [
    {
      title: 'SATELLITE PLATFORMS',
      imageSrc: '/assets/satelite-platform-cta.png',
      alt: 'satelite-platform',
      href: '/products/satellite-platforms',
      description: 'HEX20 Satellite platform is a flight-proven, cost-effective system tailored to meet the performance requirements for a wide range of applications. ',
    },
    {
      title: 'FlatSat',
      imageSrc: '/assets/flatsat-cta.png',
      alt: 'flatsat',
      href: '/products//flatsat',
      description: 'Validated on the ground, proven in orbit. HEX20’s FlatSat delivers hardware-in-the-loop validation for payloads and subsystems ',
    },
    {
      title: 'Subsystems',
      imageSrc: '/assets/subsystem-cta.png',
      alt: 'subsystem',
      href: '/subsystems',
      description: 'HEX20’s subsystems are the building blocks that keep satellites reliable, efficient, and mission-ready. ',
    },
    {
      title: 'Star tracker',
      imageSrc: '/assets/startracker-cta.png',
      alt: 'star-tracker',
      href: '/products/star-tracker',
      description: 'A compact, radiation-tolerant star tracker for micro and small satellites, seamlessly compatible with any third-party ADCS. ',
    },
  ];

  // Filter
  const filteredProducts = products.filter(product => product.href !== pathname);
  const selectedProducts = filteredProducts.sort(() => Math.random() - 0.5).slice(0, 2);

  return (
    <section className={`${Styles.productSection}`}>
      <div className="container-main">
        <div className={`${Styles.productHeader}`}>
          <p className="heading-1 heading-2-sm">
            more from
            <span className="highlightDark">hex20</span>
          </p>
        </div>
        <div className={`${Styles.productContent}`}>
          {selectedProducts.map((product, index) => (
            <div key={index} className={`${Styles.productBox} flex flex-column-md items-center`}>
              <Image
                src={product.imageSrc}
                alt={product.alt}
                width={280}
                height={280}
              />
              <div className="flex flex-column items-center-md gap-30 width-90">
                <div className={`${Styles.productBoxContent}`}>
                  <p className={`${Styles.title} heading-3`}>{product.title}</p>
                  <p className="text-1 opcty-5">{product.description}</p>
                </div>
                <CtaBtn href={product.href} text="Learn more" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}