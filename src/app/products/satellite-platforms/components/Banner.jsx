import React from 'react'
import Image from "next/image";
import Styles from '../css/banner.module.css'
import CtaBtn from '@/app/components/CtaBtn';

export default function Banner() {
  return (
    <section className={`${Styles.sateBanner}`}>  
        <Image
        src="/assets/bannerSatelites.png"
        alt="satelite"
        width={434}
        height={213}
        className={`${Styles.bannerSatelites}`}
        />
        <div className={`container-main`}>
            <div className={`${Styles.containerMainsateBanner}`}>
                <div  className={`${Styles.sateBannerContent} flex flex-column justify-between`}>
                    <div className='flex flex-column items-center justify-content-center'>
                        <div className={`${Styles.bannerHead} text-align-center`}>
                            <div className='flex flex-column gap-30'>
                                <div className='flex flex-column gap-20'>
                                    <h1 className='heading-1 heading-1-sm'>SATELLITE PLATFORMS</h1>
                                    <p className={`${Styles.bannerDescription} text-1 text-1-sm`}>
                                        HEX20 Satellite platform is a flight-proven, cost-effective system tailored to meet the 
                                        performance requirements for a wide range of applications. 
                                    </p>
                                </div>
                                <div  >
                                    <CtaBtn href="#ax-03" text="See what we offer" className={`${Styles.ctaBtnSize}`} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='flex justify-center'>
                        <div className={`${Styles.bannerBody} flex flex-column color-4 flex text-align-center`}>
                            <h2 className='heading-6 heading-3-sm'>
                                Why choose Hex20 Satellite platforms
                            </h2>
                            <div className='flex items-center justify-center'>
                                <div className={`${Styles.whyChooseParent} flex`}>
                                    <div className={`flex flex-column items-center gap-20 text-align-center ${Styles.whyChooseItem}`}>
                                        <svg width="48" height="55" viewBox="0 0 48 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M47.0664 13.9365V40.6455L23.7822 53.5605L0.5 40.6465V13.9365L23.7832 0.576172L47.0664 13.9365ZM23.2832 29.1328H35.7832V28.1328H24.2832V13.1328H23.2832V29.1328Z" stroke="#595959"/>
                                        </svg>

                                        <div className='flex flex-column gap-10'>
                                            <p className='heading-7 text-5-sm fw-600'>Fast Deployment</p>
                                            <p className='text-1 text-1-sm'>
                                                From design to launch, we cut months off your mission timeline — without compromising on quality or reliability.
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`flex flex-column items-center gap-20 text-align-center ${Styles.whyChooseItem}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="53" height="57" viewBox="0 0 53 57" fill="none">
                                            <path d="M23.7175 55.9993L1 43.4134V17.7383L23.7175 29.8207" stroke="#595959"/>
                                            <path d="M52.4141 17.7393V43.1266L29.6966 54.8047V29.4175" stroke="#595959"/>
                                            <path d="M27.0563 26.1088L50.0234 13.0522L28.0549 1L4.58847 14.0566" stroke="#595959"/>
                                        </svg>

                                        <div className='flex flex-column gap-10'>
                                            <p className='heading-7 text-5-sm fw-600'>Flexible Platforms</p>
                                            <p className='text-1 text-1-sm'>
                                            Scalable CubeSat Buses tailored to payloads and evolving needs, built for precision and lasting performance. 
                                            </p>
                                        </div>
                                    </div>
                                    <div className={`flex flex-column items-center gap-20 text-align-center ${Styles.whyChooseItem}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="71" height="65" viewBox="0 0 71 65" fill="none">
                                            <path d="M11.0342 17.2367L30.6864 6.52772L52.273 19.2714" stroke="#595959"/>
                                            <path d="M36.9795 5.86951L56.5168 16.7867L56.5168 40.407" stroke="#595959"/>
                                            <path d="M61.0381 21.3344L61.0381 42.4693L39.3318 54.4551" stroke="#595959"/>
                                            <path d="M58.9756 48.6547L39.9026 59.4799L17.2213 47.1082" stroke="#595959"/>
                                            <path d="M32.6865 60.5101L13.6136 50.2004L13.6136 25.4571" stroke="#595959"/>
                                            <path d="M8.81176 45.0453L8.81082 23.5084L30.7433 12.0543" stroke="#595959"/>
                                        </svg>
                                        <div className='flex flex-column gap-10'>
                                            <p className='heading-7 text-5-sm fw-600'>Turnkey Solutions</p>
                                            <p className='text-1 text-1-sm'>
                                                Comprehensive end-to-end mission support that ensures seamless delivery — from bold concept to proven success in orbit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </section>
  )
}
