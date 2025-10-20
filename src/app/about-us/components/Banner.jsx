import React from "react";
import Image from "next/image";
import Styles from '../css/banner.module.css';
import ReadMore from "@/app/components/ReadMore";

export default function Animation() {
    return (
        <section className={`${Styles.aboutBanner}`}>
            {/* banner content  */}
            <div className="container-main">
                <div className="flex justify-center">
                    <div className={`${Styles.aboutBannerContent} flex flex-column gap-4 items-center text-align-center`}>
                        <h1 className="heading-1 heading-2-sm">THE HEX20 Story</h1>
                        <p className="text-1 text-1-sm">
                            The story of HEX20 didn’t begin in boardrooms or labs — it began under open skies filled with stars. 
                            Our teammates grew up in towns where rockets painted trails across the horizon and satellites 
                            glimmered like lanterns in the night. For us, space was never distant — it was alive, just above our 
                            heads, whispering possibilities.
                        </p>
                    </div>
                </div>
            </div>
            {/* banner image  */}
            <div className={`${Styles.aboutBannerImgContainer}`}>
                <img
                src="/assets/full-team.webp"
                alt="Team"
                width={1440}
                height={540}
                style={{ objectFit: 'contain' }}
                className={`${Styles.aboutTeamImg}`}
                />
            </div>
            <div className={`${Styles.left} flex justify-center container-main`}>
                <div className={`${Styles.aboutBannerContentTwo} flex flex-column items-center`}>
                    <p className="text-1 text-1-sm">
                        Today, that dream drives everything we do. From CubeSat platforms and subsystems to full mission services, we design technologies that help governments, researchers, and innovators turn bold ideas into orbit-ready realities. Every mission we launch carries the same wonder that first made us look up at the night sky — a reminder that imagination can transcend boundaries and shape the future. 
                    </p>
                    
                        {/* Read More toggle after first paragraph */}
                        <ReadMore>
                            <p className="text-1 text-1-sm">
                                What started as childhood wonder soon became a calling: not to simply watch space, but to be part of it. That early fascination grew into study, research, and eventually — a mission. HEX20 was born from that shared dream: to take the magic of space and make it accessible, practical, and impactful. 
                            </p>
                            <p className="text-1 text-1-sm">
                                Because at HEX20, we are more than engineers and scientists. We are dreamers who once looked up in awe — and now build the tools to take others there.
                            </p>
                        </ReadMore>

                </div>
            </div>
            {/* journey  */}
            <div className={`${Styles.journeyContainer}`}>
                <div className="container-main">
                    <div className={`${Styles.theJourneyContainer}`}>
                        <div className={`${Styles.gradient}`}></div>
                        <div className="flex justify-end">
                            <div className={`${Styles.theJourney} flex flex-column gap-40`}>
                                <div className="flex flex-column gap-4">
                                                                        <svg className="mobile-only" xmlns="http://www.w3.org/2000/svg" width="119" height="100" viewBox="0 0 119 100" fill="none">
                                        <g opacity="0.5">
                                            <path d="M42.9622 73.395C45.3352 71.4936 47.8621 70.2852 50.0108 69.8508C52.1887 69.4106 53.8236 69.7866 54.6424 70.8086C55.461 71.8306 55.4711 73.5075 54.5668 75.5368C53.6744 77.5391 51.9442 79.7418 49.5711 81.6432C47.198 83.5446 44.6712 84.753 42.5225 85.1874C40.3449 85.6275 38.7105 85.2521 37.8915 84.2304C37.0726 83.2084 37.0621 81.5309 37.9666 79.5013C38.8589 77.499 40.5891 75.2964 42.9622 73.395Z" stroke="white" stroke-width="1.03006"/>
                                            <path d="M42.8221 52.5316C49.0953 47.5052 55.8173 44.2959 61.5953 43.1533C67.401 42.0051 72.1022 42.9632 74.5614 46.0324C77.0206 49.1016 76.9307 53.8985 74.5444 59.3143C72.1696 64.7042 67.572 70.5648 61.2988 75.5913C55.0257 80.6175 48.3042 83.8264 42.5263 84.9691C36.7205 86.1172 32.0186 85.1597 29.5594 82.0905C27.1003 79.0213 27.1909 74.2238 29.5772 68.808C31.952 63.4182 36.5491 57.558 42.8221 52.5316Z" stroke="white" stroke-width="1.03006"/>
                                            <path d="M51.0132 33.8074C62.4882 24.613 74.3428 18.1565 84.217 15.1376C89.1556 13.6278 93.5728 12.9856 97.1868 13.2736C100.799 13.5615 103.56 14.7725 105.278 16.9167C106.996 19.061 107.575 22.0184 107.069 25.6067C106.562 29.1965 104.972 33.3675 102.422 37.8581C97.3229 46.8367 88.4372 56.9984 76.9623 66.1928C65.4873 75.3871 53.6327 81.8437 43.7585 84.8625C38.8201 86.3723 34.4034 87.0139 30.7894 86.726C27.177 86.4381 24.4164 85.2283 22.6983 83.0842C20.9801 80.9399 20.4009 77.9815 20.9075 74.3929C21.4144 70.8032 23.0035 66.6325 25.5536 62.1421C30.6525 53.1635 39.5383 43.0017 51.0132 33.8074Z" stroke="white" stroke-width="1.03006"/>
                                        </g>
                                        </svg>
                                    <p className="heading-2 heading-3-sm">The Journey </p>
                                    <p className="text-1 text-1-sm opcty-8">
                                        Every frontier begins with a question: what if? At HEX20, that question drives us to remove the 
                                        barriers that once kept space out of reach. Our mission is to design accessible, scalable, and 
                                        reliable satellite platforms that cut through time, cost, and complexity — turning questions into 
                                        missions, and missions into milestones among the stars.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <div className={`${Styles.beyondHorizon} flex flex-column gap-40`}>

                                <div className="flex flex-column gap-4">
<svg className="mobile-only" xmlns="http://www.w3.org/2000/svg" width="77" height="88" viewBox="0 0 77 88" fill="none">
  <path d="M37.4619 86.3945L0.235352 65.6758L0.235352 22.8047L37.4619 86.3945ZM75.9648 65.6758L38.7373 86.3945L75.9648 22.8047V65.6758ZM37.4727 85.4814L0.322266 22.0225L18.8975 11.3271L37.4727 85.4814ZM75.877 22.0225L38.7266 85.4814L57.3018 11.3281L75.877 22.0225ZM37.8652 85.1123L19.3213 11.083L37.8652 0.40625L37.8652 85.1123ZM56.8779 11.084L38.335 85.1123L38.335 0.40625L56.8779 11.084Z" stroke="white" stroke-width="0.47037"/>
</svg>
                                    <p className="heading-2 heading-3-sm">Beyond the Horizon</p>
                                    <p className="text-1 text-1-sm opcty-8">
                                        We believe space should never be the privilege of a few. Beyond the horizon lies our vision 
                                        — a future where the cosmos is a shared horizon, open to dreamers, thinkers, and 
                                        explorers everywhere. A place where discoveries made above our skies bring progress, 
                                        purpose, and possibility back to life on Earth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <svg className={`${Styles.svgLeft}`} width="854" height="700" viewBox="0 0 854 777" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M191.443 541.982C210.207 526.947 230.319 517.273 247.649 513.77C265.007 510.261 279.423 512.965 287.018 522.445C294.614 531.924 294.11 546.582 286.901 562.758C279.704 578.907 265.878 596.426 247.113 611.461C228.349 626.496 208.237 636.17 190.908 639.673C173.55 643.181 159.134 640.478 151.538 630.999C143.942 621.519 144.447 606.861 151.656 590.685C158.853 574.536 172.678 557.017 191.443 541.982Z" stroke="url(#paint0_linear_1963_1329)"/>
                                    <path d="M260.348 405.033C309.39 365.738 362.069 340.534 407.575 331.535C453.109 322.531 491.315 329.769 511.631 355.124C531.948 380.48 530.681 419.345 511.967 461.82C493.263 504.27 457.181 550.186 408.139 589.482C359.096 628.777 306.418 653.98 260.912 662.979C215.379 671.983 177.173 664.746 156.856 639.39C136.54 614.034 137.805 575.169 156.52 532.694C175.224 490.244 211.306 444.328 260.348 405.033Z" stroke="url(#paint1_linear_1963_1329)"/>
                                    <path d="M323.932 259.692C413.26 188.117 505.662 137.745 582.828 114.153C621.412 102.357 656.162 97.2642 684.802 99.5466C713.441 101.829 735.92 111.479 750.056 129.121C764.192 146.764 768.71 170.807 764.694 199.254C760.677 227.703 748.131 260.507 728.207 295.591C688.359 365.758 619.052 444.955 529.724 516.53C440.396 588.104 347.995 638.477 270.829 662.068C232.244 673.865 197.493 678.958 168.854 676.675C140.215 674.393 117.735 664.742 103.599 647.1C89.4632 629.457 84.9458 605.414 88.962 576.967C92.9785 548.519 105.525 515.715 125.45 480.63C165.298 410.463 234.603 331.267 323.932 259.692Z" stroke="url(#paint2_linear_1963_1329)"/>
                                    <defs>
                                    <linearGradient id="paint0_linear_1963_1329" x1="191.13" y1="541.592" x2="247.426" y2="611.851" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5A5A5A"/>
                                    <stop offset="1" stop-color="#5A5A5A"/>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_1963_1329" x1="260.035" y1="404.643" x2="408.452" y2="589.872" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5A5A5A"/>
                                    <stop offset="1" stop-color="#5A5A5A"/>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_1963_1329" x1="323.619" y1="259.302" x2="530.037" y2="516.92" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#5A5A5A"/>
                                    <stop offset="1" stop-color="#5A5A5A"/>
                                    </linearGradient>
                                    </defs>
                                </svg>

                                <svg className={`${Styles.svgRight}`} width="427" height="489" viewBox="0 0 427 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_59_774)">
                                        <path d="M1.5 124L1 369L213.5 487.5M1.5 124L107.5 62.5M1.5 124L213.5 487.5M213.5 487.5V1M213.5 487.5L426.5 369V124M213.5 487.5L426.5 124M213.5 487.5L320 62.5M213.5 487.5L107.5 62.5M107.5 62.5L213.5 1M213.5 1L320 62.5M320 62.5L426.5 124" stroke="#595959"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_59_774">
                                        <rect width="427" height="489" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                    </div>
                </div>
            </div>

        </section>
    )}