import React from 'react'
import Styles from '../css/specifications.module.css'


export default function Specifications() {
  return (
    <section className={`${Styles.specSec}`}>
        <div className='container-main'>
            <div className={`${Styles.specificationsWrap}`}>
                <div className={`${Styles.specificationsContainer} flex flex-column gap-30`}>
                    <p className='heading-6 heading-3-sm'>Specifications</p>
                    {/* <p className='text-1'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.  totam 
                        rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi .
                    </p> */}
                </div>
                <div className={`${Styles.specificationsUlContainer}`}>
                    <ul>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Field of view</p>
                                        <p className='text-4'>10° × 10°</p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Update Rate</p>
                                        <p className='text-4'>5 Hz</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Dimensions</p>
                                        <p className='text-4'>95 <span className='lowercase'>mm</span> x 85 <span className='lowercase'>mm</span> x 85 <span className='lowercase'>mm</span></p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Star Detection</p>
                                        <p className='text-4'>Up to magnitude 6.0</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Pointing Accuracy</p>
                                        <p className='text-4'>~16 arcseconds</p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Sun Exclusion Angle</p>
                                        <p className='text-4'>30°</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Interface</p>
                                        <p className='text-4'>RS422 & LVDS</p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Mass</p>
                                        <p className='text-4'>325 g</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Power</p>
                                        <p className="text-4">&lt;5 W</p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Sensor</p>
                                        <p className='text-4'>Radiation-tolerant CMOS</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>  
                            <div className={`${Styles.specificationsLiContainer} flex items-center justify-between border-none`}>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>Processing</p>
                                        <p className='text-4'>QUEST & Lost-in-Space</p>
                                    </div>
                                </div>
                                <div className={`${Styles.specificationsLiContent} flex gap-4`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                                    </svg>
                                    <div>
                                        <p className='text-4 opcty-5'>TRL</p>
                                        <p className='text-4'>5</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
         
    </section>
  )
}
