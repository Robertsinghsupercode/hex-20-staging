import React from 'react'
import Missions from './Missions'
import Latest from '../components/Latest'
import CtaBlock from '../components/CtaBlock'
import Styles from './css/banner.module.css'

export default function page() {
  return (
    <div>
      <Missions />
      <div className={`${Styles.LatestsecMissions}`}>
        <Latest />
      </div>
      <CtaBlock />
    </div>
  )
}
