import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

function ProductInfo() {
  return (
    <Box>
      <Flex
        justifyContent={"space-between"}
        align="center"
        direction={{ base: "column", md: "row" }}
        mb={8}
        p="8"
        w={"100%"}
        //   gap={6} // Adds spacing between sections for better responsiveness
      >
        {/* Text Section */}
        <Box w={{ base: "100%", md: "50%" }} p={4}>
          <VStack
            spacing={4}
            textAlign={{ base: "center", md: "left" }}
            alignItems={{ base: "center", md: "flex-start" }}
            w={{ base: "100%", md: "80%" }}
            p={{ base: "0", md: "4" }}
          >
            <Heading size="lg">
              Our product{" "}
              <Text as="span" color="purple.500">
                ranges
              </Text>
            </Heading>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              The S Series cameras by Adiance Technologies are cutting-edge
              surveillance solutions designed to deliver unparalleled
              performance through advanced Edge At capabilities.{" "}
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} color="gray.600">
              These cameras are equipped with sophisticated AI analytics,
              ensuring real-time intelligence, precise detection, and seamless
              integration across various environments. Ideal for industries like
              Banking: Infrastructure, Mobility, and Smart Cities, the S Series
              cameras enhance security, operational efficiency, and situational
              awareness.
            </Text>
            <Heading size="md">
              S-SERIES{" "}
              <Text as="span" color="purple.500">
                CAMERAS
              </Text>
            </Heading>
            <Flex
              direction={{ base: "row", md: "column" }}
              spacing={1}
              alignItems={{ base: "center", md: "flex-start" }}
              justifyContent="center"
              gap={{ base: "4", md: "1" }}
            >
              <Text fontSize={{ base: "sm", md: "lg" }}>• DOME</Text>
              <Text fontSize={{ base: "sm", md: "lg" }}>• PTZ</Text>
              <Text fontSize={{ base: "sm", md: "lg" }}>• BULLET</Text>
            </Flex>
          </VStack>
        </Box>

        {/* Product Showcase Section */}
        <Box
          //   bg="red.500"
          borderRadius="md"
          mx="auto"
          p={4}
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "4", md: 0 }}
        >
          {/* Dome Camera */}
          <Image
            src="./images/productType.png"
            alt="Dome Camera"
            w={{ base: "500px", md: "700px", lg: "829.413px" }}
            h="auto"
            objectFit="cover"
          />
        </Box>
      </Flex>

      {/* <Box bg="linear-gradient(to right, #fffff 6%, #9678E1 39%)"> */}
      <Box mt="-10%">
        <Image
          w={{ base: "100%", md: "860px" }}
          h={{ base: "auto", md: "488px" }}
          src="./images/multiview.png"
          alt="Surveillance"
          borderRadius="md"
          transition="transform 0.3s ease"
        />
      </Box>
    </Box>
  );
}

export default ProductInfo;
