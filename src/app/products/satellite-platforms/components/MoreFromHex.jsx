import React from 'react'
import Image from 'next/image'
import CtaBtn from '@/app/components/CtaBtn'
import Styles from '../css/morefrom.module.css'

export default function MoreFromHex() {
  return (
    
    <div className='container-main'>
      <div className={`${Styles.moreFromHead}`}>
          <p className='heading-1 heading-2-sm'>more from</p>
          <p className="heading-1 heading-2-sm highlightDark">hex20</p>
      </div>
      <div className={`${Styles.moreFrom}flex gap-30`}>
        <div className={`${Styles.moreFromBox}`}>
          <Image
              src="/assets/subsystems.png"
              alt="ax-03"
              width={218}
              height={179}
              className={Styles.productImg}
            />
            <div className={`${Styles.moreFromBoxContent}`}>
              <div className='flex flex-column justify-between height-100'>
                <div className='flex flex-column gap-10'>
                  <p className='heading-2 heading-3-sm'>Subsystems</p>
                  <p className={`${Styles.moreFromContent} text-1 text-1-sm opcty-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae suscipit sem.  </p>
                </div>
                <CtaBtn href="#" text=" View all missions" />
              </div>
            </div>

        </div>
        <div className={`${Styles.moreFromBox} ${Styles.moreFromBoxTwo}`}>
          <Image
              src="/assets/flatsat-training.png"
              alt="ax-03"
              width={254}
              height={148}
              className={Styles.productImg}
            />
            <div className={`${Styles.moreFromBoxContent}`}>
              <div className='flex flex-column justify-between height-100'>
                <div className='flex flex-column'>
                 <div className='flex flex-column gap-10'>
                  <p className='heading-2 heading-3-sm'>FlatSat and Training</p>
                  <p className={`${Styles.moreFromContent} text-1 text-1-sm opcty-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae suscipit sem. </p>
                </div>                
                </div>
                <CtaBtn href="#" text=" View all missions" />
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}
