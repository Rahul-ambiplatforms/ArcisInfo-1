import { Box, Flex, Heading, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaRobot, FaSearch, FaTasks, FaUserCircle } from "react-icons/fa";

function GenAiInfo() {
  const features = [
    {
      icon: FaSearch,
      title: "Smart Retrieval",
      description: "Find What You Need, Fast.",
    },
    {
      icon: FaUserCircle,
      title: "Track Anything - Object/Person",
      description:
        "Track Anything - Upload, Detect, and Follow Specific Targets.",
    },
    {
      icon: FaTasks,
      title: "Action/Activity Recognition",
      description: "Detect Actions Instantly.",
    },
    {
      icon: FaRobot,
      title: "Visual Intelligence with GPT",
      description: "Live Descriptions Right on Your Feed.",
    },
  ];
  return (
    <Box w={"100%"} position="relative" minH="700px">


      {/* Main Flex Container */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 6, lg: 0 }}
        p={{ base: 4, lg: 8 }}
        zIndex={2}
        position="relative"
      >
        {/* Left Section (Image with Callouts) */}
        <Flex alignSelf="flex-start" flex={1} position="relative">
          <Box position="absolute" zIndex={1} bg="#9678E1" width="100%" height="349px" top="25%" />

          {/* Image Container */}
          <Box position="relative" zIndex={2}>
            <Image
              src="./images/arcisGPT.png" // Replace with actual image path
              alt="Generative AI Feature"
              w="100%"
              h="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>

        {/* Right Section (Text and Features) */}
        <Box flex={1} ml={{ lg: 8 }} textAlign={{ base: "center", lg: "left" }}
        >
          {/* Heading */}
          <Heading as="h2" size="xl" color="purple.500" mb={4}>
            Generative AI
          </Heading>

          {/* Subheading */}
          <Text fontSize="lg" color="gray.600" mb={8}>
            Unlock the Power of India's First Gen AI Solutions in Video
            Surveillance –{" "}
            <Text as="span" fontWeight="bold" color="purple.700">
              Proudly Made in India.
            </Text>
          </Text>

          {/* Features List */}
          <Stack spacing={6} align={{ base: "center", lg: "flex-start" }}>
            {features.map((feature, index) => (
              <Flex
                key={index}
                align="center"
                textAlign={{ base: "center", lg: "left" }}
                bg="white"
                p={4}
                w="full"
                maxW="400px"
              >
                <Icon as={feature.icon} boxSize={6} color="purple.500" mr={4} />
                <Box bg-test w="full">
                  <Text fontWeight="bold" fontSize="md" color="gray.800">
                    {feature.title}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {feature.description}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Stack>

          {/* Second Image */}
          <Box mt={6} zIndex={4} position="relative">
            <Image
              src="./images/camera2.png" // Replace with actual image path
              alt="Camera Feature"
              maxW={{ base: "100%", md: "80%" }}
            />
          </Box>


        </Box>
      </Flex>
      {/* Full-Width Image (Background) */}
      <Box position="relative" zIndex={2} top="70%" left={0} w="100%" h="100%">
        <Image
          src="./images/GPTStartedView.png"
          alt="Generative AI Full View"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
}

export default GenAiInfo;
