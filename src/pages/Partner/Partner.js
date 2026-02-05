import { Box } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet-async";
import PageContentWrapper from "../../Components/PageContentWrapper";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { partnerData } from "./Data/Content.js";
import { SEOContent } from "./Data/SEOContent";
import PartnerForm from "./Components/PartnerForm";
import CameraFeature from "../Product/Components/CameraFeature";
import CTAButton from "../../Components/CTAButton";
import PartnerProgramTypes from "./Components/PartnerProgramTypes";

const Partner = () => {
  const seoData = SEOContent.partnerPage;

  return (
    <Box>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.metaTitle}</title>
        <meta name="description" content={seoData.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={seoData.metaTitle} />
        <meta property="og:description" content={seoData.metaDescription} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={seoData.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={seoData.metaTitle} />
        <meta name="twitter:description" content={seoData.metaDescription} />
        <meta name="twitter:image" content={seoData.ogImage} />
      </Helmet>
      {/* Schema Markup */}
      {seoData.schema.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <PageContentWrapper noPadding>
        <HeroSectionCarousel data={partnerData.hero} />

        <PartnerForm />
        <CameraFeature data={partnerData.gameChangeFeatures} />
        <PartnerProgramTypes data={partnerData.programTypes} />
        {partnerData.CTAButton && <CTAButton {...partnerData.CTAButton} />}
      </PageContentWrapper>
    </Box>
  );
};

export default Partner;
