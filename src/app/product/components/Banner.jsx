import React from 'react'
import Styles from '../css/banner.module.css'

export default function Banner() {
  return (
    <section className={`${Styles.banner}`}>
        <div className='container-main'>
            <div className='text-align-center'>
                <div className={`${Styles.headingWrap}`}>
                    <h1 className='heading-8 heading-1-sm'>
                        Our Products
                    </h1>
                </div>
            </div>
        </div>
    </section>
  )
}
