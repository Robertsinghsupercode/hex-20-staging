import React from 'react';
import Styles from '../css/Banner.module.css';
import CtaBtn from '@/app/components/CtaBtn';

export default function WhoWeAre() {
  return (
    <section>
        <div className='container-main'>
            <div className={Styles.whoWeAreContent}>
                <h3 className='text-4'>who we are</h3>
                <p className='heading-2 heading-3-sm'>We are a payload agnostic small satellite company with scalable platforms and turnkey solutions</p>
                <div className='flex gap-20 flex-column-md'>
                  <CtaBtn href="/about-us" text="read about us" className="whoWeAreBtn" />
                  <CtaBtn href="/product" text="View our products" className="transprantBg"/>
                </div>
            </div>
        </div>
    </section>
  )
}
