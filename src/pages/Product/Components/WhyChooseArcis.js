import React from "react";
import { Box, Heading, Text, Flex, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const WhyChooseArcis = ({ data }) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  if (!data) return null;
  const { heading, items } = data;

  const topItems = items.slice(0, 4);
  const bottomItems = items.slice(4);

  const ItemCard = ({ item, index, isDarkBg }) => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
      display="flex"
      alignItems="flex-start"
      mb={4}
      ml={{ lg: `${index * 8}%` }}
      maxW={{ base: "100%", lg: "40%" }}
    >
      {/* Icon Box */}
      <Flex
        align="center"
        justify="center"
        w={{ base: "86px", md: "130px" }}
        h={{ base: "86px", md: "130px" }}
        bg={isDarkBg ? "rgba(255,255,255,0.2)" : "black"}
        // color="red"
        // fontSize={{ base: "2xl", md: "3xl" }}
        mr={6}
        flexShrink={0}
      >
        {item.icon}
      </Flex>

      {/* Text Content */}
      <Box>
        <Heading
          as="h3"
          fontSize={{ base: "16px", md: "20px" }}
          fontWeight="400"
          color="white"
          mb={2}
        >
          {item.name}
        </Heading>
        <Text
          color="white"
          fontSize={{ base: "14px", md: "16px" }}
          lineHeight={{ base: "15px", md: "20px" }}
        >
          {item.description}
        </Text>
      </Box>
    </MotionBox>
  );

  return (
    <Box>
      {/* Top Section (Black BG) */}
      <Box
        bg="black"
        pt={{ base: "", md: "2%" }}
        mt={{ base: "", md: "3%" }}
        position="relative"
        overflow="hidden"
      >
        <Box w="100%" mx="auto" px={{ base: 4, lg: 8 }}>
          {/* Title (Desktop: Absolute Right, Mobile: Top) */}
          <Box
            position={{ lg: "absolute" }}
            top={{ lg: "35%" }}
            right={{ lg: "1%" }}
            maxW={{ lg: "40%" }}
            mb={{ base: 10, lg: 0 }}
            textAlign={{ base: "left", lg: "right" }}
            zIndex={10}
          >
            <Heading
              as="h2"
              fontSize={{ base: "30px", md: "48px", lg: "60px" }}
              fontWeight="400"
              color="white"
              lineHeight={{ base: "38px", md: "54px", lg: "76px" }}
            >
              {heading}
            </Heading>
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
      <Box py={4}>
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
    </Box>
  );
};

export default WhyChooseArcis;
