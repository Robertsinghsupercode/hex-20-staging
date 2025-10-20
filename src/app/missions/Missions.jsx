'use client';
import React, { useRef } from 'react';
import Banner from './components/Banner';
import MissionsIntro from './components/MissionsIntro';

export default function Missions() {
  const missionRefs = useRef([]);

  const missionsData = [
    {
      year: '2025',
      name: 'NILA',
      description: '3U HEX20 tech demonstrator and Payload Host mission for DCube actuators - Launched on SpaceX Transporter 13',
      imageDesktop: { src: '/assets/nila-Sideview.png', alt: 'nila' },
      imageMobile: { src: '/assets/nila-Sideview.png', alt: 'nila' },
    },
    {
      year: '2026',
      name: 'KOYO',
      description: '3U Mission as a Service for Aegiverse Fiber Optic Gyro and Amplified Space configurable Power system in orbit demonstration. Manifested on TR-17, June 2026',
      imageDesktop: { src: '/assets/koyo.png', alt: 'koyo' },
      imageMobile: { src: '/assets/koyo.png', alt: 'koyo' },
    },
    {
      year: '2026',
      name: 'COSPAR-1',
      description: '3U Space Weather mission for Solar and Earth observations – Launch - TBD',
      imageDesktop: { src: '/assets/cospar.png', alt: 'cospar' },
      imageMobile: { src: '/assets/cospar.png', alt: 'cospar' },
    },
    {
      year: '2026',
      name: 'SAISI',
      description: '3U Signal intelligence Mission for Ship detection, Launch - TBD',
      imageDesktop: { src: '/assets/saisi.png', alt: 'saisi' },
      imageMobile: { src: '/assets/saisi.png', alt: 'saisi' },
    },
    {
      year: '2026',
      name: 'NILA III',
      description: '4U Mission as a service for Ohmspace Electric propulsion system in orbit demonstration - Manifested on TR-17, June 2026',
      imageDesktop: { src: '/assets/nila-3.png', alt: 'satelite' },
      imageMobile: { src: '/assets/nila-3.png', alt: 'satelite' },
    },
    {
      year: '2027',
      name: 'Optimus',
      description: 'Hex20 6U Earth imaging and inter Satellite Optical Communication demonstration. Payload space available. Manifested TR21, July 2027',
      imageDesktop: { src: '/assets/optimus.png', alt: 'optimus' },
      imageMobile: { src: '/assets/optimus.png', alt: 'optimus' },
    },
    {
      year: '2027',
      name: 'Sentinel',
      description: 'Hex20 50 kg NX series MicroSat tech demonstrator for Near IR Earth imaging and Optical inter-Satellite and satellite to ground Communication demonstration. Payload space available. Manifested TR-21, July 2027',
      imageDesktop: { src: '/assets/sentinel.png', alt: 'satelite' },
      imageMobile: { src: '/assets/sentinel.png', alt: 'satelite' },
    },
    {
      year: '2028',
      name: 'EMA Lander',
      description: 'Asteroid Lander mission for surface imaging and exploration of main belt asteroid Justitia in 2035 as part of the Emirates mission to the Asteroid belt, Manifested for March 2028',
      imageDesktop: { src: '/assets/ema-lander-v2.png', alt: 'ema-lander' },
      imageMobile: { src: '/assets/ema-lander-v2.png', alt: 'ema-lander' },
    },
  ];

  missionRefs.current = missionsData.map(
    (_, i) => missionRefs.current[i] ?? React.createRef()
  );

  const scrollToMission = (index) => {
    missionRefs.current[index]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Banner scrollToMission={scrollToMission} />
      <MissionsIntro missionRefs={missionRefs} missionsData={missionsData} />
    </div>
  );
}
