import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Flex,
  Image,
} from "@chakra-ui/react";

const InnovationCard = ({ title, description, icon }) => {
  return (
    <VStack
      spacing={4}
      py="4"
      align="center"
      textAlign="center"
      transition="all 0.3s ease"
      _hover={{
        transform: "translateY(-5px)",
      }}
    >
      <Flex
        w={{ base: "80px", md: "130px" }}
        h={{ base: "80px", md: "130px" }}
        align="center"
        justify="center"
        bg="rgba(255, 255, 255, 0.20)"
        mb={2}
      >
        <Image loading="lazy" src={icon} alt={title} boxSize={{ base: "48px", md: "72px" }} />
      </Flex>
      <Heading
        as="h3"
        fontSize={{ base: "16px", md: "20px" }}
        fontWeight="400"
        color="white"
      >
        {title}
      </Heading>
      <Text
        color="white"
        fontSize={{ base: "14px", md: "16px" }}
        lineHeight={{ base: "15px", md: "20px" }}
      >
        {description}
      </Text>
    </VStack>
  );
};

const Innovation = ({ data }) => {
  if (!data) return null;

  return (
    <Box as="section" my="2%" color="white">
      <Box w="100%" px={{ base: 4, md: 8, lg: 16 }}>
        <VStack spacing={4} w="100%">
          <Heading
            as="h2"
            fontSize={{ base: "30px", md: "48px", lg: "60px" }}
            fontWeight="400"
            textAlign="center"
          >
            {data.heading}
          </Heading>

          <SimpleGrid
            columns={{ base: 2, md: 2, lg: 3 }}
            spacing={{ base: 2, md: 8 }}
            w="100%"
          >
            {data.array.map((item, index) => (
              <InnovationCard
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </SimpleGrid>

          <Text
            textAlign="center"
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight="700"
            mx="auto"
            color="white"
            lineHeight={{ base: "24px", md: "28px" }}
            mb={{ base: "2%", md: "1%" }}
          >
            {data.subHeading}
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Innovation;
