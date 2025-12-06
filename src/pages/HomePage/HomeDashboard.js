import React from "react";
import HeroSection from "../../Components/HeroSection";
import ProductList from "./Components/ProductList";
import Certifications from "./Components/Certifications";
import SurveillanceStack from "../../Components/SurveillanceStack";
import AISolutionIndustry from "./Components/AISolutionIndustry";
import CTAButton from "../../Components/CTAButton";
import { homeContent } from "./Data/Content";
import OurClient from "./Components/OurClient";
import WhyArcisAI from "./Components/WhyArcisAI";
import FAQSection from "../../Components/FAQSection";
import { FAQ_DATA } from "../../data/FAQData";

const HomeDashboard = () => {
  return (
    <>
      <HeroSection data={homeContent.hero} />
      <ProductList />
      <Certifications />
      <SurveillanceStack data={homeContent.SurveillanceStack} />
      <AISolutionIndustry />
      <CTAButton {...homeContent.CTAButton1} />
      <WhyArcisAI />
      <OurClient />
      <FAQSection data={FAQ_DATA} />
      <CTAButton {...homeContent.CTAButton2} />
    </>
  );
};

export default HomeDashboard;
