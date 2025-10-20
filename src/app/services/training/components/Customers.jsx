import MarqueeSlider from '@/app/components/MarqueeSlider'
import SectionTitle from '@/app/components/SectionTitle'
import styles from '../css/customer.module.css'
import LineAnimation from '@/app/components/LineAnimation';

export default function Customers() {
     const logo = [
    {
      img: "/assets/customers-01.png",
    },
    {
      img: "/assets/customers-02.png",
    },
    {
      img: "/assets/customers-03.png",
    },
    {
      img: "/assets/customers-04.png",
    },
    {
      img: "/assets/customers-01.png",
    },
    {
      img: "/assets/customers-02.png",
    },
    {
      img: "/assets/customers-03.png",
    },
    {
      img: "/assets/customers-04.png",
    },
  ];

      const textLines = [
    { content: "Our Customers" },
  ];
  return (
    <section className={styles.customerWrapper}>
        <div className='container-main'>
          <div className={`${styles.ourCustomer}`}>
            <SectionTitle heading={"Our Customers"}/>
          </div>
        </div>
        <MarqueeSlider logos={logo} className={"trainingLogos"}/>
    </section>
  )
}
