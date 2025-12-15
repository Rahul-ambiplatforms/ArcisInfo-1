import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Box,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";
import CountrySelector from "../../ContactUs/Components/CountrySelector";

const DownloadFormPopup = ({ isOpen, onClose, pdfUrl }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const BACKEND_URL = "https://vmukti.com/backend/api/send-email-arcis";
  // const BACKEND_URL = "http://localhost:5000/api/send-email-arcis";

  const handleChange = (e) => {
    const { name, value } = e.target;
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

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    setIsLoading(true);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Using "Contact" formType as it shares the same backend logic
        body: JSON.stringify({
          ...formData,
          formType: "Datasheet Form",
          subject: "PDF Download Request",
          downloadUrl: pdfUrl,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your download will start shortly.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        // Trigger PDF download
        if (pdfUrl) {
          window.open(pdfUrl, "_blank");
        }

        console.log("ALL RELATED:", pdfUrl, BACKEND_URL);

        // Close and reset
        onClose();
        setFormData({
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Failed to submit details");
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay backdropFilter="blur(5px)" />
      <ModalContent
        bg="#171717"
        color="white"
        borderRadius="24px"
        overflow="hidden"
        position="relative"
      >
        {/* Background GIF */}
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

        <ModalHeader zIndex={1} position="relative" textAlign="center" pt={8}>
          <Text fontSize="2xl" fontWeight="bold">
            Download Datasheet
          </Text>
          <Text fontSize="md" fontWeight="normal" mt={2} color="gray.300">
            Please fill in your details to download the PDF.
          </Text>
        </ModalHeader>
        <ModalCloseButton color="white" zIndex={2} />

        <ModalBody zIndex={1} position="relative" pb={10} px={8}>
          <Box as="form" onSubmit={handleSubmit}>
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel color="white">Full Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    border: "1px solid #9678E1",
                    boxShadow: "0 0 0 1px #9678E1",
                  }}
                  borderRadius="10px"
                  h="48px"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Email Address</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    border: "1px solid #9678E1",
                    boxShadow: "0 0 0 1px #9678E1",
                  }}
                  borderRadius="10px"
                  h="48px"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel color="white">Phone Number</FormLabel>
                <HStack spacing="8px">
                  <CountrySelector
                    value={formData.countryCode}
                    onChange={(code) =>
                      setFormData((prev) => ({ ...prev, countryCode: code }))
                    }
                  />
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    maxLength={10}
                    bg="rgba(255,255,255,0.1)"
                    border="none"
                    color="white"
                    _placeholder={{ color: "gray.400" }}
                    _focus={{
                      border: "1px solid #9678E1",
                      boxShadow: "0 0 0 1px #9678E1",
                    }}
                    borderRadius="10px"
                    h="48px"
                    flex="1"
                  />
                </HStack>
              </FormControl>

              <FormControl>
                <FormLabel color="white">Message</FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message (optional)"
                  bg="rgba(255,255,255,0.1)"
                  border="none"
                  color="white"
                  _placeholder={{ color: "gray.400" }}
                  _focus={{
                    border: "1px solid #9678E1",
                    boxShadow: "0 0 0 1px #9678E1",
                  }}
                  borderRadius="10px"
                  resize="none"
                  minH="80px"
                />
              </FormControl>

              <Button
                type="submit"
                bg="#8266C9"
                color="white"
                width="100%"
                height="50px"
                borderRadius="20px"
                fontSize="16px"
                fontWeight="700"
                isLoading={isLoading}
                loadingText="Processing..."
                _hover={{ bg: "#8259e9ff" }}
                mt={2}
              >
                Submit & Download
              </Button>
            </VStack>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DownloadFormPopup;
