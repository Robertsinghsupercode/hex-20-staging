import React from 'react'
import Banner from './components/Banner'
import CtaBlock from '../components/CtaBlock'
import Advantages from './components/Advantages'
import OpenPositions from './components/OpenPositions'
import Employees from './components/Employees'
import Styles from './css/openpositions.module.css'

export default function Careers() {
  return (
    <div>
        <Banner />
        <Advantages />
        <Employees />
        <OpenPositions />
        <div className={`${Styles.careersCtaSec}`}>
          <CtaBlock />
        </div>
    </div>
  )
}
