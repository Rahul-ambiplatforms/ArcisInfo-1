import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Center,
  Icon,
} from "@chakra-ui/react";

const WhyChoose = ({ data }) => {
  if (!data) return null;

  return (
    <Box as="section" py={{ base: "10%", md: "5%" }} color="white">
      <VStack spacing={16} textAlign="center" w="90%" mx="auto">
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "48px" }}
          fontWeight="400"
          lineHeight={{ base: "32px", md: "60px" }}
          maxW="container.lg"
        >
          {data.heading}
        </Heading>

        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          spacingX={{ base: 4, md: 8 }}
          spacingY={{ base: 12, md: 16 }}
          w="100%"
        >
          {data.features.map((feature, index) => {
            return (
              <VStack key={index} spacing={6}>
                <Center
                  w={{ base: "80px", md: "130px" }}
                  h={{ base: "80px", md: "130px" }}
                  bg="rgba(255, 255, 255, 0.2)"
                  borderRadius="md"
                >
                  {feature.icon ? (
                    <Icon
                      as={feature.icon}
                      w={{ base: "50px", md: "80px" }}
                      h={{ base: "50px", md: "80px" }}
                      color="white"
                    />
                  ) : null}
                </Center>
                <VStack spacing={3}>
                  <Text
                    fontSize={{ base: "16px", md: "20px" }}
                    fontWeight="700"
                    textAlign="center"
                  >
                    {feature.title}
                  </Text>
                  <Text
                    fontSize={{ base: "12px", md: "14px" }}
                    color="gray.400"
                    textAlign="center"
                    lineHeight="1.6"
                  >
                    {feature.description}
                  </Text>
                </VStack>
              </VStack>
            );
          })}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default WhyChoose;
