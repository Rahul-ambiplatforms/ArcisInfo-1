'use client';
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
import HomeIcon from "../Icons/Home.svg";
import MailIcon from "../Icons/Mail.svg";
import PhoneIcon from "../Icons/phone.svg";
import LocationIcon from "../Icons/address.svg";
import FacebookIcon from "../Icons/facebook_icon.svg";
import InstagramIcon from "../Icons/instagram_icon.svg";
import LinkedInIcon from "../Icons/linkedIn_icon.svg";
import XIcon from "../Icons/X_icon.svg";
import YouTubeIcon from "../Icons/youtube_icon.svg";
import NextLink from "next/link";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"sm"} mb={2} color="white">
      {children}
    </Text>
  );
};

const FooterLink = ({ href, children, color = "#A8A8A8" }) => (
  <Link
    as={NextLink}
    href={href}
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
    youtube: "https://www.youtube.com/@arcisai",
  };

  // Was hardcoded as "2025" in the copyright line below, so it went stale the
  // moment the year turned over. Evaluated at build time for the prerendered
  // pages and again on hydration, so it self-updates on every deploy.
  const year = new Date().getFullYear();

  return (
    <Box bg="black" color="white">
      <Box
        // maxW={"container.xl"}
        w="100%"
        py={{ base: 6, md: 8 }}
        px={{ base: 4, md: 6 }}
      >
        <Box display={{ base: "block", md: "none" }} mb="10%">
          <NextLink href="/">
            <Image loading="lazy"
              display={{ base: "block", md: "none" }}
              src="/images/ArcisAi_logo.webp" htmlWidth="601" htmlHeight="120"
              alt="ArcisAI"
              h={{ base: "30px", md: "35px" }}
              objectFit="contain"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </NextLink>
        </Box>
        {/* Top Section: 4 Columns + Social Media */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="flex-start"
          mb={{ base: 6, md: 0 }}
          gap={{ base: 6, md: 0 }}
        >
          {/* Left: Columns Grid */}
          <SimpleGrid
            columns={{ base: 2, md: 5 }}
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
                Cloud VMS
              </FooterLink>
              <FooterLink href={"/arcis-nvr"} color="#A8A8A8" fontWeight="bold">
                NVR
              </FooterLink>
              <FooterLink href={"/arcisgpt"} color="#A8A8A8" fontWeight="bold">
                ArcisGPT
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
              <FooterLink href={"/certifications"}>Certifications</FooterLink>
              <FooterLink href={"/partners"}>Partners</FooterLink>
              <FooterLink href={"/press"}>Press &amp; Media Kit</FooterLink>
              <FooterLink href={"/BIS-ER-certification"}>BIS-ER Certification</FooterLink>
              <FooterLink href={"/event"}>Event</FooterLink>
              <FooterLink href={"/jalandhar-warriors"}>Jalandhar Warriors</FooterLink>
              <FooterLink href={"/fsie-2026"}>FSIE 2026</FooterLink>
              <FooterLink href={"/news"}>News</FooterLink>
              <FooterLink href={"/privacy-policy"}>Privacy Policy</FooterLink>
              <FooterLink href={"/terms-of-service"}>
                Terms And Conditions
              </FooterLink>
            </Stack>

            {/* RESOURCES */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>RESOURCES</ListHeader>
              <FooterLink href={"/blog"}>Blogs</FooterLink>
              <FooterLink href={"/documents"}>Documents</FooterLink>
              <FooterLink href={"/faq"}>FAQ</FooterLink>
              <FooterLink href={"/tools"}>Tools</FooterLink>
              <FooterLink href={"/tools/cctv-storage-calculator"}>
                CCTV Storage Calculator
              </FooterLink>
              <FooterLink href={"/tools/certificate-verifier"}>
                Certificate Verifier
              </FooterLink>
              <FooterLink href={"/cctv-compliance-2026"}>
                CCTV Compliance 2026 Guide
              </FooterLink>
              <FooterLink href={"/india-cctv-market-report-2026"}>
                CCTV Market Report 2026
              </FooterLink>
            </Stack>

            {/* TOP LOCATIONS — internal links so city pages aren't orphaned */}
            <Stack align={"flex-start"} spacing={2}>
              <ListHeader>TOP LOCATIONS</ListHeader>
              <FooterLink href={"/cctv-cameras-ahmedabad"}>CCTV in Ahmedabad</FooterLink>
              <FooterLink href={"/cctv-cameras-surat"}>CCTV in Surat</FooterLink>
              <FooterLink href={"/cctv-cameras-vadodara"}>CCTV in Vadodara</FooterLink>
              <FooterLink href={"/cctv-cameras-rajkot"}>CCTV in Rajkot</FooterLink>
              <FooterLink href={"/cctv-cameras-mumbai"}>CCTV in Mumbai</FooterLink>
              <FooterLink href={"/cctv-cameras-pune"}>CCTV in Pune</FooterLink>
              <FooterLink href={"/cctv-cameras-delhi"}>CCTV in Delhi</FooterLink>
              <FooterLink href={"/cctv-cameras-bangalore"}>CCTV in Bangalore</FooterLink>
              <FooterLink href={"/cctv-cameras-hyderabad"}>CCTV in Hyderabad</FooterLink>
              <FooterLink href={"/cctv-cameras-chennai"}>CCTV in Chennai</FooterLink>
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
              <SocialButton icon={YouTubeIcon} href={socialLinks.youtube} />
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
            <Image loading="lazy"
              src="/images/footer_makeinindia.webp" htmlWidth="264" htmlHeight="120"
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
              <Image loading="lazy"
                src="/images/footer-app-store.webp" htmlWidth="422" htmlHeight="116"
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
              <Image loading="lazy"
                src="/images/footer-play-store.webp" htmlWidth="422" htmlHeight="116"
                alt="Google Play"
                h={{ base: "35px", md: "40px" }}
                cursor="pointer"
                objectFit="contain"
                _hover={{ filter: "brightness(110%)" }}
              />
            </Link>
          </HStack>
          {/* <NextLink href="/">
              <Image loading="lazy"
                src="/images/ArcisAi_logo.webp" htmlWidth="601" htmlHeight="120"
                alt="ArcisAI"
                h={{ base: "30px", md: "35px" }}
                objectFit="contain"
                cursor="pointer"
                _hover={{ opacity: 0.8 }}
                mt={2}
              />
            </NextLink> */}

          {/* Right Side: Contact Info */}
          {/* (The footer CONTACT US link that used to sit beside the details
              has been removed; the notes below predate that.)
              From xl up this becomes a row (CONTACT US beside the contact
              details) and stops shrinking, so website / email / phone fit on
              one line instead of the phone dropping to a second row.
              flexShrink=0 makes the badge HStack beside it yield the width
              instead. That costs the badges nothing visually: their boxes are
              far wider than the artwork drawn inside them (object-fit:contain
              centres ~380px of artwork in a box that measures 924px at 1440),
              so the box can give back ~540px before the badges themselves
              would start scaling.
              The no-shrink rule uses an explicit 1024px media query rather than
              a Chakra token because the safe cutoff lands between them: this
              block wants ~558px, and the badges need ~380px, so the row only
              balances from about 1018px up (1024 - 48 padding - 32 gap - 558 =
              386px left for the badges). At Chakra's lg (992px) the badges
              would be squeezed to ~354px and would visibly scale down, so lg is
              deliberately excluded and everything below it keeps its previous
              wrapping behaviour.
              The row direction starts later still, at xl, because CONTACT US
              sitting inline needs ~661px and only 1280px up affords that
              without eating into the badges. */}
          <Flex
            direction={{ base: "column", xl: "row" }}
            align={{ base: "flex-start", md: "flex-end", xl: "flex-start" }}
            gap={6}
            sx={{ "@media (min-width: 1024px)": { flexShrink: 0 } }}
          >
            {/* The footer CONTACT US link that sat here was removed: the
                header already carries Contact Us on every page. */}

            {/* Contact Information */}
            <VStack
              align={{ base: "flex-start", md: "flex-start" }}
              spacing={4}
              color="white"
            >
              {/* flexWrap: the sibling <SimpleGrid flex="1"> takes `flex-basis: 0`
                  and grows greedily, squeezing this column toward its min-content
                  width. Without wrapping, these three items shrank in place and
                  the phone number — the only one containing spaces — broke at
                  every space into "(+91) / 968 / 777 / 9999". Allowing the row to
                  wrap moves whole items onto a second line instead of shrinking
                  them. */}
              <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: "2", md: "4" }}
                flexWrap="wrap"
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
                    whiteSpace="nowrap"
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
          </Flex>
        </Flex>

        {/* Bottom Section: Arcis Logo | Copyright | Adiance */}
        <Box
          // Grid instead of flex from lg up, in three EQUAL tracks. Equal tracks
          // are what makes the middle column sit on the true container axis, so
          // the copyright is genuinely centred however wide the logo and the
          // powered-by line happen to be. The old
          // `justify="space-between"` + `flex="1"` centred it inside the leftover
          // space instead, ~26px left of centre.
          //
          // NOT `1fr auto 1fr`: grid sizes intrinsic (`auto`) tracks before it
          // hands any free space to `fr` tracks, so the middle column claimed its
          // full ~550px max-content width and left the two sides splitting the
          // scraps — about 181px each at 1024px, which is less than the
          // powered-by line needs. That starvation is what clipped it.
          // With three equal tracks each side gets a full third (~304px at the
          // 992px breakpoint, ~453px at 1440px), comfortably more than the
          // powered-by line needs at any desktop width.
          //
          // The row starts at lg (62em/992px), not md: between 768px and 991px
          // the logo plus the powered-by line leave too little room for the
          // 89-character copyright. Below lg this keeps its original stacked
          // column-reverse layout untouched.
          display={{ base: "flex", lg: "grid" }}
          flexDirection={{ base: "column-reverse" }}
          gridTemplateColumns={{ lg: "repeat(3, 1fr)" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          pt={4}
          gap={4}
        >
          {/* Left: Arcis Logo */}
          {/* The responsive `display` lives on the wrapper, not on the <Image>:
              with it on the image the anchor stayed a zero-size flex item and
              still consumed the container's 16px gap on mobile. */}
          <Box
            as={NextLink}
            href="/"
            display={{ base: "none", md: "block" }}
            justifySelf={{ lg: "start" }}
          >
            {/* Explicit width, matching the asset's own 601:120 ratio (x5.008).
                Without it the box stretched to the full grid track while
                object-fit:contain letterboxed the logo centred inside, so the
                logo read as indented on desktop and centred in the stacked
                layout rather than flush left. `w="auto"` does not fix it here —
                the box still resolved to the track width — so the size is
                pinned instead: 30x150 and 35x175. */}
            <Image loading="lazy"
              src="/images/ArcisAi_logo.webp" htmlWidth="601" htmlHeight="120"
              alt="ArcisAI"
              h={{ base: "30px", md: "35px" }}
              w={{ base: "150px", md: "175px" }}
              objectFit="contain"
              cursor="pointer"
              _hover={{ opacity: 0.8 }}
            />
          </Box>

          {/* Middle: Copyright. No minW override — a plain `1fr` track keeps its
              automatic min-content floor, so long text wraps instead of being
              clipped. */}
          <Text
            fontSize="12px"
            textAlign={{ base: "left", lg: "center" }}
            color="white"
          >
            Copyright © {year} ArcisAI. All rights reserved. An ISO 27001:2022,
            ISO 9001:2015 Certified
          </Text>

          {/* Right: Powered By — one line at every desktop width, matching the
              copyright at 12px. Only the company name is the link, so the
              underline marks what is actually clickable.
              `minW={0}` was removed deliberately: it let this shrink below its
              min-content width, which clipped the text. Without it the track
              holds at min-content and the line wraps onto a second line instead
              of being cut off, if a font ever renders wider than expected. */}
          <Text
            fontSize="12px"
            color="white"
            textAlign={{ base: "left", lg: "right" }}
            justifySelf={{ lg: "end" }}
          >
            POWERED BY{" "}
            <Link
              href="https://www.adiance.com"
              target="_blank"
              rel="noopener noreferrer"
              textDecoration="underline"
              color="white"
              _hover={{ color: "white" }}
            >
              ADIANCE TECHNOLOGIES PVT. LTD.
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

