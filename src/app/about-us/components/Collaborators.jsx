import React from 'react'
import Marquee from 'react-fast-marquee';
import Image from "next/image";
import Styles from '../css/collaborators.module.css'

export default function Collaborators() {
    const Logos = [
        { img: "/assets/collab-2.svg" },
        { img: "/assets/collab-3.svg" },
        { img: "/assets/collab-4.svg" },
        { img: "/assets/collab-5.svg" },
        { img: "/assets/collab-6.svg" },
        { img: "/assets/collab-7.svg" },
        { img: "/assets/collab-2.svg" },
        { img: "/assets/collab-3.svg" },
        { img: "/assets/collab-4.svg" },
        { img: "/assets/collab-5.svg" },
        { img: "/assets/collab-6.svg" },
        { img: "/assets/collab-7.svg" },
        { img: "/assets/collab-8.svg" },
        { img: "/assets/collab-9.svg" },
        { img: "/assets/collab-10.svg" },
        { img: "/assets/collab-11.svg" },
        { img: "/assets/collab-12.svg" },
        { img: "/assets/collab-13.svg" },
        { img: "/assets/collab-14.svg" },
        { img: "/assets/collab-8.svg" },
        { img: "/assets/collab-9.svg" },
        { img: "/assets/collab-10.svg" },
        { img: "/assets/collab-11.svg" },
        { img: "/assets/collab-12.svg" },
        { img: "/assets/collab-13.svg" },
        { img: "/assets/collab-14.svg" },
    ];

    return (
    <section className={`${Styles.collaboratorsSec}`}>
        <div className='container-main'>
            <div className={`${Styles.collaboratorsWrap}`}>
                <div className='flex justify-center'>
                    <div className={`${Styles.collaboratorsHeader}`}>
                        <div className='flex flex-column gap-20 align-items-center text-align-center'>
                            <p className='text-3 text-2-sm'>Collaborators & Clientele</p>
                            <p className='text-7 text-1-sm'>
                                From agencies and universities to pioneers and innovators — every 
                                collaboration adds a new chapter to the HEX20 story. Together, we 
                                turn bold ideas into missions that explore new realms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.collabSlider}>
            <Marquee speed={50} gradient={false}>
                {Logos.map((card, index) => (
                    <div key={index} className={Styles.sliderItem}>
                        <Image
                            src={card.img}
                            alt=""
                            width={180}
                            height={80}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    </section>
  )
}
