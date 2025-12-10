import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import ProductList from "./Components/ProductList";
import Certifications from "./Components/Certifications";
import SurveillanceStack from "../../Components/SurveillanceStack";
import AISolutionIndustry from "./Components/AISolutionIndustry";
import CTAButton from "../../Components/CTAButton";
import { homeContent } from "./Data/Content";
import { homeSEO } from "./Data/SEOContent";
import OurClient from "./Components/OurClient";
import WhyArcisAI from "./Components/WhyArcisAI";
import FAQSection from "../../Components/FAQSection";
import { FAQ_DATA } from "../../data/FAQData";
import Event from "../Events/Event";
import { Box } from "@chakra-ui/react";
import PageContentWrapper from "../../Components/PageContentWrapper";

const HomeDashboard = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{homeSEO.metatitle}</title>
        <meta name="description" content={homeSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={homeSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={homeSEO.metatitle} />
        <meta property="og:description" content={homeSEO.metadescription} />
        <meta property="og:image" content={homeSEO.ogimage} />
        <meta property="og:type" content="ArcisAI" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={homeSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={homeSEO.metatitle} />
        <meta name="twitter:description" content={homeSEO.metadescription} />
        <meta name="twitter:image" content={homeSEO.ogimage} />

        {/* Schema Markup */}
        {homeSEO.schema.map((schema, index) => (
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
        <Event />
        <HeroSectionCarousel data={homeContent.hero} />
        <ProductList />
        <Certifications />
        <SurveillanceStack data={homeContent.SurveillanceStack} />
        <AISolutionIndustry data={homeContent.AISolutionIndustry} />
        <CTAButton {...homeContent.CTAButton1} />
        <WhyArcisAI />
        <OurClient />
        <FAQSection data={FAQ_DATA} />
        <CTAButton {...homeContent.CTAButton2} />
      </PageContentWrapper>
    </>
  );
};

export default HomeDashboard;
