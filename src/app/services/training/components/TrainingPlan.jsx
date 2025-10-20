"use client";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import styles from '../css/training.module.css'
import Image from 'next/image';
import Link from 'next/link';

const trainingData = [
  {
    id: 1,
    image: '/assets/mission-planning.svg',
    heading: 'Mission planning',
    description: 'Mission objectives from SF concept development define system requirement capture subsystem requirements and constraints electrical architecture definition.',
    link: '/training/phase1'
  },
  {
    id: 2,
    image: '/assets/cubesat-system-and-subsytem.svg',
    heading: 'Design of cubesat system and subsytem',
    description: 'Analysis of ICDs from stakeholders design of S/C subsystems S/C firmware development design analysis and simulation mass, power, link, data budgeting.',
    link: '/'
  },
  {
    id: 3,
    image: '/assets/engineering-model-development.svg',
    heading: 'Engineering model development',
    description: 'Design of EM structure procurement of EM electronic hardware assembly of subsystems including solar panels EM model from stakeholders.',
    link: '/'
  },
  {
    id: 4,
    image: '/assets/engineering-model-integration.svg',
    heading: 'Engineering model integration',
    description: 'Wiring harness assembly of all subsystems integration of engineering model of S/C integration of payload to S/C bench testing.',
    link: '/'
  },
  {
    id: 5,
    image: '/assets/post-launch-operations.svg',
    heading: 'Post launch operations',
    description: 'Telemetry analysis & corrections routine operations and maintenance data analysis & reporting.',
    link: '/'
  },
  {
    id: 6,
    image: '/assets/launch-vehicle-ntegration-launch.svg',
    heading: 'Launch vehicle integration & launch',
    description: 'Carry out handover procedure logistics and transport planning electrical integration and testing integration with deployer pre-launch testing and validation initial acquisition and deployments operational readiness verification.',
    link: '/'
  },
  {
    id: 7,
    image: '/assets/flight-model-testing.svg',
    heading: 'Flight model testing',
    description: 'Bench testing comprehensive performance testing end to end (data link) testing conformal coating & staking vibration testing thermal vacuum testing.',
    link: '/'
  },
  {
    id: 8,
    image: '/assets/flight-model-development.svg',
    heading: 'Flight model development',
    description: 'Integration plan, integration tests environment test specifications wiring harness manufacture the FM structure assembly of subsystems fit check and modifications wiring harness.',
    link: '/'
  },
];

export default function TrainingPlan() {
  return (
    <section className={styles.trainingPlanWrapper}>
      <div className='container-main'>
        <div className={`flex flex-column gap-10 items-center text-align-center ${styles.content}`}>
              <h2 className='heading-1 text-align-center heading-1-sm'>Training plan</h2>
              <p className='text-1 text-1-sm'>Satellite building with purpose—eight milestones, one mission, realizing aspirations</p>
        </div>
      </div>

       <div className={styles.sliderWrapper}>
         <Splide
        options={{
            type: 'loop',
            perPage: 3,
            gap: '1rem',
            focus: 'center',
            arrows: false,
            pagination: false,
            autoScroll: {
            speed: 1,
            pauseOnHover: false,
            },
            breakpoints: {
            1024: { perPage: 2 },
            666: { perPage: 1 },
            },
        }}
        extensions={{ AutoScroll }}
         >
           {trainingData.map(item => (
             <SplideSlide key={item.id}>
               <div className={`${styles.slideCard} flex flex-column gap-10`}>

                <div className='width-100'>
                  <span className={`heading-7 ${styles.idNo}`}>{`0${item.id}`}</span>
                </div>
                 
                 <Image src={item.image} alt={item.heading} 
                 width={287}
                 height={243}
                 />
                <div className="flex justify-between gap-10 width-100">
                  <div className='width-100'>
                    <h3 className='heading-7 text-5-sm'>{item.heading}</h3>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                    <path d="M19 1L24 6.49997L19 12" stroke="white"/>
                    <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="white"/>
                    <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="white"/>
                  </svg>
                </div>
                <div className={`${styles.hoverContent} flex flex-column`}>
                  <h3 className='heading-7 text-5-sm'>{item.heading}</h3>   
                 <p className='text-1'>{item.description}</p>
                </div>
               
               </div>
             </SplideSlide>
           ))}
         </Splide>
       </div>
    </section>
  )
}
