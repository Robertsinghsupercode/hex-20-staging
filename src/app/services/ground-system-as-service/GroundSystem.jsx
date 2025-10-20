import React from 'react'
import Banner from './components/Banner'
import Slider from './components/Slider'
import GroundsystemBody from './components/GroundsystemBody'
import Orbit from './components/Orbit'

export default function GroundSystem() {
  return (
    <div>
        <Banner />
        <Slider />
        <GroundsystemBody />
        <Orbit />
    </div>
  )
}
