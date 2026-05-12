'use client';
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Box, Text, Center } from "@chakra-ui/react";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { Solution } from "./Data/Content";
import { getSolutionSEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";

const WhatIsAI           = dynamic(() => import("./Components/WhatIsAI"));
const OurClient          = dynamic(() => import("../../views/HomePage/Components/OurClient"));
const AIFeatures         = dynamic(() => import("./Components/AIFeatures"));
const AISolutionIndustry = dynamic(() => import("../../views/HomePage/Components/AISolutionIndustry"));
const WhyChoose          = dynamic(() => import("./Components/WhyChoose"));
const CTAButton          = dynamic(() => import("../../Components/CTAButton"));
const FAQSection         = dynamic(() => import("../../Components/FAQSection"));

const Solutions = ({ solutionId: solutionIdProp }) => {
  const routerParams = useParams();
  const solutionId = solutionIdProp ?? routerParams.solutionId;
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
