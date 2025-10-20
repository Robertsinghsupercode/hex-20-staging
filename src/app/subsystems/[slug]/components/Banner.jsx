import React from 'react'
import Image from 'next/image'
import Styles from '../css/banner.module.css'

const Banner = ({ product }) => {
  console.log('product: ', product);
  return (
    <section className={`${Styles.bannerSec} flex items-center justify-between`} style={{ backgroundImage: `url(${product.bannerImage})` }}>
        <div className='container-main'>
            <div className={`${Styles.bannerCntent} flex items-center justify-between`}>
              <div className={`${Styles.bannerHeading}`}>
                <h1 className='heading-1 heading-1-sm'>{product.innerPage.bannerTitle}</h1>
              </div>
               <div>
                <Image
                src={product.image}
                alt={product.innerPage.bannerImage.alt}
                width={642}
                height={497}
                className={Styles.bannerImage}
                />
               </div>
            </div>
        </div>
    </section>
  )
}

export default Banner;
