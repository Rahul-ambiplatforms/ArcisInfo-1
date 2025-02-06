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
    <Box w={"100%"}>
      {/* Main Flex Container */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        align="center"
        justify="space-between"
        gap={{ base: 6, lg: 0 }}
        p={{ base: 4, lg: 8 }}
      >
        {/* Left Section (Image with Callouts) */}
        <Box flex={1} position="relative">
          {/* Image Container */}
          <Box position="relative" height={{ base: "400px", md: "600px" }}>
            <Image
              src="./images/arcisGPT.png" // Replace with actual image path
              alt="Generative AI Feature"
              w="100%"
              h="100%"
              objectFit="cover"
            />

            {/* Callouts */}
            <Box
              position="absolute"
              top={{ base: "2%", md: "5%" }}
              left={{ base: "2%", md: "5%" }}
              bg="white"
              p={{ base: 2, md: 3 }}
              boxShadow="md"
              borderRadius="md"
              maxW={{ base: "150px", sm: "200px", md: "250px" }}
              textAlign="left"
              zIndex="1"
            >
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                color="gray.800"
              >
                Smart Retrieval
              </Text>
              <Text fontSize={{ base: "xx-small", sm: "xs" }} color="gray.600">
                Find moments instantly with keywords.
              </Text>
            </Box>

            <Box
              position="absolute"
              top={{ base: "30%", md: "40%" }}
              left={{ base: "5%", md: "10%" }}
              bg="white"
              p={{ base: 2, md: 3 }}
              maxW="250px"
              textAlign="left"
              zIndex="1"
            >
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                color="gray.800"
              >
                Track Anything
              </Text>
              <Text fontSize={{ base: "xx-small", sm: "xs" }} color="gray.600">
                Upload an image to locate and track objects.
              </Text>
            </Box>

            <Box
              position="absolute"
              bottom={{ base: "2%", md: "5%" }}
              left={{ base: "10%", md: "15%" }}
              bg="white"
              p={{ base: 2, md: 3 }}
              textAlign="left"
              zIndex="1"
              maxW="250px"
            >
              <Text
                fontSize={{ base: "xs", sm: "sm" }}
                fontWeight="bold"
                color="gray.800"
              >
                Enhanced Action/Activity Recognition
              </Text>
              <Text fontSize={{ base: "xx-small", sm: "xs" }} color="gray.600">
                Detect actions or unauthorized access instantly.
              </Text>
            </Box>
          </Box>
        </Box>

        {/* Right Section (Text and Features) */}
        <Box flex={1} ml={{ lg: 8 }} textAlign={{ base: "center", lg: "left" }}>
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
                <Box>
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
          <Box mt={6}>
            <Image
              src="./images/camera2.png" // Replace with actual image path
              alt="Camera Feature"
              maxW={{ base: "100%", md: "80%" }}
            />
          </Box>
        </Box>
      </Flex>

      {/* Full-Width Image */}
      <Box mt={10}>
        <Image
          src="./images/GPTStartedView.png" // Replace with actual image path
          alt="Generative AI Full View"
          w="100%"
        />
      </Box>
    </Box>
  );
}

export default GenAiInfo;
