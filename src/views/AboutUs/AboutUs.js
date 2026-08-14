'use client';
import React from "react";
import dynamic from "next/dynamic";
import HeroSection from "./Components/HeroSection";
import { AboutUsContent } from "./Data/Content";
import { aboutUsSEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";

const PoweredBy    = dynamic(() => import("./Components/PoweredBy"));
const VisionMission = dynamic(() => import("./Components/VisionMission"));
const Innovation   = dynamic(() => import("./Components/Innovation"));
const CTAButton    = dynamic(() => import("../../Components/CTAButton"));

const AboutUs = () => {
  return (
    <>
      {/* Schema Markup — deliberately NOT inside <Helmet>.
          HelmetProvider is mounted in app/providers.js, a 'use client' module,
          so Helmet only injects into <head> after hydration and nothing it
          renders reaches the server HTML a crawler reads. Rendered inline the
          <script> is server-rendered normally; JSON-LD is valid anywhere in
          the document. The meta/title/canonical tags that used to sit here
          were dead for the same reason and are already emitted by the
          `metadata` export in app/about-us/page.js. */}
      {aboutUsSEO.schema?.length > 0 &&
        aboutUsSEO.schema.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      <PageContentWrapper noPadding>
        <HeroSection data={AboutUsContent.hero} />
        <PoweredBy data={AboutUsContent.poweredBy} />
        <VisionMission
          visionData={AboutUsContent.Vision}
          missionData={AboutUsContent.Mission}
        />
        <Innovation data={AboutUsContent.Innovation} />
        <CTAButton {...AboutUsContent.CTAButton} />
      </PageContentWrapper>
    </>
  );
};

export default AboutUs;
