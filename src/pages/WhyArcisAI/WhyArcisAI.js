import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import EdgeAIFeatures from "./Components/EdgeAIFeatures";
import CCTVFeatures from "./Components/CCTVFeaatures";
import GoodbyeNVR from "./Components/GoodbyeNVR";
import ArcisVMS from "./Components/ArcisVMS";
import Services from "./Components/Services";
import FAQSection from "../../Components/FAQSection";
import { WhyArcisAIContent } from "./Data/Content";
import { whyArcisAISEO } from "./Data/SEOContent";
import CTAButton from "../../Components/CTAButton";
import PageContentWrapper from "../../Components/PageContentWrapper";

const WhyArcisAI = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{whyArcisAISEO.metatitle}</title>
        <meta name="description" content={whyArcisAISEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={whyArcisAISEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={whyArcisAISEO.metatitle} />
        <meta
          property="og:description"
          content={whyArcisAISEO.metadescription}
        />
        <meta property="og:image" content={whyArcisAISEO.ogimage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={whyArcisAISEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={whyArcisAISEO.metatitle} />
        <meta
          name="twitter:description"
          content={whyArcisAISEO.metadescription}
        />
        <meta name="twitter:image" content={whyArcisAISEO.ogimage} />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="ArcisAI, Edge AI, Cloud AI, AI CCTV, VMS, ArcisGPT, STQC VMS, Intelligent Surveillance, CCTV Platform, India Surveillance"
        />
        <meta name="author" content="ArcisAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

      </Helmet>
      {/* Schema Markup */}
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
