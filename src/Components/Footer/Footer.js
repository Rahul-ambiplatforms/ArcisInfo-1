import React from "react";
import {
  Box,
  SimpleGrid,
  Stack,
  Text,
  Link,
  Image,
  Flex,
  Icon,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { ReactComponent as HomeIcon } from "../Icons/Home.svg";
import { ReactComponent as MailIcon } from "../Icons/Mail.svg";
import { ReactComponent as PhoneIcon } from "../Icons/phone.svg";
import { ReactComponent as LocationIcon } from "../Icons/address.svg";
import { ReactComponent as FacebookIcon } from "../Icons/facebook_icon.svg";
import { ReactComponent as InstagramIcon } from "../Icons/instagram_icon.svg";
import { ReactComponent as LinkedInIcon } from "../Icons/linkedIn_icon.svg";
import { ReactComponent as XIcon } from "../Icons/X_icon.svg";
import { Link as RouterLink } from "react-router-dom";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"sm"} mb={2} color="white">
      {children}
    </Text>
  );
};

const FooterLink = ({ href, children, color = "#A8A8A8" }) => (
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

const SocialButton = ({ icon: IconComponent, href }) => {
  return (
    <Box
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      bg="#171717"
      w="45px"
      h="45px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-2px)",
      }}
      sx={{
        "& svg": {
          width: { base: "20px", md: "24px" },
          height: { base: "20px", md: "24px" },
        },
        "& svg path": {
          fill: "white !important",
        },
      }}
    >
      <IconComponent />
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
      <Box
        // maxW={"container.xl"}
        w="100%"
        py={{ base: 6, md: 8 }}
        px={{ base: 4, md: 6 }}
      >
        <Box display={{ base: "block", md: "none" }} mb="10%">
          <RouterLink to="/">
            <Image
              display={{ base: "block", md: "none" }}
              src="/images/ArcisAi_logo.png"
              alt="ArcisAI"
              h={{ base: "30px", md: "35px" }}
              objectFit="contain"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </RouterLink>
        </Box>
        {/* Top Section: 4 Columns + Social Media */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          mb={{ base: 6, md: 0 }}
          gap={{ base: 6, md: 0 }}
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

              {/* S-Series */}
              <FooterLink href={"/s-series"} color="#A8A8A8" fontWeight="bold">
                S-Series
              </FooterLink>
              {/* <Box pl={4}>
                <Stack spacing={1}>
                  <FooterLink href={"/s-series/ai-bullet-cctv-camera"}>
                    AI Bullet Camera
                  </FooterLink>
                  <FooterLink href={"/s-series/ai-ptz-cctv-camera"}>
                    AI PTZ Camera
                  </FooterLink>
                  <FooterLink href={"/s-series/ai-dome-cctv-camera"}>
                    AI Dome Camera
                  </FooterLink>
                </Stack>
              </Box> */}

              {/* Eco Series */}
              <FooterLink
                href={"/eco-series"}
                color="#A8A8A8"
                fontWeight="bold"
              >
                Eco Series
              </FooterLink>
              {/* <Box pl={4}>
                <Stack spacing={1}>
                  <FooterLink href={"/eco-series/bullet-cctv-camera"}>
                    Bullet CCTV Camera
                  </FooterLink>
                  <FooterLink href={"/eco-series/ai-baby-bullet-camera"}>AI Baby Bullet Camera</FooterLink>
                  <FooterLink href={"/eco-series/ptz-cctv-camera"}>
                    PTZ CCTV Camera
                  </FooterLink>
                  <FooterLink href={"/eco-series/dome-cctv-camera"}>
                    Dome CCTV Camera
                  </FooterLink>
                </Stack>
              </Box> */}
              <FooterLink
                href={"/arcis-bridge-device"}
                color="#A8A8A8"
                fontWeight="bold"
              >
                Arcis Bridge Device
              </FooterLink>
              <FooterLink href={"/cloud-vms"} color="#A8A8A8" fontWeight="bold">
                Cloud Video Management system
              </FooterLink>
              <FooterLink href={"/arcis-nvr"} color="#A8A8A8" fontWeight="bold">
                Network video recorder
              </FooterLink>

              {/* <FooterLink href={"/abd"}>ABD</FooterLink>
              <FooterLink href={"/cloud-vms"}>ArcisVMS</FooterLink> */}
            </Stack>

            {/* SOLUTIONS */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>SOLUTIONS</ListHeader>
              <FooterLink href={"/solution/edge-ai"}>Edge AI</FooterLink>
              <FooterLink href={"/solution/cloud-ai"}>Cloud AI</FooterLink>
              <FooterLink href={"/solution/generative-ai"}>
                Generative AI
              </FooterLink>
            </Stack>

            {/* COMPANY */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>COMPANY</ListHeader>
              <FooterLink href={"/about-us"}>About Us</FooterLink>
              <FooterLink href={"/why-choose-arcisai"}>Why ArcisAI</FooterLink>
              <FooterLink href={"/event"}>Event</FooterLink>
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
          <Stack align={"flex-start"} spacing={3} minW={{ md: "400px" }}>
            <Text
              fontWeight={"400"}
              fontSize={"3xl"}
              mb={2}
              mt={-2}
              color="white"
              textAlign={{ base: "left", md: "center" }}
              w="full"
            >
              Connect With Us Through Social Media!
            </Text>
            <HStack
              spacing={3}
              justifyContent={{ base: "flex-start", md: "flex-end" }}
              w="full"
            >
              <SocialButton icon={FacebookIcon} href={socialLinks.facebook} />
              <SocialButton icon={XIcon} href={socialLinks.twitter} />
              <SocialButton icon={InstagramIcon} href={socialLinks.instagram} />
              <SocialButton icon={LinkedInIcon} href={socialLinks.linkedin} />
            </HStack>
          </Stack>
        </Flex>

        {/* Middle Section: Left (Logo + Apps) | Right (Contact Info) */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "flex-end" }}
          mb={{ base: 6, md: 4 }}
          gap={{ base: 6, md: 8 }}
        >
          {/* Left Side: Make In India, App Stores, Logo */}
          <HStack align="center" spacing={{ base: 2, md: 3 }} flexWrap="nowrap">
            <Image
              src="/images/footer_makeinindia.png"
              alt="Make in India"
              h={{ base: "35px", md: "40px" }}
              objectFit="contain"
            />

            <Link
              href="https://apps.apple.com/in/app/arcisai/id6743403804"
              isExternal
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s ease"
            >
              <Image
                src="/images/footer-app-store.png"
                alt="App Store"
                h={{ base: "35px", md: "40px" }}
                cursor="pointer"
                objectFit="contain"
                _hover={{ filter: "brightness(110%)" }}
              />
            </Link>

            <Link
              href="https://play.google.com/store/apps/details?id=com.arcisadiance.app"
              isExternal
              _hover={{ transform: "scale(1.05)" }}
              transition="all 0.3s ease"
            >
              <Image
                src="/images/footer-play-store.png"
                alt="Google Play"
                h={{ base: "35px", md: "40px" }}
                cursor="pointer"
                objectFit="contain"
                _hover={{ filter: "brightness(110%)" }}
              />
            </Link>
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

          {/* Right Side: Partner/Contact Links + Contact Info */}
          <VStack align={{ base: "flex-start", md: "flex-end" }} spacing={6}>
            {/* Partner and Contact Links */}
            <HStack
              spacing={3}
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight="400"
              mb={2}
            >
              {/* <Link
                as={RouterLink}
                to="/partner-with-us"
                 color="white"
                textDecoration="underline"
                _hover={{ color: "gray.300" }}
              >
                PARTNER WITH US
              </Link>
              <Text color="white">|</Text> */}
              <Link
                as={RouterLink}
                to="/contact-us"
                color="white"
                textDecoration="underline"
                _hover={{ color: "gray.300" }}
              >
                CONTACT US
              </Link>
            </HStack>

            {/* Contact Information */}
            <VStack
              align={{ base: "flex-start", md: "flex-start" }}
              spacing={4}
              color="white"
            >
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: "2", md: "4" }}
              >
                <HStack>
                  <Icon as={HomeIcon} w={"24px"} h={"24px"} />
                  <Link
                    href="https://arcisai.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="white"
                    fontSize="md"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    www.arcisai.io
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={MailIcon} w={"24px"} h={"24px"} />
                  <Link
                    href="mailto:marketing@arcisai.io"
                    color="white"
                    fontSize="md"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    marketing@arcisai.io
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={PhoneIcon} w={"24px"} h={"24px"} />
                  <Link
                    href="tel:+919687779999"
                    color="white"
                    fontSize="md"
                    _hover={{ color: "gray.300", textDecoration: "none" }}
                  >
                    (+91) 968 777 9999
                  </Link>
                </HStack>
              </Flex>
              <HStack align="flex-start">
                <Icon as={LocationIcon} w={"24px"} h={"24px"} mt={1} />
                <Text
                  color="white"
                  fontSize={{ base: "12px", md: "14px" }}
                  maxW={{ base: "100%", md: "457px" }}
                  textAlign={{ base: "left", md: "left" }}
                >
                  House No. 7, Arista Eight, Corporate House, Rajpath Rangoli
                  Rd, behind Satyam House, Bodakdev, Ahmedabad, Gujarat 380054
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </Flex>

        {/* Bottom Section: Arcis Logo | Copyright | Adiance */}
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          justify="space-between"
          align={{ base: "left", md: "center" }}
          pt={4}
          gap={4}
        >
          {/* Left: Arcis Logo */}
          <RouterLink to="/">
            <Image
              display={{ base: "none", md: "block" }}
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
            fontSize={{ base: "10px", md: "12px" }}
            textAlign={{ base: "left", md: "center" }}
            color="white"
            flex="1"
          >
            Copyright © 2025 ArcisAI. All rights reserved. An ISO 27001:2022,
            ISO 9001:2015 Certified
          </Text>

          {/* Right: Powered By */}
          <VStack align={{ base: "left", md: "flex-end" }} spacing={0}>
            <Text
              fontSize={{ base: "12px", md: "14px" }}
              color="white"
              textDecoration="underline"
              mb={1}
            >
              POWERED BY
            </Text>
            <Link
              href="https://www.adiance.com"
              target="_blank"
              rel="noopener noreferrer"
              fontSize={{ base: "12px", md: "14px" }}
              textDecoration="underline"
              color="white"
              _hover={{ color: "white" }}
            >
              ADIANCE TECHNOLOGIES PVT. LTD.
            </Link>
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
