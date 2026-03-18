import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import CustomButton from "../../../Components/CustomButton";
import LeftButtonIcon from "../../../Components/Icons/LeftButton.svg";
import RightButtonIcon from "../../../Components/Icons/RightButton.svg";

const HeroCarousel = ({ data }) => {
  const {
    heading,
    description,
    logo,
    images,
    headingProps,
    descriptionProps,
    logoProps,
  } = data;

  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imagesCount = images?.length || 0;
  const imagesPerView = 4;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setStartIndex((prev) => (prev + 1) % imagesCount);
  }, [imagesCount]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setStartIndex((prev) => (prev - 1 + imagesCount) % imagesCount);
  }, [imagesCount]);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > startIndex ? 1 : -1);
      setStartIndex(index);
    },
    [startIndex]
  );

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused || imagesCount <= 4) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [startIndex, isPaused, imagesCount, nextSlide]);

  if (!images || images.length === 0) {
    return null;
  }

  // Get 4 visible images
  const visibleImages = [];
  for (let i = 0; i < imagesPerView; i++) {
    const index = (startIndex + i) % imagesCount;
    visibleImages.push({ ...images[index], position: i });
  }

  return (
    <Box
      bg="#171717"
      py={{ base: "40px", md: "-10px" }}
      px={{ base: 4, md: 8 }}
      mt={{ base: "0px", md: "-20px" }}
    >
      <Box maxW="1500px" mx="auto" pt={{ base: 0, md: "0px" }}>
        {/* Heading */}
        {heading && (
          <Heading
            as="h1"
            fontSize={{
              base: headingProps?.mobile?.fontSize || "28px",
              md: headingProps?.desktop?.fontSize || "48px",
            }}
            fontWeight={{
              base: headingProps?.mobile?.fontWeight || "700",
              md: headingProps?.desktop?.fontWeight || "700",
            }}
            lineHeight={{
              base: headingProps?.mobile?.lineHeight || "36px",
              md: headingProps?.desktop?.lineHeight || "56px",
            }}
            color="white"
            mb={{ base: 4, md: 6 }}
            textAlign={{
              base: headingProps?.mobile?.textAlign || "left",
              md: headingProps?.desktop?.textAlign || "left",
            }}
          >
            {heading}
          </Heading>
        )}

        {/* Content Row: Logo + Description */}
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 4, md: 6 }}
          mb={{ base: 6, md: 8 }}
          align={{ base: "center", md: "flex-start" }}
        >
          {/* Logo */}
          {logo && (
            <Box
              p={{
                base: logoProps?.mobile?.boxPadding || "12px",
                md: logoProps?.desktop?.boxPadding || "16px",
              }}
              flexShrink={0}
            >
              <Image loading="lazy"
                src={logo}
                alt="Event Logo"
                h={{
                  base: logoProps?.mobile?.logoHeight || "80px",
                  md: logoProps?.desktop?.logoHeight || "157px",
                }}
                w={{
                  base: logoProps?.mobile?.logoWidth || "80px",
                  md: logoProps?.desktop?.logoWidth || "337px",
                }}
                objectFit="contain"
              />
            </Box>
          )}

          {/* Description */}
          {description && (
            <Text
              color="white"
              fontSize={{
                base: descriptionProps?.mobile?.fontSize || "14px",
                md: descriptionProps?.desktop?.fontSize || "16px",
              }}
              lineHeight={{
                base: descriptionProps?.mobile?.lineHeight || "20px",
                md: descriptionProps?.desktop?.lineHeight || "24px",
              }}
              fontWeight={{
                base: descriptionProps?.mobile?.fontWeight || "400",
                md: descriptionProps?.desktop?.fontWeight || "400",
              }}
              flex={1}
            >
              {description}
            </Text>
          )}
        </Flex>

        {/* Image Gallery - 4 Images */}
        <Box w="full">
          <Box
            position="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            w="full"
            overflow="hidden"
            h="341px"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                initial={{ x: direction > 0 ? 345 : -345 }}
                animate={{ x: 0 }}
                exit={{ x: direction > 0 ? -345 : 345 }}
                transition={{
                  type: "tween",
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.5,
                }}
                style={{ position: "absolute", width: "100%" }}
              >
                <Flex gap={4} justify="flex-start" wrap="nowrap">
                  {[0, 1, 2, 3].map((position) => {
                    const imageData = visibleImages[position];
                    return (
                      <Box
                        key={position}
                        w="341px"
                        h="341px"
                        flexShrink={0}
                        overflow="hidden"
                      >
                        <Image loading="lazy"
                          src={imageData.src}
                          alt={imageData.alt}
                          w="341px"
                          h="341px"
                          objectFit="cover"
                          objectPosition="center"
                        />
                      </Box>
                    );
                  })}
                </Flex>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* Navigation Controls - Below Images */}
          {imagesCount > 4 && (
            <HStack
              mt={8}
              spacing={4}
              justify={{ base: "center", md: "flex-end" }}
              pointerEvents="auto"
            >
              {/* Dots */}
              <HStack spacing={2}>
                {images.map((_, i) => (
                  <Box
                    key={i}
                    w="12px"
                    h="12px"
                    bg={i === startIndex ? "white" : "transparent"}
                    border="1px solid white"
                    cursor="pointer"
                    onClick={() => goToSlide(i)}
                    transition="all 0.3s"
                    _hover={{ bg: "whiteAlpha.500" }}
                  />
                ))}
              </HStack>

              {/* Arrow Buttons */}
              <Flex direction="row" gap={4}>
                <CustomButton
                  onClick={prevSlide}
                  width="40px"
                  height="40px"
                  showGlow={false}
                  showTicks={false}
                  bgColor="#454545"
                  textColor="white"
                  sx={{
                    padding: 0,
                    cursor: "pointer",
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
                    w="16px"
                    h="16px"
                    pointerEvents="none"
                  />
                </CustomButton>
                <CustomButton
                  onClick={nextSlide}
                  width="40px"
                  height="40px"
                  showGlow={false}
                  showTicks={false}
                  bgColor="#454545"
                  textColor="white"
                  sx={{
                    padding: 0,
                    cursor: "pointer",
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
                    w="16px"
                    h="16px"
                    pointerEvents="none"
                  />
                </CustomButton>
              </Flex>
            </HStack>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default HeroCarousel;
