"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Styles from '../css/globalnetwork.module.css';

export default function Globalnetwork() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [isMobile, setIsMobile] = useState(false);
    const sliderRef = useRef(null);

    const tabs = [
        { id: "tab1", label: "Our Offices", img: "/assets/global-network.png" },
        { id: "tab2", label: "Our Customers", img: "/assets/global-customers.png" },
    ];

    // Detect mobile screen
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className={`${Styles.globalnetSec}`}>
            {/* preload images */}
            {tabs.map((tab, i) => (
                <Image key={i} src={tab.img} alt={`preload-${i}`} width={1440} height={740} priority style={{ display: "none" }} />
            ))}

            <div className="container-main">
                <div className="flex justify-center">
                    <div className={`${Styles.globalnetHead} flex flex-column gap-30`}>
                        <h3 className="heading-1 heading-1-sm">
                            Our Global <span className="highlightDark">PRESENCE</span>
                        </h3>
                        <p className="text-1 text-1-sm opcty-8">
                            HEX20’s innovations are fueling missions worldwide — uniting science, technology, and
                            discovery in a shared human journey beyond borders.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${Styles.globalnetBody}`}>
                <div className={`${Styles.mapGradinet}`}></div>

                <>
                    <div className={`${Styles.tabHead} flex justify-center items-center gap-50 gap-10-sm`}>
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`flex gap-20 ${activeTab === tab.id ? Styles.activeTab : ""}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <g className={`${Styles.gopcty}`} style={{ opacity: activeTab === tab.id ? 1 : 0.5 }}>
                                        <circle opacity="0.4" cx="11.5" cy="11.5" r="11.5" fill="white"/>
                                        <circle cx="11.5" cy="11.5" r="6.5" fill="white"/>
                                    </g>
                                </svg>
                                <span className="text-3 text-2-sm">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                    <div className={`${Styles.tabContent} mt-30`} style={{ overflowX: 'auto' }}>
                        <div style={{ display: 'inline-block' }}>
                            <Image
                                src={tabs.find(tab => tab.id === activeTab).img}
                                alt={tabs.find(tab => tab.id === activeTab).label}
                                width={1440}
                                height={740}
                                style={{ objectFit: 'contain', height: 'auto', maxWidth: 'none' }}
                            />
                        </div>
                    </div>
                </>
            </div>
        </section>
    );
}