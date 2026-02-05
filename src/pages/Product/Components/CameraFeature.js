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

const CameraFeature = ({ data, headingInBackground = false }) => {
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
  const descriptionColor =
    styles?.description?.color || styles?.descriptionColor || "gray.300";
  const featureColor = styles?.featureColor || "white";
  const descriptionTextAlign = styles?.descriptionTextAlign || "justify";
  const descriptionWidth = {
    base: styles?.descriptionWidth?.mobile || "95%",
    md: styles?.descriptionWidth?.tablet || "80%",
    lg: styles?.descriptionWidth?.laptop || "80%",
    xl: styles?.descriptionWidth?.bigscreen || "80%",
  };

  const headingFontSize = styles?.heading?.fontSize || {
    base: "24px",
    md: "36px",
  };
  const headingColor = styles?.heading?.color || "white";
  const descriptionFontSize = styles?.description?.fontSize || {
    base: "14px",
    md: "16px",
  };

  return (
    <Box w="100%" mt={{ base: "5%", md: "2%" }}>
      <Box w="full" mx="auto">
        {/* Heading - Outside the Image */}
        {!headingInBackground && (
          <Heading
            as="h2"
            fontSize={headingFontSize}
            fontWeight="400"
            textAlign="center"
            color={headingColor}
            mb={{ base: 4, md: 6 }}
          >
            {heading}
          </Heading>
        )}

        {/* Image Section with Overlapping Description and Features */}
        <Box
          w="100vw"
          h={d_image || m_image ? { base: "1086px", md: "1651px" } : "auto"}
          position="relative"
          backgroundImage={
            d_image || m_image
              ? { base: `url(${m_image})`, md: `url(${d_image})` }
              : "none"
          }
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          overflow="hidden"
        >
          {headingInBackground && (
            <Heading
              as="h2"
              fontSize={{ base: "24px", md: "50px" }}
              fontWeight="400"
              textAlign="center"
              width="100%"
              color={styles?.headingColor || "white"}
              mb={{ base: 4, md: 6 }}
              px={{ base: 4, md: 8 }}
              pt={{ base: 4, md: 6 }}
            >
              {heading}
            </Heading>
          )}
          {/* <Box
            w="100%"
            h="100%"
            bg="blackAlpha.400"
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="blackAlpha.400"
            position="absolute" // Duplicate line removal
            top={0}
            left={0}
          />{" "} */}
          {/* Optional overlay for readability */}

          <Box position="relative" zIndex={1} px={{ base: 4, md: 2 }} pb={20}>
            {/* Description */}
            <VStack
              spacing={4}
              textAlign="center"
              mt={contentMarginTop}
              mx="auto"
            >
              <Text
                fontSize={descriptionFontSize}
                color={descriptionColor}
                textAlign={descriptionTextAlign}
                w={descriptionWidth}
                lineHeight={{ base: "15px", md: "20px" }}
              >
                {description}
              </Text>
            </VStack>

            {/* Features Grid */}
            <Box
              mt={featuresMarginTop}
              w="100%"
              display="flex"
              justifyContent="center"
            >
              <Box w={{ base: "100%", md: "90%", lg: "80%" }}>
                <Flex
                  flexWrap="wrap"
                  justify={styles?.justify || "center"}
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
                        as="h3"
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
    </Box>
  );
};

export default CameraFeature;
