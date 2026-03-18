import React, { useState, useEffect, useCallback } from "react";
import { Box, Flex, Heading, Text, Image, HStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../../Components/CustomButton";
import LeftButtonIcon from "../../../Components/Icons/LeftButton.svg";
import RightButtonIcon from "../../../Components/Icons/RightButton.svg";

const EventCarousel = ({ data }) => {
  const navigate = useNavigate();
  const events = data?.events || [];
  const [currentEvent, setCurrentEvent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const eventsCount = events.length;

  const prevEvent = () => {
    setDirection(-1);
    setCurrentEvent((s) => (s === 0 ? eventsCount - 1 : s - 1));
  };

  const nextEvent = useCallback(() => {
    setDirection(1);
    setCurrentEvent((s) => (s === eventsCount - 1 ? 0 : s + 1));
  }, [eventsCount]);

  const setEvent = (index) => {
    setDirection(index > currentEvent ? 1 : -1);
    setCurrentEvent(index);
  };

  useEffect(() => {
    if (eventsCount <= 1 || isPaused) return;
    const timer = setInterval(() => {
      nextEvent();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentEvent, eventsCount, isPaused, nextEvent]);

  if (!events || events.length === 0) {
    return null;
  }

  // Merge shared props with event-specific data
  const activeEvent = {
    ...events[currentEvent],
    sectionTitle: data?.sectionTitle,
    bgColor: events[currentEvent]?.bgColor || data?.bgColor,
    headingProps: events[currentEvent]?.headingProps || data?.headingProps,
    eventHeading: data?.eventHeading,
    eventHeadingProps: data?.eventHeadingProps,
    description: data?.description,
    descriptionProps:
      events[currentEvent]?.descriptionProps || data?.descriptionProps,
    logo: data?.logo,
    logoProps: events[currentEvent]?.logoProps || data?.logoProps,
    detailsLink: data?.detailsLink,
    buttonProps: events[currentEvent]?.buttonProps || data?.buttonProps,
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <Box
      w="full"
      bg={activeEvent?.bgColor || "#000"}
      py={{ base: "40px", md: "40px" }}
      position="relative"
    >
      {/* Section Heading */}
      {activeEvent?.sectionTitle && (
        <Heading
          as="h2"
          fontSize={{
            base: activeEvent?.headingProps?.mobile?.fontSize || "32px",
            md: activeEvent?.headingProps?.desktop?.fontSize || "48px",
          }}
          fontWeight={{
            base: activeEvent?.headingProps?.mobile?.fontWeight || "400",
            md: activeEvent?.headingProps?.desktop?.fontWeight || "400",
          }}
          color={{
            base: activeEvent?.headingProps?.mobile?.color || "white",
            md: activeEvent?.headingProps?.desktop?.color || "white",
          }}
          textAlign="center"
          mb={{
            base: activeEvent?.headingProps?.mobile?.marginBottom || "32px",
            md: activeEvent?.headingProps?.desktop?.marginBottom || "48px",
          }}
        >
          {activeEvent.sectionTitle}
        </Heading>
      )}

      {/* Carousel Container */}
      <Box
        maxW="1500px"
        mx="auto"
        position="relative"
        overflow="hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        px={{ base: 4, md: 8 }}
      >
        {/* Image with sliding animation */}
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentEvent}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 400, damping: 35 },
              opacity: { duration: 0.15 },
            }}
            style={{ width: "100%" }}
          >
            {/* Event Image */}
            <Box w="full" position="relative" overflow="hidden">
              <Image loading="lazy"
                src={activeEvent.image}
                alt={activeEvent.title}
                w="full"
                h={{ base: "350px", md: "600px" }}
                objectFit="cover"
                objectPosition="center"
              />
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Layout - Static (no animation) */}
        <Flex
          display={{ base: "flex", md: "none" }}
          bg="black"
          w="full"
          direction="column"
          gap={1}
          py="16px"
          px="12px"
        >
          {/* Top Section: Logo (left) + Nav Controls & Button (right) */}
          <Flex justify="space-between" align="flex-start" w="full">
            {/* Logo */}
            {activeEvent.logo && (
              <Box
                bg={activeEvent?.logoProps?.mobile?.boxBg || "white"}
                p={activeEvent?.logoProps?.mobile?.boxPadding || "8px"}
              >
                <Image loading="lazy"
                  src={activeEvent.logo}
                  alt={activeEvent.eventName}
                  h={activeEvent?.logoProps?.mobile?.logoHeight || "40px"}
                  w={activeEvent?.logoProps?.mobile?.logoWidth || "40px"}
                  objectFit="contain"
                />
              </Box>
            )}

            {/* Right Column: Navigation Controls + Button */}
            <Flex direction="column" gap={8} align="flex-end">
              {/* Navigation Controls */}
              {eventsCount > 1 && (
                <HStack spacing={4}>
                  {/* Dots */}
                  <HStack spacing={2}>
                    {events.map((_, i) => (
                      <Box
                        key={i}
                        w="12px"
                        h="12px"
                        bg={i === currentEvent ? "white" : "transparent"}
                        border="1px solid white"
                        cursor="pointer"
                        onClick={() => setEvent(i)}
                        transition="all 0.3s"
                        _hover={{ bg: "whiteAlpha.500" }}
                      />
                    ))}
                  </HStack>

                  {/* Arrow Buttons */}
                  <Flex gap={4}>
                    <CustomButton
                      onClick={prevEvent}
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
                      onClick={nextEvent}
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

              {/* Button (below navigation) */}
              {activeEvent.detailsLink && (
                <CustomButton
                  onClick={() => window.open(activeEvent.detailsLink, "_blank")}
                  width={activeEvent?.buttonProps?.mobile?.width || "160px"}
                  height={activeEvent?.buttonProps?.mobile?.height || "40px"}
                  bgColor={
                    activeEvent?.buttonProps?.mobile?.bgColor || "#454545"
                  }
                  borderColor={
                    activeEvent?.buttonProps?.mobile?.borderColor || "white"
                  }
                  textColor={
                    activeEvent?.buttonProps?.mobile?.textColor || "white"
                  }
                  hoverBorderColor={
                    activeEvent?.buttonProps?.mobile?.hoverBorderColor ||
                    "#A4FF79"
                  }
                  hoverTextColor={
                    activeEvent?.buttonProps?.mobile?.hoverTextColor ||
                    "#A4FF79"
                  }
                >
                  More Event Details
                </CustomButton>
              )}
            </Flex>
          </Flex>

          {/* Heading and Description (Full Width Below) */}
          {/* {activeEvent?.eventHeading && (
            <Heading
              as="h3"
              fontSize={
                activeEvent?.eventHeadingProps?.mobile?.fontSize || "16px"
              }
              fontWeight={
                activeEvent?.eventHeadingProps?.mobile?.fontWeight || "600"
              }
              color={activeEvent?.eventHeadingProps?.mobile?.color || "white"}
              mb={activeEvent?.eventHeadingProps?.mobile?.marginBottom || "8px"}
            >
              {activeEvent.eventHeading}
            </Heading>
          )} */}
          <Text
            color={activeEvent?.descriptionProps?.mobile?.color || "white"}
            fontSize={activeEvent?.descriptionProps?.mobile?.fontSize || "12px"}
            lineHeight={
              activeEvent?.descriptionProps?.mobile?.lineHeight || "18px"
            }
            noOfLines={activeEvent?.descriptionProps?.mobile?.noOfLines || 3}
          >
            {activeEvent.description}
          </Text>
        </Flex>

        {/* Desktop Layout - Horizontal Row - Static (no animation) */}
        <Flex
          display={{ base: "none", md: "flex" }}
          bg="black"
          w="full"
          direction="row"
          align="center"
          gap={6}
          py="10px"
          px={{ base: "20px", md: "0px" }}
        >
          {/* Logo */}
          {activeEvent.logo && (
            <Box
              bg={activeEvent?.logoProps?.desktop?.boxBg || "white"}
              p={activeEvent?.logoProps?.desktop?.boxPadding || "12px"}
              flexShrink={0}
            >
              <Image loading="lazy"
                src={activeEvent.logo}
                alt={activeEvent.eventName}
                h={activeEvent?.logoProps?.desktop?.logoHeight || "80px"}
                w={activeEvent?.logoProps?.desktop?.logoWidth || "80px"}
                objectFit="contain"
              />
            </Box>
          )}

          {/* Description + (Button | Navigation) Column */}
          <Flex direction="column" gap={3} flex={1}>
            {/* Heading */}
            {activeEvent?.eventHeading && (
              <Heading
                as="h3"
                fontSize={
                  activeEvent?.eventHeadingProps?.desktop?.fontSize || "20px"
                }
                fontWeight={
                  activeEvent?.eventHeadingProps?.desktop?.fontWeight || "600"
                }
                color={
                  activeEvent?.eventHeadingProps?.desktop?.color || "white"
                }
              >
                {activeEvent.eventHeading}
              </Heading>
            )}
            {/* Description */}
            <Text
              color={activeEvent?.descriptionProps?.desktop?.color || "white"}
              fontSize={
                activeEvent?.descriptionProps?.desktop?.fontSize || "14px"
              }
              lineHeight={
                activeEvent?.descriptionProps?.desktop?.lineHeight || "22px"
              }
              noOfLines={activeEvent?.descriptionProps?.desktop?.noOfLines || 2}
            >
              {activeEvent.description}
            </Text>

            {/* Button + Navigation Row */}
            <Flex
              direction="row"
              justify="space-between"
              gap={4}
              align="center"
            >
              {/* Button (Left) */}
              {activeEvent.detailsLink && (
                <Box>
                  <CustomButton
                    onClick={() => {
                      const link = activeEvent.detailsLink;
                      if (link.startsWith("/")) {
                        navigate(link);
                      } else {
                        window.open(link, "_blank");
                      }
                    }}
                    width={activeEvent?.buttonProps?.desktop?.width || "170px"}
                    height={activeEvent?.buttonProps?.desktop?.height || "40px"}
                    bgColor={
                      activeEvent?.buttonProps?.desktop?.bgColor || "#454545"
                    }
                    borderColor={
                      activeEvent?.buttonProps?.desktop?.borderColor || "white"
                    }
                    textColor={
                      activeEvent?.buttonProps?.desktop?.textColor || "white"
                    }
                    hoverBorderColor={
                      activeEvent?.buttonProps?.desktop?.hoverBorderColor ||
                      "#A4FF79"
                    }
                    hoverTextColor={
                      activeEvent?.buttonProps?.desktop?.hoverTextColor ||
                      "#A4FF79"
                    }
                  >
                    More Event Details
                  </CustomButton>
                </Box>
              )}

              {/* Navigation Controls (Right) */}
              {eventsCount > 1 && (
                <HStack spacing={4}>
                  {/* Dots */}
                  <HStack spacing={2}>
                    {events.map((_, i) => (
                      <Box
                        key={i}
                        w="12px"
                        h="12px"
                        bg={i === currentEvent ? "white" : "transparent"}
                        border="1px solid white"
                        cursor="pointer"
                        onClick={() => setEvent(i)}
                        transition="all 0.3s"
                        _hover={{ bg: "whiteAlpha.500" }}
                      />
                    ))}
                  </HStack>

                  {/* Arrow Buttons */}
                  <Flex gap={4}>
                    <CustomButton
                      onClick={prevEvent}
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
                      onClick={nextEvent}
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
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventCarousel;
