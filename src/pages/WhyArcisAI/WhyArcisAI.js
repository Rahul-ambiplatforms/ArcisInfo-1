import React from "react";
import HeroSection from "../../Components/HeroSection";
import EdgeAIFeatures from "./Components/EdgeAIFeatures";
import CCTVFeatures from "./Components/CCTVFeaatures";
import GoodbyeNVR from "./Components/GoodbyeNVR";
import ArcisVMS from "./Components/ArcisVMS";
import Services from "./Components/Services";
import FAQSection from "../../Components/FAQSection";
import { WhyArcisAIContent } from "./Data/Content";
import CTAButton from "../../Components/CTAButton";

const WhyArcisAI = () => {
  return (
    <>
      <HeroSection data={WhyArcisAIContent.hero} />
      <EdgeAIFeatures data={WhyArcisAIContent.EdgeAIFeatures} />
      <CCTVFeatures data={WhyArcisAIContent.ArcisGPTFeatures} />
      <CTAButton {...WhyArcisAIContent.CTAButton} />
      <GoodbyeNVR data={WhyArcisAIContent.GoodbyeNVR} />
      <ArcisVMS data={WhyArcisAIContent.ArcisVMS} />
      <Services data={WhyArcisAIContent.Services} />
      <CTAButton {...WhyArcisAIContent.CTAButton2} />
      <FAQSection data={WhyArcisAIContent.FAQsData} />
    </>
  );
};

export default WhyArcisAI;
