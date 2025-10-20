"use client";

import React from 'react';
import Image from "next/image";
import Styles from './css/latest.module.css';


export default function Latest() {

  return (
    <section className={`${Styles.latestSection}`}>
      <div className='container-main'>
        <div className={`${Styles.latestHeadingContainer}`}>
            <div>
                <h6 className='heading-1 heading-2-sm'>
                    latest
                    <span className='highlightDark'> from hex20</span>
                </h6>
            </div>
        </div>

        <div className={`${Styles.latestPostContainerWrap}`}>
            <div className={`${Styles.latestPostContainer} flex flex-column`}>
                <Image
                    src="/assets/event-thumbnail-one.png"
                    alt="Event Thumbnail"
                    width={424}
                    height={244}
                    className={Styles.postImage}
                />
                <span className={`${Styles.latestPostContainerHeading} text-4 text-3-sm opcty-6`}>
                    Events
                </span>
                <p className={`${Styles.latestPostContainerContent} text-1 text-1-sm`}>
                    HEX20 at Small Satellite Conference 2025 – Utah full of innovative ideas shaping the future of space
                </p>
                <svg className={`desktop-only`} xmlns="http://www.w3.org/2000/svg" width="233" height="24" viewBox="0 0 233 24" fill="none">
                    <path d="M1 1L23 23H232.5" stroke="#2F2F2F"/>
                </svg>
                <svg className={`mobile-only ${Styles.lineSvg}`} width="281" height="15" viewBox="0 0 281 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15.6043 14H281" stroke="#2F2F2F"/>
                </svg>

            </div>
            <div className={`${Styles.latestPostContainer} flex flex-column`}>
                <Image
                    src="/assets/event-thumbnail-two.png"
                    alt="Event Thumbnail"
                    width={424}
                    height={244}
                    className={Styles.postImage}
                />
                <span className={`${Styles.latestPostContainerHeading} text-4 text-3-sm opcty-6`}>
                    Events
                </span>
                <p className={`${Styles.latestPostContainerContent} text-1 text-1-sm`}>
                    The Technology Innovation Institute officially signed a collaborative agreement with HEX20
                </p>
                <svg className={`desktop-only`} xmlns="http://www.w3.org/2000/svg" width="233" height="24" viewBox="0 0 233 24" fill="none">
                    <path d="M1 1L23 23H232.5" stroke="#2F2F2F"/>
                </svg>
                <svg className={`mobile-only ${Styles.lineSvg}`} width="281" height="15" viewBox="0 0 281 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15.6043 14H281" stroke="#2F2F2F"/>
                </svg>

            </div>
            <div className={`${Styles.latestPostContainer} flex flex-column`}>
                <Image
                    src="/assets/news-thumbnail-one.png"
                    alt="Event Thumbnail"
                    width={424}
                    height={244}
                    className={Styles.postImage}
                />
                <span className={`${Styles.latestPostContainerHeading} text-4 text-3-sm opcty-6`}>
                    Latest news
                </span>
                <p className={`${Styles.latestPostContainerContent} text-1 text-1-sm`}>
                    HEX20 has reached an agreement with iSpace, inc. for a future cubesat deployment into lunar orbit
                </p>
                <svg className={`desktop-only`} xmlns="http://www.w3.org/2000/svg" width="233" height="24" viewBox="0 0 233 24" fill="none" >
                    <path d="M1 1L23 23H232.5" stroke="#2F2F2F"/>
                </svg>
                <svg className={`mobile-only ${Styles.lineSvg}`} width="281" height="15" viewBox="0 0 281 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L15.6043 14H281" stroke="#2F2F2F"/>
                </svg>

            </div>
        </div>
      </div>
    </section>
  );
}