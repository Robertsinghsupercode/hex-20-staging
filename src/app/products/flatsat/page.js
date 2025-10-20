import React from 'react'
import Flatsat from './Flatsat'
import ProductsCta from '../../components/ProductsCta'
import CtaBlock from '../../components/CtaBlock'
import Styles from './css/banner.module.css'

export default function page() {
  return (
   <div>
        <Flatsat />
        <div className={`${Styles.productsCtaSec}`}>
          <ProductsCta />
        </div>
        <CtaBlock />
   </div> 
  
  )
}
