import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  useToast,
  Textarea,
  Checkbox,
  Flex,
  Heading,
  SimpleGrid,
  HStack,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import OurClient from "../HomePage/Components/OurClient";
import CustomButton from "../../Components/CustomButton";
import { contactUsSEO } from "./Data/SEOContent";
import PageContentWrapper from "../../Components/PageContentWrapper";
import CountrySelector from "./Components/CountrySelector";

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    company: "",
    location: "",
    location2: "",
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

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          location: "",
          location2: "",
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

  // Edge AI Features Data
  const edgeAIFeatures = [
    { name: "Line-Cross Detection", image: "/images/contact_edgeai_1.png" },
    {
      name: "Customer Traffic Statistics",
      image: "/images/contact_edgeai_2.png",
    },
    { name: "Area Detection", image: "/images/contact_edgeai_3.png" },
    { name: "Missing Object Detection", image: "/images/contact_edgeai_4.png" },
    { name: "Unattended Baggage", image: "/images/contact_edgeai_5.png" },
    { name: "Face Detection", image: "/images/contact_edgeai_6.png" },
    { name: "Motion Detection", image: "/images/contact_edgeai_7.png" },
    { name: "Human Detection", image: "/images/contact_edgeai_8.png" },
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{contactUsSEO.metatitle}</title>
        <meta name="description" content={contactUsSEO.metadescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={contactUsSEO.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={contactUsSEO.metatitle} />
        <meta
          property="og:description"
          content={contactUsSEO.metadescription}
        />
        <meta property="og:image" content={contactUsSEO.ogimage} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content={contactUsSEO.canonical} />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta name="twitter:title" content={contactUsSEO.metatitle} />
        <meta
          name="twitter:description"
          content={contactUsSEO.metadescription}
        />
        <meta name="twitter:image" content={contactUsSEO.ogimage} />

        {/* Additional Meta Tags */}
        <meta
          name="keywords"
          content="ArcisAI, Contact ArcisAI, AI CCTV, Edge AI, ArcisGPT, Indian Cloud Compliance, Security Solutions, Contact Us"
        />
        <meta name="author" content="ArcisAI" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Schema Markup */}
        {contactUsSEO.schema &&
          contactUsSEO.schema.length > 0 &&
          contactUsSEO.schema.map((schema, index) => (
            <script
              key={`schema-${index}`}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
              }}
            />
          ))}
      </Helmet>
      <PageContentWrapper noPadding>
        <Box
          bg="#171717"
          color="white"
          w="100%"
          position="relative"
          overflow="hidden"
        >
          {/* Content Section */}
          <Box position="relative" zIndex={1}>
            {/* Top Content Section with GIF Background */}
            <Box
              w="100%"
              mx="auto"
              px={{ base: "16px", md: "32px", lg: "64px" }}
              pt={{ base: "10px", md: "20px", lg: "20px" }}
              pb={{ base: "8px", md: "8px", lg: "8px" }}
              position="relative"
              overflow="hidden"
            >
              {/* Background GIF - Only in top section */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                zIndex={0}
                opacity={0.4}
                pointerEvents="none"
              >
                <Image
                  src="/images/home_wave_gif_1.gif"
                  alt="Background Wave"
                  w="100%"
                  h="100%"
                  objectFit="cover"
                />
              </Box>

              {/* Content with higher z-index */}
              <Box position="relative" zIndex={1}>
                <VStack
                  spacing={{ base: "4px", md: "12px", lg: "12px" }}
                  textAlign="center"
                >
                  {/* Contact Us Text */}
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight="400"
                    color="white"
                  >
                    Contact Us
                  </Text>

                  {/* Main Heading */}
                  <Heading
                    as="h1"
                    fontSize={{ base: "28px", md: "40px", lg: "48px" }}
                    fontWeight="400"
                    lineHeight={{ base: "36px", md: "48px", lg: "56px" }}
                    maxW="1200px"
                    mx="auto"
                  >
                    You Deserve More Than Just a Camera - You Deserve
                    Intelligence
                  </Heading>

                  {/* Description Paragraph */}
                  <Text
                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                    fontWeight="400"
                    lineHeight={{ base: "20px", md: "24px", lg: "28px" }}
                    maxW="1000px"
                    mx="auto"
                    textAlign="justify"
                    px={{ base: "16px", md: "32px", lg: "0" }}
                  >
                    We're not just another CCTV brand, we are your intelligent
                    security partner - combining EdgeAI cameras, ArcisGPT
                    summaries, and a STQC-certified Indian VMS. We deliver
                    real-time alerts, secure access and smart surveillance built
                    for homes, offices, businesses and your needs.
                  </Text>

                  {/* Features Heading */}
                  <Heading
                    as="h2"
                    fontSize={{ base: "20px", md: "28px", lg: "32px" }}
                    fontWeight="400"
                    mt={{ base: "16px", md: "24px", lg: "32px" }}
                  >
                    8 Inbuilt Edge AI Features
                  </Heading>

                  {/* Features Grid */}
                  <SimpleGrid
                    columns={{ base: 2, md: 4 }}
                    spacing={{ base: "8px", md: "16px", lg: "16px" }}
                    w="100%"
                    mx="auto"
                    mt={{ base: "8px", md: "12px", lg: "16px" }}
                    mb={{ base: "8px", md: "12px", lg: "32px" }}
                  >
                    {edgeAIFeatures.map((feature, index) => (
                      <VStack key={index}>
                        {/* Icon Box with Dashed Border */}
                        <Center
                          w={{ base: "80px", md: "100px", lg: "120px" }}
                          // h={{ base: "80px", md: "100px", lg: "120px" }}
                          position="relative"
                          // border="2px dashed"
                          // borderColor="#A4FF79"
                          // borderRadius="8px"
                          // bg="transparent"
                        >
                          <Image
                            src={feature.image}
                            alt={feature.name}
                            w={{ base: "50px", md: "60px", lg: "70px" }}
                            h={{ base: "50px", md: "60px", lg: "70px" }}
                            objectFit="contain"
                            // filter="brightness(0) invert(1)"
                          />
                        </Center>
                        {/* Feature Name */}
                        <Text
                          fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                          fontWeight="400"
                          textAlign="center"
                          color="white"
                        >
                          {feature.name}
                        </Text>
                      </VStack>
                    ))}
                  </SimpleGrid>
                </VStack>
              </Box>
            </Box>

            {/* Contact Form Section */}
            <Box
              w="100%"
              mx="auto"
              px={{ base: "16px", md: "32px", lg: "64px" }}
              py={{ base: "40px", md: "60px", lg: "80px" }}
              bg="#171717"
              position="relative"
              zIndex={1}
            >
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
                      Full name
                    </FormLabel>
                    <Input
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
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
                      // borderRadius="8px"
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
                          setFormData((prev) => ({ ...prev, countryCode: code }))
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
                        border="none"
                        // borderRadius="8px"
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
                      Company
                    </FormLabel>
                    <Input
                      placeholder="Enter your company name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
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
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
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
                      name="location2"
                      value={formData.location2}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
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
                  {/* Row 3 */}
                  <FormControl isRequired>
                    <FormLabel
                      fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                      fontWeight="500"
                      mb="8px"
                      color="white"
                    >
                      I want camera for
                    </FormLabel>
                    <Select
                      // placeholder="Select option"
                      name="camerasFor"
                      value={formData.camerasFor}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
                      h={{ base: "44px", md: "48px", lg: "52px" }}
                      color="white"
                      _placeholder={{ color: "white" }}
                      _focus={{
                        border: "1px solid #9678E1",
                        boxShadow: "0 0 0 1px #9678E1",
                      }}
                      fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                      // px="16px"
                    >
                      <option
                        value="Office"
                        style={{ background: "black", color: "white" }}
                      >
                        Office
                      </option>
                      <option
                        value="Factory"
                        style={{ background: "black", color: "white" }}
                      >
                        Factory
                      </option>
                      <option
                        value="Home"
                        style={{ background: "black", color: "white" }}
                      >
                        Home
                      </option>
                      <option
                        value="Other"
                        style={{ background: "black", color: "white" }}
                      >
                        Other
                      </option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                      fontWeight="500"
                      mb="8px"
                      color="white"
                    >
                      Who you are
                    </FormLabel>
                    <Select
                      // placeholder="Select option"
                      name="customerType"
                      value={formData.customerType}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
                      h={{ base: "44px", md: "48px", lg: "52px" }}
                      color="white"
                      _placeholder={{ color: "white" }}
                      _focus={{
                        border: "1px solid #9678E1",
                        boxShadow: "0 0 0 1px #9678E1",
                      }}
                      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                      // px="16px"
                    >
                      <option
                        value="Government"
                        style={{ background: "black", color: "white" }}
                      >
                        Government
                      </option>
                      <option
                        value="Stockist"
                        style={{ background: "black", color: "white" }}
                      >
                        Stockist
                      </option>
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
                        value="Customer"
                        style={{ background: "black", color: "white" }}
                      >
                        Customer
                      </option>
                      <option
                        value="New Customer"
                        style={{ background: "black", color: "white" }}
                      >
                        New Customer
                      </option>
                      <option
                        value="End User"
                        style={{ background: "black", color: "white" }}
                      >
                        End User
                      </option>
                      <option
                        value="System Integrator"
                        style={{ background: "black", color: "white" }}
                      >
                        System Integrator
                      </option>
                      <option
                        value="Other"
                        style={{ background: "black", color: "white" }}
                      >
                        Other
                      </option>
                    </Select>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel
                      fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                      fontWeight="500"
                      mb="8px"
                      color="white"
                    >
                      No. of camera required
                    </FormLabel>
                    <Input
                      placeholder="Eg. 50"
                      name="customerQuantity"
                      type="number"
                      value={formData.customerQuantity}
                      onChange={handleChange}
                      bg="rgba(255,255,255,0.2)"
                      border="none"
                      // borderRadius="8px"
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

                {/* Row 4 - Message and Checkbox */}
                <Box
                  mb={{ base: "16px", md: "20px", lg: "24px" }}
                  sx={{
                    "@media (min-width: 1025px)": {
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr",
                      gap: "24px",
                    },
                  }}
                >
                  <FormControl>
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
                      // borderRadius="8px"
                      minH={{ base: "120px", md: "140px", lg: "160px" }}
                      color="white"
                      _placeholder={{ color: "white" }}
                      _focus={{
                        border: "1px solid #9678E1",
                        boxShadow: "0 0 0 1px #9678E1",
                      }}
                      fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                      px="16px"
                      py="12px"
                      // resize="vertical"
                    />
                  </FormControl>

                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="flex-start"
                    sx={{
                      "@media (max-width: 1024px)": {
                        marginTop: "16px",
                      },
                    }}
                  >
                    <FormControl mb={{ base: "16px", md: "20px", lg: "24px" }}>
                      <Checkbox
                        name="updates"
                        isChecked={formData.updates}
                        onChange={handleChange}
                        colorScheme="purple"
                        fontSize={{ base: "12px", md: "13px", lg: "14px" }}
                        color="white"
                      >
                        Please send me ArcisAI updates and offers.
                      </Checkbox>
                    </FormControl>

                    <Box w="100%">
                      <CustomButton
                        width="100%"
                        height={{ base: "44px", md: "48px", lg: "52px" }}
                        bgColor="rgba(255,255,255,0.2)"
                        hoverBgColor="#3A3A3A"
                        borderColor="white"
                        hoverBorderColor="#A4FF79"
                        textColor="white"
                        hoverTextColor="#A4FF79"
                        fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                        fontWeight="500"
                        showGlow={false}
                        as="button"
                        type="submit"
                        disabled={isLoading}
                        sx={{
                          opacity: isLoading ? 0.6 : 1,
                          cursor: isLoading ? "not-allowed" : "pointer",
                        }}
                      >
                        {isLoading ? "Sending..." : "Send message"}
                      </CustomButton>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* OurClient Component */}
            <OurClient />
          </Box>
        </Box>
      </PageContentWrapper>
    </>
  );
};

export default ContactSection;
