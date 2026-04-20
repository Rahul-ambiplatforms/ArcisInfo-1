'use client';
import React from "react";
import { Box } from "@chakra-ui/react";
import BISHeroSlide from "../../HomePage/Components/BISHeroSlide";

const BISHeroSection = () => {
  return (
    <Box
      w="full"
      h="100vh"
      position="relative"
      overflow="hidden"
      bgImage={{ base: "url(/images/bis-mobile-bg.png)", md: "url(/images/BIS_bg.png)" }}
      bgSize={{ base: "contain", md: "cover" }}
      bgPosition="center bottom"
      bgRepeat="no-repeat"
      bgColor="#F9F9F9"
      mt={{
        base: "-35%",
        md: "-7%",
      }}
    >
      <Box w="100%" h="100%" position="relative" zIndex={1}>
        <BISHeroSlide showExploreButton={false} />
      </Box>
    </Box>
  );
};

export default BISHeroSection;
