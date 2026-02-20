import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ProductInfo() {
  return (
    <Box mb={{ base: "-45%", md: "-5%" }}>
      {/* Image of Lining in bg */}
      <Box
        borderRadius="md"
        p={4}
        display="flex"
        alignItems="center"
        mt="-280px"
        mb="-150px"
        zIndex={0}
      >
        {/* Dome Camera */}
        <Image loading="lazy"
          src="./images/bgLines.png"
          alt="Dome Camera"
          // w={{ base: "500px", md: "700px", lg: "829.413px" }}
          w="1300px"
          h="426px"
          objectFit="cover"
        />
      </Box>
      <Flex
        justifyContent={"space-between"}
        align="center"
        direction={{ base: "column", md: "row" }}
        mb={8}
        p={{ base: "2", md: "8" }}
        w={"100%"}
        gap={6}
      >
        {/* Text Section */}
        <Box w={{ base: "100%", md: "50%" }} p={{ base: 0, md: 4 }}>
          <VStack
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "flex-start" }}
            w={{ base: "100%", md: "80%" }}
            p={{ base: "0", md: "4" }}
            mt={{ base: "-10px", md: "-150px" }}
            // bg="red"
          >
            <Heading
              fontWeight="700"
              color="#5B5B5C"
              fontSize={{ base: "32px", md: "40px" }}
            >
              Our{" "}
              <Text as="span" color="#9678E1">
                AI CCTV Camera{" "}
              </Text>
              Ranges
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="#5B5B5C"
              w="100%"
              align="justify"
            >
              ArcisAI brings you the S-Series AI CCTV cameras designed for every
              need. Whether you need wireless flexibility, mobile connectivity,
              or wired stability, there’s a camera that fits your setup.{" "}
            </Text>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="#5B5B5C"
              w="100%"
              align="justify"
            >
              Each S-Series camera includes 8 inbuilt EdgeAI detections such as
              unattended object, missing object, area, and line crossing, along
              with customer count, face, human, and motion detection. With
              real-time alerts, instant notifications, and detailed reports
              available through our mobile app and STQC-certified VMS, ArcisAI
              ensures your surveillance is always smart, reliable, and easy to
              manage.
            </Text>
            <Heading size="md">
              S-SERIES{" "}
              <Text as="span" color="purple.500">
                AI CAMERAS
              </Text>
            </Heading>
            <Flex
              direction={{ base: "row", md: "column" }}
              spacing={1}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent="center"
              gap={{ base: "4", md: "1" }}
            >
              <Text fontSize={{ base: "sm", md: "14px" }}>• DOME</Text>
              <Text fontSize={{ base: "sm", md: "14px" }}>• BULLET</Text>
              <Text fontSize={{ base: "sm", md: "14px" }}>• PTZ</Text>
            </Flex>
          </VStack>
        </Box>
        {/* Product Showcase Section */}
        <Box
          borderRadius="md"
          mx="auto"
          p={4}
          display="flex"
          alignItems="center"
          h={{ base: "350px", md: "600px" }}
          flexDirection={{ base: "column", md: "row" }}
          mt={{ base: "0", md: "100px" }}
          mb="-30px"
          gap={{ base: "4", md: 0 }}
        >
          {/* Dome Camera */}
          <Image loading="lazy"
            src="./images/productType.png"
            alt="Dome Camera"
            w={{ base: "500px", md: "700px", lg: "950px" }}
            h="auto"
            objectFit="cover"
            zIndex="1"
          />
        </Box>
      </Flex>
      <Box mt="-14%" position="relative" overflow="hidden" h="400px">
        <Box
          position="absolute"
          left="90%"
          top="20px"
          transform="translateX(-95%)"
          w="100%"
          h="50%"
        >
          {/* Purple background with controlled height */}
          <Box
            display={{ base: "none", md: "block" }}
            bg="#9678E1"
            w="100%"
            h="300px" // Set a smaller height for the background
            position="absolute"
            top="60%" // Adjust as needed to position under the image
            left="20"
            zIndex="0"
          />

          {/* Image stays unaffected above the background */}
          <Image loading="lazy"
            w={{ base: "100%", md: "860px" }}
            h={{ base: "auto", md: "488px" }}
            src="./images/multiview.png"
            alt="Surveillance"
            borderRadius="md"
            transition="transform 0.3s ease"
            position="relative"
            left={{ base: "17px", md: "0" }}
            zIndex="1"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductInfo;
