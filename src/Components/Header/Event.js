import React from "react";
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

import EventPopup from "../../pages/Events/Event";

const marquee = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

const MarqueeText = ({ children }) => {
  return (
    <Box
      overflow="hidden"
      whiteSpace="nowrap"
      position="relative"
      w="full"
      h="full"
    >
      <Box
        animation={`${marquee} 20s linear infinite`}
        display="flex"
        height="100%"
        alignItems="center"
        _hover={{ animationPlayState: "paused" }}
      >
        {children}
      </Box>
    </Box>
  );
};

const Event = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const eventText =
    "Meet ArcisAI at SSSA Business Expo 2026 on 22–23 January in Rajkot. Visit us at Booth No. B5 to explore our Eco Series CCTV Cameras, along with our latest AI-powered CCTV cameras, VMS & Cloud solutions.";

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
                Book a meeting slot to connect with our team.
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
