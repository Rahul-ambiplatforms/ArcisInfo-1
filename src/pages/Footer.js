import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <Box w={"100%"}>
      {/* Contact Section */}
      <Box
        as="section"
        textAlign="center"
        py={{ base: 6, md: 10 }}
        px={{ base: 3, md: 5 }}
      >
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={"gray.500"}
          mb={5}
        >
          Get in touch
        </Text>
        <VStack spacing={4} maxW="400px" mx="auto" w="100%">
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
            <Input placeholder="Name" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>
              Phone number
            </FormLabel>
            <Input placeholder="Phone number" />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
            <Input placeholder="Email" />
          </FormControl>
          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 18px"}
            gap={"8px"}
            flexShrink={0}
            _hover={"none"}
            w={{ base: "full", md: "auto" }}
          >
            Send
          </Button>
        </VStack>
      </Box>

      {/* Footer Section */}
      <Box
        as="footer"
        bg="#9678E1"
        py={{ base: 8, md: 10 }}
        px={{ base: 3, md: 5 }}
      >
        <Flex
          maxW="800px"
          mx="auto"
          bg="white"
          borderRadius="lg"
          p={8}
          boxShadow="md"
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            color="purple.500"
            mb={{ base: 4, md: 0 }}
          >
            <Text as="span" fontWeight="extrabold">
              Secure
            </Text>{" "}
            What Matters with Advanced
            <Text as="span" display="block" color="purple.500">
              AI-Powered Surveillance
            </Text>
          </Text>
          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 18px"}
            gap={"8px"}
            flexShrink={0}
            _hover={"none"}
            w={{ base: "full", md: "auto" }}
            onClick={() =>
              (window.location.href = "https://zeta.arcisai.io/signup")
            }
          >
            Get Started
          </Button>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          justify="space-between"
          // maxW="1200px"
          mx="auto"
          py={{ base: 4, md: 6 }}
          px={4} // Optional padding for consistent spacing
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Logo and Social Icons */}
          <Box
            // textAlign={{ base: "center", md: "left" }}
            mb={{ base: 6, md: 0 }}
          >
            <Image
              src="./images/arcisGPTcolorWhite.png"
              alt="Logo"
              w="120px"
              mx={{ base: "auto", md: "0" }}
            />
            <HStack
              mt={4}
              spacing={4}
              justify={{ base: "center", md: "flex-start" }}
            >
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="white"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="white"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="white"
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color="white"
              />
            </HStack>
          </Box>
          {/* Navigation Links
        <HStack
          spacing={{ base: 4, md: 6 }}
          divider={<Divider orientation="vertical" borderColor="white" />}
          wrap="wrap"
          justify={{ base: "center", md: "flex-end" }}
          textAlign="center"
          fontSize="14px"
          color="white"
        >
          <Link href="#" _hover={{ textDecoration: "none" }}>
            OUR PRODUCTS
          </Link>
          <Link href="#" _hover={{ textDecoration: "none" }}>
            PRIVACY POLICY
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            TERMS OF SERVICES
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            WARRANTY SERVICES
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            WARRANTY POLICY
          </Link>
        </HStack> */}
        </Flex>

        <Text
          textAlign="center"
          mt={4}
          fontSize={{ base: "xs", md: "sm" }}
          color="white"
        >
          Copyright © 2024 ArcisAI
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
