import React from 'react'
import Banner from './components/Banner'
import Satellite from './components/Satellite'
import PayloadService from './components/PayloadService'
import ContactForm from '@/app/components/ContactForm'

export default function Payloadhosting() {
  return (
    <div>
        <Banner />
        <Satellite />
        <PayloadService/>
        <ContactForm/>
    </div>
       
    
  )
}
