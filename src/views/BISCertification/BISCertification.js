'use client';
import React from "react";
import BISHeroSection from "./Components/HeroSection";
import CertificationBenefits from "./Components/CertificationBenefits";
import DecisionMakers from "./Components/DecisionMakers";
import BISCta from "./Components/BISCta";
import RelatedLinks from "@/src/Components/RelatedLinks";

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
      <RelatedLinks
        title="Related pages"
        links={[
          { href: '/certifications', label: 'Certifications overview: hardware and software certificates explained' },
          { href: '/tools/certificate-verifier', label: 'Certificate verifier tool' },
          { href: '/cctv-compliance-2026', label: 'BIS-ER and STQC rules for CCTV buyers in India' },
          { href: '/wifi-cctv-camera', label: 'WiFi CCTV cameras with datasheets' },
          { href: '/contact-us', label: 'Contact ArcisAI' },
        ]}
      />
    </>
  );
};

export default BISCertification;
