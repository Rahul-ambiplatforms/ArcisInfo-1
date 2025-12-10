import React from "react";
import { Box, Heading, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CCTVFeatures = ({ data }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (!data) return null;
  const { heading, description, features } = data;

  // WhyChooseArcis logic: Top 4 items, rest bottom.
  // ArcisGPTFeatures has 5 items. So 4 top, 1 bottom.
  const topItems = features.slice(0, 5);
  const bottomItems = features.slice(5);

  const ItemCard = ({ item, index, isDarkBg }) => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      display="flex"
      alignItems="center"
      mb={4}
      ml={{ lg: `${index * 9}%` }}
      maxW={{ base: "100%", lg: "40%" }}
    >
      {/* Icon Box */}
      <Flex
        align="center"
        justify="center"
        w={{ base: "86px", md: "130px" }}
        h={{ base: "86px", md: "130px" }}
        bg={isDarkBg ? "rgba(255,255,255,0.2)" : "black"}
        mr={6}
        flexShrink={0}
      >
        <Box color="white" fontSize="40px">
          {item.icon}
        </Box>
      </Flex>

      {/* Text Content */}
      <Box>
        <Heading
          as="h3"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight={{ base: "700", md: "400" }}
          color={isDarkBg ? "white" : "black"}
          mb={2}
        >
          {item.name}
        </Heading>
        <Text
          color={isDarkBg ? "white" : "black"}
          fontSize={{ base: "14px", md: "16px" }}
          lineHeight={{ base: "15px", md: "20px" }}
          w="90%"
        >
          {item.description}
        </Text>
      </Box>
    </MotionBox>
  );

  return (
    <Box>
      {/* Top Section (Black BG) */}
      <Box py={{ base: 4, md: 8 }} position="relative" overflow="hidden">
        <Box w="100%" mx="auto" px={{ base: 4, lg: 8 }}>
          {/* Title & Description (Desktop: Absolute Right, Mobile: Top) */}
          <Box
            position={{ lg: "absolute" }}
            top={{ lg: "5%" }}
            right={{ lg: "2%" }}
            w={{ lg: "40%" }}
            mb={{ base: 10, lg: 0 }}
            // textAlign={{ base: "left", lg: "right" }}
            zIndex={10}
            alignItems={{ base: "center", md: "flex-end" }}
            textAlign={{ base: "center", md: "right" }}
          >
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "48px", lg: "60px" }}
              fontWeight="400"
              color="white"
              lineHeight={{ base: "38px", md: "54px", lg: "76px" }}
              mb={6}
            >
              {heading}
            </Heading>
            <Text
              color="#D4D4D4"
              fontSize={{ base: "16px", md: "18px" }}
              lineHeight={{ base: "24px", md: "28px" }}
              w={{ base: "100%", md: "60%" }}
              align="justify"
              position={{ md: "absolute" }}
              right={{ lg: "2%" }}
            >
              {description}
            </Text>
          </Box>

          {/* Top Items */}
          <Box position="relative" zIndex={1}>
            {topItems.map((item, index) => (
              <ItemCard key={index} item={item} index={index} isDarkBg={true} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom Section (Light BG) */}
      {!bottomItems && (
        <Box py={20} bg="white">
          <Box w="100%" mx="auto" px={{ base: 5, lg: 8 }}>
            {/* Bottom Items */}
            <Box>
              {bottomItems.map((item, index) => (
                <ItemCard
                  key={index}
                  item={item}
                  index={index + 4}
                  isDarkBg={false}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CCTVFeatures;
