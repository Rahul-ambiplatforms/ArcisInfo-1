'use client';
import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";

const BISHeroSlide = ({ showExploreButton = true }) => {
  return (
    <Flex
      h="100%"
      w="100%"
      px={{ base: 0, md: 8 }}
      align={{ base: "flex-start", md: "center" }}
      // The hero wrapper pulls itself up by `-35%` of its WIDTH, so the
      // clearance has to be width-based too — `vh` here let the text slide
      // under the fixed header/marquee on short or wide phones. 35vw cancels
      // the pull exactly, leaving a constant offset at every mobile size.
      pt={{ base: "calc(35vw + 28px)", md: "90px" }}
      pb={{ base: 0, md: 12 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Mobile: centered top content */}
      <Box
        maxW={{ base: "100%", md: "615px" }}
        ml={{ base: 0, md: "32px" }}
        textAlign={{ base: "center", md: "left" }}
        w="100%"
        // Mobile only: the copy sits on top of the product photo, so give it a
        // soft light panel — otherwise the heading, badge and certificate text
        // run across the cameras and are hard to read.
        bg={{ base: "rgba(255,255,255,0.82)", md: "transparent" }}
        backdropFilter={{ base: "blur(6px)", md: "none" }}
        borderRadius={{ base: "16px", md: 0 }}
        mx={{ base: "auto", md: 0 }}
        py={{ base: 3, md: 0 }}
      >
        <Heading
          as="h1"
          // clamp() instead of vw-at-base + px-at-breakpoints: that mix made the
          // text shrink ~10% crossing 480px (vw had grown past the `sm` value)
          // and jump 71% at 768px. This scales monotonically and still lands on
          // the old desktop sizes — 46.8px at 768px, capped at 60px from 992px.
          fontSize="clamp(22px, 6.1vw, 60px)"
          fontWeight="400"
          // Unitless: tracks fontSize automatically, so the two can't drift.
          lineHeight="1.25"
          bgGradient="linear(90.64deg, #171717 19.68%, #7F56D9 78.79%)"
          bgClip="text"
          mb={{ base: 2, md: 4 }}
          mt={{ base: 2, md: 4 }}
        >
          AI CCTV Cameras, Video Management {" "}
          <br />
          <Text as="span" fontWeight="700">
          and Analytics from ArcisAI
          </Text>
        </Heading>

        <Text
          // Was `3vw` at base, which rendered 9.6px on a 320px phone. The 14px
          // floor is the point of this clamp; the cap keeps the old lg size.
          fontSize="clamp(14px, 2.1vw, 18px)"
          fontWeight="400"
          lineHeight="1.6"
          color="#333"
          mb={{ base: 2, md: 6 }}
          maxW={{ base: "90%", md: "500px" }}
          mx={{ base: "auto", md: 0 }}
        >
          A major step forward in building{" "}
          <Text as="span" fontWeight="700">
            compliant, secure, and deployment-ready surveillance systems for India.
          </Text>
        </Text>

        <Flex
          w="100%"
          justify={{ base: "center", md: "flex-start" }}
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          gap={1}
          mb={{ base: 0, md: 4 }}
          px={{ base: 4, md: 0 }}
        >
          {/* Mobile: logo with certificate number built in */}
          <Image
            src="/images/bis_icon_mobile.svg"
            alt="BIS Certification - R-72003735 ER01:2024"
            w={{ base: "40vw", sm: "180px" }}
            maxW="203px"
            h="auto"
            objectFit="contain"
            display={{ base: "block", md: "none" }}
          />
          {/* Desktop: icon only */}
          <Image
            src="/images/bis_icon.svg"
            alt="BIS Certification Icon"
            w={{ md: "220px", lg: "260px" }}
            h="auto"
            objectFit="contain"
            display={{ base: "none", md: "block" }}
          />

          {/* Mobile: Explore More sits in the flow under the badge, not
              floating over the photo where the WhatsApp/Call buttons cover it */}
          {showExploreButton && (
            <Box display={{ base: "block", md: "none" }} mt={2} mb={1}>
              <CustomButton
                onClick={() => window.open("/BIS-ER-certification", "_self")}
                width="140px"
                height="40px"
                bgColor="rgba(0, 0, 0, 0.05)"
                hoverBgColor="rgba(0, 0, 0, 0.1)"
                borderColor="#1a1a2e"
                hoverBorderColor="#5B2EAF"
                textColor="#1a1a2e"
                hoverTextColor="#5B2EAF"
                fontSize="14px"
              >
                Explore More
              </CustomButton>
            </Box>
          )}
        </Flex>

        {/* Desktop: button inline */}
        {showExploreButton && (
          <Box display={{ base: "none", md: "block" }} mt={2}>
            <CustomButton
              onClick={() => window.open("/BIS-ER-certification", "_self")}
              width="145px"
              height="40px"
              bgColor="rgba(0, 0, 0, 0.05)"
              hoverBgColor="rgba(0, 0, 0, 0.1)"
              borderColor="#1a1a2e"
              hoverBorderColor="#5B2EAF"
              textColor="#1a1a2e"
              hoverTextColor="#5B2EAF"
              fontSize="14px"
            >
              Explore More
            </CustomButton>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default BISHeroSlide;
