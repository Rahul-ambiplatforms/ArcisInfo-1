import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Image,
  Flex,
  Icon,
  VStack,
  HStack,
  Divider,
} from "@chakra-ui/react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link as RouterLink } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"lg"} mb={2} color="white">
      {children}
    </Text>
  );
};

const FooterLink = ({ href, children, color = "gray.400" }) => (
  <Link
    as={RouterLink}
    to={href}
    color={color}
    fontSize="sm"
    _hover={{ color: "white", textDecoration: "none" }}
  >
    {children}
  </Link>
);

const SocialButton = ({ icon, href }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      bg="rgba(255, 255, 255, 0.1)"
      w={10}
      h={10}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="md"
      color="white"
      transition="all 0.3s"
      _hover={{
        bg: "white",
        color: "black",
        transform: "translateY(-2px)",
      }}
    >
      <Icon as={icon} w={5} h={5} />
    </Box>
  );
};

const Footer = () => {
  // Social media links from old footer
  const socialLinks = {
    facebook: "https://www.facebook.com/thearcisai/",
    twitter: "https://x.com/arcisai",
    instagram: "https://www.instagram.com/_arcisai_/",
    linkedin: "https://www.linkedin.com/company/thearcisai/",
  };

  return (
    <Box bg="black" color="white">
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={{ base: 6, md: 8 }}
        px={{ base: 4, md: 6 }}
      >
        {/* Top Section: 4 Columns + Social Media */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          mb={{ base: 6, md: 4 }}
          gap={{ base: 6, md: 4 }}
        >
          {/* Left: 4 Columns Grid */}
          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={{ base: 4, md: 6 }}
            flex="1"
          >
            {/* PRODUCTS */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>PRODUCTS</ListHeader>
              <FooterLink href={"/s-series/ai-ptz-cctv-camera"}>
                AI PTZ Camera
              </FooterLink>
              <FooterLink href={"/s-series/ai-bullet-cctv-camera"}>
                AI Bullet Camera
              </FooterLink>
              <FooterLink href={"/s-series/ai-dome-cctv-camera"}>
                AI Dome Camera
              </FooterLink>
            </Stack>

            {/* SOLUTIONS */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>SOLUTIONS</ListHeader>
              <FooterLink href={"/solution/edge-ai-cctv-camera"}>
                Edge-AI
              </FooterLink>
              <FooterLink href={"/solution/cloud-ai-cctv-camera"}>
                Cloud-AI
              </FooterLink>
              <FooterLink href={"/solution/gen-ai-cctv-camera"}>
                Generative-AI
              </FooterLink>
            </Stack>

            {/* COMPANY */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>COMPANY</ListHeader>
              <FooterLink href={"/about-us"}>About Us</FooterLink>
              <FooterLink href={"/why-choose-arcisai"}>Why ArcisAI</FooterLink>
              {/* <FooterLink href={"/event"}>Event</FooterLink> */}
              <FooterLink href={"/privacy-policy"}>Privacy Policy</FooterLink>
              <FooterLink href={"/terms-of-service"}>
                Terms And Conditions
              </FooterLink>
            </Stack>

            {/* RESOURCES */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>RESOURCES</ListHeader>
              <FooterLink href={"/blog"}>Blogs</FooterLink>
            </Stack>
          </SimpleGrid>

          {/* Right: Social Media Section */}
          <Box display={{ base: "block", md: "block" }} minW={{ md: "300px" }}>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              mb={3}
              color="white"
              textAlign={{ base: "left", md: "right" }}
            >
              Connect With Us Through Social Media!
            </Text>
            <HStack
              spacing={3}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
            >
              <SocialButton icon={FaFacebookF} href={socialLinks.facebook} />
              <SocialButton icon={FaXTwitter} href={socialLinks.twitter} />
              <SocialButton icon={FaInstagram} href={socialLinks.instagram} />
              <SocialButton icon={FaLinkedinIn} href={socialLinks.linkedin} />
            </HStack>
          </Box>
        </Flex>

        {/* Middle Section: Left (Logo + Apps) | Right (Contact Info) */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "flex-start" }}
          mb={{ base: 6, md: 4 }}
          gap={{ base: 6, md: 8 }}
        >
          {/* Left Side: Make In India, App Stores, Logo */}
          <VStack align={{ base: "center", md: "flex-start" }} spacing={3}>
            <Image
              src="/images/footer_makeinindia.png"
              alt="Make in India"
              h={{ base: "50px", md: "60px" }}
              objectFit="contain"
            />
            <HStack spacing={3}>
              <Image
                src="/images/footer-app-store.png"
                alt="App Store"
                h={{ base: "35px", md: "40px" }}
                cursor="pointer"
                objectFit="contain"
              />
              <Image
                src="/images/footer-play-store.png"
                alt="Google Play"
                h={{ base: "35px", md: "40px" }}
                cursor="pointer"
                objectFit="contain"
              />
            </HStack>
            {/* <RouterLink to="/">
              <Image
                src="/images/ArcisAi_logo.png"
                alt="ArcisAI"
                h={{ base: "30px", md: "35px" }}
                objectFit="contain"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
                mt={2}
              />
            </RouterLink> */}
          </VStack>

          {/* Right Side: Partner/Contact Links + Contact Info */}
          <VStack align={{ base: "center", md: "flex-end" }} spacing={3}>
            {/* Partner and Contact Links */}
            <HStack spacing={3} fontSize="sm" fontWeight="bold" mb={2}>
              {/* <Link
                as={RouterLink}
                to="/partner-with-us"
                color="gray.400"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                PARTNER WITH US
              </Link>
              <Text color="gray.400">|</Text> */}
              <Link
                as={RouterLink}
                to="/contact-us"
                color="gray.400"
                _hover={{ color: "white", textDecoration: "none" }}
              >
                CONTACT US
              </Link>
            </HStack>

            {/* Contact Information */}
            <VStack
              align={{ base: "center", md: "flex-end" }}
              spacing={2}
              color="white"
            >
              <HStack>
                <HStack>
                  <Icon as={FaHome} w={4} h={4} />
                  <Link
                    href="https://www.arcisai.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                    fontSize="sm"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    www.arcisai.io
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} w={4} h={4} />
                  <Link
                    href="mailto:marketing@arcisai.io"
                    color="white"
                    fontSize="sm"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    marketing@arcisai.io
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={FaPhone} w={4} h={4} />
                  <Link
                    href="tel:+919687779999"
                    color="white"
                    fontSize="sm"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    (+91) 968 777 9999
                  </Link>
                </HStack>
              </HStack>
              <HStack align="flex-start">
                <Icon as={FaMapMarkerAlt} w={4} h={4} mt={1} />
                <Text
                  color="white"
                  fontSize="sm"
                  maxW={{ base: "100%", md: "420px" }}
                  textAlign={{ base: "center", md: "right" }}
                >
                  House No. 7, Arista Eight, Corporate House, Rajpath Rangoli
                  Rd, behind Satyam House, Bodakdev, Ahmedabad, Gujarat 380059
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Flex>

        {/* Bottom Section: Arcis Logo | Copyright | Adiance */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "center", md: "center" }}
          pt={4}
          borderTop="1px solid"
          borderColor="gray.800"
          gap={4}
        >
          {/* Left: Arcis Logo */}
          <RouterLink to="/">
            <Image
              src="/images/ArcisAi_logo.png"
              alt="ArcisAI"
              h={{ base: "30px", md: "35px" }}
              objectFit="contain"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </RouterLink>

          {/* Middle: Copyright */}
          <Text
            fontSize={"xs"}
            textAlign={{ base: "center", md: "center" }}
            color="gray.500"
            flex="1"
          >
            Copyright © 2025 ArcisAI. All rights reserved. An ISO 27001:2022,
            ISO 9001:2015 Certified
          </Text>

          {/* Right: Powered By */}
          <VStack align={{ base: "center", md: "flex-end" }} spacing={0}>
            <Text fontSize="xs" color="gray.500" mb={1}>
              POWERED BY
            </Text>
            <Link
              href="https://www.adiance.com"
              target="_blank"
              rel="noopener noreferrer"
              fontSize="xs"
              textDecoration="underline"
              color="gray.400"
              _hover={{ color: "white" }}
            >
              ADIANCE TECHNOLOGIES PVT. LTD.
            </Link>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
