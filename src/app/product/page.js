import React from 'react'
import Product from './Product'
import Latest from '../components/Latest'
import CtaBlock from '../components/CtaBlock'
import Styles from './css/banner.module.css'

export default function page() {
  return (
    <div>
      <Product />
      <div className={`${Styles.latestSec}`}>
        <Latest />
      </div>
      <CtaBlock />
    </div>
  )
}
