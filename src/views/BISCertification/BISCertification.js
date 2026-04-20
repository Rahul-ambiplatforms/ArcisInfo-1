'use client';
import React from "react";
import { Helmet } from "react-helmet-async";
import BISHeroSection from "./Components/HeroSection";
import CertificationBenefits from "./Components/CertificationBenefits";
import DecisionMakers from "./Components/DecisionMakers";
import BISCta from "./Components/BISCta";

const BISCertification = () => {
  return (
    <>
      <Helmet>
        <title>BIS-ER Certified AI CCTV Cameras | ArcisAI</title>
        <meta
          name="description"
          content="ArcisAI cameras are now BIS-ER certified (R-72003735 ER01:2024). Compliant, secure, and deployment-ready AI surveillance systems for India."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arcisai.io/BIS-ER-certification" />
      </Helmet>

      <BISHeroSection />
      <CertificationBenefits />
      <DecisionMakers />
      <BISCta />
    </>
  );
};

export default BISCertification;
