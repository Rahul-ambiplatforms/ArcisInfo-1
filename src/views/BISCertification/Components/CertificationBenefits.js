'use client';
import React from "react";
import { Box, Flex, Heading, Text, VStack, Image } from "@chakra-ui/react";

const CheckIcon = () => (
  <Box flexShrink={0} w={{ base: "28px", lg: "35px" }} h={{ base: "28px", lg: "35px" }}>
    <svg width="100%" height="100%" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="17.5" r="17.5" fill="#4CAF50" />
      <path d="M10 18L15 23L25 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </Box>
);

const benefits = [
  "Approved for regulated deployments",
  "Aligned with India\u2019s compliance framework",
  "Ready for immediate implementation across critical sectors",
];

const ecosystem = [
  "BIS-ER Certified Camera Hardware",
  "STQC Certified Video Management Software (VMS)",
  "Built for Government & Enterprise Deployments",
  "Designed for Compliance, Security & Scale",
];

const CertificationBenefits = () => {
  return (
    <Box
      bg="#171717"
      position="relative"
      overflow="hidden"
      maxW="1512px"
      mx="auto"
    >
      {/* Right decorative SVG — Figma: top:401, left:696, -120deg, 1242x1391 */}
      <Image
        src="/images/adiance-bg-logo.svg"
        alt=""
        aria-hidden="true"
        position="absolute"
        top={{ base: "-100px", md: "100px", lg: "-401px" }}
        left={{ base: "auto", md: "auto", lg: "496px" }}
        right={{ base: "-200px", md: "-150px" }}
        w={{ base: "400px", md: "600px", lg: "1242px" }}
        h={{ base: "auto", md: "auto", lg: "1391px" }}
        // transform="rotate(120deg)"
        opacity={{ base: "0.08", md: "0.1", lg: "1" }}
        mixBlendMode="screen"
        pointerEvents="none"
        zIndex={0}
      />

      {/* Left decorative SVG — Figma: top:1096, left:-982, -60deg, 1242x1391 */}
      <Image
        src="/images/adiance-bg-logo.svg"
        alt=""
        aria-hidden="true"
        position="absolute"
        top={{ base: "300px", md: "400px", lg: "500px" }}
        left={{ base: "-250px", md: "-350px", lg: "-250px" }}
        w={{ base: "400px", md: "600px", lg: "1242px" }}
        h={{ base: "auto", md: "auto", lg: "1391px" }}
        transform="rotate(-180deg)"
        opacity={{ base: "0.08", md: "0.1", lg: "1" }}
        mixBlendMode="screen"
        pointerEvents="none"
        zIndex={0}
      />

      {/* Section 1: "With this certification, ArcisAI is now:" */}
      <Box
        position="relative"
        zIndex={1}
        pt={{ base: "40px", md: "60px", lg: "161px" }}
        pb={{ base: "40px", md: "40px", lg: "80px" }}
        px={{ base: "5%", md: "5%", lg: "0" }}
        pl={{ base: "5%", md: "5%", lg: "28px" }}
        pr={{ base: "5%", md: "5%", lg: "4%" }}
      >
        <Box maxW={{ base: "100%", md: "85%", lg: "740px" }}>
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px", lg: "48px" }}
            fontWeight="400"
            color="white"
            lineHeight={{ base: "36px", md: "46px", lg: "60px" }}
            mb={{ base: 5, md: 6, lg: 8 }}
          >
            With this certification,
            <br />
            ArcisAI is now:
          </Heading>

          <VStack spacing={{ base: 2, md: 3 }} align="stretch">
            {benefits.map((item, i) => (
              <Flex
                key={i}
                align="center"
                gap={{ base: 3, md: 3, lg: 4 }}
                bg="rgba(255,255,255,0.2)"
                px={{ base: 3, md: 4 }}
                h={{ base: "60px", md: "65px", lg: i === 0 ? "73px" : "77px" }}
                borderRadius="0"
              >
                <CheckIcon />
                <Text
                  color="white"
                  fontSize={{ base: "14px", md: "18px", lg: "24px" }}
                  lineHeight={{ base: "20px", md: "24px", lg: "30px" }}
                  fontWeight="400"
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Box>

      {/* Section 2: "A Fully Certified Surveillance Ecosystem" */}
      <Box
        position="relative"
        zIndex={1}
        pt={{ base: "40px", md: "40px", lg: "80px" }}
        pb={{ base: "40px", md: "60px", lg: "161px" }}
        px={{ base: "5%", md: "5%", lg: "0" }}
        pl={{ base: "5%", md: "auto", lg: "767px" }}
        pr={{ base: "5%", md: "5%", lg: "28px" }}
        ml={{ base: "0", md: "auto", lg: "0" }}
      >
        <Box maxW={{ base: "100%", md: "85%", lg: "726px" }} ml={{ base: 0, md: "auto", lg: 0 }}>
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "36px", lg: "48px" }}
            fontWeight="400"
            color="white"
            lineHeight={{ base: "36px", md: "46px", lg: "60px" }}
            mb={{ base: 5, md: 6, lg: 8 }}
          >
            A Fully Certified Surveillance
            <br />
            Ecosystem
          </Heading>

          <VStack spacing={{ base: 2, md: 3 }} align="stretch">
            {ecosystem.map((item, i) => (
              <Flex
                key={i}
                align="center"
                gap={{ base: 3, md: 3, lg: 4 }}
                bg="rgba(255,255,255,0.2)"
                px={{ base: 3, md: 4 }}
                h={{ base: "60px", md: "65px", lg: i === 0 ? "73px" : "77px" }}
                borderRadius="0"
              >
                <CheckIcon />
                <Text
                  color="white"
                  fontSize={{ base: "14px", md: "18px", lg: "24px" }}
                  lineHeight={{ base: "20px", md: "24px", lg: "30px" }}
                  fontWeight="400"
                >
                  {item}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default CertificationBenefits;
