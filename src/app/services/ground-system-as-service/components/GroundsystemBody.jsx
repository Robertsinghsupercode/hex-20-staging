import React from 'react'
import Image  from 'next/image'
import Styles from '../css/groundsystem.module.css'

export default function GroundsystemBody() {
  return (
    <section className={`${Styles.groundsystemSec}`}>
        <Image
            src="/assets/groundsystem.svg"
            alt=""
            width={1054}
            height={864}
            className={`${Styles.slideImage}`}
        />
        <div className='container-main'>
            <div className='flex justify-end'>
                <div className={`${Styles.groundsystemContent}`}>
                    <p className='text-7 text-6-sm'>
                        Strategically developed to ensure seamless real-
                        time satellite communication, our ground station 
                        supports uplink and downlink capabilities for:
                    </p>
                    <ul className='flex flex-column'>
                        <li className='flex items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                            </svg>
                            <span className='text-1'>Mission-critical data</span>
                        </li>
                        <li className='flex items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                            </svg>
                            <span className='text-1'>Enabling effective satellite health monitoring</span>
                        </li>
                        <li className='flex items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                            </svg>
                            <span className='text-1'>Payload command execution</span>
                        </li>
                        <li className='flex items-center gap-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                            </svg>
                            <span className='text-1'>Orbital tracking.</span>
                        </li>
                    </ul>
                    <p className='text-1'>
                        The system architecture is built with redundancy, and automation features to ensure 
                        consistent performance, even in dynamic low Earth orbit (LEO) environments.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
