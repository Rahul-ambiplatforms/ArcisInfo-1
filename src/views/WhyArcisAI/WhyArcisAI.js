'use client';
import React from "react";
import dynamic from "next/dynamic";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { WhyArcisAIContent } from "./Data/Content";
import { whyArcisAISEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";

const EdgeAIFeatures = dynamic(() => import("./Components/EdgeAIFeatures"));
const CCTVFeatures   = dynamic(() => import("./Components/CCTVFeaatures"));
const GoodbyeNVR     = dynamic(() => import("./Components/GoodbyeNVR"));
const ArcisVMS       = dynamic(() => import("./Components/ArcisVMS"));
const Services       = dynamic(() => import("./Components/Services"));
const FAQSection     = dynamic(() => import("../../Components/FAQSection"));
const CTAButton      = dynamic(() => import("../../Components/CTAButton"));

const WhyArcisAI = () => {
  return (
    <>
      {/* Schema Markup — deliberately NOT inside <Helmet>.
          HelmetProvider is mounted in app/providers.js, a 'use client' module,
          so Helmet only injects into <head> after hydration and nothing it
          renders reaches the server HTML a crawler reads. Rendered inline the
          <script> is server-rendered normally; JSON-LD is valid anywhere in
          the document. The meta/title/canonical tags that used to sit here
          were dead for the same reason and are already emitted by the route's
          `metadata` export. */}
      {whyArcisAISEO.schema &&
        whyArcisAISEO.schema.length > 0 &&
        whyArcisAISEO.schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      <PageContentWrapper noPadding>
        <HeroSectionCarousel data={WhyArcisAIContent.hero} />
        <EdgeAIFeatures data={WhyArcisAIContent.EdgeAIFeatures} />
        <CCTVFeatures data={WhyArcisAIContent.ArcisGPTFeatures} />
        <CTAButton {...WhyArcisAIContent.CTAButton} />
        <GoodbyeNVR data={WhyArcisAIContent.GoodbyeNVR} />
        <ArcisVMS data={WhyArcisAIContent.ArcisVMS} />
        <Services data={WhyArcisAIContent.Services} />
        <CTAButton {...WhyArcisAIContent.CTAButton2} />
        <FAQSection data={WhyArcisAIContent.FAQsData} />
      </PageContentWrapper>
    </>
  );
};

export default WhyArcisAI;
