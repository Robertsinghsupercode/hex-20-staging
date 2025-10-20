"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Styles from '../css/banner.module.css';

export default function TabbedSection() {
  const [activeTab1, setActiveTab1] = useState('3U');
  const [activeTab2, setActiveTab2] = useState('50kg');

  const tabs1 = [
    {
      id: '3U',
      label: '3U',
      content: 
        <Image
          src="/assets/3u-satelite.png"
          alt="satellite 3U"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
    {
      id: '6U',
      label: '6U',
      content:
        <Image
          src="/assets/6u-satelite.png"
          alt="satellite 6U"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
    {
      id: '12U',
      label: '12U',
      content:
        <Image
          src="/assets/12u-satelite.png"
          alt="satellite 12U"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
    {
      id: '27U',
      label: '27U',
      content:
        <Image
          src="/assets/27u-satelite.png"
          alt="satellite 27U"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
  ];

  const tabs2 = [
    {
      id: '50kg',
      label: '50kg',
      content: 
        <Image
          src="/assets/sate-50-kg.png"
          alt="50-kg"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
    {
      id: '200kg',
      label: '200kg',
      content:
        <Image
          src="/assets/sate-200-kg.png"
          alt="200-kg"
          width={460}
          height={396}
          className={`${Styles.productImg}`}
        />,
    },
  ];

  useEffect(() => {
    const validTabIds = tabs2.map(tab => tab.id);
    if (!validTabIds.includes(activeTab2)) {
      setActiveTab2(tabs2[0].id);
    }
  }, [activeTab2, tabs2]);

  return (
    <section className={`${Styles.bannerSec}`}>
        <div className='container-main height-100'>
            <div className='flex justify-center text-align-center height-100'>
                <div className={`${Styles.bannerContentWrap} height-100`}>
                    <div className='flex justify-center'>
                        <div className={`${Styles.bannerContent}`}>
                            <div className='flex flex-column gap-20'>
                                <h1 className='heading-1 heading-1-sm'>Mission As a service</h1>
                                <p className='text-6 text-1-sm'>
                                    HEX20 offers mission as a service for your mission needs from concept to 
                                    orbital data. We help you design, build, integrate, test, launch and operate 
                                    your payloads and space missions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={`${Styles.whatWeOfferWrap}`}>
                        <div className={`${Styles.whatWeOfferHeader} flex flex-column items-center gap-30`}>
                          <h2 className="heading-1 heading-1-sm">What We Offer</h2>
                        </div>
                        <div className={`${Styles.whatWeOfferContent} flex justify-center items-center gap-20 gap-30-sm`}>
                            {/* First Content Box (4 tabs) */}
                            <div className={`${Styles.contentBoxContainer}`}>
                            <div className="flex flex-column gap-40">
                                <div className="flex justify-center">
                                <div className={`${Styles.contentBoxHeader}`}>
                                    <p className="heading-7 text-align-center">
                                    Nano-satellite missions from 3U to 27U
                                    </p>
                                </div>
                                </div>
                                <div className={`${Styles.contentBox} flex flex-column items-center gap-30`}>
                                <div className={`${Styles.contentBoxContent} flex flex-column items-center gap-30`}>
                                    <div className={`${Styles.contentTabHeadContainer} flex items-center gap-20`}>
                                    {tabs1.map((tab) => (
                                        <div
                                        key={tab.id}
                                        className={`${Styles.contentTabHead} text-4 ${
                                            activeTab1 === tab.id ? Styles.contentTabHeadActive : ''
                                        }`}
                                        onClick={() => setActiveTab1(tab.id)}
                                        role="tab"
                                        aria-selected={activeTab1 === tab.id}
                                        >
                                        {tab.label}
                                        </div>
                                    ))}
                                    </div>
                                    <div className="flex flex-col items-center gap-10">
                                    {tabs1.find((tab) => tab.id === activeTab1)?.content || <p>No content available</p>}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            {/* Second Content Box (2 tabs with different content) */}
                            <div className={`${Styles.contentBoxContainer}`}>
                            <div className="flex flex-column gap-40">
                                <div className="flex justify-center">
                                <div className={`${Styles.contentBoxHeader}`}>
                                    <p className="heading-7 text-align-center">
                                      MicroSats from <br />
                                      50 kg to 200 kg.
                                    </p>
                                </div>
                                </div>
                                <div className={`${Styles.contentBox} flex flex-column items-center gap-30`}>
                                <div className={`${Styles.contentBoxContent} flex flex-column items-center gap-30`}>
                                    <div className={`${Styles.contentTabHeadContainer} flex items-center gap-20`}>
                                    {tabs2.map((tab) => (
                                        <div
                                        key={tab.id}
                                        className={`${Styles.contentTabHead} text-4 ${
                                            activeTab2 === tab.id ? Styles.contentTabHeadActive : ''
                                        }`}
                                        onClick={() => setActiveTab2(tab.id)}
                                        role="tab"
                                        aria-selected={activeTab2 === tab.id}
                                        >
                                        {tab.label}
                                        </div>
                                    ))}
                                    </div>
                                    <div className="flex flex-col items-center gap-10">
                                    {tabs2.find((tab) => tab.id === activeTab2)?.content || <p>No content available</p>}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}