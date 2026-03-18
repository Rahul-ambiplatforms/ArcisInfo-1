import React from "react";
import { Box, Container, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";

const Services = ({ data }) => {
  if (!data) return null;

  return (
    <Box py={{ base: "5%", md: "2%" }}>
      <Box px="2%" w="100%">
        <SimpleGrid columns={{ base: 2, lg: 5 }} spacingX={8} spacingY={12}>
          {data.map((item, index) => (
            <Flex key={index} direction="column" align="center" textAlign="center">
              {/* Icon Box */}
              <Flex
                align="center"
                justify="center"
                w={{ base: "80px", md: "130px" }}
                h={{ base: "80px", md: "130px" }}
                bg="rgba(255, 255, 255, 0.1)"
                mb={6}
                color="white"
                fontSize={{ base: "30px", md: "48px" }}
              >
                {item.icon}
              </Flex>

              {/* Text Content */}
              <Heading
                as="h3"
                color="white"
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight="400"
                mb={3}
              >
                {item.name}
              </Heading>
              <Text
                color="#D4D4D4"
                fontSize={{ base: "12px", md: "14px" }}
                lineHeight={{ base: "18px", md: "20px" }}
              >
                {item.description}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Services;
