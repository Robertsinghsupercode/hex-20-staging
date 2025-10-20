import React from "react";
import Animation from "./components/Banner";
import Partners from "./components/Partners";
import WhatWeOffer from "./components/What-we-offer";
import Latest from "../components/Latest";
import Build from "./components/build-your-mission";
import Banner from "./components/Banner";
import UpcomingMission from "./components/UpcomingMission";
import GravityAssistMission from "./components/GravityAssistMission";
import UaeAsteroids from "./components/UAEAsteroids";
import CtaBlock from "../components/CtaBlock";
import TraningMission from "./components/TraningMission";
import BuildMission from "./components/BuildMission";
import WhoWeAre from "./components/WhoWeAre";

export default function Homepage() {
  return (
    <div>
    <Banner />
    <WhoWeAre />
    <UpcomingMission />
    <TraningMission />
    <Partners />
    <Latest />
    <CtaBlock />
    {/* <GravityAssistMission /> */}
    {/* <UaeAsteroids /> */}
    {/* <Partners />
    <WhatWeOffer />
    <Latest /> */}
    {/* <WhatWeOffer /> */}
    {/* <BuildMission /> */}
  </div>
  )
}
