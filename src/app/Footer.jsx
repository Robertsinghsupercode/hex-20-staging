"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function Footer() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <footer>
            <div className='container-main'>
                <div className='flex justify-between footerWrap'>
                    <div className="footer-container">
                        <div className="footer-column footercolumn column-1">
                            <ul className="text-3 text-2-sm">
                                <li><a href="/about-us">About</a></li>
                                <li><a href="/services/payload-hosting/">Rideshare</a></li>
                                <li><a href="/missions">MISSIONS</a></li>
                                <li><a href="/contact-us/">Contact</a></li>
                                <li><a href="/careers/">Careers</a></li>
                            </ul>
                        </div>

                        <div className="footercolumn column-2">
                            <div className="footer-column">
                                <h4 
                                    className="text-3 footer-toggle flex items-center justify-between" 
                                    onClick={() => setActiveIndex(activeIndex === 0 ? null : 0)}
                                >
                                    Our products
                                    <span className="dropdown-arrow mobile-only">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                            <path d="M1 1.06567L6.05186 4.99994L10.9991 0.934886" stroke="white"/>
                                        </svg>
                                    </span>
                                </h4>
                                <ul className={`text-3 opcty-6 footer-dropdown ${activeIndex === 0 ? 'active' : ''}`}>
                                    <li><a href="/products/satellite-platforms">Satellite platforms</a></li>
                                    <li><a href="/subsystems">Subsystems</a></li>
                                    <li><a href="/products/flatsat">FLatsat</a></li>
                                    <li><a href="/products/star-tracker">star tracker</a></li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4 
                                    className="text-3 footer-toggle flex items-center justify-between" 
                                    onClick={() => setActiveIndex(activeIndex === 1 ? null : 1)}
                                >
                                    Services
                                    <span className="dropdown-arrow mobile-only">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                                            <path d="M1 1.06567L6.05186 4.99994L10.9991 0.934886" stroke="white"/>
                                        </svg>
                                    </span>
                                </h4>
                                <ul className={`text-3 opcty-6 footer-dropdown ${activeIndex === 1 ? 'active' : ''}`}>
                                    <li><a href="/services/mission-as-a-service">Mission as a service</a></li>
                                    <li><a href="/services/payload-hosting">Payload hosting</a></li>
                                    <li><a href="/subsystems">Subsystems</a></li>
                                    <li><a href="/services/training">Training</a></li>
                                    <li><a href="/services/ground-system-as-service">Ground system as a service</a></li>
                                </ul>
                            </div>
                            <div className='desktop-only footerSocialIconsContainerWrap'>
                                <div className='flex flex-column gap-30 items-start'>
                                    <span className='text-3'>Follow us on</span>
                                    <div className='footerSocialIconsContainer flex'>
                                        <a href="https://www.facebook.com/hex20.space/" target='blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <g clipPath="url(#clip0_390_2801)">
                                                    <path d="M23.0583 0H2.18863C1.47414 0 0.894531 0.579605 0.894531 1.29409V22.1638C0.894531 22.8793 1.47414 23.4579 2.18863 23.4579H13.423V14.3738H10.3647V10.8346H13.423V8.22004C13.423 5.19104 15.2742 3.54312 17.9768 3.54312C19.2718 3.54312 20.3851 3.63793 20.7096 3.68093V6.84775H18.832C17.3659 6.84775 17.0805 7.55246 17.0805 8.57875V10.8375H20.5835L20.129 14.3856H17.0805V23.4579H23.0574C23.7738 23.4579 24.3524 22.8793 24.3524 22.1638V1.29409C24.3524 0.579605 23.7738 0 23.0583 0Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_390_2801">
                                                        <rect width="23.4579" height="23.4579" fill="white" transform="translate(0.894531)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/company/hex20/" target='blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clipPath="url(#clip0_390_2795)">
                                                    <path d="M22.2256 -0.0625C23.1822 -0.0625 23.9613 0.694979 23.9613 1.62931V21.7083C23.9613 22.6426 23.1822 23.4014 22.2256 23.4014H2.22866C1.2739 23.4014 0.498047 22.6426 0.498047 21.7083V1.62931C0.498047 0.694979 1.2739 -0.0625 2.22866 -0.0625H22.2256ZM20.4924 19.9312V13.7903C20.4924 10.7745 19.8412 8.45601 16.3176 8.45601C14.6245 8.45601 13.489 9.38439 13.0249 10.2647H12.9773V8.73389H9.64136V19.9312H13.1172V14.393C13.1172 12.9323 13.3936 11.517 15.2044 11.517C16.9903 11.517 17.0126 13.1875 17.0126 14.486V19.9312H20.4924ZM7.45817 8.73389H3.97458V19.9312H7.45817V8.73389ZM5.71729 3.16773C4.5996 3.16773 3.69835 4.07191 3.69835 5.18579C3.69835 6.29995 4.5996 7.20409 5.71729 7.20409C6.83058 7.20409 7.73439 6.29995 7.73439 5.18579C7.73439 4.07191 6.83058 3.16773 5.71729 3.16773Z" fill="white"/>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_390_2795">
                                                        <rect width="23.4579" height="23.4579" fill="white" transform="translate(0.542969)"/>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mobile-only width-100'>
                        <div className='footerSocialIconsContainer flex'>
                            <a href="https://www.facebook.com/hex20.space/" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <g clipPath="url(#clip0_390_2801)">
                                        <path d="M23.0583 0H2.18863C1.47414 0 0.894531 0.579605 0.894531 1.29409V22.1638C0.894531 22.8793 1.47414 23.4579 2.18863 23.4579H13.423V14.3738H10.3647V10.8346H13.423V8.22004C13.423 5.19104 15.2742 3.54312 17.9768 3.54312C19.2718 3.54312 20.3851 3.63793 20.7096 3.68093V6.84775H18.832C17.3659 6.84775 17.0805 7.55246 17.0805 8.57875V10.8375H20.5835L20.129 14.3856H17.0805V23.4579H23.0574C23.7738 23.4579 24.3524 22.8793 24.3524 22.1638V1.29409C24.3524 0.579605 23.7738 0 23.0583 0Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_390_2801">
                                            <rect width="23.4579" height="23.4579" fill="white" transform="translate(0.894531)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/hex20/" target='blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <g clipPath="url(#clip0_390_2795)">
                                        <path d="M22.2256 -0.0625C23.1822 -0.0625 23.9613 0.694979 23.9613 1.62931V21.7083C23.9613 22.6426 23.1822 23.4014 22.2256 23.4014H2.22866C1.2739 23.4014 0.498047 22.6426 0.498047 21.7083V1.62931C0.498047 0.694979 1.2739 -0.0625 2.22866 -0.0625H22.2256ZM20.4924 19.9312V13.7903C20.4924 10.7745 19.8412 8.45601 16.3176 8.45601C14.6245 8.45601 13.489 9.38439 13.0249 10.2647H12.9773V8.73389H9.64136V19.9312H13.1172V14.393C13.1172 12.9323 13.3936 11.517 15.2044 11.517C16.9903 11.517 17.0126 13.1875 17.0126 14.486V19.9312H20.4924ZM7.45817 8.73389H3.97458V19.9312H7.45817V8.73389ZM5.71729 3.16773C4.5996 3.16773 3.69835 4.07191 3.69835 5.18579C3.69835 6.29995 4.5996 7.20409 5.71729 7.20409C6.83058 7.20409 7.73439 6.29995 7.73439 5.18579C7.73439 4.07191 6.83058 3.16773 5.71729 3.16773Z" fill="white"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_390_2795">
                                            <rect width="23.4579" height="23.4579" fill="white" transform="translate(0.542969)"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='footerRowTwo'>
                    <div className='flex flex-column footerEmail gap-10'>
                        <span className='text-3 text-2-sm opcty-5'>Email address</span>
                        <a href="mailto:info@hex20.space" className="heading-3 heading-3-sm">
                            info@hex20.space
                        </a>
                    </div>
                </div>
                <div className='footerRowThree flex justify-between'>
                  <span className='text-5 text-3-sm opcty-5'>©{new Date().getFullYear()} HEX20. All Rights reserved️</span>
                    {/* <span className='text-5 text-3-sm opcty-5'>Terms & Conditions</span> */}
                </div>
            </div>
        </footer>
    );
}