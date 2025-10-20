import React from 'react';
import Image from 'next/image';
import Styles from '../css/banner.module.css';

const Banner = ({ product, activeType }) => {
  const bannerImg = activeType?.image || product.bannerImage;

  return (
    <section className={`${Styles.productBanner} flex items-center`}>
      <div className='container-main'>
        <div className={`${Styles.productBannerWrap} flex items-center justify-between`}>
          <h1 className='heading-1 heading-5-sm extra-bold-md'>{product.name}</h1>
          {bannerImg && (
            <div className={Styles.bannerImageWrapper}>
              <Image
                src={bannerImg.src}
                alt={bannerImg.alt}
                width={666}
                height={543}
                className={Styles.bannerImage}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;