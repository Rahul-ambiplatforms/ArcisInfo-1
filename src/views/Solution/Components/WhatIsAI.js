import React from "react";
import { Box, Heading, Text, VStack, Container } from "@chakra-ui/react";

const WhatIsAI = ({ data }) => {
  if (!data) return null;

  const { heading, description, image } = data;

  return (
    <Box
      w="100%"
      minH={{ base: "auto", md: "400px" }}
      bgImage={`url(${image})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
      display="flex"
        alignItems="center"
        justifyContent="center"
      py={{ base: 4, md: 8 }}
      //   px={{ base: 4, md: 8 }}
    >
      {/* Dark Overlay for readability */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="blackAlpha.700"
        zIndex={1}
      /> */}

      <Box w="100%" position="relative" zIndex={2}>
        <VStack spacing={4} textAlign="center" color="white">
          <Heading
            as="h2"
            fontSize={{ base: "28px", md: "48px" }}
            fontWeight="400"
            lineHeight={{ base: "1.2", md: "1.2" }}
            mb={4}
          >
            {heading}
          </Heading>

          <VStack spacing={1} w={{ base: "100%", md: "90%" }} mx="auto">
            {description.map((paragraph, index) => (
              <Text
                key={index}
                fontSize={{ base: "16px", md: "18px" }}
                lineHeight={{ base: "20px", md: "25px" }}
                fontWeight="400"
              >
                {paragraph}
              </Text>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default WhatIsAI;
