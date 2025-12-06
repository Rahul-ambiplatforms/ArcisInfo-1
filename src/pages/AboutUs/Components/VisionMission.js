import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  VStack,
} from "@chakra-ui/react";

const VisionMissionCard = ({ description }) => (
  <Box
    bg="rgba(255, 255, 255, 0.2)"
    // backdropFilter="blur(10px)"
    p={4}
    borderColor="whiteAlpha.200"
    w={{ base: "290px", lg: "230px", xl: "270px" }}
    h={{ base: "290px", lg: "230px", xl: "270px" }}
    mx={{ base: "auto", lg: "auto", xl: "auto" }}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Text
      color="gray.200"
      fontSize={{ base: "sm", md: "md" }}
      lineHeight="1.4"
      textAlign="center"
    >
      {description}
    </Text>
  </Box>
);

const SectionBlock = ({ data, isReversed }) => {
  return (
    <Flex
      direction={{ base: "column", lg: isReversed ? "row-reverse" : "row" }}
      align="center"
      justify="space-between"
      gap={{ base: 4, lg: 3 }}
      py={{ base: 4, md: 2 }}
      // bg="red"
    >
      {/* Text Content */}
      <Box
        flex="1"
        textAlign={{ base: "center", lg: isReversed ? "right" : "left" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "30px", md: "48px", lg: "60px" }}
          fontWeight="400"
          color="white"
          mb={2}
        >
          {data.name}
        </Heading>
        <Text
          fontSize={{ base: "16px", md: "24px" }}
          color="white"
          fontWeight="400"
        >
          {data.heading}
        </Text>
      </Box>

      {/* Cards Grid */}
      <Box flex="2" w="100%">
        <Flex
          wrap={{ base: "wrap", lg: "nowrap" }}
          gap={4}
          justify={{
            base: "center",
            lg: isReversed ? "flex-start" : "flex-end",
          }}
        >
          {data.array.map((item, index) => (
            <VisionMissionCard key={index} description={item.description} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

const VisionMission = ({ visionData, missionData }) => {
  if (!visionData || !missionData) return null;

  return (
    <Box
      as="section"
      position="relative"
      py={{ base: 8, md: 8 }}
      overflow="hidden"
      bg="black"
    >
      {/* Background GIF */}
      <Image
        src="/images/home_wave_gif_1.gif"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="100%"
        h={{ base: "50%", md: "100%" }}
        objectFit="cover"
        opacity={1}
        zIndex={0}
        pointerEvents="none"
      />

      {/* Gradient Overlay for better text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-b, black, transparent, black)"
        zIndex={1}
        pointerEvents="none"
        // bg="red"
      />

      <Box
        w="full"
        px={{ base: 2, md: 4, lg: 8 }}
        position="relative"
        zIndex={2}
      >
        <VStack spacing={{ base: 2, md: 4 }} w="100%">
          {/* Vision Section - Standard Layout (Text Left, Cards Right) */}
          <SectionBlock data={visionData} isReversed={false} />

          {/* Mission Section - Reversed Layout (Cards Left, Text Right) */}
          <SectionBlock data={missionData} isReversed={true} />
        </VStack>
      </Box>
    </Box>
  );
};

export default VisionMission;
