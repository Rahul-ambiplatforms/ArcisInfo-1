'use client';
import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";

const BISCta = () => {
  return (
    <Box
      position="relative"
      w="100%"
      maxW="1512px"
      mx="auto"
      h={{ base: "auto", lg: "669px" }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="#030303"
        mixBlendMode="overlay"
        zIndex={0}
      />

      <Box
        position="relative"
        zIndex={1}
        mx={{ base: "5%", md: "5%", lg: "33px" }}
        my={{ base: "24px", md: "24px" }}
        bg="#F3F3F3"
        h={{ base: "auto", lg: "621px" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        py={{ base: "40px", md: "48px", lg: 0 }}
        px={{ base: "5%", md: "8%", lg: "40px" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px", lg: "60px" }}
          fontWeight="400"
          lineHeight={{ base: "32px", md: "46px", lg: "76px" }}
          textAlign="center"
          bgGradient="linear(277.16deg, #7F56D9 30.17%, #171717 97.38%)"
          bgClip="text"
          mb={{ base: 3, md: 4, lg: 6 }}
          maxW="1036px"
        >
          Engineered in India. Trusted for India.
        </Heading>

        <Text
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          lineHeight={{ base: "22px", md: "24px", lg: "28px" }}
          fontWeight="400"
          color="#171717"
          textAlign="center"
          maxW="778px"
          mb={{ base: 5, md: 6, lg: 8 }}
        >
          Deploy surveillance built for India's regulations, security standards, and real-world challenges.
        </Text>

        <CustomButton
          onClick={() => window.open("/contact-us", "_self")}
          width={{ base: "160px", md: "171px" }}
          height="40px"
          bgColor="rgba(173,173,173,0.2)"
          hoverBgColor="rgba(173,173,173,0.3)"
          borderColor="#171717"
          hoverBorderColor="#7F56D9"
          textColor="#171717"
          hoverTextColor="#7F56D9"
          fontSize="16px"
          fontWeight="400"
        >
          Schedule a Demo
        </CustomButton>
      </Box>
    </Box>
  );
};

export default BISCta;
