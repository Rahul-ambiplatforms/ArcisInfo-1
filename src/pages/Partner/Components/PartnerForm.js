import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  SimpleGrid,
  HStack,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import CountrySelector from "../../ContactUs/Components/CountrySelector";
import CustomButton from "../../../Components/CustomButton";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    state: "", // State
    city: "", // City
    InterestedAs: "", // Interested As
    message: "",
    updates: false,
    leadType: "Arcis Website",
  });

  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";
  // const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";

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

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company ||
      !formData.state || // State
      !formData.city || // City
      !formData.InterestedAs // Interested As
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
        body: JSON.stringify({
          ...formData,
          // Combine City (city) and State (state) into 'state' for API
          state: formData.city + " " + formData.state,
          formType: "Partner Inquiry",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Application Sent!",
          description: "We'll get back to you soon.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          company: "",
          state: "",
          city: "",
          InterestedAs: "",
          message: "",
          updates: false,
          leadType: "Arcis Website",
        });
      } else {
        throw new Error(data.error || "Failed to send application");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to send application",
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
    <Box
      w="100%"
      mx="auto"
      px={{ base: "16px", md: "32px", lg: "180px" }}
      py={{ base: "40px", md: "60px", lg: "80px" }}
      bg="#000"
      position="relative"
      zIndex={1}
    >
      <VStack
        spacing={{ base: "4px", md: "12px" }}
        textAlign="center"
        mb={{ base: "32px", md: "48px" }}
      >
        <Heading
          as="h2"
          fontSize={{ base: "24px", md: "36px", lg: "48px" }}
          fontWeight="400"
          lineHeight={{ base: "32px", md: "44px", lg: "56px" }}
          color="white"
        >
          Apply to Become a Partner Today
        </Heading>
      </VStack>

      <Box
        as="form"
        onSubmit={handleSubmit}
        mx="auto"
        sx={{
          "@media (max-width: 768px)": {
            "& .form-grid": {
              gridTemplateColumns: "1fr !important",
            },
          },
          "@media (min-width: 769px) and (max-width: 1024px)": {
            "& .form-grid": {
              gridTemplateColumns: "repeat(2, 1fr) !important",
            },
          },
          "@media (min-width: 1025px)": {
            "& .form-grid": {
              gridTemplateColumns: "repeat(3, 1fr) !important",
            },
          },
        }}
      >
        <SimpleGrid
          className="form-grid"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "20px", lg: "24px" }}
          mb={{ base: "16px", md: "20px", lg: "24px" }}
        >
          {/* Row 1 */}
          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Full Name
            </FormLabel>
            <Input
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Email Address
            </FormLabel>
            <Input
              placeholder="Enter your email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Phone Number
            </FormLabel>
            <HStack spacing="8px">
              <CountrySelector
                value={formData.countryCode}
                onChange={(code) =>
                  setFormData((prev) => ({
                    ...prev,
                    countryCode: code,
                  }))
                }
              />
              <Input
                placeholder="Enter your phone number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                bg="rgba(255,255,255,0.2)"
                borderRadius="0"
                border="none"
                h={{ base: "44px", md: "48px", lg: "52px" }}
                color="white"
                _placeholder={{ color: "white" }}
                _focus={{
                  border: "1px solid #9678E1",
                  boxShadow: "0 0 0 1px #9678E1",
                }}
                fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                px="16px"
                flex="1"
              />
            </HStack>
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          className="form-grid"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "20px", lg: "24px" }}
          mb={{ base: "16px", md: "20px", lg: "24px" }}
        >
          {/* Row 2 */}
          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Company Name
            </FormLabel>
            <Input
              placeholder="Enter your company name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              City
            </FormLabel>
            <Input
              placeholder="Enter your city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              State
            </FormLabel>
            <Input
              placeholder="Enter your state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
            />
          </FormControl>
        </SimpleGrid>

        <SimpleGrid
          className="form-grid"
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "20px", lg: "24px" }}
          mb={{ base: "16px", md: "20px", lg: "24px" }}
        >
          {/* Row 3 - Interested As and Message */}
          <FormControl isRequired>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Interested As
            </FormLabel>
            <Select
              placeholder="Select option"
              name="InterestedAs"
              value={formData.InterestedAs}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            >
              <option
                value="Distributor"
                style={{ background: "black", color: "white" }}
              >
                Distributor
              </option>
              <option
                value="Dealer"
                style={{ background: "black", color: "white" }}
              >
                Dealer
              </option>
              <option
                value="System Integrator"
                style={{ background: "black", color: "white" }}
              >
                System Integrator
              </option>
            </Select>
          </FormControl>

          {/* Message Section - Spanning 2 columns on Desktop */}
          <FormControl gridColumn={{ lg: "span 2" }}>
            <FormLabel
              fontSize={{ base: "12px", md: "13px", lg: "14px" }}
              fontWeight="500"
              mb="8px"
              color="white"
            >
              Your Message
            </FormLabel>
            <Textarea
              placeholder="Enter your message here"
              name="message"
              value={formData.message}
              onChange={handleChange}
              bg="rgba(255,255,255,0.2)"
              border="none"
              borderRadius="0"
              h={{ base: "44px", md: "48px", lg: "52px" }}
              minH={{ base: "44px", md: "48px", lg: "52px" }}
              color="white"
              _placeholder={{ color: "white" }}
              _focus={{
                border: "1px solid #9678E1",
                boxShadow: "0 0 0 1px #9678E1",
              }}
              fontSize={{ base: "14px", md: "15px", lg: "16px" }}
              px="16px"
              py={{ base: "10px", md: "12px", lg: "14px" }}
              resize="vertical"
            />
          </FormControl>
        </SimpleGrid>

        <Checkbox
          name="updates"
          isChecked={formData.updates}
          onChange={handleChange}
          colorScheme="whiteAlpha"
          mb={{ base: "24px", md: "32px" }}
          color="white"
          fontSize={{ base: "12px", md: "14px" }}
          sx={{
            "& .chakra-checkbox__control": { borderRadius: "4px" },
          }}
        >
          Please send me ArcisAI updates and offers.
        </Checkbox>

        <Box>
          <CustomButton
            type="submit"
            width={{ base: "100%", md: "auto" }}
            height={{ base: "44px", md: "48px" }}
            px="32px"
            isLoading={isLoading}
            isDisabled={isLoading}
            showArrow
          >
            Send message
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default PartnerForm;
