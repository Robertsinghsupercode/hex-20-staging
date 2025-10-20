import React from "react";
import Image from "next/image";
import Styles from '../css/minds.module.css';

export default function Mindsbehind() {
    return(
        <section className={`${Styles.mindsSec}`}>
            <div className="container-main">
                <div className="flex justify-center">
                    <div className={`${Styles.mindsHeader} flex flex-column gap-30 text-align-center`}>
                        <h2 className="heading-1 heading-1-sm">
                            The Minds Behind HEX20
                        </h2>
                        <p className="text-1 text-1-sm">
                            HEX20 is led by explorers at heart — engineers, innovators, and dreamers who
                            believe space should be within everyone’s reach. Together, they guide our journey from 
                            bold ideas to orbit-ready missions.
                        </p>
                    </div>
                </div>
                <div className={`${Styles.mindsContainer}`}>
                    <div className={`${Styles.mindsBody}`}>
                        <div className={`${Styles.peopleBox}`}>
                            <a href="https://www.linkedin.com/in/ashwinchandran/" target="blank" className={`${Styles.linkedIn}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23" fill="none" className={Styles.linkedInIcon}>
                                    <g clip-path="url(#clip0_920_9464)">
                                        <path d="M21.2604 -0.0605469C22.1984 -0.0605469 22.9623 0.682147 22.9623 1.59824V21.2853C22.9623 22.2014 22.1984 22.9453 21.2604 22.9453H1.65386C0.717738 22.9453 -0.0429688 22.2014 -0.0429688 21.2853V1.59824C-0.0429688 0.682147 0.717738 -0.0605469 1.65386 -0.0605469H21.2604ZM19.5611 19.5429V13.5218C19.5611 10.565 18.9226 8.29169 15.4678 8.29169C13.8077 8.29169 12.6944 9.20194 12.2394 10.065H12.1927V8.56414H8.92186V19.5429H12.3299V14.1128C12.3299 12.6806 12.6008 11.2929 14.3763 11.2929C16.1274 11.2929 16.1493 12.9308 16.1493 14.2039V19.5429H19.5611ZM6.78129 8.56414H3.3657V19.5429H6.78129V8.56414ZM5.0744 3.10662C3.97853 3.10662 3.09487 3.99316 3.09487 5.0853C3.09487 6.17771 3.97853 7.0642 5.0744 7.0642C6.16595 7.0642 7.05213 6.17771 7.05213 5.0853C7.05213 3.99316 6.16595 3.10662 5.0744 3.10662Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_920_9464">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <Image
                                src="/assets/ashwin-chandran.png"
                                alt="Team"
                                width={390}
                                height={450}
                                style={{ objectFit: 'contain' }}
                                className={`${Styles.people}`}
                            />
                            <div className={`${Styles.peopleContent} flex justify-center`}>
                                <div className={`${Styles.name} flex flex-column gap-10`}>
                                    <p className="heading-5 text-4-sm">Ashwin Chandran</p>
                                    <p className="text-5 text-3-sm opcty-6">Co-Founder & Chief of R&D</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.peopleBox}`}>
                            <a href="https://www.linkedin.com/in/lloydjacoblopez/" target="blank" className={`${Styles.linkedIn}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23" fill="none" className={Styles.linkedInIcon}>
                                    <g clip-path="url(#clip0_920_9464)">
                                        <path d="M21.2604 -0.0605469C22.1984 -0.0605469 22.9623 0.682147 22.9623 1.59824V21.2853C22.9623 22.2014 22.1984 22.9453 21.2604 22.9453H1.65386C0.717738 22.9453 -0.0429688 22.2014 -0.0429688 21.2853V1.59824C-0.0429688 0.682147 0.717738 -0.0605469 1.65386 -0.0605469H21.2604ZM19.5611 19.5429V13.5218C19.5611 10.565 18.9226 8.29169 15.4678 8.29169C13.8077 8.29169 12.6944 9.20194 12.2394 10.065H12.1927V8.56414H8.92186V19.5429H12.3299V14.1128C12.3299 12.6806 12.6008 11.2929 14.3763 11.2929C16.1274 11.2929 16.1493 12.9308 16.1493 14.2039V19.5429H19.5611ZM6.78129 8.56414H3.3657V19.5429H6.78129V8.56414ZM5.0744 3.10662C3.97853 3.10662 3.09487 3.99316 3.09487 5.0853C3.09487 6.17771 3.97853 7.0642 5.0744 7.0642C6.16595 7.0642 7.05213 6.17771 7.05213 5.0853C7.05213 3.99316 6.16595 3.10662 5.0744 3.10662Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_920_9464">
                                        <rect width="32" height="32" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <Image
                                src="/assets/lloyd-jacob-lopez.png"
                                alt="Team"
                                width={390}
                                height={450}
                                style={{ objectFit: 'contain' }}
                                className={`${Styles.people}`}
                            />
                            <div className={`${Styles.peopleContent} flex justify-center`}>
                                <div className={`${Styles.name} flex flex-column gap-10`}>
                                    <p className="heading-5 text-4-sm">Lloyd Jacob Lopez</p>
                                    <p className="text-5 opcty-6">Co-Founder & CCO</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.peopleBox}`}>
                            <a href="https://www.linkedin.com/in/aravindmb/" target="blank" className={`${Styles.linkedIn}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23" fill="none" className={Styles.linkedInIcon}>
                                        <g clip-path="url(#clip0_920_9464)">
                                            <path d="M21.2604 -0.0605469C22.1984 -0.0605469 22.9623 0.682147 22.9623 1.59824V21.2853C22.9623 22.2014 22.1984 22.9453 21.2604 22.9453H1.65386C0.717738 22.9453 -0.0429688 22.2014 -0.0429688 21.2853V1.59824C-0.0429688 0.682147 0.717738 -0.0605469 1.65386 -0.0605469H21.2604ZM19.5611 19.5429V13.5218C19.5611 10.565 18.9226 8.29169 15.4678 8.29169C13.8077 8.29169 12.6944 9.20194 12.2394 10.065H12.1927V8.56414H8.92186V19.5429H12.3299V14.1128C12.3299 12.6806 12.6008 11.2929 14.3763 11.2929C16.1274 11.2929 16.1493 12.9308 16.1493 14.2039V19.5429H19.5611ZM6.78129 8.56414H3.3657V19.5429H6.78129V8.56414ZM5.0744 3.10662C3.97853 3.10662 3.09487 3.99316 3.09487 5.0853C3.09487 6.17771 3.97853 7.0642 5.0744 7.0642C6.16595 7.0642 7.05213 6.17771 7.05213 5.0853C7.05213 3.99316 6.16595 3.10662 5.0744 3.10662Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_920_9464">
                                            <rect width="32" height="32" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            <Image
                                src="/assets/aravind-mb.png"
                                alt="Team"
                                width={390}
                                height={450}
                                style={{ objectFit: 'contain' }}
                                className={`${Styles.people}`}
                            />
                            <div className={`${Styles.peopleContent} flex justify-center`}>
                                <div className={`${Styles.name} flex flex-column gap-10`}>
                                    <p className="heading-5 text-4-sm">Aravind M B</p>
                                    <p className="text-5 opcty-6">Co-Founder & COO</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.peopleBox}`}>
                            <a href="https://www.linkedin.com/in/anurag-reghu-58445227/?originalSubdomain=in" target="blank" className={`${Styles.linkedIn}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23" fill="none" className={Styles.linkedInIcon}>
                                        <g clip-path="url(#clip0_920_9464)">
                                            <path d="M21.2604 -0.0605469C22.1984 -0.0605469 22.9623 0.682147 22.9623 1.59824V21.2853C22.9623 22.2014 22.1984 22.9453 21.2604 22.9453H1.65386C0.717738 22.9453 -0.0429688 22.2014 -0.0429688 21.2853V1.59824C-0.0429688 0.682147 0.717738 -0.0605469 1.65386 -0.0605469H21.2604ZM19.5611 19.5429V13.5218C19.5611 10.565 18.9226 8.29169 15.4678 8.29169C13.8077 8.29169 12.6944 9.20194 12.2394 10.065H12.1927V8.56414H8.92186V19.5429H12.3299V14.1128C12.3299 12.6806 12.6008 11.2929 14.3763 11.2929C16.1274 11.2929 16.1493 12.9308 16.1493 14.2039V19.5429H19.5611ZM6.78129 8.56414H3.3657V19.5429H6.78129V8.56414ZM5.0744 3.10662C3.97853 3.10662 3.09487 3.99316 3.09487 5.0853C3.09487 6.17771 3.97853 7.0642 5.0744 7.0642C6.16595 7.0642 7.05213 6.17771 7.05213 5.0853C7.05213 3.99316 6.16595 3.10662 5.0744 3.10662Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_920_9464">
                                            <rect width="32" height="32" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            <Image
                                src="/assets/anurag_reghu.png"
                                alt="Team"
                                width={390}
                                height={450}
                                style={{ objectFit: 'contain' }}
                                className={`${Styles.people}`}
                            />
                            <div className={`${Styles.peopleContent} flex justify-center`}>
                                <div className={`${Styles.name} flex flex-column gap-10`}>
                                    <p className="heading-5 text-4-sm">ANURAG REGHU</p>
                                    <p className="text-5 opcty-6">Co-Founder & CTO</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${Styles.peopleBox}`}>
                            <Image
                                src="/assets/amal-chandran.png"
                                alt="Team"
                                width={390}
                                height={450}
                                style={{ objectFit: 'contain' }}
                                className={`${Styles.people}`}
                            />
                            <div className={`${Styles.peopleContent} flex justify-center`}>
                                <div className={`${Styles.name} flex flex-column gap-10`}>
                                    <p className="heading-5 text-4-sm">Amal Chandran</p>
                                    <p className="text-5 opcty-6">Co-Founder & CEO</p>
                                </div>
                                <a href="https://www.linkedin.com/in/amal-chandran-7495b35/" target="blank" className={`${Styles.linkedIn}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 23 23" fill="none" className={Styles.linkedInIcon}>
                                        <g clip-path="url(#clip0_920_9464)">
                                            <path d="M21.2604 -0.0605469C22.1984 -0.0605469 22.9623 0.682147 22.9623 1.59824V21.2853C22.9623 22.2014 22.1984 22.9453 21.2604 22.9453H1.65386C0.717738 22.9453 -0.0429688 22.2014 -0.0429688 21.2853V1.59824C-0.0429688 0.682147 0.717738 -0.0605469 1.65386 -0.0605469H21.2604ZM19.5611 19.5429V13.5218C19.5611 10.565 18.9226 8.29169 15.4678 8.29169C13.8077 8.29169 12.6944 9.20194 12.2394 10.065H12.1927V8.56414H8.92186V19.5429H12.3299V14.1128C12.3299 12.6806 12.6008 11.2929 14.3763 11.2929C16.1274 11.2929 16.1493 12.9308 16.1493 14.2039V19.5429H19.5611ZM6.78129 8.56414H3.3657V19.5429H6.78129V8.56414ZM5.0744 3.10662C3.97853 3.10662 3.09487 3.99316 3.09487 5.0853C3.09487 6.17771 3.97853 7.0642 5.0744 7.0642C6.16595 7.0642 7.05213 6.17771 7.05213 5.0853C7.05213 3.99316 6.16595 3.10662 5.0744 3.10662Z" fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_920_9464">
                                            <rect width="32" height="32" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}