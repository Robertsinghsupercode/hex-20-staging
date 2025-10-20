import React from 'react'
import styles from './css/sectiontitle.module.css';

export default function SectionTitle({heading, className}) {
  return (
          <div className={`${styles[className]} flex gap-4 width-fit-content text-2-sm`}>
            <svg width="246" height="27" viewBox="0 0 246 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 26L22.8575 4H231" stroke="#2F2F2F"/>
              <rect x="237" width="9" height="9" rx="4.5" fill="white"/>
            </svg>
            <span className='text-4'>{heading}</span>
          </div>
  )
}
