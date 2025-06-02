import {
  Box,
  Button,
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Landing() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Flex
      direction={["column", "row"]}
      align="center"
      justify="space-around"
      p={{ base: 4, md: 8 }}
      z="10"
      bg={{
        base: "linear-gradient(to bottom, white 66%, #9678E1 34%)",
        md: "linear-gradient(to right, white 68%, #9678E1 32%)",
      }}
      w={"100%"}
    >
      <Box flex="1" textAlign={["center", "left"]} p={{ base: 4, md: 0 }}>
        <Heading
          fontSize={["2xl", "4xl"]}
          color="#5B5B5C"
          mb="4"
          lineHeight={["1.2", "1.4"]} // Adjust line-height for better spacing
          w={["100%", "544px"]} // Full width for mobile
        >
          Discover the <span style={{ color: "#9678E1" }}>Future of AI </span>{" "}
          Powered CCTV Cameras
          <span style={{ color: "#9678E1" }}> Surveillance System</span>
        </Heading>

        <Text
          mb="6"
          w={["100%", "473px"]}
          fontSize={["sm", "md"]}
          px={["2", "0"]}
        >
          ArcisAI VMS is a revolutionary video management system proudly
          developed in India by Adiance Technologies. It combines live video
          feeds, advanced AI analytics, and seamless multi-location management
          into a single, secure platform. Tailored for modern surveillance
          needs, ArcisAI empowers businesses to monitor, analyze, and control
          security operations with precision and ease. Offering real-time
          insights, flexibility, and scalability, ArcisAI VMS is the ultimate
          solution for organizations seeking advanced, reliable, and efficient
          surveillance systems.
        </Text>
        <Box mb="6">
          <Flex>
            {[
              "https://bit.ly/kent-c-dodds",
              "https://bit.ly/ryan-florence",
              "https://bit.ly/prosper-baba",
              // "https://bit.ly/dev-john-doe",
              // "https://bit.ly/code-jane-smith",
              "https://bit.ly/kent-c-dodds",
              "https://bit.ly/sage-adebayo",
              "https://bit.ly/ryan-florence",
            ].map((src, index) => (
              <Box
                key={index}
                ml={index === 0 ? "0" : "-15px"} // Adjust this for overlap amount
                zIndex={10 - index} // Maintain layering
              >
                <Avatar size="md" src={src} />
              </Box>
            ))}
          </Flex>
        </Box>

        <Button
          variant={"solid"}
          bgColor={"black"}
          color={"white"}
          h={"34px"}
          p={"10px 18px"}
          gap={"8px"}
          flexShrink={0}
          _hover={"none"}
          onClick={() =>
            (window.location.href = "https://view.arcisai.io/signup")
          }
          fontSize={["sm", "md"]} // Adjust button size for mobile
          fontWeight="700"
          lineHeight="24px"
          textTransform="uppercase"
        >
          Get Started
        </Button>
      </Box>
      <Flex
        flex="1"
        justify="center"
        mt={["6", "0"]}
        position="relative"
        zIndex={10}
      >
        <Image src="./images/DeviceImage.png" alt="Laptop" />
      </Flex>
    </Flex>
  );
}

export default Landing;
