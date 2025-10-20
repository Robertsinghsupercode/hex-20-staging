import React from 'react'
import Link from 'next/link'
import Styles from './css/ctablock.module.css'
import CtaBtn from './CtaBtn'

const ctaData = [
  {
    title: 'Enquiries',
    description: 'Tell us about your requirements',
    href: '/contact-us',
    svgClass: 'bottomLeft',
    label: 'Contact us',
    svgPaths: [
      { type: 'path', opacity: 0.2, d: 'M11 0V82H91.5', stroke: 'white' },
      { type: 'line', x1: 11.501, y1: 71, x2: 11.501, y2: 93, stroke: '#4A4A4A' },
      { type: 'line', x1: 22, y1: 82.501, x2: 0, y2: 82.501, stroke: '#4A4A4A' },
    ],
  },
  {
    title: 'Training',
    description: 'Accelerate Your capabilities',
    href: '/services/training',
    svgClass: 'topRight',
    label: 'Learn more',
    svgPaths: [
      { type: 'path', opacity: 0.2, d: 'M80.5 93L80.5 11L0 11', stroke: 'white' },
      { type: 'line', x1: 79.999, y1: 22, x2: 79.999, y2: 0, stroke: '#4A4A4A' },
      { type: 'line', x1: 69.5, y1: 10.4985, x2: 91.5, y2: 10.4985, stroke: '#4A4A4A' },
    ],
  },
  {
    title: 'Careers',
    description: 'Share your details with us',
    href: 'mailto:info@hex20.space',
    svgClass: 'bottomRight',
    label: 'Email us',
    svgPaths: [
      { type: 'path', opacity: 0.2, d: 'M0 80.5L82 80.5L82 0', stroke: 'white' },
      { type: 'line', x1: 71, y1: 79.999, x2: 93, y2: 79.999, stroke: '#4A4A4A' },
      { type: 'line', x1: 82.501, y1: 69.5, x2: 82.501, y2: 91.5, stroke: '#4A4A4A' },
    ],
  },
]

export default function CtaBlock() {
  return (
    <section>
      <div className="container-main">
        <div className={Styles.menuBlockContainerWrap}>
          {ctaData.map((item, idx) => (
            <div
              key={idx}
              className={`${Styles.menuBlockContainer} flex flex-column justify-between`}
            >
              <div className={`${Styles.menuBlockContent} flex flex-column gap-30`}>
                <span className="text-4 text-2-sm">{item.title}</span>
                <p className="heading-4 heading-3-sm">{item.description}</p>
              </div>
              <CtaBtn href={item.href} text={item.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
