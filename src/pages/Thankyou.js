import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  Image,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

const handleReturn = () => {
  window.location.href = "/"; // Go back to homepage
};

const Thankyou = () => {
  return (
    <>
      <Helmet>
        <title>Thank You</title>
        <meta name="description" content="Thank You!" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://arcisai.io/thank-you/" />
      </Helmet>

      <Box
        bg="white"
        borderRadius="24px"
        mt={{ base: "4%", md: "8%" }}
        h="492px"
        mx="auto"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
          gap={{ base: 6, lg: 12 }}
        >
          {/* Left side: Illustration */}
          <Box w={{ base: "100%", md: "60%" }}>
            <Image
              src="/images/thankyou.png"
              alt="Illustration of a robot catching a flying letter with a net"
            />
          </Box>

          {/* Right side: Content */}
          <VStack
            ml={{ lg: "-20%" }}
            spacing={4}
            align={{ base: "center", lg: "center" }}
            textAlign={{ base: "center", lg: "center" }}
          >
            <Heading as="h1" fontSize={{ base: "48px", md: "64px" }}>
              <Text as="span" color="#3F77A5">
                Thank{" "}
              </Text>
              <Text as="span" color="#DB7B3A">
                You!
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "24px", md: "24px" }}
              fontWeight="medium"
              color="#000"
              w="70%"
            >
              We’ve received your request - Our team will be in touch shortly.
            </Text>

            <Text fontSize="16px" color="#000" maxW="420px">
              Want to talk sooner? Call us at{" "}
              <a
                href="tel:+919687779999"
                style={{ color: "#3F77A5", fontWeight: 500 }}
              >
                (+91) 968 777 9999
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:marketing@arcisai.io"
                style={{ color: "#3F77A5", fontWeight: 500 }}
              >
                marketing@arcisai.io
              </a>
              .
            </Text>

            <Text fontSize="16px" color="#000" maxW="420px" fontStyle="italic">
              We’re here to upgrade your security with next-gen intelligence.
              <br />– The ArcisAI Team
            </Text>

            <Button
              bg="#3F77A5"
              color="white"
              size="lg"
              px={8}
              mt={4}
              borderRadius="24px"
              _hover={{ bg: "#2c5a7d" }}
              onClick={handleReturn}
            >
              Go Back to Homepage
            </Button>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default Thankyou;
