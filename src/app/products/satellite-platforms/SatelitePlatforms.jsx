import React from 'react'
import Banner from './components/Banner'
import Products from './components/Products'
import ProductsCta from '../../components/ProductsCta'
import CtaBlock from '../../components/CtaBlock'
import Styles from './css/morefrom.module.css'

export default function SatelitePlatforms() {
  return (
    <div>
        <Banner />
        <Products />
        <div className={`${Styles.moreFromContainer}`}>
          <ProductsCta />
        </div>
        <CtaBlock />
    </div>
  )
}
