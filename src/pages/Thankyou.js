import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { FaGlobe, FaEnvelope, FaPhone } from "react-icons/fa";
import CustomButton from "../Components/CustomButton";

const Thankyou = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="Thank You!" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://arcisai.io/thank-you/" />
      </Helmet>

      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="#171717"
        zIndex={9998}
        overflow="hidden"
      >
        {/* Blurred Background */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgImage="url('/images/home_wave_gif_1.gif')"
          bgSize="cover"
          bgPosition="center"
          opacity={0.4}
          filter="blur(20px)"
          zIndex={9999}
        />

        {/* Content Overlay */}
        <Box
          position="relative"
          zIndex={10000}
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="100vh"
          px={{ base: "16px", md: "32px" }}
          py={{ base: "40px", md: "60px" }}
        >
          <VStack
            spacing={{ base: "24px", md: "32px" }}
            textAlign="center"
            maxW="600px"
            w="100%"
          >
            {/* Thank You Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "48px", md: "64px", lg: "72px" }}
              fontWeight="400"
              color="white"
              lineHeight="1.2"
            >
              Thank You!
            </Heading>

            {/* Main Message */}
            <Text
              fontSize={{ base: "16px", md: "18px", lg: "20px" }}
              fontWeight="400"
              color="white"
              maxW="500px"
            >
              We've received your request - Our team will be in touch shortly.
            </Text>

            {/* Want to talk sooner? Section */}
            <VStack spacing={{ base: "16px", md: "20px" }} mt={{ base: "8px", md: "16px" }}>
              <Text
                fontSize={{ base: "18px", md: "20px", lg: "22px" }}
                fontWeight="400"
                color="white"
              >
                Want to talk sooner?
              </Text>

              {/* Contact Options */}
              <HStack
                spacing={{ base: "24px", md: "32px", lg: "40px" }}
                flexWrap="wrap"
                justify="center"
                mt={{ base: "8px", md: "12px" }}
              >
                {/* Website */}
                <VStack spacing="8px">
                  <Icon
                    as={FaGlobe}
                    w={{ base: "24px", md: "28px" }}
                    h={{ base: "24px", md: "28px" }}
                    color="white"
                  />
                  <Link
                    href="https://www.arcisai.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    fontSize={{ base: "14px", md: "16px" }}
                    color="white"
                    _hover={{ color: "#A4FF79", textDecoration: "none" }}
                    transition="color 0.2s"
                  >
                    www.arcisai.io
                  </Link>
                </VStack>

                {/* Email */}
                <VStack spacing="8px">
                  <Icon
                    as={FaEnvelope}
                    w={{ base: "24px", md: "28px" }}
                    h={{ base: "24px", md: "28px" }}
                    color="white"
                  />
                  <Link
                    href="mailto:marketing@arcisai.io"
                    fontSize={{ base: "14px", md: "16px" }}
                    color="white"
                    _hover={{ color: "#A4FF79", textDecoration: "none" }}
                    transition="color 0.2s"
                  >
                    marketing@arcisai.io
                  </Link>
                </VStack>

                {/* Phone */}
                <VStack spacing="8px">
                  <Icon
                    as={FaPhone}
                    w={{ base: "24px", md: "28px" }}
                    h={{ base: "24px", md: "28px" }}
                    color="white"
                  />
                  <Link
                    href="tel:+919687779999"
                    fontSize={{ base: "14px", md: "16px" }}
                    color="white"
                    _hover={{ color: "#A4FF79", textDecoration: "none" }}
                    transition="color 0.2s"
                  >
                    (+91) 968 777 9999
                  </Link>
                </VStack>
              </HStack>
            </VStack>

            {/* Back to home Button */}
            <Box mt={{ base: "24px", md: "32px" }}>
              <CustomButton
                width={{ base: "200px", md: "240px" }}
                height={{ base: "44px", md: "48px" }}
                bgColor="rgba(42, 42, 42, 0.8)"
                hoverBgColor="rgba(42, 42, 42, 0.9)"
                borderColor="white"
                hoverBorderColor="#A4FF79"
                textColor="white"
                hoverTextColor="#A4FF79"
                fontSize={{ base: "14px", md: "16px" }}
                fontWeight="400"
                showGlow={false}
                showTicks={false}
                onClick={handleReturn}
              >
                Back to home
              </CustomButton>
            </Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export default Thankyou;
