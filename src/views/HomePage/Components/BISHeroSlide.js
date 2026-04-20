'use client';
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";

const BISHeroSlide = () => {
  return (
    <Flex
      h="100%"
      w="100%"
      px={{ base: 6, md: 8 }}
      align={{ base: "center", md: "center" }}
      pt={{ base: "40%", md: "96px" }}
      pb={{ base: 20, md: 0 }}
    >
      <Box
        maxW={{ base: "100%", md: "615px" }}
        ml={{ base: 0, md: "32px" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "32px", md: "48px", lg: "60px" }}
          fontWeight="400"
          lineHeight={{ base: "40px", md: "60px", lg: "76px" }}
          bgGradient="linear(90.64deg, #171717 19.68%, #7F56D9 78.79%)"
          bgClip="text"
          mb={4}
        >
          ArcisAI Cameras Are{" "}
          <br />
          Now{" "}
          <Text as="span" fontWeight="700">
            BIS-ER Certified
          </Text>
        </Heading>

        <Text
          fontSize={{ base: "14px", md: "16px", lg: "18px" }}
          fontWeight="400"
          lineHeight={{ base: "22px", md: "28px" }}
          color="#333"
          mb={6}
          maxW="500px"
        >
          A major step forward in building{" "}
          <Text as="span" fontWeight="700">
            compliant, secure, and deployment-ready surveillance systems for India.
          </Text>
        </Text>

        <Flex align="center" gap={4} mb={8}>
          <Box
            w={{ base: "80px", md: "100px" }}
            h={{ base: "80px", md: "100px" }}
            borderRadius="16px"
            border="2px solid #171717"
            bg="white"
            p={2}
            flexShrink={0}
          >
            <Image
              src="/images/bis_icon.svg"
              alt="BIS Certification Icon"
              w="100%"
              h="100%"
              objectFit="contain"
            />
          </Box>
          <Box
            bg="#FFFFFF"
            px={4}
            h="30px"
            display="flex"
            alignItems="center"
            borderRadius="4px"
          >
            <Text
              fontSize={{ base: "13px", md: "15px" }}
              fontWeight="700"
              color="#1a1a2e"
              whiteSpace="nowrap"
            >
              R-72003735 ER01:2024
            </Text>
          </Box>
        </Flex>

        <CustomButton
          onClick={() => window.open("/BIS-ER-certification", "_self")}
          width={{ base: "140px", md: "145px" }}
          height="40px"
          bgColor="rgba(0, 0, 0, 0.05)"
          hoverBgColor="rgba(0, 0, 0, 0.1)"
          borderColor="#1a1a2e"
          hoverBorderColor="#5B2EAF"
          textColor="#1a1a2e"
          hoverTextColor="#5B2EAF"
          fontSize="14px"
        >
          Explore More
        </CustomButton>
      </Box>
    </Flex>
  );
};

export default BISHeroSlide;
