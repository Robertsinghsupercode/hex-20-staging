import React from 'react';
import styles from '../css/herobanner.module.css';


const LOCATIONS = [
  {
    country: "INDIA",
    address: "Nila, Technopark Phase-1 , Thiruvananthapuram, Kerala 695581, India",
    imageUrl: "/assets/india.png", 
  },
  {
    country: "USA",
    address: "1460 Overlook Drive, Lafayette, Colorado 80026, USA",
    imageUrl: "/assets/usa.png",
  },
    {
    country: "UAE",
    address: "Mazdar Free Zone, Abu Dhabi, United Arab Emirates",
    imageUrl: "/assets/uae.png",
  },
  {
    country: "AUSTRALIA",
    address: "ICC, 9 Light Square, Adelaide, SA 5000, Australia",
    imageUrl: "/assets/australia.png",
  },

  {
    country: "TAIWAN",
    address: "Hsinming Startup Hub, 4F, No 60, Mingde Rd, Zhongli District, Taoyuan, 320006, Taiwan",
    imageUrl: "/assets/taiwan.png",
  },


];


export default function ContactSection() {
  return (
    <div className={styles?.container}>
        <h1 className={`${styles?.banner} heading-6 heading-1-sm`}>
          WE WOULD LOVE TO HEAR FROM YOU!
        </h1>
        <div className={styles?.emailRow}>
          {/* <div>
            <a href=" " className={`${styles?.emailLink} heading-5 text-4-sm`}>HELLO@HEX20.COM</a>
          </div> */}
          <div>
            <div className={styles?.emailGroup}>
              <div className={`${styles?.emailLabel} text-5 text-3-sm`}>EMAIL</div>
              <a href="mailto:info@hex20.space" className={`${styles?.emailLink} heading-5 text-4-sm`}>info@hex20.space</a>
            </div>
          </div>
        </div>
        <div className={styles?.locationsGrid}>
          <div className={styles?.topRow}>
            {LOCATIONS.slice(0, 2).map((loc) => (
              <div key={loc.country} className={styles?.officeCard}>
                <div className={`${styles?.addressWrap} flex flex-column items-center`}>
                  <p className={`${styles?.country} heading-3 text-4-sm`}>
                    {loc.country}
                  </p>
                  <p className={`${styles?.address} text-1 text-1-sm`}>
                    {loc.address}
                  </p>
                </div>

                <img className={styles?.officeImg} src={loc.imageUrl} alt={loc.country} />
              </div>
            ))}
          </div>
          <div className={styles?.bottomRow}>
            {LOCATIONS.slice(2).map((loc) => (
              <div key={loc.country} className={styles?.officeCard}>
                <div className={`${styles?.country} heading-3 text-4-sm`}>{loc.country}</div>
                <p className={`${styles?.address} text-1 text-1-sm`}>{loc.address}</p>
                <img className={styles?.officeImg} src={loc.imageUrl} alt={loc.country} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}









