import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "./CustomButton";
import LeftButtonIcon from "./Icons/LeftButton.svg";
import RightButtonIcon from "./Icons/RightButton.svg";

const HeroSectionCarousel = ({ data }) => {
  const slides = data || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
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

  useEffect(() => {
    if (slidesCount <= 1 || isPaused) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slidesCount, isPaused]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[currentSlide];
  const title = activeSlide.title;
  const bgImageDesktop = activeSlide.d_image;
  const bgImageMobile = activeSlide.m_image;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <Box
      w="full"
      h="100vh"
      position="relative"
      overflow="hidden"
      bgImage={{ base: `url(${bgImageMobile})`, md: `url(${bgImageDesktop})` }}
      bgSize={activeSlide?.bgSize || "cover"}
      bgPosition={activeSlide?.bgPosition || "center"}
      bgRepeat="no-repeat"
      bgColor={activeSlide?.bgColor || "transparent"}
      mt={{
        base: activeSlide?.sectionProps?.mobile?.marginTop || "-35%",
        md: activeSlide?.sectionProps?.desktop?.marginTop || "-11%",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
            x: { type: "tween", ease: "easeInOut", duration: 0.6 },
            opacity: { duration: 0.4 },
          }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {activeSlide.customComponent ? (
            <Box w="100%" h="100%" position="relative" zIndex={1}>
              {activeSlide.customComponent}
            </Box>
          ) : title ? (
            <>
              <Box
                position="absolute"
                bottom={{ base: "88px", md: "50px" }}
                left="50%"
                transform="translateX(-50%)"
                zIndex={2}
                textAlign="center"
                w="full"
              >
                <Text
                  as="h1"
                  color="#fff"
                  fontSize={{ base: "24px", md: "36px" }}
                  fontWeight="400"
                >
                  {title}
                </Text>
              </Box>

              <Box
                position="absolute"
                bottom={{ base: "30px", md: "50px" }}
                left={{ base: "50%", md: "50px" }}
                transform={{ base: "translateX(-50%)", md: "none" }}
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
              align={{
                base: activeSlide?.textProps?.mobile?.alignItems || "flex-end",
                md: activeSlide?.textProps?.desktop?.alignItems || "flex-start",
              }}
              justify={{
                base:
                  activeSlide?.textProps?.mobile?.textAlign === "center"
                    ? "center"
                    : "flex-end",
                md:
                  activeSlide?.textProps?.desktop?.textAlign === "center"
                    ? "center"
                    : "flex-start",
              }}
              pb={{ base: 16, md: 0 }}
              position="relative"
              zIndex={1}
            >
              <Box
                mt={{
                  base: activeSlide?.textProps?.mobile?.top || "25%",
                  md: activeSlide?.textProps?.desktop?.top || "5%",
                }}
                ml={{
                  base:
                    activeSlide?.textProps?.mobile?.textAlign === "center"
                      ? "0"
                      : activeSlide?.textProps?.mobile?.left || "0",
                  md:
                    activeSlide?.textProps?.desktop?.textAlign === "center"
                      ? "0"
                      : activeSlide?.textProps?.desktop?.left || "0",
                }}
                w={{
                  base: activeSlide?.textProps?.mobile?.width || "100%",
                  md: activeSlide?.textProps?.desktop?.width || "65%",
                }}
                color={{
                  base: activeSlide?.textProps?.mobile?.textColor || "white",
                  md: activeSlide?.textProps?.desktop?.textColor || "white",
                }}
                textAlign={{
                  base: activeSlide?.textProps?.mobile?.textAlign || "left",
                  md: activeSlide?.textProps?.desktop?.textAlign || "left",
                }}
              >
                <Heading
                  as="h1"
                  fontSize={["30px", "48px", "48px", "60px"]}
                  fontWeight="400"
                  lineHeight={["38px", "60px", "60px", "76px"]}
                  mb={2}
                  w="100%"
                >
                  {activeSlide.heading}
                </Heading>
                {activeSlide.description && (
                  <Text
                    as="p"
                    fontSize={["14px", "18px", "18px", "18px"]}
                    fontWeight="400"
                    lineHeight={["18px", "20px", "20px", "25px"]}
                    mb={6}
                    maxW="600px"
                    mx={{
                      base:
                        activeSlide?.textProps?.mobile?.textAlign === "center"
                          ? "auto"
                          : "0",
                      md:
                        activeSlide?.textProps?.desktop?.textAlign === "center"
                          ? "auto"
                          : "0",
                    }}
                  >
                    {activeSlide.description}
                  </Text>
                )}
                <Box
                  display="inline-block"
                  mx={{
                    base:
                      activeSlide?.textProps?.mobile?.textAlign === "center"
                        ? "auto"
                        : "0",
                    md:
                      activeSlide?.textProps?.desktop?.textAlign === "center"
                        ? "auto"
                        : "0",
                  }}
                >
                  <CustomButton
                    onClick={() =>
                      window.open(activeSlide.buttonLink || "#", "_self")
                    }
                    width={{
                      base: activeSlide?.buttonProps?.mobile?.width || "146px",
                      md: activeSlide?.buttonProps?.desktop?.width || "171px",
                    }}
                    height={{
                      base: activeSlide?.buttonProps?.mobile?.height || "36px",
                      md: activeSlide?.buttonProps?.desktop?.height || "40px",
                    }}
                    bgColor={
                      activeSlide?.buttonProps?.desktop?.bgColor ||
                      "rgba(255,255,255,0.2)"
                    }
                    borderColor={{
                      base:
                        activeSlide?.buttonProps?.mobile?.borderColor ||
                        "white",
                      md:
                        activeSlide?.buttonProps?.desktop?.borderColor ||
                        "white",
                    }}
                    textColor={{
                      base:
                        activeSlide?.buttonProps?.mobile?.textColor || "white",
                      md:
                        activeSlide?.buttonProps?.desktop?.textColor || "white",
                    }}
                    hoverBorderColor={
                      activeSlide?.buttonProps?.desktop?.borderHover ||
                      activeSlide?.buttonProps?.desktop?.borderColor ||
                      "#A4FF79"
                    }
                    hoverTextColor={
                      activeSlide?.buttonProps?.desktop?.textHover || "#A4FF79"
                    }
                  >
                    {activeSlide.buttonText}
                  </CustomButton>
                </Box>
              </Box>
            </Flex>
          )}
        </motion.div>
      </AnimatePresence>

      {slidesCount > 1 && (
        <HStack
          position="absolute"
          bottom={{ base: 4, md: 8 }}
          px={{ base: 4, md: 8 }}
          spacing={4}
          zIndex={10}
          justify="flex-end"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          w="full"
        >
          <HStack spacing={2} mr={8}>
            {slides.map((_, i) => (
              <Box
                key={i}
                w="16px"
                h="16px"
                bg={i === currentSlide ? "#171717" : "transparent"}
                border="1px solid #171717"
                cursor="pointer"
                onClick={() => setSlide(i)}
                transition="all 0.3s"
                _hover={{ bg: "rgba(23, 23, 23, 0.5)" }}
              />
            ))}
          </HStack>

          <Flex direction="row" gap={2}>
            <Box
              as="button"
              onClick={prevSlide}
              w={{ base: "40px", md: "44px" }}
              h={{ base: "43px", md: "47px" }}
              cursor="pointer"
              color="white"
              transition="opacity 0.2s"
              _hover={{ opacity: 0.7 }}
            >
              <LeftButtonIcon width="100%" height="100%" />
            </Box>
            <Box
              as="button"
              onClick={nextSlide}
              w={{ base: "40px", md: "44px" }}
              h={{ base: "43px", md: "47px" }}
              cursor="pointer"
              color="white"
              transition="opacity 0.2s"
              _hover={{ opacity: 0.7 }}
            >
              <RightButtonIcon width="100%" height="100%" />
            </Box>
          </Flex>
        </HStack>
      )}
    </Box>
  );
};

export default HeroSectionCarousel;
