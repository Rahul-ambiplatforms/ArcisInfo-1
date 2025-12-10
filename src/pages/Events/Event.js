import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
  useToast,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// Track if popup has been shown in this session (resets on refresh)
let hasShownPopup = false;

const Event = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    // Open only if not shown before in this session (resets on reload)
    if (!hasShownPopup) {
      onOpen();
      hasShownPopup = true;
    }
  }, [onOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  // const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";
  const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
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

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

    const phoneRegex = /^\d{10}$/;
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

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      slot: `${formData.date} at ${formData.time}`,
      formType: "IFSEC Event",
    };

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Slot Booked!",
          description: "We look forward to seeing you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        throw new Error(data.error || "Failed to book slot");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Failed to book slot",
        description: error.message || "Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ThankYouContent = () => (
    <VStack
      spacing={2}
      py={2}
      textAlign="center"
      bg="white"
      borderRadius="xl"
      p={8}
    >
      <Heading size="lg" color="gray.800">
        Thanks for submitting!
      </Heading>
      <Box w="50px" h="4px" bg="#9678E1" />

      <Box color="gray.600" fontSize="6xl">
        ✉️
      </Box>

      <Text fontSize="xl" color="gray.600">
        We'll Connect With You Soon
      </Text>

      <VStack spacing={4} mt={4}>
        <Text fontWeight="bold" fontSize="sm" letterSpacing="wide">
          LET'S CONTACT
        </Text>
        <HStack spacing={4}>
          <IconButton
            as="a"
            href="https://www.facebook.com/thearcisai/"
            aria-label="Facebook"
            icon={<FaFacebook size="24px" />}
            variant="ghost"
            color="black"
            _hover={{ color: "purple.500" }}
          />
          <IconButton
            as="a"
            href="https://x.com/arcisai"
            aria-label="X (formerly Twitter)"
            icon={<FaXTwitter size="24px" />}
            variant="ghost"
            color="black"
            _hover={{ color: "purple.500" }}
          />
          <IconButton
            as="a"
            href="https://www.instagram.com/_arcisai_/"
            aria-label="Instagram"
            icon={<FaInstagram size="24px" />}
            variant="ghost"
            color="black"
            _hover={{ color: "purple.500" }}
          />
          <IconButton
            as="a"
            href="https://www.linkedin.com/company/thearcisai/"
            aria-label="LinkedIn"
            icon={<FaLinkedin size="24px" />}
            variant="ghost"
            color="black"
            _hover={{ color: "purple.500" }}
          />
        </HStack>
      </VStack>

      <Button
        bg="#9678E1"
        _hover={{ bg: "#8266C9" }}
        color="white"
        size="lg"
        w="200px"
        onClick={onClose}
        mt={4}
        borderRadius="md"
      >
        CLOSE
      </Button>
    </VStack>
  );

  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "11:30 AM - 12:00 PM",
    "12:00 PM - 12:30 PM",
    "12:30 PM - 01:00 PM",
    "01:00 PM - 01:30 PM",
    "01:30 PM - 02:00 PM",
    "02:00 PM - 02:30 PM",
    "02:30 PM - 03:00 PM",
    "03:00 PM - 03:30 PM",
    "03:30 PM - 04:00 PM",
    "04:00 PM - 04:30 PM",
    "04:30 PM - 05:00 PM",
    "05:00 PM - 05:30 PM",
    "05:30 PM - 06:00 PM",
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent
        maxW={
          isSubmitted
            ? { base: "95%", lg: "400px" }
            : { base: "90%", lg: "1200px" }
        }
        borderRadius="xl"
        bg="transparent"
        boxShadow="none"
        p={0}
      >
        <ModalBody p={0}>
          {isSubmitted ? (
            <Box bg="white" borderRadius="24px" p={0} boxShadow="xl" w="full">
              <ThankYouContent />
            </Box>
          ) : (
            <Box
              bgImage="url('/images/IFSEC_event_bg.png')"
              bgSize="cover"
              bgPosition="center"
              minH="80vh"
              borderRadius="xl"
              position="relative"
              overflow="hidden"
            >
              {/* Gradient Overlay */}
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bgGradient="linear(to-br, rgba(150, 120, 225, 0.3), rgba(90, 63, 138, 0.6))"
                zIndex={0}
              />

              <Flex
                direction="column"
                h="full"
                minH="80vh"
                p={{ base: 4, lg: 8 }}
                position="relative"
                zIndex={1}
              >
                {/* TOP BAR: Logos and Close Button */}
                <Flex justify="space-between" align="center" mb={8} w="full">
                  <HStack spacing={4}>
                    <Image
                      src="/images/IFSEC_event_logo.png"
                      alt="IFSEC LOGO"
                      h={{ base: "26px", md: "40px" }}
                      w="auto"
                      // filter="brightness(0) invert(1)"
                    />
                    <Image
                      src="/images/ArcisAi_1.png"
                      alt="Arcis AI"
                      h={{ base: "24px", md: "32px" }}
                      filter="brightness(0) invert(1)"
                    />
                  </HStack>

                  {/* Right: MakeInIndia + Close */}
                  <HStack spacing={4}>
                    <Box p={1} borderRadius="md">
                      <Image
                      src="/images/MakeInIndia.png"
                      alt="Arcis AI"
                      h={{ base: "24px", md: "64px" }}
                      filter="brightness(0) invert(1)"
                    />
                    </Box>
                    <ModalCloseButton
                      position="static"
                      color="white"
                      onClick={onClose}
                      size="lg"
                    />
                  </HStack>
                </Flex>

                {/* Main Content Area */}
                <Flex
                  direction={{ base: "column", lg: "row" }}
                  justify="space-between"
                  align="center"
                  flex="1"
                  gap={8}
                >
                  {/* Left Side - Info Content */}
                  <Box flex="1" color="white" maxW="600px">
                    <VStack align="flex-start" spacing={6}>
                      <Heading
                        size={{ base: "xl", md: "3xl" }}
                        lineHeight="1.2"
                      >
                        Book Your Slot with Arcis Team at IFSEC India 2025
                      </Heading>

                      <Text fontSize="lg" fontWeight="medium">
                        Join us at
                      </Text>

                      <Heading size="xl">11th - 13th December 2025</Heading>

                      <Text fontSize="lg" fontWeight="bold">
                        | Booth i10, Hall 4, Bharat Mandapam, New Delhi
                      </Text>
                    </VStack>
                  </Box>

                  {/* Right Side - Form Card */}
                  <Box
                    w={{ base: "100%", lg: "30%" }}
                    bg="white"
                    p={6}
                    borderRadius="xl"
                    boxShadow="2xl"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    maxH="80vh"
                    overflowY="auto"
                  >
                    <Heading size="md" color="gray.800" mb={2}>
                      Get In Touch
                    </Heading>

                    <Box w="50px" h="2px" bg="#9678E1" mb={6} />

                    <VStack spacing={3} as="form" onSubmit={handleSubmit}>
                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="bold" mb={1}>
                          Name
                        </FormLabel>
                        <Input
                          placeholder="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          borderRadius="md"
                          size="sm"
                          focusBorderColor="#9678E1"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="bold" mb={1}>
                          Email
                        </FormLabel>
                        <Input
                          placeholder="Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          borderRadius="md"
                          size="sm"
                          focusBorderColor="#9678E1"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="bold" mb={1}>
                          Phone
                        </FormLabel>
                        <Input
                          placeholder="Phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          maxLength={10}
                          borderRadius="md"
                          size="sm"
                          focusBorderColor="#9678E1"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="bold" mb={1}>
                          Book a SLOT
                        </FormLabel>
                        <Select
                          placeholder="Select Date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          borderRadius="md"
                          size="sm"
                          focusBorderColor="#9678E1"
                        >
                          <option value="11th Dec 2025">11th Dec 2025</option>
                          <option value="12th Dec 2025">12th Dec 2025</option>
                          <option value="13th Dec 2025">13th Dec 2025</option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel fontSize="xs" fontWeight="bold" mb={1}>
                          Time Slot
                        </FormLabel>
                        <Select
                          placeholder="Select Time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          borderRadius="md"
                          size="sm"
                          focusBorderColor="#9678E1"
                        >
                          {timeSlots.map((slot, index) => (
                            <option key={index} value={slot}>
                              {slot}
                            </option>
                          ))}
                        </Select>
                      </FormControl>

                      <Button
                        type="submit"
                        bg="#9678E1"
                        _hover={{ bg: "#8266C9" }}
                        color="white"
                        w="full"
                        size="md"
                        mt={2}
                        isLoading={isLoading}
                      >
                        SUBMIT
                      </Button>
                    </VStack>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Event;
