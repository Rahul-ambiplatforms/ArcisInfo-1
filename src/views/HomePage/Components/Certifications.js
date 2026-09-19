import React from "react";
import { Box, Heading, Flex, Image, Container } from "@chakra-ui/react";
import { homeContent } from "../Data/Content";

const Certifications = () => {
    const { Certifications } = homeContent;

    // Real intrinsic pixel dimensions of each certification badge (measured
    // directly from the .webp files in public/images/). Passed as literal
    // width/height attributes below so the browser can reserve the correct
    // aspect ratio before the image loads (fixes the PageSpeed Insights
    // "Image elements do not have explicit width and height" CLS diagnostic).
    // CSS (maxH/w="auto") still controls the final rendered size.
    const CERT_DIMENSIONS = [
      { width: 200, height: 200 },
      { width: 160, height: 160 },
      { width: 200, height: 200 },
      { width: 200, height: 200 },
      { width: 200, height: 200 },
      { width: 200, height: 200 },
      { width: 200, height: 200 },
      { width: 600, height: 178 },
        ];

    return (
          <Box
        my={{ base: "6%" }}
      mt={{ md: "2%" }}
      mb={{ md: "0%" }}
      py={10}
      // content-visibility:auto lets the browser skip layout/paint for this
      // section while it's off-screen, freeing main-thread time for input
      // handling (web.dev/articles/avoid-large-complex-layouts). The reserved
      // intrinsic size keeps the scrollbar from jumping.
      sx={{
                contentVisibility: "auto",
                containIntrinsicSize: "0 320px",
      }}
    >
      <Box w="100%" px={{ base: 5, lg: 8 }}>
{/* Heading removed to match the reference image style */}
        <Heading
          as="p"
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
              <Image loading="lazy"
                src={src}
                alt={`Certification ${index + 1}`}
                                     width={CERT_DIMENSIONS[index]?.width}
                height={CERT_DIMENSIONS[index]?.height}
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
  
