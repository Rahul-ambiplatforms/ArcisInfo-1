'use client';
import React from "react";
import BISHeroSection from "./Components/HeroSection";
import CertificationBenefits from "./Components/CertificationBenefits";
import DecisionMakers from "./Components/DecisionMakers";
import BISCta from "./Components/BISCta";

const BISCertification = () => {
  return (
    <>
      {/* The <Helmet> block that used to sit here was inert: HelmetProvider is
          mounted in the client-only app/providers.js tree, so nothing Helmet
          renders reaches the server HTML. Its title/description/canonical are
          already emitted by the route's `metadata` export. */}

      <BISHeroSection />
      <CertificationBenefits />
      <DecisionMakers />
      <BISCta />
    </>
  );
};

export default BISCertification;
