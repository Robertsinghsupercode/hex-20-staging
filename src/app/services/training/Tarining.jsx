import React from 'react'
import Banner from './components/Banner'
import MarqueeSlider from '../../components/MarqueeSlider'
import Customers from './components/Customers'
import Xorbit from './components/Xorbit'
import Approach from './components/Approach'
import TrainingPlan from './components/TrainingPlan'
import Smart from './components/Smart'
import CtaBlock from '../../components/CtaBlock'
import ContactForm from '../../components/ContactForm'

export default function Tarining() {

  return (
    <>
    <Banner/>
    <Customers/>
    <Xorbit/>
    <Smart/>
    <Approach/>
    <TrainingPlan/>
    <ContactForm/>
    <CtaBlock/>
    </>
  )
}
