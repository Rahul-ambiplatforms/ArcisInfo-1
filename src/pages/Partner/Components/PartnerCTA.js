import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const PartnerCTA = ({ data }) => {
  if (!data) return null;
  const { heading, buttonText, link } = data;

  return (
    <Box bg="#F5F5F7" py={{ base: "40px", md: "80px" }} px="16px">
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        maxW="1200px"
        mx="auto"
      >
        <Text
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight="700"
          lineHeight={{ base: "1.2", md: "1.2" }}
          mb={{ base: "24px", md: "40px" }}
        >
          <Box as="span" color="#1D1D1F">
            {heading.blackText}{" "}
          </Box>
          <Box as="span" color="#8B5CF6">
            {heading.purpleText}
          </Box>
        </Text>

        <Button
          as={RouterLink}
          to={link}
          variant="solid"
          bg="#E5E5E5" // Light gray button based on image
          color="black"
          fontSize={{ base: "14px", md: "16px" }}
          h={{ base: "40px", md: "48px" }}
          px={{ base: "24px", md: "32px" }}
          borderRadius="4px" // Matching form style
          _hover={{ bg: "#d4d4d4" }}
        >
          {buttonText}
        </Button>
      </Flex>
    </Box>
  );
};

export default PartnerCTA;
