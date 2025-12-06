import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useBreakpointValue,
  HStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import LeftButtonIcon from "./Icons/LeftButton.svg";
import RightButtonIcon from "./Icons/RightButton.svg";

const HeroSection = ({ data }) => {
  const slides = data || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setDirection(slide > currentSlide ? 1 : -1);
    setCurrentSlide(slide);
  };

  // Auto-play
  useEffect(() => {
    if (slidesCount <= 1 || isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slidesCount, isPaused]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[currentSlide];
  const title = activeSlide.title;

  const bgImageDesktop = activeSlide.d_image || activeSlide.image;
  const bgImageMobile = activeSlide.m_image || activeSlide.image;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <Box
      w="full"
      h={{ base: "100vh", md: "100vh" }}
      position="relative"
      overflow="hidden"
      mt={{ base: "-50%", md: "-11%" }}
    >
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* Background Image */}
          <Image
            src={bgImageDesktop}
            sx={{
              content: {
                base: `url("${bgImageMobile}")`,
                md: `url("${bgImageDesktop}")`,
              },
            }}
            alt="Hero Background"
            objectFit="cover"
            w="100%"
            h="100%"
            position="absolute"
            top={{base:"0",md:"2%"}}
            left={0}
            zIndex={-1}
          />
          {/* Fallback Image */}
          {/* <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            zIndex={-1}
            backgroundImage={{ base: `url(${bgImageMobile})`, md: `url(${bgImageDesktop})` }}
            backgroundSize="cover"
            backgroundPosition="center"
           /> */}

          {/* Overlay Gradient */}
          {/* <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bgGradient={{
              base: "linear(to-t, blackAlpha.800, transparent)",
              md: "linear(to-r, blackAlpha.700, transparent)",
            }}
            zIndex={0}
          /> */}

          {title ? (
            <>
              <Box
                position="absolute"
                bottom={{ base: "80px", md: "50px" }}
                left="50%"
                transform="translateX(-50%)"
                zIndex={2}
                textAlign="center"
                w="full"
              >
                <Text
                  color="#fff"
                  fontSize={{ base: "24px", md: "36px" }}
                  fontWeight="400"
                >
                  {title}
                </Text>
              </Box>

              {/* Button Bottom Left */}
              <Box
                position="absolute"
                bottom={{ base: "30px", md: "50px" }}
                left={{ base: "50%", md: "50px" }}
                transform={{ base: "translateX(-50%)", md: "none" }} // Center on mobile, left on desktop
                zIndex={2}
              >
                <CustomButton
                  onClick={() =>
                    window.open(activeSlide.buttonLink || "#", "_self")
                  }
                  width="180px"
                  height="50px"
                >
                  {activeSlide.buttonText}
                </CustomButton>
              </Box>
            </>
          ) : (
            <Flex
              h="100%"
              w="100%"
              mx="auto"
              px={{ base: 4, lg: 8 }}
              align={{ base: "flex-end", md: "center" }}
              pb={{ base: 20, md: 0 }}
              position="relative"
              zIndex={1}
            >
              <Box
                mt="5%" //temporary
                w={{ base: "100%", md: "65%" }}
                color="white"
                textAlign={{ base: "left", md: "left" }}
              >
                <Heading
                  as="h1"
                  fontSize={["30px", "48px", "48px", "60px"]}
                  fontWeight="400"
                  lineHeight={["38px", "60px", "60px", "76px"]}
                  mb={2}
                  w="80%" //temporary
                >
                  {activeSlide.heading}
                </Heading>
                <Text
                  as="p"
                  fontSize={["14px", "18px", "18px", "20px"]}
                  fontWeight="400"
                  lineHeight={["18px", "20px", "20px", "25px"]}
                  mb={2}
                  opacity={0.9}
                  maxW="600px"
                >
                  {activeSlide.description}
                </Text>
                <CustomButton
                  onClick={() =>
                    window.open(activeSlide.buttonLink || "#", "_self")
                  }
                  width={{ base: "145px", md: "160px" }}
                  height={{ base: "40px", md: "50px" }}
                >
                  {activeSlide.buttonText}
                </CustomButton>
              </Box>
            </Flex>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Controls Container - Only show if > 1 slide */}
      {slidesCount > 1 && (
        <HStack
          position="absolute"
          bottom={{ base: 4, md: 8 }}
          px={{ base: 4, md: 8 }}
          // right={{ base: 0, lg: 8 }}
          spacing={4}
          zIndex={2}
          justify={{ base: "space-between", md: "flex-end" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          w="full"
        >
          {/* Pagination Dots */}
          <HStack spacing={2} mr={8}>
            {slides.map((_, i) => (
              <Box
                key={i}
                w="12px"
                h="12px"
                bg={i === currentSlide ? "white" : "transparent"}
                border="1px solid white"
                cursor="pointer"
                onClick={() => setSlide(i)}
                transition="all 0.3s"
                _hover={{ bg: "whiteAlpha.500" }}
              />
            ))}
          </HStack>

          {/* Navigation Buttons */}
          <Flex direction="row" gap={4}>
            <CustomButton
              onClick={prevSlide}
              width={{ base: "40px", md: "50px" }}
              height={{ base: "40px", md: "50px" }}
              showGlow={false}
              sx={{
                padding: 0,
                "& img": { transition: "filter 0.2s" },
                _hover: {
                  "& img": {
                    filter:
                      "brightness(0) saturate(100%) invert(86%) sepia(23%) saturate(995%) hue-rotate(68deg) brightness(103%) contrast(103%)",
                  },
                },
              }}
            >
              <Image
                src={LeftButtonIcon}
                alt="Previous"
                w={{ base: "16px", md: "20px" }}
                h={{ base: "16px", md: "20px" }}
              />
            </CustomButton>
            <CustomButton
              onClick={nextSlide}
              width={{ base: "40px", md: "50px" }}
              height={{ base: "40px", md: "50px" }}
              showGlow={false}
              sx={{
                padding: 0,
                "& img": { transition: "filter 0.2s" },
                _hover: {
                  "& img": {
                    filter:
                      "brightness(0) saturate(100%) invert(86%) sepia(23%) saturate(995%) hue-rotate(68deg) brightness(103%) contrast(103%)",
                  },
                },
              }}
            >
              <Image
                src={RightButtonIcon}
                alt="Next"
                w={{ base: "16px", md: "20px" }}
                h={{ base: "16px", md: "20px" }}
              />
            </CustomButton>
          </Flex>
        </HStack>
      )}
    </Box>
  );
};

export default HeroSection;
