// ContactUs.js
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Input,
  Textarea,
  Select,
  Checkbox,
  useToast,
  Button,
} from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

// const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";
const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    clientCategory: "",
    camerasFor: "",
    message: "",
    customerQuantity: "",
    leadType: "Arcis Website",
    updates: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

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
      !formData.camerasFor
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
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log("object",res)
      console.log("FORM DATA",formData)
      // if (res.ok) {
      //   window.location.href = "/thank-you";
      // } else {
      //   console.error("Form submission failed");
      // }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - ArcisAI</title>
        <meta
          name="description"
          content="Get in touch with ArcisAI for intelligent security solutions. AI CCTV with EdgeAI, ArcisGPT summaries, and Indian cloud compliance."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arcisai.io/contact-us/" />
      </Helmet>

      <Box
        bgGradient="linear(to-tr, #261947ff, #9d82e3ff)"
        minH="100vh"
        px={{ base: 4, md: 16 }}
        py={12}
        mt="4%"
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          maxW="1200px"
          mx="auto"
          gap={12}
        >
          {/* Left Side Content */}
          <Box flex="1" color="white">
            <Heading as="h1" mb={6} fontSize={{ base: "3xl", md: "4xl" }}>
              You Deserve More Than Just a Camera - You Deserve Intelligence
            </Heading>
            <Text mb={4}>
              We’re not just another CCTV brand, we are your intelligent
              security partner - combining EdgeAI cameras, ArcisGPT summaries,
              and a STQC-certified Indian VMS. We deliver real-time alerts,
              secure access and smart surveillance built for homes, offices,
              businesses and your needs.
            </Text>
            <VStack align="start" spacing={2} mb={6}>
              <Text>
                ✅ Built-in EdgeAI Detection – Smart alerts within the camera
              </Text>
              <Text>
                ✅ ArcisGPT Summaries – GenAI-powered video insights in seconds
              </Text>
              <Text>
                ✅ STQC-Certified VMS – Indian government-grade data security
              </Text>
              <Text>
                ✅ Mobile + Desktop Monitoring – Real-time control across
                devices
              </Text>
              <Text>
                ✅ 🇮🇳 Made for India – Designed for local compliance and
                conditions
              </Text>
            </VStack>
            <Text mt={4}>Let’s Secure your Space</Text>
          </Box>

          {/* Right Side Form */}
          <Box
            flex="1"
            bg="white"
            borderRadius="24px"
            p={8}
            boxShadow="lg"
            color="black"
          >
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <Input
                  placeholder="Full Name*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  placeholder="Email Address*"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  placeholder="Phone Number*"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  isRequired
                />
                <Input
                  placeholder="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
                <Input
                  placeholder="City*"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  isRequired
                />
                <Select
                  placeholder="I want cameras for"
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
                <Select
                  placeholder="Client Category*"
                  name="clientCategory"
                  value={formData.clientCategory}
                  onChange={handleChange}
                  isRequired
                >
                  <option>Stockist</option>
                  <option>Distributer</option>
                  <option>Dealer</option>
                  <option>End-User</option>
                  <option>System Integrator</option>
                </Select>
                <Input
                  placeholder="Number of Cameras Needed*"
                  name="camerasFor"
                  type="number"
                  value={formData.camerasFor}
                  onChange={handleChange}
                  isRequired
                />
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <Checkbox
                  name="updates"
                  isChecked={formData.updates}
                  onChange={handleChange}
                >
                  I’d like to receive updates and offers from ArcisAI.
                </Checkbox>

                <Button
                  type="submit"
                  bg="#3F77A5"
                  color="white"
                  w="full"
                  mt={4}
                  _hover={{ bg: "#2c5a7d" }}
                >
                  Submit
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ContactUs;
