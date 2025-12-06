import React from "react";
import { Box, Container, Heading, Text, Flex } from "@chakra-ui/react";

const ArcisVMS = ({ data }) => {
  if (!data) return null;

  return (
    <Box
      bgImage={{ base: `url(${data.m_image})`, md: `url(${data.d_image})` }}
      bgSize="100% 100%"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={{ base: "5%", md: "1%" }}
      // px={{ base: "5%", md: "2%" }}
      overflow="hidden"
      h={{ base: "auto", md: "100vh" }}
      display="flex"

    >
      <Box w="100%">
        <Flex
          direction="column"
          align="center"
          justify="flex-start"
          h="100%"
          textAlign="center"
          // pt={{ base: "5%", md: "2%" }}
        >
          <Heading
            as="h2"
            bgGradient="linear-gradient(91deg, #7F56D9 0%, #171717 100%)"
            bgClip="text"
            fontSize={{ base: "24px", md: "40px", lg: "48px" }}
            fontWeight="400"
            lineHeight={{ base: "32px", md: "48px", lg: "56px" }}
            mb={2}
            w={{ base: "100%", md: "90%" }}
          >
            {data.heading}
          </Heading>
          <Text
            color="#171717"
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            lineHeight={{ base: "15px", md: "20px", lg: "28px" }}
            w={{base: "95%", md: "90%"}}
          >
            {data.description}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ArcisVMS;
