import React from "react";
import { Box, Heading, Flex, Image, Container } from "@chakra-ui/react";
import { homeContent } from "../Data/Content";

const Certifications = () => {
  const { Certifications } = homeContent;

  return (
    <Box my={{ base: "6%" }} mt={{ md: "2%" }} mb={{ md: "0%" }} py={10}>
      <Box w="100%" px={{ base: 5, lg: 8 }}>
        {/* Heading removed to match the reference image style */}
        <Heading
          as="h2"
          textAlign="center"
          color="white"
          fontSize={{ base: "30px", md: "60px" }}
          fontWeight="400"
          mb={10}
        >
          {Certifications.heading}
        </Heading>
        <Box
          display={{ base: "grid", md: "flex" }}
          gridTemplateColumns={{ base: "repeat(3, 1fr)", md: "none" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          justifyContent={{ base: "center", md: "center" }}
          alignItems="center"
          gap={{ base: 2, md: 6 }}
          overflowX={{ base: "hidden", md: "auto" }}
        >
          {Certifications.images.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexShrink={0}
              gridColumn={{ base: index === 7 ? "span 2" : "auto", md: "auto" }}
            >
              <Image
                src={src}
                alt={`Certification ${index + 1}`}
                _hover={{ filter: "none" }} // Show original color on hover
                transition="all 0.3s"
                maxH={{ base: "80px", md: "60px" }} // Larger on mobile as requested
                w="auto"
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Certifications;
