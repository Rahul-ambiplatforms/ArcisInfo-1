import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  Icon,
  Collapse,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { homeContent } from "../Data/Content";
import { ReactComponent as UpButtonIcon } from "../../../Components/Icons/UpButton.svg";
import CustomButton from "../../../Components/CustomButton";

const MotionImage = motion(Image);

const UpIcon = (props) => (
  <Icon viewBox="0 0 16 8" fill="none" {...props}>
    <path
      d="M0.640185 7.07674L7.93227 0.999999L15.2244 7.07674"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Icon>
);

const WhyArcisAI = () => {
  const { WhyArcisAI: data } = homeContent;
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Determine which image to show
  const currentImage =
    activeIndex !== null && data.features[activeIndex]
      ? data.features[activeIndex].image
      : data.mainImage;

  return (
    <Box bg="black" py={10} color="white" position="relative" overflow="hidden">
      {/* Background GIF Overlay */}
      {/* <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        opacity="0.4"
        pointerEvents="none"
      >
        <Image
          src="./images/home_wave_gif.gif"
          alt="Background Wave"
          w="100%"
          h="100%"
          objectFit="cover"
        />
      </Box> */}

      <Box w="100%" px="2%" position="relative" zIndex="1">
        <VStack spacing={4} mb={{ base: 0, md: 8 }} textAlign="center">
          <Heading
            as="h2"
            fontWeight="400"
            fontSize={{ base: "30px", md: "60px" }}
          >
            {data.heading}
          </Heading>
          <Text fontSize={{ base: "14px", md: "24px" }} w="100%" mx="auto">
            {data.description}
          </Text>
        </VStack>

        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 0, md: 8 }}
        >
          {/* Left Side: Dynamic Image */}
          <Box
            flex="1"
            w="100%"
            h={{ base: "300px", lg: "712px" }}
            position="relative"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AnimatePresence mode="wait">
              <MotionImage
                key={currentImage}
                src={currentImage}
                alt="Feature Image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </AnimatePresence>
          </Box>

          {/* Right Side: Feature List (Accordion) */}
          <Box flex="1" w="100%" mt={{ base: 0, lg: "-10%" }}>
            <VStack align="stretch" spacing={4}>
              {data.features.map((feature, index) => {
                const isOpen = activeIndex === index;
                return (
                  <Box
                    key={index}
                    position="relative"
                    pb={2}
                    cursor="pointer"
                    onClick={() => handleToggle(index)}
                    role="group"
                    _after={{
                      content: '""',
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "2px",
                      background: "linear-gradient(90deg, #FFFFFF, #030303)",
                      pointerEvents: "none",
                      borderRadius: "1px",
                    }}
                  >
                    <Flex justify="space-between" align="center" mb={2}>
                      <Heading
                        as="h3"
                        fontSize={{ base: "16px", md: "20px" }}
                        fontWeight={isOpen ? "700" : "400"}
                        color="white"
                        _groupHover={{ color: "white" }}
                        transition="color 0.2s"
                      >
                        {feature.title}
                      </Heading>

                      <CustomButton
                        width="40px"
                        height="40px"
                        bgColor="rgba(255, 255, 255, 0.1)"
                        hoverBgColor="rgba(255, 255, 255, 0.15)"
                        borderColor={isOpen ? "#A4FF79" : "white"}
                        hoverBorderColor="#A4FF79"
                        textColor="white"
                        hoverTextColor="white"
                        showGlow={isOpen}
                        showTicks={false}
                        glowColor="#A4FF79"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggle(index);
                        }}
                      >
                        <UpIcon
                          w={4}
                          h={4}
                          transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
                          transition="transform 0.3s"
                          // color={isOpen ? "#A4FF79" : "white"}
                        />
                      </CustomButton>
                    </Flex>
                    <Collapse in={isOpen} animateOpacity>
                      <Text fontSize="14px" fontWeight="400" w="80%">
                        {feature.description}
                      </Text>
                    </Collapse>
                  </Box>
                );
              })}
            </VStack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default WhyArcisAI;
