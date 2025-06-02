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
  Link,
  VStack,
  useToast,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // For phone input, allow only digits and max 10 digits
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  // const BACKEND_URL = 'https://vmukti.com/backend/api/send-email'
  const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone validation: only digits, 10-15 digits
    const phoneRegex = /^\d{10}$/;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid phone number (10-15 digits).",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
        });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          fontSize={{ base: "2xl", md: "48px" }}
          fontWeight="700"
          color={"Get in touch"}
          mb={5}
        >
          Get in touch
        </Text>
        <VStack spacing={4} maxW="500px" mx="auto" w="100%">
          <FormControl>
            {/* <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel> */}
            <Input placeholder="Name" name="name" onChange={handleChange} />
          </FormControl>
          <FormControl>
            {/* <FormLabel fontSize={{ base: "sm", md: "md" }}>
              Phone number
            </FormLabel> */}
            <Input
              placeholder="Phone number"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
              maxLength={10}
            />
          </FormControl>
          <FormControl>
            {/* <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel> */}
            <Input
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
          </FormControl>
          <Button
            variant={"solid"}
            bgColor={"black"}
            onClick={handleSubmit}
            color={"white"}
            type="submit"
            isLoading={isLoading}
            h={"34px"}
            p={"10px 40px"}
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
        background={"linear-gradient(to bottom, white 35%, #9678E1 0%)"}
        py={{ base: 8, md: 10 }}
        px={{ base: 3, md: 5 }}
      >
        <Flex
          maxW="80%"
          mx="auto"
          bg="white"
          borderRadius="lg"
          p="5%"
          boxShadow="md"
          align="center"
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Box color="purple.500" mb={{ base: 4, md: 0 }}>
            <Flex justifyContent="center" alignItems="center">
              <Text as="span" fontWeight="700" fontSize="40px" mr={2}>
                Secure
              </Text>
              <Text
                fontSize="32px"
                height="100%"
                fontWeight="400"
                color="black"
              >
                What Matters with Advanced
              </Text>
            </Flex>

            <Text
              fontSize="40px"
              display="block"
              color="purple.500"
              fontWeight="700"
            >
              AI-Powered Surveillance
            </Text>
          </Box>
          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 28px"}
            gap={"8px"}
            flexShrink={0}
            _hover={"none"}
            w={{ base: "full", md: "auto" }}
            onClick={() =>
              (window.location.href = "https://view.arcisai.io/signup")
            }
          >
            Get Started
          </Button>
        </Flex>
        <Flex
          justify="center"
          align="center"
          mt={{ base: 10, md: 16 }}
          gap={6}
          flexWrap="wrap"
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.arcisadiance.app"
            isExternal
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            <Image
              src="/images/playstore-button.png"
              alt="Download on Play Store"
              h={{ base: "40px", md: "50px" }}
              borderRadius="md"
              boxShadow="md"
              _hover={{ filter: "brightness(110%)" }}
            />
          </Link>

          {/* App Store Button */}
          <Link
            href="https://apps.apple.com/in/app/arcisai/id6743403804"
            isExternal
            _hover={{ transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            <Image
              src="/images/appstore-button.png"
              alt="Download on App Store"
              h={{ base: "40px", md: "50px" }}
              borderRadius="md"
              boxShadow="md"
              _hover={{ filter: "brightness(110%)" }}
            />
          </Link>
        </Flex>

        <Box px={6} py={6} mt="12">
          {/* Top Row: Logo and Nav Links */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            flexWrap="wrap"
            mb={4}
          >
            {/* Logo */}
            <Image src="./images/arcisGPTcolorWhite.png" alt="Logo" w="120px" />

            {/* Navigation Links */}
            {/* <HStack
              spacing={{ base: 3, md: 6 }}
              mt={{ base: 4, md: 0 }}
              fontSize="14px"
              color="white"
            >
              <Link href="#" _hover={{ textDecoration: "none" }}>
                OUR PRODUCTS
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                PRIVACY POLICY
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                TERMS OF SERVICES
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                WARRANTY SERVICES
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                WARRANTY POLICY
              </Link>
            </HStack> */}
          </Flex>

          {/* Divider */}
          <Divider borderColor="#FFFFFF" />

          {/* Bottom Row: Social icons and copyright */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align="center"
            mt={4}
          >
            {/* Social Icons */}
            <HStack spacing={1} color="white">
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
            </HStack>

            {/* Copyright */}
            <Text
              mt={{ base: 4, md: 0 }}
              fontSize="sm"
              color="white"
              textAlign={{ base: "center", md: "right" }}
            >
              Copyright © {year} ArcisAI
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
