import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Flex,
  VStack,
} from "@chakra-ui/react";

const AIFeatures = ({ data }) => {
  if (!data) return null;

  const textColor = data.textColor || "white";

  return (
    <Box
      as="section"
      py={{ base: "4%", md: "2%" }}
      position="relative"
      bg={data.bgColor || "#000000"}
      h="auto"
    >
      <Box w="100%" position="relative" zIndex="1">
        {/* Header Section */}
        <VStack spacing={6} textAlign="center" mb={16}>
          <Heading
            as="h2"
            w={{ base: "100%", md: "100%" }}
            fontSize={{ base: "30px", md: "60px" }}
            color={textColor}
            fontWeight="400"
            lineHeight={{ base: "38px", md: "76px" }}
          >
            {data.heading}
          </Heading>
          <Text
            fontSize={{ base: "14px", md: "18px" }}
            color={textColor}
            w="95%"
            lineHeight={{ base: "15px", md: "20px" }}
            fontWeight="400"
            mt={{ base: "35%", md: "0" }}
          >
            {data.description}
          </Text>
        </VStack>

        {/* Desktop Zig-Zag Grid View */}
        <SimpleGrid
          columns={4}
          spacing={2}
          display={{ base: "none", md: "grid" }}
          px="4%"
        >
          {(() => {
            const gridItems = [];
            const features = data.features;
            const totalBoxes = 20; // 5 rows × 4 columns

            // Initialize all as empty
            for (let i = 0; i < totalBoxes; i++) {
              gridItems[i] = { type: "empty" };
            }

            // Row 0: [image0, empty, image2, empty]
            gridItems[0] = { type: "image", feature: features[0] };
            gridItems[2] = { type: "image", feature: features[2] };

            // Row 1: [text0, image1, text2, image3]
            gridItems[4] = { type: "text", feature: features[0] };
            gridItems[5] = { type: "image", feature: features[1] };
            gridItems[6] = { type: "text", feature: features[2] };
            gridItems[7] = { type: "image", feature: features[3] };

            // Row 2: [image4, text1, image6, text3]
            gridItems[8] = { type: "image", feature: features[4] };
            gridItems[9] = { type: "text", feature: features[1] };
            gridItems[10] = { type: "image", feature: features[6] };
            gridItems[11] = { type: "text", feature: features[3] };

            // Row 3: [text4, image5, text6, image7]
            gridItems[12] = { type: "text", feature: features[4] };
            gridItems[13] = { type: "image", feature: features[5] };
            gridItems[14] = { type: "text", feature: features[6] };
            gridItems[15] = { type: "image", feature: features[7] };

            // Row 4: [empty, text5, empty, text7]
            gridItems[17] = { type: "text", feature: features[5] };
            gridItems[19] = { type: "text", feature: features[7] };

            return gridItems.map((item, index) => {
              if (!item || item.type === "empty") {
                return <Box key={index} />;
              }
              if (item.type === "image") {
                return <FeatureImageCard key={index} feature={item.feature} />;
              }
              if (item.type === "text") {
                return (
                  <FeatureTextCard
                    key={index}
                    feature={item.feature}
                    textColor={textColor}
                  />
                );
              }
              return <Box key={index} />;
            });
          })()}
        </SimpleGrid>

        {/* Mobile Horizontal Scroll View */}
        <Flex
          display={{ base: "flex", md: "none" }}
          overflowX="auto"
          css={{
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
            scrollSnapType: "x mandatory",
          }}
          gap={4}
          pb={4}
          px="5%"
        >
          {data.features.map((feature, index) => (
            <Box
              key={index}
              minW="200px"
              w="250px"
              flexShrink={0}
              textAlign="left"
              scrollSnapAlign="center"
            >
              <FeatureCard feature={feature} textColor={textColor} />
            </Box>
          ))}
        </Flex>

        <Text
          textAlign="center"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="700"
          color={textColor}
          mt={16}
          px={4}
          maxW="container.xl"
          mx="auto"
        >
          {data.subHeading}
        </Text>
      </Box>
    </Box>
  );
};

const FeatureCard = ({ feature, textColor }) => {
  if (!feature) return null;
  return (
    <Box textAlign="left" w="100%">
      <Image
        src={feature.image}
        alt={feature.name}
        w="100%"
        h="auto"
        objectFit="cover"
        mb={4}
        loading="lazy"
      />
      <Heading as="h3" fontSize="lg" mb={2} color={textColor}>
        {feature.name}
      </Heading>
      <Text color={textColor} fontSize="sm" lineHeight="1.5">
        {feature.description}
      </Text>
    </Box>
  );
};

const FeatureImageCard = ({ feature }) => {
  if (!feature) return null;
  return (
    <Box textAlign="left" w="100%">
      <Image
        src={feature.image}
        alt={feature.name}
        w="100%"
        h="auto"
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  );
};

const FeatureTextCard = ({ feature, textColor }) => {
  if (!feature) return null;
  return (
    <Box textAlign="left" w="100%">
      <Heading
        as="h3"
        fontSize={{ base: "16px", md: "20px" }}
        mb={2}
        color={textColor}
      >
        {feature.name}
      </Heading>
      <Text
        color={textColor}
        fontSize={{ base: "14px", md: "16px" }}
        lineHeight={{ base: "15px", md: "18px" }}
      >
        {feature.description}
      </Text>
    </Box>
  );
};

export default AIFeatures;
