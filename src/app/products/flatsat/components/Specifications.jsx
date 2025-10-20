"use client";
import React, { useState } from "react";
import Image from "next/image";
import Styles from "../css/specifications.module.css";

export default function Specifications() {
  const [activeTab, setActiveTab] = useState(0);

  const tabData = [
    {
      thumbnail: "/assets/tab-img.png",
      bigImage: "/assets/flatsatimg.png",
      alt: "Tab Image 1",
    },
    {
      thumbnail: "/assets/flatsat-tab-img-2.png",
      bigImage: "/assets/tab-img-2.png",
      alt: "Tab Image 2",
    },
  ];

  return (
    <section className={`bg-color-3 ${Styles.container}`}>
      <div className="container-main">

        <div className={`bg-color-3 ${Styles.specContent}`}>
          <div className={`${Styles.specHeading}`}>
            <h3 className={`text-7 text-1-sm color-4`}>
              Generic design suitable for multiple projects. Not hard-wired for a
              single mission.
            </h3>
          </div>

          <div className={Styles.tab}>
            <div className="flex items-end">
              <div className="flex flex-column gap-20">
                <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4 width-70">
                          6 nos PC-104 slots with full one-to-one I/O pin mapping. (CDH, EPS, COMM’s, Interface Card & 2 spares) 
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4 width-74">
                          2 nos PC-104 connectors for bus probing, voltage measurement & debugging. 
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4 width-70">
                          2 nos dummy PC-104 outline for mounting components like battery stack, ADCS. 
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4">
                          1 * Deployment Toggle Switch, 1 * RBF Switch, 1 * Spare Switch. 
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4">
                        2 * Solar panel deployment LED indicator & load, 1 * Power LED indicator.  
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4">
                          2 * SMA-SMA Pass-through for VHF/UHF antenna with 30dB Attenuator. 
                      </p>
                  </div>
                  <div className={`flex gap-20 ${Styles.borderBottom}`}>
                      <svg className={Styles.bulletpoint} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                          <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                          <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                          <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                      </svg>
                      <p className="text-4 color-4">
                          Connector for Solar array simulator & external battery charging. 
                      </p>
                  </div>          
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: "60px" }}>
                <Image
                  src={tabData[activeTab].bigImage}
                  alt={tabData[activeTab].alt}
                  width={506}
                  height={415}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </div>

              <div className={Styles.thumbnailWrapper}>
                {tabData.map((tab, index) => (
                  <div
                    key={index}
                    className={`${Styles.thumbnailItem} ${
                      activeTab === index ? Styles.thumbnailActive : ""
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <Image
                      src={tab.thumbnail}
                      alt={`${tab.alt} Thumbnail`}
                      width={111}
                      height={78}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
