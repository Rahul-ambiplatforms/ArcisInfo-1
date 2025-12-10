import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { homeContent } from "../Data/Content";

const AISolutionIndustry = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (!data) return;

  const content = data;
  const { heading, description, industries } = content;

  const handleItemClick = (index) => {
    if (isMobile) {
      setActiveIndex(index === activeIndex ? null : index);
    }
  };

  // Corner Styles
  const cornerBase = {
    position: "absolute",
    borderColor: "#A4FF79",
    width: "10px",
    height: "10px",
    transition: "all 0.3s ease",
    opacity: 0.2,
  };

  return (
    <Box
      bg="black"
      mt={{ base: "-5%", md: "-3%" }}
      py={{ base: "5%", md: "2%" }}
    >
      <Box w="full" px={{ base: 4, lg: 8 }}>
        <Heading
          as="h2"
          textAlign="center"
          color="white"
          fontSize={{ base: "30px", md: "48px", lg: "60px" }}
          fontWeight="400"
          lineHeight={{ base: "38px", md: "54px", lg: "76px" }}
          mb={2}
          mt={{ base: "5%", md: "2%" }}
          w={{ base: "100%", md: "95%" }}
          mx="auto"
        >
          {heading}
        </Heading>
        <Text
          as="p"
          textAlign="center"
          color="#fff"
          fontSize={{ base: "14x", md: "20px" }}
          lineHeight={{ base: "18px", md: "25px" }}
          mx="auto"
          mb={{ base: 8, md: 16 }}
        >
          {description}
        </Text>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={{ base: 1, md: 2 }}
          justifyItems="center"
        >
          {industries.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <Box
                key={index}
                textAlign="center"
                cursor="pointer"
                onClick={() => handleItemClick(index)}
                role="group"
                position="relative"
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                {/* Image Container with Bounding Box */}
                <Box
                  position="relative"
                  w="100%"
                  maxW={{ base: "180px", lg: "220px" }} // Fluid width with max limit
                  aspectRatio="1/1"
                  mx="auto"
                  mb={{ base: 2, md: 4 }}
                  p="4px"
                >
                  {/* Top Left */}
                  <Box
                    {...cornerBase}
                    top="0"
                    left="0"
                    borderTopWidth="2px"
                    borderLeftWidth="2px"
                    opacity={isActive ? 1 : 0}
                    _groupHover={{ opacity: { base: isActive ? 1 : 0, lg: 1 } }}
                  />
                  {/* Top Right */}
                  <Box
                    {...cornerBase}
                    top="0"
                    right="0"
                    borderTopWidth="2px"
                    borderRightWidth="2px"
                    opacity={isActive ? 1 : 0}
                    _groupHover={{ opacity: { base: isActive ? 1 : 0, lg: 1 } }}
                  />
                  {/* Bottom Right */}
                  <Box
                    {...cornerBase}
                    bottom="0"
                    right="0"
                    borderBottomWidth="2px"
                    borderRightWidth="2px"
                    opacity={isActive ? 1 : 0}
                    _groupHover={{ opacity: { base: isActive ? 1 : 0, lg: 1 } }}
                  />
                  {/* Bottom Left */}
                  <Box
                    {...cornerBase}
                    bottom="0"
                    left="0"
                    borderBottomWidth="2px"
                    borderLeftWidth="2px"
                    opacity={isActive ? 1 : 0}
                    _groupHover={{ opacity: { base: isActive ? 1 : 0, lg: 1 } }}
                  />

                  <Image
                    src={item.image}
                    alt={item.name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="all 0.3s"
                  />
                </Box>

                <Text color="white" fontSize="16px" fontWeight="700" mx="auto">
                  {item.name}
                </Text>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default AISolutionIndustry;
