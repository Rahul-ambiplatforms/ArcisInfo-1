import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Box, Text, Center } from "@chakra-ui/react";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import WhatIsAI from "./Components/WhatIsAI";
import OurClient from "../../pages/HomePage/Components/OurClient";
import AIFeatures from "./Components/AIFeatures";
import AISolutionIndustry from "../../pages/HomePage/Components/AISolutionIndustry";
import CTAButton from "../../Components/CTAButton";
import WhyChoose from "./Components/WhyChoose";
import FAQSection from "../../Components/FAQSection";
import { Solution } from "./Data/Content";
import { getSolutionSEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";

const Solutions = () => {
  const { solutionId } = useParams();
  const solutionData = Solution[solutionId];
  const solutionSEO = getSolutionSEO(solutionId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  if (!solutionData) {
    return (
      <Center h="50vh">
        <Text fontSize="xl" color="white">
          Solution not found
        </Text>
      </Center>
    );
  }

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{solutionSEO.metatitle}</title>
        <meta name="description" content={solutionSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={solutionSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={solutionSEO.metatitle} />
        <meta property="og:description" content={solutionSEO.metadescription} />
        <meta property="og:image" content={solutionSEO.ogimage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={solutionSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={solutionSEO.metatitle} />
        <meta
          name="twitter:description"
          content={solutionSEO.metadescription}
        />
        <meta name="twitter:image" content={solutionSEO.ogimage} />

        {/* Additional Meta Tags */}
        {/* <meta
          name="keywords"
          content="AI CCTV Camera, EdgeAI, CloudAI, GenAI, Security Camera, Surveillance Camera, ArcisAI, Smart CCTV, AI Camera, Video Analytics"
        />
        <meta name="author" content="ArcisAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" /> */}

        {/* Schema Markup */}
        {solutionSEO.schema &&
          solutionSEO.schema.length > 0 &&
          solutionSEO.schema.map((schema, index) => (
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
        <HeroSectionCarousel data={solutionData.hero} />
        <WhatIsAI data={solutionData.WhatIsAI} />
        <Box mt={{ base: "0", md: "-5%" }}>
          <OurClient />
        </Box>
        <AIFeatures data={solutionData.AIFeatures} />
        <AISolutionIndustry data={solutionData.AISolutionIndustry} />
        <WhyChoose data={solutionData.WhyChoose} />
        <CTAButton {...solutionData.CTAButton} />
        <FAQSection data={solutionData.FAQsData} />
        {/* Add other sections here as needed */}
      </PageContentWrapper>
    </>
  );
};

export default Solutions;
