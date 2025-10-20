"use client"
import React, { useRef, useEffect, useState } from 'react';
import Styles from '../css/traningMission.module.css';
import CtaBtn from '@/app/components/CtaBtn';

const TrainingSvg = ({ active }) => (
  <svg 
    width="240" 
    height="203" 
    viewBox="0 0 240 203" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={active ? Styles.activeSvg : ''}
  >
    <path 
      d="M110.187 179.202L43.2998 141.809L43.2998 64.4375L110.187 179.202ZM178.7 141.809L111.812 179.202L178.7 64.4375V141.809ZM110.2 178.032L43.4102 63.4375L76.8047 44.123L110.2 178.032ZM178.589 63.4375L111.799 178.032L145.194 44.123L178.589 63.4375ZM110.7 177.559L77.3447 43.8105L110.7 24.5195L110.7 177.559ZM144.654 43.8105L111.3 177.559L111.3 24.5195L144.654 43.8105Z" 
      stroke="white" 
      strokeWidth="0.6" 
      className={Styles.traningPath}
    />
  </svg>
);

const MissionSvg = ({ active }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="240" 
    height="203" 
    viewBox="0 0 240 203" 
    fill="none"
    className={active ? Styles.activeSvg : ''}
  >
    <path 
      d="M120 23L189 62.5806V89.7063M120 23L94.929 37.3815M120 23V47.6523M189 141.742L120 180L97.1049 167.305M189 141.742V115.574M189 141.742L164.969 127.659M51 141.742V62.5806L69.858 51.7631M51 141.742L71.3086 129.841M51 141.742L74.2098 154.611M120 101.307L95.6543 115.574M120 101.307V73.0297M120 101.307L140.938 113.577M69.858 51.7631L71.3086 129.841M69.858 51.7631L94.929 37.3815M71.3086 129.841L95.6543 115.574M94.929 37.3815L95.6543 115.574M120 47.6523L189 89.7063M120 47.6523V73.0297M189 89.7063V115.574M120 73.0297L189 115.574M74.2098 154.611L140.938 113.577M74.2098 154.611L97.1049 167.305M140.938 113.577L164.969 127.659M97.1049 167.305L164.969 127.659" 
      stroke="white" 
      strokeWidth="0.6" 
      className={Styles.missionsPath}
    />
  </svg>
);

// Rest of your component remains the same...
const trainingMissionData = [
    {
      id: 1,
      title: "Training",
      description: "The XORBIT Program - Accelerated Space programme for Universities",
      ImageComponent: TrainingSvg,
      alt: "Training satellite",
      link: "/services/training"
    },
    {
      id: 2,
      title: "Mission as a service",
      description: "Robust Capabilities for Reliable Mission Operations and Satellite Communication",
      ImageComponent: MissionSvg,
      alt: "Mission satellite",
      link: "/services/mission-as-a-service"
    }
  ];

export default function TrainingMission() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={Styles.traningMissionSec}>
      <div className="container-main">
        <div className={`${Styles.traningMissionWrapper} flex gap-20 ${active ? Styles.active : ''}`}>
            {trainingMissionData.map((item) => (
                <div key={item.id} className={`${Styles.box} ${active ? Styles.active : ''}`}>
                <div className={Styles.boxImg}>
                    <item.ImageComponent active={active} aria-label={item.alt} />
                </div>
                <div className={Styles.boxContent}>
                    <div className="flex flex-column gap-2">
                    <h3 className="heading-3 heading-3-sm">{item.title}</h3>
                    <p className="text-1 text-1-sm opcty-5">{item.description}</p>
                    </div>
                    <CtaBtn href={item.link} text="Learn more" />
                </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}