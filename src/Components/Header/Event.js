import React from "react";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import EventPopup from "../../pages/Events/Event";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eventText =
    "Meet ArcisAI At IFSEC India 2025 From 11-13 December At Bharat Mandapam, New Delhi. Visit Booth I10, Hall No. 4 To Explore Our Latest AI-Powered CCTV Cameras, VMS & Cloud Solutions.";

  return (
    <>
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
              textTransform="uppercase"
            >
              {eventText}
              <Text
                as="span"
                ml={2}
                cursor="pointer"
                textDecoration="underline"
                _hover={{ color: "purple.300" }}
                onClick={onOpen}
              >
                Book a Meeting Slot
              </Text>
            </Text>
          </MarqueeText>
        </Flex>
      </Box>
      <EventPopup isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Event;
