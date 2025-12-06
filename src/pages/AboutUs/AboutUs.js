import React from 'react'
import HeroSection from './Components/HeroSection'
import { AboutUsContent } from "./Data/Content";
import PoweredBy from './Components/PoweredBy';
import VisionMission from './Components/VisionMission';
import Innovation from './Components/Innovation';
import CTAButton from "../../Components/CTAButton";

const AboutUs = () => {
  return (
    <>
      <HeroSection data={AboutUsContent.hero} />
      <PoweredBy data={AboutUsContent.poweredBy} />
      <VisionMission 
        visionData={AboutUsContent.Vision} 
        missionData={AboutUsContent.Mission} 
      />
      <Innovation data={AboutUsContent.Innovation} />
      <CTAButton {...AboutUsContent.CTAButton} />
    </>
  )
}

export default AboutUs
