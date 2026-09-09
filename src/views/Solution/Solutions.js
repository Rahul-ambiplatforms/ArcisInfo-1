'use client';
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { Box, Text, Center } from "@chakra-ui/react";
import NextLink from "next/link";
import HeroSectionCarousel from "../../Components/HeroSectionCarousel";
import { Solution } from "./Data/Content";
import { getSolutionSEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";

// SEO audit fix (checklist items #48/#49): the 3 real solution pages had zero
// cross-linking to each other — a static internal-link audit found this
// orphan-cluster gap (same issue fixed on /s-series product pages).
const SOLUTION_SIBLINGS = [
  { slug: "edge-ai", title: "Edge AI Surveillance" },
  { slug: "cloud-ai", title: "Cloud AI Surveillance" },
  { slug: "generative-ai", title: "Generative AI Surveillance (ArcisGPT)" },
];

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
        {/* Visually-hidden but crawlable cross-links to sibling solution
            pages (checklist items #48/#49) — same pattern as the
            relatedLinks nav on the SEO landing pages. */}
        <Box
          as="nav"
          aria-label="Other AI surveillance solutions"
          position="absolute"
          w="1px"
          h="1px"
          overflow="hidden"
          clip="rect(0 0 0 0)"
          whiteSpace="nowrap"
          border="0"
        >
          {SOLUTION_SIBLINGS.filter((s) => s.slug !== solutionId).map((s) => (
            <NextLink key={s.slug} href={`/solution/${s.slug}`}>{s.title}</NextLink>
          ))}
        </Box>
        {/* Add other sections here as needed */}
      </PageContentWrapper>
    </>
  );
};

export default Solutions;
