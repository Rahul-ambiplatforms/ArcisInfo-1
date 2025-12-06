import React from "react";
import { Box, Container, Heading, Text, Image, VStack } from "@chakra-ui/react";

const HeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "90vh", md: "100vh" }}
      position="relative"
      overflow="hidden"
      mt={{ base: "-15%", md: "-9%" }}
    >
      {/* Background Images */}
      {data.d_image && (
        <Image
          src={data.d_image}
          alt={data.heading}
          w="100%"
          h="100%"
          position="absolute"
          objectFit="cover"
          top="0"
          left="0"
          zIndex="0"
          display={{ base: data.m_image ? "none" : "block", md: "block" }}
        />
      )}
      {data.m_image && (
        <Image
          src={data.m_image}
          alt="Hero Background Mobile"
          w="100%"
          h="100%"
          position="absolute"
          objectFit="cover"
          top="0"
          left="0"
          zIndex="0"
          display={{ base: "block", md: "none" }}
        />
      )}

      {/* Content Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
      >
        {/* Group 1: Heading & Subheading */}
        <Box
          position="absolute"
          top={{ base: "10%", md: "15%" }}
          w="100%"
          textAlign="center"
          px={4}
        >
          <Heading
            as="h1"
            fontSize={{ base: "30px", md: "48px", lg: "60px" }}
            fontWeight="400"
            lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
            color="white"
            mb={2}
          >
            {data.heading}
          </Heading>
          <Text
            w="95%"
            mx="auto"
            fontSize={{ base: "16px", md: "20px", lg: "24px" }}
            fontWeight="700"
            color="white"
          >
            {data.subheading}
          </Text>
        </Box>

        {/* Group 2: Logo */}
        <Box
          position="absolute"
          top={{ base: "35%", md: "35%" }}
          w="100%"
          textAlign="center"
        >
          <Image
            src={data.image}
            alt="ArcisAI Logo"
            w={{ base: "220px", md: "320px", lg: "480px" }}
            mx="auto"
          />
        </Box>

        {/* Group 3: Description */}
        <Box
          position="absolute"
          top={{ base: "60%", md: "65%" }}
          w="100%"
          textAlign="center"
          px={4}
        >
          <VStack spacing={6} w="95%" mx="auto">
            {data.description.map((desc, index) => (
              <Text
                key={index}
                fontSize={{ base: "14px", md: "20px", lg: "24px" }}
                color="white"
                lineHeight={{ base: "20px", md: "24px", lg: "30px" }}
                fontWeight="400"
              >
                {desc}
              </Text>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
