import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "./Components/HeroSection";
import { AboutUsContent } from "./Data/Content";
import { aboutUsSEO } from "./Data/SEOContent";
import PoweredBy from "./Components/PoweredBy";
import VisionMission from "./Components/VisionMission";
import Innovation from "./Components/Innovation";
import CTAButton from "../../Components/CTAButton";
import PageContentWrapper from "../../Components/PageContentWrapper";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{aboutUsSEO.metatitle}</title>
        <meta name="description" content={aboutUsSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={aboutUsSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={aboutUsSEO.metatitle} />
        <meta property="og:description" content={aboutUsSEO.metadescription} />
        <meta property="og:image" content={aboutUsSEO.ogimage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={aboutUsSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={aboutUsSEO.metatitle} />
        <meta name="twitter:description" content={aboutUsSEO.metadescription} />
        <meta name="twitter:image" content={aboutUsSEO.ogimage} />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="ArcisAI, Adiance Technologies, AI CCTV Camera, Edge AI, Cloud AI, GenAI, STQC-certified VMS, Surveillance Intelligence, Security Camera Brand, About ArcisAI"
        />
        <meta name="author" content="ArcisAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Schema Markup */}
        {aboutUsSEO.schema &&
          aboutUsSEO.schema.length > 0 &&
          aboutUsSEO.schema.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
              }}
            />
          ))}
      </Helmet>
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
