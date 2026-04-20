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
      pt={{ base: "18vh", sm: "16vh", md: "140px" }}
      pb={{ base: 0, md: 0 }}
      direction={{ base: "column", md: "row" }}
    >
      {/* Mobile: centered top content */}
      <Box
        maxW={{ base: "100%", md: "615px" }}
        ml={{ base: 0, md: "32px" }}
        textAlign={{ base: "center", md: "left" }}
        w="100%"
      >
        <Heading
          as="h2"
          fontSize={{ base: "6.5vw", sm: "28px", md: "48px", lg: "60px" }}
          fontWeight="400"
          lineHeight={{ base: "8vw", sm: "36px", md: "60px", lg: "76px" }}
          bgGradient="linear(90.64deg, #171717 19.68%, #7F56D9 78.79%)"
          bgClip="text"
          mb={{ base: 2, md: 4 }}
          mt={{ base: 2, md: 4 }}
        >
          ArcisAI Cameras Are{" "}
          <br />
          Now{" "}
          <Text as="span" fontWeight="700">
            BIS-ER Certified
          </Text>
        </Heading>

        <Text
          fontSize={{ base: "3vw", sm: "13px", md: "16px", lg: "18px" }}
          fontWeight="400"
          lineHeight={{ base: "4.5vw", sm: "20px", md: "28px" }}
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
          justify={{ base: "center", md: "flex-start" }}
          direction="column"
          align={{ base: "center", md: "flex-start" }}
          gap={1}
          mb={{ base: 0, md: 6 }}
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
            w="280px"
            h="auto"
            objectFit="contain"
            display={{ base: "none", md: "block" }}
          />

        </Flex>

        {/* Desktop: button inline */}
        {showExploreButton && (
          <Box display={{ base: "none", md: "block" }} mt={4}>
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

      {/* Mobile: Explore More button positioned at bottom-right over camera images */}
      {showExploreButton && (
        <Box
          display={{ base: "flex", md: "none" }}
          position="absolute"
          bottom={{ base: "15vh", sm: "120px" }}
          right="24px"
          zIndex={2}
        >
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
  );
};

export default BISHeroSlide;
