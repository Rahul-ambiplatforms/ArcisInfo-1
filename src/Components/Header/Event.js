import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MarqueeText = ({ children }) => {
  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      w="full"
      h="full"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20, // Adjust speed as needed
        }}
        style={{
          display: "inline-block",
          height: "100%",
          alignItems: "center",
          display: "flex",
        }}
      >
        {children}
      </motion.div>
    </Box>
  );
};

const Event = () => {
  const eventText =
    "MEET ARCISAI AT IFSEC INDIA 2025 FROM 11-13 DECEMBER AT BHARAT MANDAPAM, NEW DELHI. VISIT BOOTH I10, HALL NO. 4 TO EXPLORE OUR LATEST EDGE AI CAMERAS, VMS, AND CLOUD SOLUTIONS.";

  return (
    <Box
      w="100%"
      h="50px"
      position="fixed"
      top="96px"
      bg="rgba(255,255,255,0.2)"
      backdropFilter="blur(25px)"
      zIndex={999}
      overflow="hidden"
    >
      <Flex h="100%" align="center">
        <MarqueeText>
          <Text
            color="white" 
            fontSize="16px"
            fontWeight="700"
            mx={4}
          >
            {eventText}
          </Text>
        </MarqueeText>
      </Flex>
    </Box>
  );
};

export default Event;
