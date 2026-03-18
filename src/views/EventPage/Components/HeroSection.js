import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../../../Components/CustomButton";
import LeftButtonIcon from "../../../Components/Icons/LeftButton.svg";
import RightButtonIcon from "../../../Components/Icons/RightButton.svg";

const EventHeroSection = ({ data }) => {
  const slides = data || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  }, [slidesCount]);

  const setSlide = (slide) => {
    setDirection(slide > currentSlide ? 1 : -1);
    setCurrentSlide(slide);
  };

  useEffect(() => {
    if (slidesCount <= 1 || isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, slidesCount, isPaused, nextSlide]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const activeSlide = slides[currentSlide];
  const bgImageDesktop = activeSlide.d_image;
  const bgImageMobile = activeSlide.m_image;

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
      h="100vh"
      position="relative"
      overflow="hidden"
      bgImage={{ base: `url(${bgImageMobile})`, md: `url(${bgImageDesktop})` }}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{
        base: activeSlide?.sectionProps?.mobile?.marginTop || "-25%",
        md: activeSlide?.sectionProps?.desktop?.marginTop || "-7%",
      }}
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
          <Flex
            h="100%"
            w="100%"
            mx="auto"
            px={{ base: 4, lg: 8 }}
            align={{
              base: activeSlide?.textProps?.mobile?.alignItems || "center",
              md: activeSlide?.textProps?.desktop?.alignItems || "center",
            }}
            justify={{
              base:
                activeSlide?.textProps?.mobile?.textAlign === "center"
                  ? "center"
                  : "flex-end",
              md:
                activeSlide?.textProps?.desktop?.textAlign === "center"
                  ? "center"
                  : "center",
            }}
            pb={{ base: 12, md: 20 }}
            position="relative"
            zIndex={1}
          >
            <VStack
              mt={{
                base: activeSlide?.textProps?.mobile?.top || "50%",
                md: activeSlide?.textProps?.desktop?.top || "0%",
              }}
              w={{
                base: activeSlide?.textProps?.mobile?.width || "100%",
                md: activeSlide?.textProps?.desktop?.width || "100%",
              }}
              color={{
                base: activeSlide?.textProps?.mobile?.textColor || "white",
                md: activeSlide?.textProps?.desktop?.textColor || "white",
              }}
              textAlign={{
                base: activeSlide?.textProps?.mobile?.textAlign || "center",
                md: activeSlide?.textProps?.desktop?.textAlign || "center",
              }}
              spacing={{ base: 0, md: 0 }}
              maxW="1400px"
            >
              {/* Heading */}
              <Heading
                as="h1"
                fontSize={{
                  base: activeSlide?.headingProps?.mobile?.fontSize || "30px",
                  md: activeSlide?.headingProps?.desktop?.fontSize || "60px",
                }}
                fontWeight={{
                  base: activeSlide?.headingProps?.mobile?.fontWeight || "400",
                  md: activeSlide?.headingProps?.desktop?.fontWeight || "400",
                }}
                lineHeight={{
                  base: activeSlide?.headingProps?.mobile?.lineHeight || "36px",
                  md: activeSlide?.headingProps?.desktop?.lineHeight || "76px",
                }}
                maxW={{
                  base: activeSlide?.headingProps?.mobile?.maxWidth || "100%",
                  md: activeSlide?.headingProps?.desktop?.maxWidth || "1400px",
                }}
                mb={{
                  base:
                    activeSlide?.headingProps?.mobile?.marginBottom || "32px",
                  md:
                    activeSlide?.headingProps?.desktop?.marginBottom || "22px",
                }}
                w="100%"
              >
                {activeSlide.heading}
              </Heading>

              {/* Description */}
              {activeSlide.description && (
                <Text
                  as="p"
                  fontSize={{
                    base:
                      activeSlide?.descriptionProps?.mobile?.fontSize || "14px",
                    md:
                      activeSlide?.descriptionProps?.desktop?.fontSize ||
                      "16px",
                  }}
                  fontWeight={{
                    base:
                      activeSlide?.descriptionProps?.mobile?.fontWeight ||
                      "400",
                    md:
                      activeSlide?.descriptionProps?.desktop?.fontWeight ||
                      "400",
                  }}
                  lineHeight={{
                    base:
                      activeSlide?.descriptionProps?.mobile?.lineHeight ||
                      "20px",
                    md:
                      activeSlide?.descriptionProps?.desktop?.lineHeight ||
                      "24px",
                  }}
                  w={{ base: "100%", md: "1400px" }}
                  padding={{
                    base:
                      activeSlide?.descriptionProps?.mobile?.padding ||
                      "12px 16px",
                    md:
                      activeSlide?.descriptionProps?.desktop?.padding ||
                      "16px 24px",
                  }}
                  mx="auto"
                >
                  {activeSlide.description}
                </Text>
              )}

              {/* Logo Section */}
              {activeSlide.logos && activeSlide.logos.length > 0 && (
                <HStack
                  spacing={{
                    base: activeSlide?.logoProps?.mobile?.spacing || "12px",
                    md: activeSlide?.logoProps?.desktop?.spacing || "16px",
                  }}
                  mt={{ base: 6, md: 8 }}
                  flexWrap="wrap"
                  justify="center"
                >
                  {activeSlide.logos.map((logo, index) => (
                    <Box
                      key={index}
                      bg="white"
                      p={{
                        base:
                          activeSlide?.logoProps?.mobile?.boxPadding ||
                          "8px 16px",
                        md:
                          activeSlide?.logoProps?.desktop?.boxPadding ||
                          "8px 24px",
                      }}
                      boxShadow="0 4px 12px rgba(0, 0, 0, 0.1)"
                      transition="all 0.3s ease"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
                      }}
                      w={{
                        base:
                          activeSlide?.logoProps?.mobile?.boxWidth || "auto",
                        md: activeSlide?.logoProps?.desktop?.boxWidth || "auto",
                      }}
                      h={{
                        base:
                          activeSlide?.logoProps?.mobile?.boxHeight || "50px",
                        md:
                          activeSlide?.logoProps?.desktop?.boxHeight || "56px",
                      }}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Image loading="lazy"
                        src={logo.image}
                        alt={logo.name}
                        maxW="100%"
                        maxH="100%"
                        objectFit="contain"
                      />
                    </Box>
                  ))}
                </HStack>
              )}
            </VStack>
          </Flex>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {slidesCount > 1 && (
        <HStack
          position="absolute"
          bottom={{ base: 4, md: 8 }}
          px={{ base: 4, md: 8 }}
          spacing={4}
          zIndex={2}
          justify={{ base: "space-between", md: "flex-end" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          w="full"
        >
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

          <Flex direction="row" gap={4}>
            <CustomButton
              onClick={prevSlide}
              width={{ base: "40px", md: "50px" }}
              height={{ base: "40px", md: "50px" }}
              showGlow={false}
              showTicks={false}
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
              <Image loading="lazy"
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
              showTicks={false}
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
              <Image loading="lazy"
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

export default EventHeroSection;
