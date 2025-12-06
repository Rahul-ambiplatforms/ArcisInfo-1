import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Flex,
  Icon,
} from "@chakra-ui/react";

const CameraFeature = ({ data }) => {
  if (!data) return null;

  const { heading, description, d_image, m_image, featuresList, styles } = data;

  // Map custom breakpoints to Chakra UI breakpoints
  const contentMarginTop = {
    base: styles?.contentMarginTop?.mobile || "5%",
    md: styles?.contentMarginTop?.tablet || "5%",
    lg: styles?.contentMarginTop?.laptop || "5%",
    xl: styles?.contentMarginTop?.bigscreen || "5%",
  };

  const featuresMarginTop = {
    base: styles?.featuresMarginTop?.mobile || "5%",
    md: styles?.featuresMarginTop?.tablet || "5%",
    lg: styles?.featuresMarginTop?.laptop || "5%",
    xl: styles?.featuresMarginTop?.bigscreen || "5%",
  };

  const alignment = styles?.alignment || "center";
  const descriptionColor = styles?.descriptionColor || "gray.300";
  const featureColor = styles?.featureColor || "white";

  return (
    <Box w="100%" mt={{ base: "5%", md: "4%" }} >
      <Box w="full" mx="auto">
        {/* Heading - Outside the Image */}
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px" }}
          fontWeight="600"  
          textAlign="center"
          color="white"
          mb={{ base: 4, md: 6 }}
        >
          {heading}
        </Heading>

        {/* Image Section with Overlapping Description and Features */}
        <Box
          w="100vw"
          h={{ base: "1086px", md: "1651px" }}
          position="relative"
          backgroundImage={{ base: `url(${m_image})`, md: `url(${d_image})` }}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          overflow="hidden"
        >
          {/* <Box
            w="100%"
            h="100%"
            bg="blackAlpha.400"
            position="absolute"
            top={0}
            left={0}
          />{" "} */}
          {/* Optional overlay for readability */}

          <Box position="relative" zIndex={1} px={{ base: 4, md: 8 }} pb={20}>
            {/* Description */}
            <VStack
              spacing={4}
              textAlign="center"
              mt={contentMarginTop}
              mx="auto"
            >
              <Text
                fontSize={{ base: "14px", md: "16px" }}
                color={descriptionColor}
                textAlign="justify"
                w={{base:"95%",md:"80%"}}
                lineHeight={{ base: "15px", md: "20px" }}
              >
                {description}
              </Text>
            </VStack>

            {/* Features Grid */}
            <Box mt={featuresMarginTop} w="100%">
              <Flex
                flexWrap="wrap"
                justify="center"
                gap={{ base: 2, md: 10 }} // Reduced gap for mobile to fit 3
                textAlign={alignment}
              >
                {featuresList.map((feature, index) => (
                  <VStack
                    key={index}
                    spacing={2}
                    w={{ base: "30%", md: "20%" }} // 30% width for 3 items per row on mobile
                    align="center"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color={featureColor}
                      // fontSize={{ base: "16px", md: "20px" }}
                      w={{ base: "50px", md: "72px" }}
                      h={{ base: "50px", md: "72px" }}
                    >
                      {feature.icon}
                    </Box>
                    <Text
                      fontSize={{ base: "14px", md: "20px" }}
                      fontWeight="400"
                      color={featureColor}
                    >
                      {feature.name}
                    </Text>
                  </VStack>
                ))}
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraFeature;
