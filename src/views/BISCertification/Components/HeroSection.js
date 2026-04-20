'use client';
import React from "react";
import { Box } from "@chakra-ui/react";
import BISHeroSlide from "../../HomePage/Components/BISHeroSlide";

const BISHeroSection = () => {
  return (
    <Box
      w="full"
      h="919px"
      position="relative"
      overflow="hidden"
      bgImage="url(/images/BIS_bg.png)"
      bgSize="cover"
      bgPosition={{ base: "center 20%", md: "center bottom" }}
      bgRepeat="no-repeat"
      mt={{
        base: "-35%",
        md: "-11%",
      }}
    >
      <Box w="100%" h="100%" position="relative" zIndex={1}>
        <BISHeroSlide />
      </Box>
    </Box>
  );
};

export default BISHeroSection;
