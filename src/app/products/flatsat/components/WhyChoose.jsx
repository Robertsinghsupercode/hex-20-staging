import React from 'react';
import Styles from '../../careers/css/advantages.module.css';
import styles from '../css/whychoose.module.css';

const AdvantageBox = ({ icon, text, width }) => (
  <div className={`${Styles.advantagesBox} ${styles.advantagesBox} flex flex-column`}>
    {icon}
    <div className={styles.content} style={{ width }}>
      <p className='heading-7'>{text}</p>
    </div>
    <svg
      className={Styles.advantagesBoxSvg}
      xmlns="http://www.w3.org/2000/svg"
      width="91"
      height="93"
      viewBox="0 0 91 93"
      fill="none"
    >
      <path
        opacity="0.2"
        d="M80.0625 93L80.0625 11L0.00246613 11"
        stroke="black"
      />
      <line x1="79.5586" y1="22" x2="79.5586" y2="0" stroke="#4A4A4A" />
      <line x1="69.1211" y1="10.499" x2="91.0009" y2="10.499" stroke="#4A4A4A" />
    </svg>
  </div>
);

export default function Advantages() {
  const advantages = [
    {
      text: 'Lorem ipsum dolor sit amet',
      width: '70%',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="57"
          viewBox="0 0 51 57"
          fill="none"
        >
          <path
            d="M45.7188 39.5L25.001 51V27.5L45.7188 17V39.5Z"
            fill="white"
            stroke="#595959"
          />
          <path
            d="M50.5 14.6611V42.8125L25.5 56.4297L0.5 42.8125V14.6611L25.5 0.573242L50.5 14.6611Z"
            stroke="#595959"
          />
        </svg>
      ),
    },
    {
      text: 'dolor sit amet',
      width: '180px',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
        >
          <path
            d="M16.6133 33.3066C16.6133 35.6852 14.6852 37.6133 12.3066 37.6133C9.92809 37.6133 7.99996 35.6852 7.99996 33.3066C7.99996 30.9281 9.92809 29 12.3066 29C14.6852 29 16.6133 30.9281 16.6133 33.3066Z"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M18 45V42.7577L15.1532 39.9937H8.84684L6 42.7577V45.4482"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M23.5 29.0986V42.124L12 48.4297L0.5 42.124V29.0986L12 22.5742L23.5 29.0986Z"
            stroke="#595959"
          />
          <path
            d="M29.6133 11.3066C29.6133 13.6852 27.6852 15.6133 25.3066 15.6133C22.9281 15.6133 21 13.6852 21 11.3066C21 8.92809 22.9281 6.99996 25.3066 6.99996C27.6852 6.99996 29.6133 8.92809 29.6133 11.3066Z"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M31 23V20.7577L28.1532 17.9937H21.8468L19 20.7577V23.4482"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M36.5 7.09863V20.124L25 26.4297L13.5 20.124V7.09863L25 0.574219L36.5 7.09863Z"
            stroke="#595959"
          />
          <path
            d="M42.6133 33.3066C42.6133 35.6852 40.6852 37.6133 38.3066 37.6133C35.9281 37.6133 34 35.6852 34 33.3066C34 30.9281 35.9281 29 38.3066 29C40.6852 29 42.6133 30.9281 42.6133 33.3066Z"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M44 45V42.7577L41.1532 39.9937H34.8468L32 42.7577V45.4482"
            stroke="#595959"
            strokeWidth="1.23398"
            strokeMiterlimit="10"
          />
          <path
            d="M49.5 29.0986V42.124L38 48.4297L26.5 42.124V29.0986L38 22.5742L49.5 29.0986Z"
            stroke="#595959"
          />
        </svg>
      ),
    },
    {
      text: 'Sed ut perspiciatis',
      width: '200px',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="51"
          height="57"
          viewBox="0 0 51 57"
          fill="none"
        >
          <path
            d="M40.5 20.6182V36.6543L25.5 44.4365L10.5 36.6543V20.6182L25.5 12.5664L40.5 20.6182Z"
            stroke="#595959"
          />
          <path
            d="M31.5 25.8145V32.2969L26 35.4248L20.5 32.2969V25.8145L26 22.5791L31.5 25.8145Z"
            stroke="#595959"
          />
          <path
            d="M45.5 17.6387V39.7344L25.5 50.4336L5.5 39.7344V17.6387L25.5 6.57129L45.5 17.6387Z"
            stroke="#595959"
          />
          <path
            d="M50.5 14.6611V42.8125L25.5 56.4297L0.5 42.8125V14.6611L25.5 0.573242L50.5 14.6611Z"
            stroke="#595959"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={Styles.advantagesSec}>
      <div className="container-main">
        <div
          className={`flex items-center justify-center text-align-center ${styles.borderTop}`}
        >
          <h3 className={`heading-6 color-4 width-50 ${styles.heading}`}>
            Why choose Hex20 Flatsat
          </h3>
        </div>
        <div className="flex gap-20">
          {advantages.map((item, index) => (
            <AdvantageBox
              key={index}
              icon={item.icon}
              text={item.text}
              width={item.width}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
