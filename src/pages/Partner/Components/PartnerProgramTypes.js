import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";

const PartnerProgramTypes = ({ data }) => {
  if (!data) return null;
  const { heading, description, cards, bg_image } = data;

  return (
    <Box
      bg="#000"
      py={{ base: "40px", md: "80px" }}
      px={{ base: "16px", md: "32px", lg: "64px" }}
      position="relative"
      {...(bg_image && {
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      })}
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="full"
        h="full"
        bg="black"
        opacity={0.6}
        zIndex={0}
      />

      <VStack
        spacing={4}
        textAlign="center"
        mb={{ base: "40px", md: "60px" }}
        maxW="1200px"
        mx="auto"
        position="relative"
        zIndex={1}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight="400"
          color="white"
          lineHeight={{ base: "32px", md: "56px" }}
        >
          {heading}
        </Heading>
        <Text
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          color="gray.300"
          maxW="800px"
        >
          {description}
        </Text>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: "24px", md: "32px" }}
        position="relative"
        zIndex={1}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            bg="rgba(255,255,255,0.2)"
            backdropFilter="blur(5px)"
            p={{ base: "24px", md: "32px" }}
            transition="all 0.3s"
            // _hover={{
            //   bg: "rgba(255, 255, 255, 0.1)",
            //   transform: "translateY(-5px)",
            // }}
          >
            <Heading
              as="h3"
              fontSize={{ base: "20px", md: "24px" }}
              fontWeight="400"
              color="white"
              mb="12px"
            >
              {card.title}
            </Heading>
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              color="gray.300"
              mb="32px"
              minH={{ md: "48px" }} // Align benefits start
            >
              {card.subtitle}
            </Text>

            <VStack align="start" spacing="16px">
              {card.benefits.map((benefit, idx) => (
                <HStack key={idx} align="start" spacing="12px">
                  <Box
                    minW="20px"
                    h="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg="#A4FF79" // Green accent from ProductList filter ticks
                    borderRadius="full"
                    mt="2px"
                  >
                    <Icon viewBox="0 0 20 20" w="12px" h="12px" color="black">
                      <path
                        fill="currentColor"
                        d="M0 11l2-2 5 5L18 3l2 2L7 18z"
                      />
                    </Icon>
                  </Box>
                  <Text fontSize={{ base: "13px", md: "14px" }} color="white">
                    {benefit}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PartnerProgramTypes;
