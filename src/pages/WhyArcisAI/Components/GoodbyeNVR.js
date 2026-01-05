import React from "react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";

const GoodbyeNVR = ({ data }) => {
  if (!data) return null;

  return (
    <Box
      bgImage={{ base: `url(${data.m_image})`, md: `url(${data.d_image})` }}
      bgSize="100% 100%"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={{ base: "5%", md: "2%" }}
      px={{ base: "5%", md: "2%" }}
      overflow="hidden"
      h={{ base: "auto", md: "100vh" }} // Assuming full screen feel or auto
      display="flex"
      // alignItems="center"
      // bg="red"
    >
      <Box w="100%">
        <Flex direction="column" align="flex-start" h="100%">
          {/* Text Content */}
          <Box w={{ base: "100%", lg: "90%" }} textAlign="left">
            <Heading
              as="h2"
              color="white"
              fontSize={{ base: "30px", md: "48px", lg: "60px" }}
              fontWeight="400"
              lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
              mb={6}
            >
              {data.heading}
            </Heading>
            <Text
              color="#D4D4D4"
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight={{ base: "24px", md: "28px" }}
              mb={6}
              w={{ base: "100%", md: "40%" }}
              align="justify"
            >
              {data.description}
            </Text>
            <Text
              color="#D4D4D4"
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight={{ base: "24px", md: "28px" }}
              w={{ base: "100%", md: "40%" }}
              align="justify"
            >
              {data.description2}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default GoodbyeNVR;
