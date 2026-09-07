import React, { useState, useEffect, useRef } from "react";
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
import EventIcon from "../../Components/Icons/event_close.svg";

// Set to true to auto-open the popup on first page load. When false the modal
// still works in controlled mode (the header banner's CTA passes isOpen/onClose).
const SHOW_EVENT_POPUP_ON_LOAD = false;

// Track if popup has been shown in this session (resets on refresh)
let hasShownPopup = false;

// Current event. Swap these when the next expo comes around — previous posters
// stay in /public/images so they can be pointed at again.
const EVENT_DATES = ["3rd Sep 2026", "4th Sep 2026", "5th Sep 2026"];
const EVENT_BOOTH = "Booth C13";
const EVENT_VENUE = "Jio World Convention Centre";
const EVENT_POSTER_ALT = "ArcisAI at Jio World Convention Centre 2026 Booth C13";

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
  const [submitError, setSubmitError] = useState("");
  // `isLoading` only lands on the next render, so two clicks in the same tick
  // would both pass a state check. A ref updates synchronously and also covers
  // Enter-key submits, which never touch the button at all.
  const submittingRef = useRef(false);

  // Determine which image to show based on screen size
  // TODO: desktop is temporarily reusing the 4:5 poster. Swap `lg` to a 1:1
  // FSIE poster (~2464x2464) once that artwork exists, and restore the square
  // image box below.
  const eventImageSrc = useBreakpointValue({
    base: "/images/event_popup_fsie.webp",
    lg: "/images/event_popup_fsie.webp",
  });

  useEffect(() => {
    if (SHOW_EVENT_POPUP_ON_LOAD && !isControlled && !hasShownPopup) {
      internalOnOpen();
      hasShownPopup = true;
    }
  }, [isControlled, internalOnOpen]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: EVENT_DATES[0],
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

    if (submittingRef.current) return;

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      return;
    }

    submittingRef.current = true;
    setIsLoading(true);
    setSubmitError("");

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      slot: `${formData.date} at ${formData.time}`,
      formType: "Event",
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
      } else {
        throw new Error(data.error || "Failed to book slot");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitError(
        "We couldn't book your slot just now. Please try again."
      );
    } finally {
      submittingRef.current = false;
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
      // This nests inside a Box that also pads; at p={8} on both, a 360px
      // phone lost 128px of its width to padding alone.
      p={{ base: 4, md: 8 }}
      w="100%"
    >
      <Heading size={{ base: "md", md: "lg" }} color="gray.800">
        Thank You for Booking!
      </Heading>
      <Box w="50px" h="4px" bg="#9678E1" />

      <Box color="gray.600" fontSize={{ base: "4xl", md: "6xl" }}>
        🎉
      </Box>

      <Text fontSize="xl" color="gray.600" fontWeight="500">
        Your booth visit is confirmed
      </Text>

      {/* Echo back the exact slot that was booked — the confirmation is the
          only place the visitor sees it, since no email lands on their side. */}
      <VStack
        spacing={1}
        bg="#F6F3FD"
        borderRadius="lg"
        px={{ base: 3, md: 6 }}
        py={4}
        w="100%"
        mt={2}
      >
        <Text fontSize="lg" fontWeight="700" color="gray.800">
          {formData.date}
        </Text>
        <Text fontSize="md" fontWeight="600" color="#9678E1">
          {formData.time}
        </Text>
        <Text fontSize="sm" color="gray.600" pt={1}>
          {EVENT_BOOTH} &middot; {EVENT_VENUE}
        </Text>
      </VStack>

      <Text fontSize="md" color="gray.500" pt={2}>
        We look forward to meeting you at our booth!
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
        size={{ base: "md", md: "lg" }}
        w={{ base: "100%", md: "200px" }}
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
        maxW={isSubmitted ? { base: "92vw", md: "500px" } : "fit-content"}
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
            /* w=100% so the panel takes ModalContent's width instead of
               shrink-to-fitting around its longest line, which on a phone
               pushed it wider than the viewport. */
            <Box w="100%" bg="white" p={{ base: 3, md: 8 }} boxShadow="2xl">
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
                w={{
                  base: "90vw",
                  sm: "500px",
                  md: "550px",
                  lg: "min(1316px, 94vw)",
                }}
                mx="auto"
                boxShadow="2xl"
              >
                {/* Event Poster - Bottom on mobile, Left on desktop.
                    On mobile it carries the same horizontal padding as the form
                    so its edges line up with the input fields. aspectRatio sits
                    on the Image (not the Box) so that padding can't squash the
                    4:5 art — width drives height at every breakpoint. */}
                <Box
                  w={{ base: "100%", lg: "42%" }}
                  px={{ base: 4, md: 6, lg: 0 }}
                  pb={{ base: 4, md: 6, lg: 0 }}
                  alignSelf={{ base: "center", lg: "flex-start" }}
                  flexShrink={0}
                >
                  <Image loading="lazy"
                    src={eventImageSrc}
                    alt={EVENT_POSTER_ALT}
                    w="100%"
                    aspectRatio="1368 / 1708"
                    objectFit="cover"
                  />
                </Box>

                {/* Form Section */}
                <Box
                  flex={{ base: "0 0 auto", lg: "1" }}
                  minW={0}
                  mt={{ base: 14, lg: 10 }}
                  p={{ base: 4, md: 6, lg: 8 }}
                >
                  <VStack
                    spacing={{ base: 4, md: 6 }}
                    align="stretch"
                    as="form"
                    onSubmit={handleSubmit}
                  >
                    {/* Row 1: Full name & Email Address */}
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={{ base: 3, md: 4 }}
                    >
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb={{ base: "4px", md: "8px" }}
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
                          h={{ base: "44px", md: "52px" }}
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
                          mb={{ base: "4px", md: "8px" }}
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
                          h={{ base: "44px", md: "52px" }}
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
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={{ base: 3, md: 4 }}
                    >
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb={{ base: "4px", md: "8px" }}
                          color="white"
                        >
                          Book a slot*
                        </FormLabel>
                        <Select
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          bg="rgba(255,255,255,0.2)"
                          border="none"
                          h={{ base: "44px", md: "52px" }}
                          color="white"
                          fontSize="16px"
                          borderRadius="0"
                          _focus={{
                            border: "1px solid #A4FF79",
                            boxShadow: "0 0 0 1px #A4FF79",
                          }}
                          sx={{
                            option: {
                              bg: "black",
                              color: "white",
                              _hover: { bg: "#333" },
                            },
                          }}
                        >
                          {EVENT_DATES.map((date) => (
                            <option
                              key={date}
                              value={date}
                              style={{ background: "black", color: "white" }}
                            >
                              {date}
                            </option>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb={{ base: "4px", md: "8px" }}
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
                          h={{ base: "44px", md: "52px" }}
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
                    <SimpleGrid
                      columns={{ base: 1, md: 2 }}
                      spacing={{ base: 3, md: 4 }}
                    >
                      <FormControl isRequired>
                        <FormLabel
                          fontSize="14px"
                          fontWeight="500"
                          mb={{ base: "4px", md: "8px" }}
                          color="white"
                        >
                          Phone Number
                        </FormLabel>
                        <InputGroup>
                          <InputLeftAddon
                            bg="rgba(255,255,255,0.1)"
                            border="none"
                            color="white"
                            h={{ base: "44px", md: "52px" }}
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
                            h={{ base: "44px", md: "52px" }}
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
                          mb={{ base: "4px", md: "8px" }}
                          color="transparent"
                        >
                          .
                        </FormLabel>
                        <CustomButton
                          type="submit"
                          width={{ base: "100%", md: "60%" }}
                          height={{ base: "44px", md: "52px" }}
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
                          loadingText="Submitting..."
                        >
                          Submit
                        </CustomButton>
                      </Box>
                    </SimpleGrid>

                    {submitError && (
                      <Text
                        role="alert"
                        fontSize="14px"
                        fontWeight="500"
                        color="#FFB4B4"
                        bg="rgba(0,0,0,0.35)"
                        p={3}
                        borderLeft="3px solid #FF6B6B"
                      >
                        {submitError}
                      </Text>
                    )}
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
