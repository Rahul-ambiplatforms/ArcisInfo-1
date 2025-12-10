import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";

const HeroSection = ({ data }) => {
  if (!data) return null;

  return (
    <Box
      as="section"
      w="100%"
      h={{ base: "90vh", md: "100vh" }}
      position="relative"
      overflow="hidden"
      mt={{
        base: data.sectionProps?.mobile?.marginTop || "-5%",
        md: data.sectionProps?.desktop?.marginTop || "-5%",
      }}
    >
      {/* Background Images */}
      {data.d_image && (
        <Image
          src={data.d_image}
          alt={data.heading}
          w="100%"
          h="100%"
          position="absolute"
          objectFit="cover"
          top="0"
          left="0"
          zIndex="0"
          display={{ base: data.m_image ? "none" : "block", md: "block" }}
        />
      )}
      {data.m_image && (
        <Image
          src={data.m_image}
          alt="Hero Background Mobile"
          w="100%"
          h="100%"
          position="absolute"
          objectFit="cover"
          top="0"
          left="0"
          zIndex="0"
          display={{ base: "block", md: "none" }}
        />
      )}

      {/* Content Overlay */}
      <Box
        position="absolute"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
        display="flex"
        alignItems={{
          base: data.textProps?.mobile?.alignItems || "center",
          md: data.textProps?.desktop?.alignItems || "center",
        }}
        // justifyContent={{
        //   base: data.textProps?.mobile?.textAlign || "flex-end",
        //   md: data.textProps?.desktop?.textAlign || "flex-start",
        // }}
      >
        <Box
          mt={{
            base: data.textProps?.mobile?.top || "6%",
            md: data.textProps?.desktop?.top || "5%",
          }}
          textAlign={{
            base: data.textProps?.mobile?.textAlign || "center",
            md: data.textProps?.desktop?.textAlign || "center",
          }}
          // color={{
          //   base: data.textProps?.mobile?.textColor || "white",
          //   md: data.textProps?.desktop?.textColor || "white",
          // }}
          w={{
            base: data.textProps?.mobile?.width || "100%",
            md: data.textProps?.desktop?.width || "100%",
          }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "30px", md: "48px", lg: "60px" }}
            fontWeight="400"
            lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
            bgGradient="linear-gradient(91deg, #171717, #7F56D9)"
            bgClip="text"
            mb={{ base: 2, md: 4 }}
          >
            {data.heading}
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px", lg: "18px" }}
            fontWeight="400"
            lineHeight={{ base: "20px", md: "28px", lg: "28px" }}
            w="95%"
            mx="auto"
          >
            {data.description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
