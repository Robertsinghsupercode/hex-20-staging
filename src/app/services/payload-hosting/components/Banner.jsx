import React from 'react'
import Styles from '../css/banner.module.css'
import CtaBtn from "@/app/components/CtaBtn";

export default function Banner() {
  return (
    <>
      <section className={`${Styles.banner}`}>
        <div className="container-main">
            <div className={`flex flex-column items-center gap-6 text-align-center ${Styles.bannerContent}`}>                
                <h1 className="heading-1 color-3 width-50 heading-1-sm ">
                    Payload Hosting
                </h1>
                <p className={`text-1 color-7 text-1-sm ${Styles.description}`}>
                    HEX20 offers payload host services for a variety of payloads starting at as low as 150K USD per U (10cm x 10cm x 10cm). Price includes, payload I&T, in-orbit power commissioning and preliminary data downlink.
                </p>                                            
            </div>
        </div>
      </section>

      <div className={`flex flex-column items-center gap-20 text-align-center ${Styles.bannerDetail}`}>
        <div className='container-main'>
          <div className='flex flex-column items-center gap-20'>
            <p className={`text-1 color-7 width-40 text-1-sm ${Styles.subDescription}`}>
                Monthly data services charges are extra depending on data volume. Payload hosting available for 2026 and 2027 for 1U to 12U size payloads. Talk to us about your payload details.
            </p>
            <CtaBtn href="/contact-us/#form" text="Talk to us" />
          </div>
        </div>

      </div>
    </>
  )
}
