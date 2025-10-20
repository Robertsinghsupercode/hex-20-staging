import React from 'react'
import Image from 'next/image'
import Styles from '../css/spacecraft.module.css'

export default function SpaceCraft() {
  return (
    <section className={`${Styles.spaceCraftSec}`}>
        <div className={`${Styles.decSec}`}>
            <div className='container-main'>
                <div className='flex justify-center'>
                    <div className={`${Styles.dec}`}>
                        <p className='text-8 text-6-sm'>
                            We take care of spacecraft 
                            registration and frequency license 
                            filing for you as well.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${Styles.groundSec}`}>
            <div className='container-main height-100'>
                <div className={`${Styles.groundContainer}`}>
                    <div className='flex justify-center text-align-center'> 
                        <div className={`${Styles.groundHeader}`}>
                            <p className='text-7 text-1-sm'>Through our partners AWS, KSAT and Leafspace we ensure your data is available for your utilization seamlessly.</p>
                        </div>
                    </div>

                    <div  className={`${Styles.groundContainerContent} flex items-end flex-column-reverse-md`}>
                        <div className={`${Styles.groundContentWrap}`}>
                            <p className={`${Styles.groundContent} text-1 text-1-sm`}>
                            The HEX20 Ground Station functions as the Mission Control Centre (MCC) for our satellite missions, offering an integrated platform for end-to-end spacecraft operations. Equipped with advanced telemetry and tracking systems, the MCC ensures real-time monitoring, reliable communication, and precise command execution. From data reception to anomaly resolution, it safeguards mission integrity and enables seamless control throughout every stage of flight.
                            </p>
                        </div>

                        <div className={`${Styles.groundSatelite}`}>
                            <Image
                            src="/assets/groundSatelite.png"
                            alt="Satelite"
                            width={400}
                            height={400}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
