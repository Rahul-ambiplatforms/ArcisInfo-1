import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  VStack,
} from "@chakra-ui/react";

const PoweredBy = ({ data }) => {
  if (!data) return null;

  return (
    <Box as="section" py={{ base: 0, md: 0 }} color="white">
      <Box w="100%" px={{ base: 0, md: 0, lg: 0 }}>
        <Flex
          direction={{ base: "column-reverse", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 4, lg: 2 }}
        >
          {/* Left Side: Content */}
          <Box
            flex="1"
            w={{ base: "100%", md: "50%" }}
            px={{ base: 4, md: 6, lg: 8 }}
            mt="-5%"
          >
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "48px", lg: "60px" }}
              fontWeight="400"
              mb={4}
              lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
            >
              {data.heading}
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "24px" }}
              fontWeight="700"
              color="white"
              mb={8}
            >
              {data.subheading}
            </Text>

            <VStack spacing={6} mb={{ base: "4%" }} align="start">
              {data.description.map((desc, index) => (
                <Text
                  key={index}
                  fontSize={{ base: "16px", md: "24px" }}
                  lineHeight={{ base: "20px", md: "28px" }}
                  fontWeight="400"
                  align="justify"
                  color="white"
                >
                  {desc}
                </Text>
              ))}
            </VStack>
          </Box>

          {/* Right Side: Image */}
          <Box
            flex="1"
            w="100%"
            display="flex"
            justifyContent={{ base: "center", lg: "flex-end" }}
          >
            <Box position="relative">
              {/* Placeholder for the stylized background if needed, 
                    but assuming the image provided by user (or placeholder) 
                    will be used here. 
                */}
              <Image
                src={data.image}
                alt="Adiance Technologies"
                w={{ base: "100%", md: "762px" }}
                h={{ base: "auto", md: "700px" }}
                objectFit="cover"
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default PoweredBy;
