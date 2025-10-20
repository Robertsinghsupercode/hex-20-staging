"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Styles from '../css/upcomingmission.module.css';
import CtaBtn from '@/app/components/CtaBtn';

gsap.registerPlugin(ScrollTrigger);

export default function UpcomingMission() {
  const upcomingMissionSecRef = useRef(null);
  const upcomingMissionTitleRef = useRef(null);
  const upcomingMissionH3Ref = useRef(null);
  const venusPlanetRef = useRef(null);
  const landerSpacecraftSecRef = useRef(null);
  const landerSpacecraftRef = useRef(null);
  const venusPlanetTextRef = useRef(null);
  const asteroidsWrapRef = useRef(null);
  const spacecraftBusRef = useRef(null);
  const landerSpacecraftImgRef = useRef(null);
  const justitiaImagingSecRef = useRef(null);
  const uaeAsteroidSecRef = useRef(null);
  const uaeAsteroidTextRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const upcomingMissionSec = upcomingMissionSecRef.current;
      const upcomingMissionTitle = upcomingMissionTitleRef.current;
      const upcomingMissionH3 = upcomingMissionH3Ref.current;
      const venusPlanet = venusPlanetRef.current;
      const landerSpacecraftSec = landerSpacecraftSecRef.current;
      const landerSpacecraft = landerSpacecraftRef.current;
      const venusPlanetText = venusPlanetTextRef.current;
      const asteroidsWrap = asteroidsWrapRef.current;
      const spacecraftBus = spacecraftBusRef.current;
      const landerSpacecraftImg = landerSpacecraftImgRef.current;
      const justitiaImagingSec = justitiaImagingSecRef.current;
      const uaeAsteroidSec = uaeAsteroidSecRef.current;
      const uaeAsteroidText = uaeAsteroidTextRef.current;

    if (upcomingMissionSec && upcomingMissionTitle) {
      try {
        gsap.set(upcomingMissionTitle, { opacity: 0, y: 50 });

        const getMobileConfig = () => {
          const isMobile = window.innerWidth <= 768;
          return {
            start: isMobile ? "top 80%" : "top 50%",
            end: isMobile ? "bottom 20%" : "bottom 70%"
          };
        };
        
        const config = getMobileConfig();
        
        gsap.to(upcomingMissionTitle, {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            id: "upcomingMissionTitle",
            trigger: upcomingMissionSec,
            start: config.start,
            end: config.end,
            toggleActions: "play none none reverse",
            markers: false,
            invalidateOnRefresh: true,
            onRefresh: () => {
              const newConfig = getMobileConfig();
              ScrollTrigger.getById("upcomingMissionTitle")?.update({
                start: newConfig.start,
                end: newConfig.end
              });
            },
            onEnter: () => {
              // Ensure animation plays on mobile even if ScrollTrigger has issues
              gsap.to(upcomingMissionTitle, {
                opacity: 1,
                y: 0,
                duration: 1.8,
                ease: "power2.out"
              });
            }
          }
        });
      } catch (error) {
        console.error("Error in upcomingMissionTitle animation:", error);
      }
    }

    // Split text animation for h3 title
    if (upcomingMissionH3 && upcomingMissionSec) {
      try {
        const text = upcomingMissionH3.textContent;
        if (!text) return; 
        
        upcomingMissionH3.innerHTML = '';
        
        const words = text.split(' ');
        words.forEach((word, wordIndex) => {
          const wordSpan = document.createElement('span');
          wordSpan.style.display = 'inline-block';
          wordSpan.style.overflow = 'hidden';
          wordSpan.style.marginRight = '0.25em'; // Add margin for spacing
          
          const chars = word.split('');
          chars.forEach((char, charIndex) => {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.style.display = 'inline-block';
            charSpan.style.transform = 'translateY(100%)';
            charSpan.style.opacity = '0';
            wordSpan.appendChild(charSpan);
          });
          
          upcomingMissionH3.appendChild(wordSpan);
        });

        // Get all character spans
        const charSpans = upcomingMissionH3.querySelectorAll('span span');
        
        if (charSpans.length > 0) {
          gsap.set(charSpans, { 
            y: '100%', 
            opacity: 0,
            rotationX: 90
          });

          // Create split text animation timeline
          const splitTextTl = gsap.timeline({
            scrollTrigger: {
              trigger: upcomingMissionSec,
              start: "top 50%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
              markers: false
            }
          });

          // Animate each character with stagger
          splitTextTl.to(charSpans, {
            y: '0%',
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: {
              amount: 1.5,
              from: "start"
            }
          });
        }
      } catch (error) {
        console.error("Error in split text animation:", error);
      }
    }

    // Pin venusPlanet when upcomingMissionSec reaches top -300px (desktop only)
    if (venusPlanet && upcomingMissionSec) {
      try {
        const isMobile = window.innerWidth <= 768;
        
        // Set initial states for elements
        if (landerSpacecraftSec) {
          gsap.set(landerSpacecraftSec, { 
            opacity: 0, 
            x: isMobile ? 0 : 100, 
            y: 0 
          });
        }
        if (landerSpacecraft) {
          gsap.set(landerSpacecraft, { opacity: 0 });
        }
        if (venusPlanetText) {
          gsap.set(venusPlanetText, { opacity: 0, x: 100 });
        }

        // Only create venus planet animation on desktop
        if (!isMobile) {
          const venusPlanetTl = gsap.timeline({
            scrollTrigger: {
              trigger: upcomingMissionSec,
              start: "top -200px",
              end: "bottom -400px",
              pin: venusPlanet,
              pinSpacing: true,
              scrub: 3,
              markers: false
            }
          });

          // Add venus planet translation animation
          venusPlanetTl.to(venusPlanet, {
            x: "-30%",
            duration: 1,
            ease: "none"
          });
        }

      // Sequential animation for landerSpacecraftSec and landerSpacecraft
      if (landerSpacecraftSec && landerSpacecraft) {
        const landerTl = gsap.timeline({
          scrollTrigger: {
            trigger: landerSpacecraftSec,
            start: "top 50%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
            markers: false
          }
        });

        landerTl
          .to(landerSpacecraftSec, {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          })
          .to(landerSpacecraft, {
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          }, "-=0.2"); 
      }

      // Pin landerSpacecraftSec when it reaches top 10% and end when it reaches bottom of asteroidsWrap
      if (landerSpacecraftSec && asteroidsWrap) {
        ScrollTrigger.create({
          trigger: landerSpacecraftSec,
          start: "top 20%",
          end: () => `+=${asteroidsWrap.offsetTop - landerSpacecraftSec.offsetTop + (asteroidsWrap.offsetHeight * 0.52)}`,
          pin: true,
          pinSpacing: true,
          scrub: 4,
          markers: false,
          onUpdate: (self) => {
            // Fade out landerSpacecraft as we scroll through the pinned section
            if (landerSpacecraft) {
              const progress = self.progress;
              const fadeProgress = Math.min(progress * 4, 1);
              gsap.set(landerSpacecraft, { opacity: 1 - fadeProgress });
            }
            
            // Move and scale landerSpacecraftSec, rotate only the image
            if (landerSpacecraftSec) {
              const progress = self.progress;
              const isMobile = window.innerWidth <= 768;
              
              // Only apply horizontal movement on desktop
              const xMovement = isMobile ? 0 : progress * -550;
              
              // Scale animation: scale up to 1.2 in first half, then scale down to 0.8 in second half
              let scale;
              if (progress <= 0.5) {
                scale = 1 + (progress * 0.4); 
              } else {
                const secondHalfProgress = (progress - 0.5) * 2;
                scale = 1.2 - (secondHalfProgress * 0.4); 
              }
              
              gsap.set(landerSpacecraftSec, { 
                x: xMovement,
                scale: scale
              });
            }
            
            // Rotate only the landerSpacecraftImg
            if (landerSpacecraftImg) {
              const progress = self.progress;
              const rotation = progress * -40;
              gsap.set(landerSpacecraftImg, { rotation: rotation });
            }
          },
          onEnter: () => {
            // Fade in spacecraftBus when entering the pinned section
            if (spacecraftBus) {
              gsap.set(spacecraftBus, { opacity: 0 });
            }
          },
          onLeave: () => {
            // Fade in spacecraftBus when leaving the pinned section (scrolling down)
            if (spacecraftBus) {
              gsap.to(spacecraftBus, {
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
              });
            }
          },
          onEnterBack: () => {
            // Fade out spacecraftBus when scrolling back up
            if (spacecraftBus) {
              gsap.to(spacecraftBus, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
              });
            }
          }
        });
      }

        // Separate ScrollTrigger for venusPlanetText - triggers when it reaches top center (desktop only)
        if (venusPlanetText) {
          // Only animate on desktop, keep static on mobile
          if (!isMobile) {
            gsap.to(venusPlanetText, {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: venusPlanetText,
                start: "top 60%",
                end: "bottom 70%",
                toggleActions: "play none none reverse",
                markers: false
              }
            });
          } else {
            // On mobile, just set it to visible without animation
            gsap.set(venusPlanetText, { opacity: 1, x: 0 });
          }
        }
      } catch (error) {
        console.error("Error in venusPlanet animation:", error);
      }
    }

    // Fade in justitiaImagingSec from right when it reaches top center
    if (justitiaImagingSec) {
      try {
        gsap.set(justitiaImagingSec, { opacity: 0, x: 100 });
        
        gsap.to(justitiaImagingSec, {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: justitiaImagingSec,
            start: "top 60%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
            markers: false
          }
        });
      } catch (error) {
        console.error("Error in justitiaImagingSec animation:", error);
      }
    }

    // Translate uaeAsteroidSec from bottom left to current position (desktop only)
    if (uaeAsteroidSec) {
      try {
        const isMobile = window.innerWidth <= 768;
        
        if (!isMobile) {
          gsap.set(uaeAsteroidSec, { x: -200, y: 100 });
          
          gsap.to(uaeAsteroidSec, {
            x: 0,
            y: 0,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: uaeAsteroidSec,
              start: "top 60%",
              end: "bottom 70%",
              toggleActions: "play none none reverse",
              markers: false
            }
          });
        }
      } catch (error) {
        console.error("Error in uaeAsteroidSec animation:", error);
      }
    }

    // Fade in uaeAsteroidText when it reaches top 60%
    if (uaeAsteroidText) {
      try {
        gsap.set(uaeAsteroidText, { opacity: 0 });
        
        gsap.to(uaeAsteroidText, {
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: uaeAsteroidText,
            start: "top 70%",
            end: "bottom 70%",
            toggleActions: "play none none reverse",
            markers: false
          }
        });
      } catch (error) {
        console.error("Error in uaeAsteroidText animation:", error);
      }
    }

    }, 100); 

    // Handle window resize to refresh ScrollTrigger
    const handleResize = () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(window.resizeTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <section className={Styles?.upcomingMissionContainer}>
        <div className={Styles?.landerSpacecraftSec} ref={landerSpacecraftSecRef}>
          <div className={Styles?.landerSpacecraft} ref={landerSpacecraftRef}>
            <div className={Styles?.landerSpacecraftText}>
              <span className='text-4'>Lander spacecraft</span>
              <span className='text-3 opcty-4'>EMA Asteroid Lander</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="196" height="28" viewBox="0 0 196 28" fill="none">
              <path d="M195 1L173 23H11" stroke="#DA3C19"/>
              <rect y="19" width="9" height="9" rx="4.5" fill="#DA3C19"/>
            </svg>
          </div>
          <div>
            <img
              ref={landerSpacecraftImgRef}
              src="/assets/lander-spacecraft.svg"
              alt="satelite"
              width="215"
              height="218"
              className={Styles?.landerSpacecraftImg}
            />
          </div>
          <div className={Styles?.spacecraftBus} ref={spacecraftBusRef}>
            <svg width="437" height="27" viewBox="0 0 437 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 26L23 4H424" stroke="#DA3C19"/>
              <circle cx="432.5" cy="4.5" r="4.5" fill="#DA3C19"/>
            </svg>
            <div className={Styles?.spacecraftBusText}>
              <span className='text-4'>spacecraft bus</span>
              <span className='text-3 opcty-5'>spacecraft bus for the EMA Lander</span>
            </div>
          </div>
        </div>

        <div className={Styles.upcomingMissionSec} ref={upcomingMissionSecRef}>
          <div className={Styles.upcomingMissionTitle} ref={upcomingMissionTitleRef}>
            <div className={Styles.upcomingMissionTag}>
              <span className='text-4 text-3-sm'>Upcoming Mission</span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="150" height="11" viewBox="0 0 150 11" fill="none">
                <path opacity="0.34" d="M150 1H10.5L1 10.5" stroke="white"/>
                </svg>
              </span>
              <span className='text-4 text-3-sm'>HEX20 TII UAESA 2028 - 2035</span>
            </div>
            <h3 ref={upcomingMissionH3Ref} className='heading-1 heading-1-sm'>Emirates Asteroid Lander Mission</h3>
          </div>

          <div>
            <img
              ref={venusPlanetRef}
              src="/assets/venusPlanet.png"
              alt="Earth"
              width="1565"
              height="1080"
              style={{ objectFit: "contain" }}
              className={Styles?.venusPlanet}
            />

            <div className={Styles?.venusPlanetText} ref={venusPlanetTextRef}>
              <svg width="432" height="33" viewBox="0 0 432 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M423 23L401 1H0" stroke="#DA3C19"/>
                <rect x="423" y="24" width="9" height="9" rx="4.5" fill="#DA3C19"/>
              </svg>

              <div className={Styles?.venusPlanetTextContent}>
                <span className='text-4'>Venus Flyby</span>
                <span className='text-3 opcty-4'>Gravity-Assist flyby around Venus in  2028</span>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles?.asteroidsWrap} ref={asteroidsWrapRef}>
          <div className={Styles?.asteroidsWrapImg}>
            <img
              src="/assets/asteroidsLeft.png"
              alt="satelite"
              width="780"
              height="1079"
              className={Styles?.asteroidsLeft}
            />

            <img
              src="/assets/asteroidsRight.png"
              alt="satelite"
              width="695"
              height="1031"
              className={Styles?.asteroidsRight}
            />
          </div>

          <h3 className={`${Styles?.asteroidsWrapTitle} heading-2 heading-3-sm`}>A Journey of 5 Billion km, 3 Planetary 
          Flyby's (Venus , Earth and Mars) and 6 asteroids to reach Justitia in the main Asteroid Belt</h3>

            <div className={Styles?.uaeAsteroidSec} ref={uaeAsteroidSecRef}>
              <img
                src="/assets/uaeAsteroid.png"
                alt="satelite"
                width="642"
                height="697"
                className={Styles?.uaeAsteroid}
              />

              <div className={Styles?.uaeAsteroidText} ref={uaeAsteroidTextRef}>
                <svg width="441" height="29" viewBox="0 0 441 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 28L23 6H424" stroke="#DA3C19"/>
                  <rect x="430" width="11" height="11" rx="5.5" fill="#DA3C19"/>
                </svg>
                <div className={Styles?.uaeAsteroidTextContent}>
                  <span className='text-4'>asteroid 269 Justitia </span>
                  <span className='text-3 opcty-5'>by 2035</span>
                </div>
              </div>
            </div>

            <div className={Styles?.justitiaImagingSec} ref={justitiaImagingSecRef}>
              <h3 className='heading-1 heading-1-sm'>269 Justitia Imaging in 2035</h3>
            </div>

          <div className={Styles?.missionOperationSec}>
            <h3 className="heading-2 heading-3-sm">
              HEX20 is a critical mission partner ensuring seamless execution for all your space mission requirements
            </h3>
            <div className="flex gap-20 justify-center">
              <CtaBtn href="/missions" text="View all missions" />
              <CtaBtn href="/services/payload-hosting" text="Explore Payload Hosting" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
