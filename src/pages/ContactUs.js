import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  VStack,
  useToast,
  Textarea, // Imported Textarea
  Checkbox, // Imported Checkbox
  Flex, // Imported for layout
  Heading, // Imported for the main title
  HStack, // Imported for the feature list items
  Icon, // Imported to use icons
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons"; // Imported for the feature list
// If you are using react-router-dom, uncomment the next line
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate(); // Kept for context, uncomment if needed
  const [formData, setFormData] = useState({
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

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";
  // const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";

  // This handler now supports phone number formatting and checkboxes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    // Updated validation to include new required fields
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
        body: JSON.stringify({ ...formData, formType: "Contact" }),
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

        // Resetting the form with all new and old fields
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
    <Flex
      direction={{ base: "column", lg: "row" }}
      w="100%"
      bgGradient="linear(to-br, #1A202C, #5A3F8A, #9678E1)"
      py={{ base: 10, md: 20 }}
      px={{ base: 4, md: 8 }}
      align="center"
      justify="center"
    >
      {/* Left Content Section */}
      <Box
        flex="1"
        color="white"
        pr={{ base: 0, lg: 12 }}
        pb={{ base: 10, lg: 0 }}
        maxW={{ base: "100%", lg: "600px" }}
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="shorter"
        >
          One platform.
          <br />
          Superior performance.
        </Heading>
        <Text fontSize={{ base: "lg", md: "xl" }} mt={6}>
          We help the most complex organizations to build, deploy and operate AI
          vision. Accelerate the entire lifecycle of AI vision.
        </Text>
        <VStack spacing={4} mt={8} align="flex-start">
          <HStack align="center">
            <Icon as={CheckCircleIcon} color="green.300" w={6} h={6} />
            <Text fontSize="lg">Connect large scale camera systems</Text>
          </HStack>
          <HStack align="center">
            <Icon as={CheckCircleIcon} color="green.300" w={6} h={6} />
            <Text fontSize="lg">
              Build powerful, custom AI vision applications
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={CheckCircleIcon} color="green.300" w={6} h={6} />
            <Text fontSize="lg">
              Deploy real-time AI vision to the Edge or Cloud
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={CheckCircleIcon} color="green.300" w={6} h={6} />
            <Text fontSize="lg">
              Operate and maintain a portfolio of applications
            </Text>
          </HStack>
          <HStack align="center">
            <Icon as={CheckCircleIcon} color="green.300" w={6} h={6} />
            <Text fontSize="lg">
              Scale on robust infrastructure for any AI model
            </Text>
          </HStack>
        </VStack>
      </Box>

      {/* Right Form Section */}
      <Box
        flex="1"
        maxW="600px"
        w="100%"
        bg="white"
        p={{ base: 6, md: 10 }}
        borderRadius="xl"
        boxShadow="2xl"
      >
        <VStack spacing={5} as="form" onSubmit={handleSubmit}>
          {/* All form controls from your original code are here */}
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
              placeholder="Enter your 10-digit phone number"
              name="phone"
              type="tel"
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
              placeholder="Enter your city"
              name="location"
              onChange={handleChange}
              value={formData.location}
              focusBorderColor="purple.500"
              borderRadius="md"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>I want cameras for:</FormLabel>
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
          {/* New field from ContactUs.js */}
          <FormControl isRequired>
            <FormLabel>I am a:</FormLabel>
            <Select
              placeholder="Select client category"
              name="customerType"
              value={formData.customerType}
              onChange={handleChange}
              focusBorderColor="purple.500"
              borderRadius="md"
            >
              <option>Government</option>
              <option>Stockist</option>
              <option>Distributor</option>
              <option>Dealer</option>
              <option>Customer</option>
              <option>New Customer</option>
              <option>End User</option>
              <option>System Integrator</option>
              <option>Other</option>
            </Select>
          </FormControl>
          {/* Updated field to be "Number of Cameras" */}
          <FormControl>
            <FormLabel>Number of Cameras Needed</FormLabel>
            <Input
              placeholder="e.g., 10"
              name="customerQuantity"
              type="number"
              onChange={handleChange}
              value={formData.customerQuantity}
              focusBorderColor="purple.500"
              borderRadius="md"
            />
          </FormControl>
          {/* New field from ContactUs.js */}
          <FormControl>
            <FormLabel>Your Message</FormLabel>
            <Textarea
              placeholder="Enter your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              focusBorderColor="purple.500"
              borderRadius="md"
            />
          </FormControl>
          {/* New field from ContactUs.js */}
          <FormControl>
            <Checkbox
              name="updates"
              isChecked={formData.updates}
              onChange={handleChange}
              colorScheme="purple"
            >
              I’d like to receive updates and offers from ArcisAI.
            </Checkbox>
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
    </Flex>
  );
};

export default ContactSection;
