import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineGlobal, AiOutlineOpenAI } from "react-icons/ai";
import { BsJoystick } from "react-icons/bs";
import { FaClock, FaCogs } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { GoThumbsup } from "react-icons/go";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";

function MiddlePart() {
  const gridData = [
    { icon: FaClock, title: "24/7 Availability" },
    { icon: AiOutlineGlobal, title: "Global Remote Access" },
    { icon: GoThumbsup, title: "User-Friendly Interface" },
    {
      icon: RiCheckboxMultipleBlankLine,
      title: "Multiple Cameras Integration",
    },
    { icon: FaCogs, title: "Third-Party System Integration" },
    { icon: FaRegCirclePlay, title: "Real-Time Playback and Live View" },
    { icon: AiOutlineOpenAI, title: "GPT-Powered User Interaction" },
    { icon: BsJoystick, title: "PTZ (Pan-Tilt-Zoom) Control" },
  ];

  return (
    <>
      <Box w={"100%"}>
        {" "}
        {/* Header Section */}
        <Flex
          position="relative"
          direction={{ base: "column", md: "row" }}
          h={{ base: "auto", md: "600px" }}
        >
          {/* Purple Background with Text */}
          <Box
            bg={{
              base: "linear-gradient(to left, #9678E1, #9678E1 )",
              md: "linear-gradient(to left, white 50%, #9678E1 50%)",
            }}
            flex="1"
            color="white"
            display="flex"
            // alignItems="center"
            // justifyContent="top"
            px={{ base: 6, md: 12 }}
            py={{ base: 12, md: 0 }}
          >
            <VStack align="flex-start" spacing={4} maxW="560px" color={"black"}>
              <Heading
                fontSize={{ base: "2xl", md: "4xl" }}
                mt={{ base: "4", md: "10" }}
                // align="center"
                textAlign={"center"}
              >
                Your complete security suite
              </Heading>
              <Text fontSize={{ base: "sm", md: "md" }}>
                The ArcisAI VMS provides a complete portfolio of end-to-end
                video security products and services, powered by intelligence,
                so you can react faster when it matters most.
              </Text>
            </VStack>
          </Box>

          {/* White Section with Image */}
          {/* Floating Image */}
          <Image
            src="./images/screen.png" // Replace with your actual image path
            alt="Security Suite"
            position="absolute"
            top={{ base: "0", md: "50%" }}
            left={{ base: "0", md: "-20" }}
            transform={{ base: "none", md: "translateY(-50%)" }}
            w={{ base: "90%", md: "100%" }} // Smaller width for mobile
            maxW={{ base: "400px", md: "none" }} // Constrain width on mobile
            maxH={{ base: "300px", md: "850px" }} // Constrain height on mobile
            // flex={0}
            objectFit="contain"
            display={{ base: "none", md: "block" }}
          />
        </Flex>
        <Image
          src="./images/screen.png" // Replace with your actual image path
          alt="Security Suite"
          w={{ base: "90%", md: "120%" }} // Smaller width for mobile
          maxW={{ base: "400px", md: "none" }} // Constrain width on mobile
          maxH={{ base: "300px", md: "850px" }} // Constrain height on mobile
          objectFit="contain"
          display={{ base: "block", md: "none" }}
        />
        {/* Feature Section */}
        <Box py={8} px={4}>
          <Heading textAlign="center" mb={6} size={{ base: "lg", md: "xl" }}>
            Features of ArcisAI VMS
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 8 }}>
            {gridData.map(({ icon, title }, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                textAlign="center"
                p={4}
                borderRadius="md"
                // boxShadow="md"
                // _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                transition="all 0.3s"
              >
                <Icon as={icon} boxSize={12} color="purple.500" mb={4} />
                <Text fontWeight="bold" fontSize="lg" color="gray.700">
                  {title}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

export default MiddlePart;
