import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  Container,
  Link,
  Collapse,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const SurveillanceStack = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) return null;

  const activeItem = data.stack[activeIndex];

  return (
    <Box
      w="100%"
      minH="100vh"
      // h="auto"
      position="relative"
      overflow="hidden"
      display="flex"
      alignItems="center"
      pt={{ base: "0%", md: "5%" }}
      pb={{ base: "0%", md: "3%" }}
    >
      {/* Background GIF */}
      <Image
        src="/images/home_wave_gif_1.gif"
        position="absolute"
        top={{ base: "0", md: "5%" }}
        left={0}
        w="100%"
        h={{ base: "100%", md: "90%" }}
        objectFit="cover"
        opacity={1}
        zIndex={0}
        // bg="red"
      />

      {/* Gradient Overlay */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-r, blackAlpha.900, blackAlpha.600)"
        zIndex={1}
      /> */}

      <Box
        w="100%"
        px={{ base: 4, md: 0, lg: 0 }}
        zIndex={2}
        position="relative"
      >
        <Heading
          as="h2"
          color="white"
          textAlign={{ base: "left", md: "center" }}
          fontWeight="400"
          fontSize={{ base: "30px", md: "60px" }}
          mb={data.description ? 4 : { base: 10, md: 20 }}
        >
          {data.mainHeading}
        </Heading>

        {data.description && (
          <Text
            color="white"
            textAlign="center"
            fontSize={{ base: "md", md: "lg" }}
            w={{ base: "100%", md: "80%" }}
            mx="auto"
            mb={{ base: 4, md: 8 }}
          >
            {data.description}
          </Text>
        )}

        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          // justify="space-between"
          gap={{ base: 4, lg: 8 }}
        >
          {/* Left Side: Monitor/Image */}
          <Box
            flex="1"
            w="100vw"
            position="relative"
            order={{ base: "2", lg: "1" }}
          >
            <Box overflow="hidden">
              <Image
                src={activeItem.image}
                alt={activeItem.heading}
                w="100%"
                h="auto"
                objectFit="contain"
                transition="opacity 0.3s"
              />
            </Box>
          </Box>

          {/* Right Side: Stack Buttons & Description */}
          <VStack
            flex="1"
            align={{ base: "flex-start", md: "flex-start", lg: "flex-start" }} // Align to right as per image
            spacing={6}
            w="100%"
            order={{ base: "1", lg: "2" }}
          >
            {data.stack.map((item, index) => (
              <Flex
                key={index}
                direction="column"
                align={{ base: "flex-start", lg: "flex-start" }}
                w="100%"
              >
                <CustomButton
                  onClick={() => setActiveIndex(index)}
                  width={{ base: "200px", md: "200px" }} // Fixed width for uniformity
                  height="50px"
                  // Active state styling to match hover effect
                  backdropFilter="blur(10px)"
                  bgColor={
                    activeIndex === index
                      ? "rgba(255, 255, 255, 0.2)"
                      : "rgba(255, 255, 255, 0.2)"
                  }
                  borderColor={
                    activeIndex === index ? "#A4FF79" : "white" // borderColor default
                  }
                  textColor={
                    activeIndex === index
                      ? "#A4FF79" // hoverTextColor default
                      : "white" // textColor default
                  }
                  // Force glow on active
                  sx={{
                    "& > .tick": {
                      bg: activeIndex === index ? "#A4FF79" : "white",
                      boxShadow:
                        activeIndex === index ? `0 0 8px #A4FF79` : "none",
                    },
                    "& > .corner": {
                      borderColor: activeIndex === index ? "#A4FF79" : "white",
                    },
                  }}
                >
                  {item.heading}
                </CustomButton>

                <Collapse in={activeIndex === index} animateOpacity>
                  <Box
                    mt={4}
                    w={{ base: "100%", md: "70%" }}
                    textAlign={{ base: "left", md: "left", lg: "left" }}
                  >
                    <Text color="white" fontSize="16px" mb={4}>
                      {item.description}
                    </Text>
                    {/* <Link
                      href={item.link}
                      color="#fff"
                      fontSize="sm"
                      fontWeight="bold"
                      textTransform="uppercase"
                      _hover={{ textDecoration: "underline" }}
                    >
                      KNOW MORE
                    </Link> */}
                  </Box>
                </Collapse>
              </Flex>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default SurveillanceStack;
