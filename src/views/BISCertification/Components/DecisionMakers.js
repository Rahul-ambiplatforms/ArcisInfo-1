'use client';
import React from "react";
import { Box, Heading, Text, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const cards = [
  {
    image: "/images/Goverment&SmartCity.png",
    title: "Government & Smart Cities",
    description: "Ready for approvals. Faster project execution.",
  },
  {
    image: "/images/SystemIntergratoPartner.png",
    title: "System Integrators & Partners",
    description: "Sell without compliance risk. Close deals with confidence.",
  },
  {
    image: "/images/Enterprice&Critical.png",
    title: "Enterprise & Critical Infrastructure",
    description: "Audit-ready surveillance built for secure operations.",
  },
];

const DecisionMakers = () => {
  return (
    <Box
      bg="#171717"
      py={{ base: "48px", md: "60px", lg: "80px" }}
      px={{ base: "5%", md: "5%", lg: "33px" }}
      maxW="1512px"
      mx="auto"
    >
      <Heading
        as="h2"
        fontSize={{ base: "28px", md: "40px", lg: "60px" }}
        fontWeight="400"
        color="white"
        lineHeight={{ base: "36px", md: "50px", lg: "76px" }}
        textAlign="center"
        mb={{ base: 8, md: 10, lg: 12 }}
        maxW="1448px"
        mx="auto"
      >
        Built for Every Decision Maker
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 6, lg: "32px" }}>
        {cards.map((card, i) => (
          <Box key={i} overflow="hidden">
            <Box
              position="relative"
              overflow="hidden"
              mb={4}
              w="100%"
              h={{ base: "220px", md: "260px", lg: "341px" }}
            >
              <Image
                src={card.image}
                alt={card.title}
                w="100%"
                h="100%"
                objectFit="cover"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.05)" }}
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                bg="linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))"
                pointerEvents="none"
              />
            </Box>
            <Text
              color="white"
              fontSize={{ base: "18px", md: "20px", lg: "24px" }}
              lineHeight={{ base: "24px", md: "26px", lg: "30px" }}
              fontWeight="400"
              mb={1}
            >
              {card.title}
            </Text>
            <Text
              color="white"
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              lineHeight={{ base: "18px", md: "20px" }}
              fontWeight="400"
              textAlign="justify"
            >
              {card.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DecisionMakers;
