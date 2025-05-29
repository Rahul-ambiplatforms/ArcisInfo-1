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
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    // For phone input, allow only digits and max 10 digits
    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10)
      setFormData((prev) => ({
        ...prev,
        [name]: digitsOnly,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }
  const [isLoading, setIsLoading] = useState(false)
  const toast = useToast()
  // const BACKEND_URL = 'https://vmukti.com/backend/api/send-email'
  const BACKEND_URL = 'http://localhost:5000/api/send-email-arcis'
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Phone validation: only digits, 10-15 digits
    const phoneRegex = /^\d{10}$/;

    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: 'Missing required fields',
        description: 'Please fill in all required fields',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: 'Invalid Phone Number',
        description: 'Please enter a valid phone number (10-15 digits).',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch(
        BACKEND_URL,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: "We'll get back to you soon.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })

        setFormData({
          name: '',
          phone: '',
          email: '',
        })
      } else {
        throw new Error(data.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error:', error)
      toast({
        title: 'Failed to send message',
        description: error.message || 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

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
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          color={"gray.500"}
          mb={5}
        >
          Get in touch
        </Text>
        <VStack spacing={4} maxW="400px" mx="auto" w="100%">
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
            <Input placeholder="Name" name="name" onChange={handleChange} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>
              Phone number
            </FormLabel>
            <Input placeholder="Phone number" name="phone" onChange={handleChange} value={formData.phone} maxLength={10} />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
            <Input placeholder="Email" name="email" onChange={handleChange} value={formData.email} />
          </FormControl>
          <Button
            variant={"solid"}
            bgColor={"black"}
            onClick={handleSubmit}
            color={"white"}
            type="submit"
            isLoading={isLoading}
            h={"34px"}
            p={"10px 18px"}
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
          <Box
            color="purple.500"
            mb={{ base: 4, md: 0 }}
          >
            <Flex justifyContent="center" alignItems="center">
              <Text as="span" fontWeight="extrabold" fontSize="40px" mr={2}>
                Secure
              </Text>
              <Text fontSize="32px" height="100%" fontWeight="400" color="black">
                What Matters with Advanced
              </Text>
            </Flex>


            <Text fontSize="40px" display="block" color="purple.500" fontWeight="700">
              AI-Powered Surveillance
            </Text>
          </Box>
          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 18px"}
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
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          // maxW="1200px"
          mx="auto"
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
          py={{ base: 4, md: 6 }}
          px={4} // Optional padding for consistent spacing
          textAlign={{ base: "center", md: "left" }}
        >
          {/* Logo and Social Icons */}
          <Box
          // textAlign={{ base: "center", md: "left" }}
          >
            <Image
              src="./images/arcisGPTcolorWhite.png"
              alt="Logo"
              w="120px"
              mx="auto"
            />
            <HStack
              mt={4}
              spacing={4}
              justify={{ base: "center", md: "flex-start" }}
            >
              <IconButton
                as="a"
                href="#"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                color="white"
                _hover={{ color: "rgb(150,120,225)", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                color="white"
                _hover={{ color: "rgb(150,120,225)", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="white"
                _hover={{ color: "rgb(150,120,225)", bg: "white" }}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                color="white"
                _hover={{ color: "rgb(150,120,225)", bg: "white" }}
              />
            </HStack>

          </Box>
          {/* Navigation Links
        <HStack
          spacing={{ base: 4, md: 6 }}
          divider={<Divider orientation="vertical" borderColor="white" />}
          wrap="wrap"
          justify={{ base: "center", md: "flex-end" }}
          textAlign="center"
          fontSize="14px"
          color="white"
        >
          <Link href="#" _hover={{ textDecoration: "none" }}>
            OUR PRODUCTS
          </Link>
          <Link href="#" _hover={{ textDecoration: "none" }}>
            PRIVACY POLICY
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            TERMS OF SERVICES
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            WARRANTY SERVICES
          </Link>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            WARRANTY POLICY
          </Link>
        </HStack> */}
        </Flex>

        <Text
          textAlign="center"
          fontSize={{ base: "xs", md: "sm" }}
          color="white"
        >
          Copyright © {year} ArcisAI
        </Text>
      </Box>
    </Box>
  );
}

export default Footer;
