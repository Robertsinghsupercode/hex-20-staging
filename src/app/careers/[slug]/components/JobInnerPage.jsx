"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Styles from '../css/jobinnerpage.module.css'

export default function JobinnerPage() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title') || 'Job Title'
    const location = searchParams.get('location') || 'Unknown Location'
    const department = searchParams.get('department') || 'Unknown Department'

    return (
        <>
            <div className={`${Styles.jdContent}`}>
                <div className={`${Styles.jdContentHeader}`}>
                    <h1 className={`heading-4`}>{decodeURIComponent(title)}</h1>
                    <div className={`${Styles.jdLocation} flex`}>
                        <div>
                            <p className='text-5 opcty-5'>Location</p>
                            <p className='text-1'>{decodeURIComponent(location)}</p>
                        </div>
                        <div>
                            <p className='text-5 opcty-5'>Department</p>
                            <p className='text-1'>{decodeURIComponent(department)}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.jdContentBody}`}>
                    <div className={`${Styles.jd} flex flex-column`}>
                        <p className='text-7'>Job description</p>
                        <p className='text-1'>
                            We’re seeking a Marketing Lead to drive HEX20’s marketing strategy, strengthen global brand presence, and support business growth across international markets.
                        </p>
                    </div>

                    <div className={`${Styles.jdkeyContainer} flex flex-column`}>
                        <div className={`${Styles.keyResponsibilities}`}>
                            <p className='text-7'>Key Responsibilities</p>
                            <ul className='flex flex-column gap-20'>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    5+ years in marketing, preferably in tech, aerospace, or innovation sectors.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Strong communication, content creation, and project management skills.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Experience with CRM, digital marketing tools, and analytics.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${Styles.keyResponsibilities}`}>
                            <p className='text-7'>Qualifications</p>
                            <ul className='flex flex-column gap-20'>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Lead market research and trend analysis to identify growth opportunities.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Develop and execute marketing and branding strategies across digital and traditional channels.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Ensure customer awareness before business engagement.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Manage marketing collaterals, investor reports, and internal/external communications.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Plan and coordinate events and exhibitions, including ROI tracking and outreach.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Message />
        </>
    )
}
