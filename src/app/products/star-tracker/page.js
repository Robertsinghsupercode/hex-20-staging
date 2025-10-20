import React from 'react'
import Styles from './css/banner.module.css'
import StarTracker from './StarTracker'
import CtaBlock from '../../components/CtaBlock'
import ProductsCta from '../../components/ProductsCta'

export default function page() {
  return (
    <div className={`${Styles.bodyMain}`}>
        <StarTracker />
        <div className={`${Styles.productsCtaSec}`}>
          <ProductsCta />
               <CtaBlock />
        </div>
    </div>
    
  )
}
