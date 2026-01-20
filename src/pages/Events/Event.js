import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Text,
  VStack,
  useToast,
  useBreakpointValue,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  HStack,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CustomButton from "../../Components/CustomButton";
import { ReactComponent as EventIcon } from "../../Components/Icons/event_close.svg";

// Track if popup has been shown in this session (resets on refresh)
let hasShownPopup = false;

const Event = ({ isOpen: controlledIsOpen, onClose: controlledOnClose }) => {
  const {
    isOpen: internalIsOpen,
    onOpen: internalOnOpen,
    onClose: internalOnClose,
  } = useDisclosure();

  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;
  const onClose = isControlled ? controlledOnClose : internalOnClose;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  // Determine which image to show based on screen size
  const eventImageSrc = useBreakpointValue({
    base: "/images/event_popup_mobile.png",
    lg: "/images/event_popup.png",
  });

  useEffect(() => {
    if (!isControlled && !hasShownPopup) {
      internalOnOpen();
      hasShownPopup = true;
    }
  }, [isControlled, internalOnOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

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
      formType: "SSSA Business Expo 2026",
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
      >
        CLOSE
      </Button>
    </VStack>
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent
        maxW={isSubmitted ? "500px" : "fit-content"}
        maxH="90vh"
        bg="transparent"
        boxShadow="none"
        p={0}
        m="auto"
        overflow="auto"
      >
        <ModalBody
          p={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={{ base: 4, md: 0 }}
        >
          {isSubmitted ? (
            <Box bg="white" p={8} boxShadow="2xl">
              <ThankYouContent />
            </Box>
          ) : (
            <Box position="relative">
              {/* Custom Close Button */}
              <Box
                position="absolute"
                top="20px"
                right="20px"
                zIndex={1000}
                cursor="pointer"
                onClick={onClose}
                transition="all 0.2s"
                _hover={{ transform: "scale(1.1)" }}
                w="48px"
                h="48px"
              >
                <EventIcon width="44" height="44" />
              </Box>

              <Flex
                overflow="hidden"
                direction={{ base: "column-reverse", lg: "row" }}
                maxW={{ base: "90%", sm: "500px", md: "550px", lg: "1350px" }}
                mx="auto"
                boxShadow="2xl"
              >
                {/* Event Poster - Bottom on mobile, Left on desktop */}
                <Box
                  w={{ base: "100%", lg: "616px" }}
                  h={{ base: "auto", lg: "616px" }}
                  flexShrink={0}
                >
                  <Image
                    src={eventImageSrc}
                    alt="Business Expo Event"
                    w="100%"
                    h="100%"
                    objectFit={{ base: "contain", lg: "cover" }}
                  />
                </Box>

                {/* Form Section */}
                <Box
                  flex="1"
                  mt={10}
                  p={{ base: 5, md: 6, lg: 8 }}
                  minW={{ base: "100%", lg: "700px" }}
                  maxW={{ base: "100%", lg: "700px" }}
                >
                  <VStack
                    spacing={6}
                    align="stretch"
                    as="form"
                    onSubmit={handleSubmit}
                  >
                    {/* Row 1: Full name & Email Address */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
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
                          h="52px"
                          color="white"
                          _placeholder={{ color: "white" }}
                          _focus={{
                            border: "1px solid #A4FF79",
                            boxShadow: "0 0 0 1px #A4FF79",
                          }}
                          fontSize="16px"
                          px="16px"
                          borderRadius="0"
                        />
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
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
                          h="52px"
                          color="white"
                          _placeholder={{ color: "white" }}
                          _focus={{
                            border: "1px solid #A4FF79",
                            boxShadow: "0 0 0 1px #A4FF79",
                          }}
                          fontSize="16px"
                          px="16px"
                          borderRadius="0"
                        />
                      </FormControl>
                    </SimpleGrid>

                    {/* Row 2: Book a slot & Time slot */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb="8px"
                          color="white"
                        >
                          Book a slot*
                        </FormLabel>
                        <Select
                          placeholder="Select date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          bg="rgba(255,255,255,0.2)"
                          border="none"
                          h="52px"
                          color="white"
                          _placeholder={{ color: "white" }}
                          _focus={{
                            border: "1px solid #A4FF79",
                            boxShadow: "0 0 0 1px #A4FF79",
                          }}
                          fontSize="16px"
                          borderRadius="0"
                          sx={{
                            option: {
                              bg: "black",
                              color: "white",
                              _hover: { bg: "#333" },
                            },
                          }}
                        >
                          <option
                            value="23rd Jan 2026"
                            style={{ background: "black", color: "white" }}
                          >
                            23rd Jan 2026
                          </option>
                          <option
                            value="24th Jan 2026"
                            style={{ background: "black", color: "white" }}
                          >
                            24th Jan 2026
                          </option>
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb="8px"
                          color="white"
                        >
                          Time slot*
                        </FormLabel>
                        <Select
                          placeholder="Select time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          bg="rgba(255,255,255,0.2)"
                          border="none"
                          h="52px"
                          color="white"
                          _placeholder={{ color: "white" }}
                          _focus={{
                            border: "1px solid #A4FF79",
                            boxShadow: "0 0 0 1px #A4FF79",
                          }}
                          fontSize="16px"
                          borderRadius="0"
                          sx={{
                            option: {
                              bg: "black",
                              color: "white",
                              _hover: { bg: "#333" },
                            },
                          }}
                        >
                          <option
                            value="10:00 AM - 10:30 AM"
                            style={{ background: "black", color: "white" }}
                          >
                            10:00 AM - 10:30 AM
                          </option>
                          <option
                            value="10:30 AM - 11:00 AM"
                            style={{ background: "black", color: "white" }}
                          >
                            10:30 AM - 11:00 AM
                          </option>
                          <option
                            value="11:00 AM - 11:30 AM"
                            style={{ background: "black", color: "white" }}
                          >
                            11:00 AM - 11:30 AM
                          </option>
                          <option
                            value="11:30 AM - 12:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            11:30 AM - 12:00 PM
                          </option>
                          <option
                            value="12:00 PM - 12:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            12:00 PM - 12:30 PM
                          </option>
                          <option
                            value="12:30 PM - 01:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            12:30 PM - 01:00 PM
                          </option>
                          <option
                            value="01:00 PM - 01:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            01:00 PM - 01:30 PM
                          </option>
                          <option
                            value="01:30 PM - 02:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            01:30 PM - 02:00 PM
                          </option>
                          <option
                            value="02:00 PM - 02:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            02:00 PM - 02:30 PM
                          </option>
                          <option
                            value="02:30 PM - 03:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            02:30 PM - 03:00 PM
                          </option>
                          <option
                            value="03:00 PM - 03:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            03:00 PM - 03:30 PM
                          </option>
                          <option
                            value="03:30 PM - 04:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            03:30 PM - 04:00 PM
                          </option>
                          <option
                            value="04:00 PM - 04:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            04:00 PM - 04:30 PM
                          </option>
                          <option
                            value="04:30 PM - 05:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            04:30 PM - 05:00 PM
                          </option>
                          <option
                            value="05:00 PM - 05:30 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            05:00 PM - 05:30 PM
                          </option>
                          <option
                            value="05:30 PM - 06:00 PM"
                            style={{ background: "black", color: "white" }}
                          >
                            05:30 PM - 06:00 PM
                          </option>
                        </Select>
                      </FormControl>
                    </SimpleGrid>

                    {/* Row 3: Phone Number & Submit Button */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb="8px"
                          color="white"
                        >
                          Phone Number
                        </FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            bg="rgba(255,255,255,0.1)"
                            border="none"
                            color="white"
                            h="52px"
                            borderRadius="0"
                            fontSize="16px"
                          >
                            +91
                          </InputLeftAddon>
                          <Input
                            placeholder="Enter phone number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            bg="rgba(255,255,255,0.2)"
                            border="none"
                            h="52px"
                            color="white"
                            _placeholder={{ color: "white" }}
                            _focus={{
                              border: "1px solid #A4FF79",
                              boxShadow: "0 0 0 1px #A4FF79",
                            }}
                            fontSize="16px"
                            px="16px"
                            borderRadius="0"
                          />
                        </InputGroup>
                      </FormControl>

                      {/* Submit Button */}
                      <Box>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb="8px"
                          color="transparent"
                        >
                          .
                        </FormLabel>
                        <CustomButton
                          type="submit"
                          width={{ base: "100%", md: "60%" }}
                          height="52px"
                          fontSize="16px"
                          fontWeight="600"
                          bgColor="rgba(255, 255, 255, 0.1)"
                          hoverBgColor="rgba(255, 255, 255, 0.2)"
                          borderColor="white"
                          hoverBorderColor="#A4FF79"
                          textColor="white"
                          hoverTextColor="#A4FF79"
                          showGlow={true}
                          showTicks={true}
                          isLoading={isLoading}
                        >
                          Submit
                        </CustomButton>
                      </Box>
                    </SimpleGrid>
                  </VStack>
                </Box>
              </Flex>
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Event;
