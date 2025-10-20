import React from 'react'
import ProductsCta from '../components/ProductsCta'
import Subsystems from './Subsystems'
import CtaBlock from '../components/CtaBlock'
import Styles from './css/banner.module.css'

export default function page() {
  return (
    <div>
      <Subsystems />
      <div className={`${Styles.productsCtaSec}`}>
        <ProductsCta />
      </div>
      <CtaBlock />
    </div>
  )
}
