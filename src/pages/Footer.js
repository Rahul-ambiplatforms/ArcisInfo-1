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
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";
import ContactUs from "./ContactUs";

function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    customerType: "",
    camerasFor: "",
    customerQuantity: "",
    leadType: "Arcis Website",
    updates: false,
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

  const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";
  // const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.location ||
      !formData.camerasFor ||
      !formData.customerType
    ) {
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
        description: "Please enter a valid 10-digit phone number.",
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

        navigate("/thank-you");
        // window.location.href = "/thank-you";

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          customerType: "",
          camerasFor: "",
          message: "",
          customerQuantity: "",
          leadType: "Arcis Website",
          updates: false,
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
      <ContactUs />
      {/* <Box
        as="section"
        py={{ base: 10, md: 16 }}
        px={{ base: 4, md: 8 }}
        bg="gray.50"
      >
        <Box
          maxW="600px"
          mx="auto"
          bg="white"
          p={{ base: 6, md: 10 }}
          borderRadius="xl"
          boxShadow="lg"
        >
          <Text
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            color="gray.800"
            mb={6}
            textAlign="center"
          >
            Get in touch
          </Text>
          <VStack spacing={5} as="form" onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                placeholder="Enter your name"
                name="name"
                onChange={handleChange}
                value={formData.name}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Phone number</FormLabel>
              <Input
                placeholder="Enter your phone number"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                maxLength={10}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter your email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Company</FormLabel>
              <Input
                placeholder="Enter your company name"
                name="company"
                onChange={handleChange}
                value={formData.company}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                placeholder="Enter your location"
                name="location"
                onChange={handleChange}
                value={formData.location}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>I want cameras for</FormLabel>
              <Select
                placeholder="Select an option"
                name="camerasFor"
                onChange={handleChange}
                value={formData.camerasFor}
                focusBorderColor="purple.500"
                borderRadius="md"
              >
                <option value="Office">Office</option>
                <option value="Factory">Factory</option>
                <option value="Home">Home</option>
                <option value="Other">Other</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Customer Quantity (Optional)</FormLabel>
              <Input
                placeholder="e.g., 10-20"
                name="customerQuantity"
                onChange={handleChange}
                value={formData.customerQuantity}
                focusBorderColor="purple.500"
                borderRadius="md"
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="purple"
              isLoading={isLoading}
              w="full"
              py={6}
              fontSize="lg"
              mt={4}
              borderRadius="md"
              _hover={{
                bgGradient: "linear(to-r, purple.500, pink.500)",
                boxShadow: "lg",
              }}
            >
              Send Message
            </Button>
          </VStack>
        </Box>
      </Box> */}

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
          <Flex
            color="purple.500"
            mb={{ base: 4, md: 0 }}
            gap={2}
            direction={"column"}
          >
            <Flex
              justifyContent="center"
              alignItems="center"
              gap={2}
              direction={{ base: "column", md: "row" }}
            >
              <Text
                fontWeight="700"
                fontSize={{ base: "24px", sm: "28px", md: "40px" }}
              >
                Your Security
              </Text>
              <Text
                fontSize={{ base: "16px", sm: "24px", md: "32px" }}
                height="100%"
                fontWeight="400"
                color="black"
              >
                Deserves an Upgrade -
              </Text>
            </Flex>

            <Text
              fontSize={{ base: "24px", sm: "28px", md: "40px" }}
              display="block"
              color="purple.500"
              fontWeight="700"
            >
              ArcisAI, the Future of AI CCTV
            </Text>
          </Flex>
          <Link
            as={RouterLink} // Use React Router's Link for client-side routing
            to="/contact-us" // The path to your contact page
            isExternal={false} // Set to false for internal routing
            _hover={{ textDecoration: "none" }} // Prevents the default link underline on hover
            w={{ base: "full", md: "auto" }}
          >
            <Button
              variant={"solid"}
              bgColor={"black"}
              color={"white"}
              h={"34px"}
              p={"10px 28px"}
              gap={"8px"}
              flexShrink={0}
              _hover={{
                // You can add a subtle hover effect for the button itself if you like
                bgColor: "gray.700",
              }}
              w={"full"} // Make the button take the full width of the parent Link
            >
              Buy ArcisAI Cameras Now
            </Button>
          </Link>
        </Flex>
        {/* <Flex
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
        </Flex> */}
        <Box px={6} py={6} mt="12">
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between" // Puts Logo block on left, Nav block on right
            align="flex-start"
            flexWrap="wrap"
            w="100%"
            mb={4}
            gap={4}
          >
            {/* Column 1: Logo, Address, Contact */}
            <Flex direction="column" gap={4}>
              <Flex direction="column" gap={2}>
                <Image src="./images/ArcisAi_1.png" alt="Logo" w="120px" />
                <Box w={{ base: "100%", md: "60%" }}>
                  <Text fontSize="14px" color="white">
                    7, Arista@Eight corporate House, Near Satyam House, Behind
                    Rajpath Club, Bodakdev, Ahmedabad - 380054
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            justify="space-between"
            align="center"
            flexWrap="wrap"
            gap={4}
            mb={4}
          >
            <Flex color="white" gap={1} direction="column" textAlign="left">
              <Text>marketing@arcisai.io</Text>
              <Text>(+91) 96877 79999</Text>
            </Flex>
            <Flex
              direction="row" /* <-- Set back to "column" */
              align="flex-start" /* <-- Aligns text to the left */
              gap={4} /* <-- Use a smaller gap for vertical stacking */
              color="white"
            >
              <Link
                href="https://agent.arcisai.io/"
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                Visual Bot Demo
              </Link>
              <Link
                onClick={() => (window.location.href = "/blog")}
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                Blogs
              </Link>
              <Link
                onClick={() => (window.location.href = "/contact-us")}
                _hover={{ textDecoration: "none", color: "gray.300" }}
              >
                Contact Us
              </Link>
            </Flex>
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
                href="https://www.facebook.com/thearcisai/"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="https://x.com/arcisai"
                aria-label="X (formerly Twitter)"
                icon={<FaXTwitter />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="https://www.instagram.com/_arcisai_/"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="white"
                _hover={{ color: "purple.500", bg: "white" }}
              />
              <IconButton
                as="a"
                href="https://www.linkedin.com/company/thearcisai/"
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
