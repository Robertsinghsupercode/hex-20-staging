"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import ScrambleText from "./components/ScrambleText";
import Image from "next/image";
import CtaBtn from "./components/CtaBtn";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setShowServicesDropdown(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowHeader(false);
      } else if (window.scrollY < lastScrollY || window.scrollY <= 100) {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isMediaPage = pathname === "/media";
  const isBlogsPage = pathname === "/blogs" || pathname.startsWith("/blogs/");
  const careersInnerPage = pathname.startsWith("/careers/");
  const isSatelitePage = pathname === "/products/satellite-platforms";
  const isSubsystemPage = pathname === "/subsystems";
  const isSateliteInnerpage = pathname.startsWith("/products/satellite-platforms/") && pathname !== "/satellite-platforms";
  const isSubsystemInnerpage = pathname.startsWith("/subsystems/");
  const isFlatsat = pathname === "/products/flatsat";
  const isSubsystemDetailPage = pathname.startsWith("/subsystems/") && pathname !== "/subsystems";
  const isSatelliteDetailPage = pathname.startsWith("/products/satellite-platforms/") && pathname !== "/products/satellite-platforms";
  const isProductMainPage = pathname === "/product";
  const iscareersPage = pathname === "/careers";
  const isLightHeader = isMediaPage || isBlogsPage || careersInnerPage || isSateliteInnerpage || isSubsystemInnerpage || isFlatsat || isProductMainPage;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const leftSideVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
      },
    },
  };

  const menuContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  const rightSideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        delay: 0.8 
      },
    },
  };

  const servicesDropdownItems = [
    { label: "Mission As a service", link: "/services/mission-as-a-service", img: "/assets/service-1.png" },
    { label: "Payload Hosting", link: "/services/payload-hosting", img: "/assets/service-2.png" },
    { label: "Subsystem", link: "/subsystems", img: "/assets/service-3.png" },
    { label: "Training", link: "/services/training", img: "/assets/service-4.png" },
    { label: "Ground system as a service", link: "/services/ground-system-as-service", img: "/assets/service-5.png" },
  ];


  useEffect(() => {
    // If mobile menu or dropdown is open, prevent scrolling
    if (isMobileMenuOpen || showServicesDropdown) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen, showServicesDropdown]);


  return (
    <header
      className={`header 
        ${isLightHeader ? "header-light" : ""} 
        ${(isFlatsat || isSubsystemDetailPage || isSatelliteDetailPage || isProductMainPage) ? "header-flatsat" : ""} 
        ${showHeader ? "show" : "hide"} 
        ${isSatelitePage ? (isScrolled ? "header-dark" : "header-transparent") : ""}
        ${isSateliteInnerpage ? (isScrolled ? "header-dark" : "header-transparent") : ""}
        ${isSubsystemPage ? (isScrolled ? "header-dark" : "header-transparent") : ""}
        ${isSubsystemInnerpage ? (isScrolled ? "header-dark" : "header-transparent") : ""}
        ${iscareersPage ? (isScrolled ? "header-dark" : "header-transparent") : ""}
        ${showServicesDropdown || isMobileMenuOpen ? "products-active" : ""}`}
    >
      <div className="container-main">
        <motion.nav
          className="flex items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={showHeader ? "visible" : "hidden"}
        >
          <motion.div
            className="headerLeft flex items-center"
            variants={leftSideVariants}
          >
            <motion.div className="headerLogo" variants={logoVariants}>
              <Link href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="156" height="36" viewBox="0 0 156 36" fill="none">
                  <path d="M107.005 0.359263C111.19 0.859263 115.65 4.71926 116.135 8.99926C117.19 18.2893 107.345 21.8843 101.595 26.7993C99.8796 28.2693 98.2646 30.2393 97.6646 32.4493H116.18V35.7243H94.0596C93.4296 25.8293 103.45 22.4993 109.385 17.0643C116.245 10.7793 112.305 2.45926 103.36 3.67426C100.16 4.10926 98.0146 6.99426 97.4896 10.0093L94.3846 9.35926C94.7446 6.73426 96.2996 3.77926 98.4996 2.25426C99.5646 1.51426 101.805 0.509263 103.075 0.354263C103.94 0.249263 106.14 0.249263 107.01 0.354263L107.005 0.359263Z" fill="white"/>
                  <path d="M3.275 0.359253V15.0193C3.375 15.8993 3.83 16.3443 4.66 16.5793C5.49 16.8143 7.335 16.8693 8.265 16.9043C19.935 17.3693 31.67 17.6143 43.33 17.8843C43.94 17.8993 48.75 17.6993 48.825 17.9593C48.935 18.3393 48.475 18.1943 48.25 18.2043C34.67 18.7493 20.795 18.4243 7.28 19.3493C6.135 19.4293 4.93 19.0843 4.005 20.0043C3.815 20.1943 3.27 21.2143 3.27 21.3943V35.7192H0V0.359253H3.275Z" fill="white"/>
                  <path d="M140.27 0.359253C141.51 0.704253 142.78 0.884253 144 1.29925C149.805 3.26425 154.335 8.47425 155.56 14.4743C155.735 15.3443 155.8 16.2093 156 17.0643V19.1943L155.51 21.6493V17.9643C155.51 12.2443 149.585 6.04925 144.4 4.33925C127.15 -1.34075 115.005 20.7743 128.55 32.4593L131.915 34.7443C118.235 29.7993 116.265 10.9093 128.65 3.07425C130.52 1.89425 133.82 0.579253 136.01 0.359253H140.27Z" fill="white"/>
                  <path d="M89.4697 0.359253L64.1547 35.7243H60.3047L85.3747 0.359253H89.4697Z" fill="white"/>
                  <path d="M56.3701 0.359253V3.63425H35.2301V14.8493C35.2301 15.3543 32.3901 14.7243 31.9501 14.9343V0.359253H56.3651H56.3701Z" fill="white"/>
                  <path d="M65.055 0.359253L73.345 12.6393C73.445 12.8243 73.41 12.9443 73.33 13.1243C73.235 13.3393 71.95 15.1043 71.74 15.3143C71.625 15.4293 71.6 15.6493 71.36 15.5893L60.96 0.359253H65.055Z" fill="white"/>
                  <path d="M26.2204 0.359253L26.0654 14.6943L22.9404 14.6043V0.359253H26.2204Z" fill="white"/>
                  <path d="M35.23 20.8243V32.4493H56.205V35.7243H31.955V20.8243H35.23Z" fill="white"/>
                  <path d="M86.0296 35.7242L77.0796 22.4642C76.9796 22.2842 77.0246 22.1542 77.0946 21.9792C77.2296 21.6342 78.7946 19.5092 79.0596 19.5092L90.1246 35.7192H86.0296V35.7242Z" fill="white"/>
                  <path d="M26.2204 21.1542V35.7242H22.9404V21.3142L26.2204 21.1542Z" fill="white"/>
                  <path d="M50.8447 18.9793C49.6647 17.7993 51.3697 15.8843 52.6847 17.0543C53.9997 18.2243 52.1097 20.2443 50.8447 18.9793Z" fill="white"/>
                </svg>
              </Link>
            </motion.div>

            <motion.div
              className="headerMenu flex items-center gap-12"
              variants={menuContainerVariants}
            >
              {[
                { label: "ABOUT US", link: "/about-us" },
                { label: "OUR PRODUCTS", link: "/product" },
                { label: "RIDESHARE", link: "/services/payload-hosting" },
                { label: "MISSIONS", link: "/missions" },
                { label: "SERVICES", link: "/services" },
              ].map((item, i) => (
                <motion.div key={i} variants={menuItemVariants} className={item.label === "SERVICES" ? "relative" : undefined}>
                  {item.label === "OUR PRODUCTS" ? (
                    <Link className="text-4" href="/product">
                      <ScrambleText text={item.label} />
                    </Link>
                  ) : item.label === "SERVICES" ? (
                    <>
                      <div
                        className={`text-4 ${showServicesDropdown ? "drop-link" : ""}`}
                        onClick={() => {
                          setShowServicesDropdown(!showServicesDropdown);
                        }}
                        type="button"
                        style={{cursor:"pointer"}}
                      >
                        <ScrambleText text={item.label} />
                      </div>
                      <div className={`services-dropdown dropdown ${showServicesDropdown ? "active" : ""}`}>
                        {servicesDropdownItems.map((service, idx) => (
                          <Link key={idx} href={service.link} className="heading-5 menu-item flex flex-column gap-10 items-center">
                            <Image
                              src={service.img}
                              alt={service.label}
                              width={240}
                              height={200}
                            />
                            <p className="heading-5">{service.label}</p>
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link className="text-4" href={item.link}>
                      <ScrambleText text={item.label} />
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center gap-30"
            variants={rightSideVariants}
          >
            <Link className="text-4 contactBtn" href="/contact-us">
              CONNECT WITH US
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                <path d="M19 0.5L24 5.99997L19 11.5" stroke="white"/>
                <path opacity="0.3" d="M9 0.5L14 5.99997L9 11.5" stroke="white"/>
                <path opacity="0.1" d="M1 0.5L6 5.99997L1 11.5" stroke="white"/>
              </svg>
            </Link>
<div 
  className={`mButton ${isMobileMenuOpen ? 'open' : ''} flex flex-col gap-2`}
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
>
  <div className="mBtnLine"></div>
  <div className="mBtnLine"></div>
  <div className="mBtnLine"></div>
</div>
          </motion.div>
        </motion.nav>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content gap-20">
            {[
              { label: "ABOUT US", link: "/about-us" },
              { label: "OUR PRODUCTS", link: "/product" },
              { label: "RIDESHARE", link: "/services/payload-hosting" },
              { label: "MISSIONS", link: "/missions" },
              { label: "SERVICES", link: "/services", dropdown: servicesDropdownItems },
            ].map((item, i) => (
              <div key={i} className="mobile-menu-item">
                {item.label === "SERVICES" && item.dropdown ? (
                  <div className="mobile-dropdown">
                    <div 
                      className="mobile-dropdown-toggle heading-3-sm flex justify-between"
                      onClick={() => {
                        setShowServicesDropdown(!showServicesDropdown);
                      }}
                    >
                      <ScrambleText text={item.label} />
                      <span>
                        { showServicesDropdown ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M1 9.5L9.99996 1.5L19 9.5" stroke="#090909"/>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" viewBox="0 0 20 10" fill="none">
                            <path d="M1 0.5L9.99996 8.5L19 0.5" stroke="#090909"/>
                          </svg>
                        )}
                      </span>
                    </div>
                    {showServicesDropdown ? (
                      <div className="mobile-dropdown-content">
                        {item.dropdown.map((subItem, idx) => (
                          <Link key={idx} href={subItem.link} className="mobile-subitem flex flex-column gap-10 items-center">
                            <Image
                              src={subItem.img}
                              alt={subItem.label}
                              width={100}
                              height={104}
                            />
                            <p className="text-4-sm text-align-center">
                            {subItem.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <Link href={item.link} className="mobile-menu-link heading-3-sm " onClick={() => setIsMobileMenuOpen(false)}>
                    <ScrambleText text={item.label} />
                  </Link>
                )}
              </div>
            ))}
           <div className="flex justify-center items-center">
             <CtaBtn href="/contact-us" text="CONNECT WITH US" className={'mobileMenu'} />
           </div>
          </div>
        </div>
      </div>
    </header>
  );
}