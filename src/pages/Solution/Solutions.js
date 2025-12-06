import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Center } from "@chakra-ui/react";
import HeroSection from "../../Components/HeroSection"; // Assuming this is the correct path for the reusable HeroSection
import WhatIsAI from "./Components/WhatIsAI";
import OurClient from "../../pages/HomePage/Components/OurClient";
import AIFeatures from "./Components/AIFeatures";
import AISolutionIndustry from "../../pages/HomePage/Components/AISolutionIndustry";
import CTAButton from "../../Components/CTAButton";
import WhyChoose from "./Components/WhyChoose";
import FAQSection from "../../Components/FAQSection";
import { Solution } from "./Data/Content";

const Solutions = () => {
  const { solutionId } = useParams();
  const solutionData = Solution[solutionId];

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
      <HeroSection data={solutionData.hero} />
      <WhatIsAI data={solutionData.WhatIsAI} />
      <OurClient />
      <AIFeatures data={solutionData.AIFeatures} />
      <AISolutionIndustry data={solutionData.AISolutionIndustry} />
      <WhyChoose data={solutionData.WhyChoose} />
      <CTAButton {...solutionData.CTAButton} />
      <FAQSection data={solutionData.FAQsData} />
      {/* Add other sections here as needed */}
    </>
  );
};

export default Solutions;
