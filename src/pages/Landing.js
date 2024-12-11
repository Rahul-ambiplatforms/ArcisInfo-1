import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { use } from "react";
import {
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRobot,
  FaSearch,
  FaTasks,
  FaTwitter,
  FaUserCircle,
} from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { GoThumbsup } from "react-icons/go";
import { RiCheckboxMultipleBlankLine } from "react-icons/ri";
import { FaCogs } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";
import { AiOutlineOpenAI } from "react-icons/ai";
import { BsJoystick } from "react-icons/bs";

function Landing() {
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

  const features = [
    {
      icon: FaSearch,
      title: "Smart Retrieval",
      description: "Find What You Need, Fast.",
    },
    {
      icon: FaUserCircle,
      title: "Track Anything - Object/Person",
      description:
        "Track Anything - Upload, Detect, and Follow Specific Targets.",
    },
    {
      icon: FaTasks,
      title: "Action/Activity Recognition",
      description: "Detect Actions Instantly.",
    },
    {
      icon: FaRobot,
      title: "Visual Intelligence with GPT",
      description: "Live Descriptions Right on Your Feed.",
    },
  ];
  return (
    <>
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-around"
        p="8"
        bg="linear-gradient(to right, white 68%, #9678E1 32%)"
      >
        <Box flex="1" textAlign={["center", "left"]}>
          <Heading
            fontSize={["3xl", "4xl"]}
            color="#5B5B5C"
            mb="4"
            lineHeight={["1.2", "1.4"]} // Adjust line-height for better spacing
            w={"544px"}
          >
            Discover the <span style={{ color: "#9678E1" }}>Future of AI </span>{" "}
            Powered CCTV Cameras
            <span style={{ color: "#9678E1" }}> Surveillance System</span>
          </Heading>

          <Text mb="6" w={"473px"}>
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
              (window.location.href = "https://delta.arcisai.io/signup")
            }
          >
            Get Started
          </Button>
        </Box>
        <Flex flex="1" justify="center">
          <Image src="./images/DeviceImage.png" alt="Laptop" />
        </Flex>
      </Flex>

      <Box bg="white">
        {/* Header Section */}
        <Flex
          align="center"
          direction={{ base: "column", md: "row" }}
          mb={8}
          p="8"
          //   gap={6} // Adds spacing between sections for better responsiveness
        >
          {/* Text Section */}
          <VStack
            spacing={4}
            textAlign={{ base: "center", md: "left" }} // Center text on smaller screens
            alignItems={{ base: "center", md: "flex-start" }}
            // Full width on small screens, half on larger
          >
            <Heading size="lg">
              Our product{" "}
              <Text as="span" color="purple.500">
                ranges
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
              w="382px"
              //   maxWidth="600px"
            >
              The S Series cameras by ArcisAI Technologies are cutting-edge
              surveillance solutions designed to deliver unparalleled
              performance through advanced Edge AI capabilities. These cameras
              are equipped with sophisticated AI analytics, ensuring real-time
              intelligence, proactive detection, and seamless integration across
              various environments.
            </Text>
            <Heading size="md">
              S-SERIES{" "}
              <Text as="span" color="purple.500">
                CAMERAS
              </Text>
            </Heading>
            <VStack
              spacing={1}
              alignItems={{ base: "center", md: "flex-start" }}
            >
              <Text fontSize={{ base: "sm", md: "lg" }}>• DOME</Text>
              <Text fontSize={{ base: "sm", md: "lg" }}>• PTZ</Text>
              <Text fontSize={{ base: "sm", md: "lg" }}>• BULLET</Text>
            </VStack>
          </VStack>

          {/* Product Showcase Section */}
          <Box
            bg="purple.50"
            borderRadius="md"
            w="100%"
            maxW="1200px"
            mx="auto"
            p={4}
            display="flex"
            alignItems="center"
          >
            {/* Dome Camera */}
            <Image
              src="./images/camera2.png"
              alt="Dome Camera"
              w={{ base: "100px", md: "150px", lg: "200px" }}
              h="auto"
              objectFit="contain"
            />

            {/* PTZ Camera (Center) */}
            <Image
              src="./images/aiPtz.png"
              alt="PTZ Camera"
              w={{ base: "200px", md: "300px", lg: "450px" }}
              h="auto"
              objectFit="contain"
            />

            {/* Bullet Camera */}
            <Image
              src="./images/camera3.png"
              alt="Bullet Camera"
              w={{ base: "100px", md: "150px", lg: "200px" }}
              h="auto"
              objectFit="contain"
            />
          </Box>
        </Flex>

        {/* <Box bg="linear-gradient(to right, #fffff 6%, #9678E1 39%)"> */}
        <Box>
          {/* Surveillance Screenshots */}
          <Image
            w={{ base: "100%", md: "860px" }} // Full width on small screens, specific size on larger
            h={{ base: "auto", md: "488px" }}
            src="./images/multiview.png"
            alt="Surveillance"
            borderRadius="md"
            transition="transform 0.3s ease"
          />
        </Box>
      </Box>

      <Box>
        {/* Header Section */}

        {/* Header Section */}
        <Flex
          position="relative"
          direction={{ base: "column", md: "row" }}
          h={{ base: "auto", md: "600px" }}
        >
          {/* Purple Background with Text */}
          <Box
            bg="linear-gradient(to left, white 50%, #9678E1 50%)"
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
                mt={10}
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
            right={{ base: "0", md: "0" }}
            transform={{ base: "none", md: "translateY(-50%)" }}
            w={{ base: "100%", md: "120%" }}
            // h={"930px"}
            maxH="850px"
            flex={1}
            objectFit="contain"
          />
        </Flex>
        {/* Feature Section */}
        <Box py={8} px={4}>
          <Heading textAlign="center" mb={6}>
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

      <Box>
        {/* Main Flex Container */}
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          justify="space-between"
          gap={{ base: 10, lg: 0 }}
        >
          {/* Left Section (Image with Callouts) */}
          <Box flex={1} position="relative">
            {/* Image Container */}
            <Box position="relative" height={{ base: "400px", md: "600px" }}>
              <Image
                src="./images/arcisGPT.png" // Replace with actual image path
                alt="Generative AI Feature"
                w="100%"
                h="100%"
                objectFit="cover"
              />

              {/* Callouts */}
              <Box
                position="absolute"
                top="10%"
                left="5%"
                bg="white"
                p={4}
                boxShadow="md"
                borderRadius="md"
                maxW="250px"
              >
                <Text fontSize="md" fontWeight="bold" color="gray.800">
                  Smart Retrieval
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Find moments instantly with keywords.
                </Text>
              </Box>

              <Box
                position="absolute"
                top="50%"
                left="10%"
                bg="white"
                p={4}
                maxW="250px"
              >
                <Text fontSize="md" fontWeight="bold" color="gray.800">
                  Track Anything
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Upload an image to locate and track objects.
                </Text>
              </Box>

              <Box
                position="absolute"
                bottom="10%"
                left="15%"
                bg="white"
                p={4}
                maxW="250px"
              >
                <Text fontSize="md" fontWeight="bold" color="gray.800">
                  Enhanced Action/Activity Recognition
                </Text>
                <Text fontSize="sm" color="gray.600">
                  Detect actions or unauthorized access instantly.
                </Text>
              </Box>
            </Box>
          </Box>

          {/* Right Section (Text and Features) */}
          <Box
            flex={1}
            ml={{ lg: 8 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            {/* Heading */}
            <Heading as="h2" size="xl" color="purple.500" mb={4}>
              Generative AI
            </Heading>

            {/* Subheading */}
            <Text fontSize="lg" color="gray.600" mb={8}>
              Unlock the Power of India's First Gen AI Solutions in Video
              Surveillance –{" "}
              <Text as="span" fontWeight="bold" color="purple.700">
                Proudly Made in India.
              </Text>
            </Text>

            {/* Features List */}
            <Stack spacing={6} align={{ base: "center", lg: "flex-start" }}>
              {features.map((feature, index) => (
                <Flex
                  key={index}
                  align="center"
                  textAlign={{ base: "center", lg: "left" }}
                  bg="white"
                  p={4}
                  w="full"
                  maxW="400px"
                >
                  <Icon
                    as={feature.icon}
                    boxSize={8}
                    color="purple.500"
                    mr={4}
                  />
                  <Box>
                    <Text fontWeight="bold" fontSize="lg" color="gray.800">
                      {feature.title}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {feature.description}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Stack>

            {/* Second Image */}
            <Box mt={8}>
              <Image
                src="./images/camera2.png" // Replace with actual image path
                alt="Camera Feature"
                maxW={{ base: "100%", md: "80%" }}
              />
            </Box>
          </Box>
        </Flex>

        {/* Full-Width Image */}
        <Box mt={12}>
          <Image
            src="./images/GPTStartedView.png" // Replace with actual image path
            alt="Generative AI Full View"
            w="100%"
          />
        </Box>
      </Box>

      <Box>
        {/* Contact Section */}
        <Box as="section" textAlign="center" py={10} px={5}>
          <Text fontSize="3xl" fontWeight="bold" color={"gray.500"} mb={5}>
            Get in touch
          </Text>
          <VStack spacing={4} maxW="400px" mx="auto">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
            </FormControl>
            <FormControl>
              <FormLabel>Phone number</FormLabel>
              <Input placeholder="Phone number" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Email" />
            </FormControl>
            <Button
              variant={"solid"}
              bgColor={"black"}
              color={"white"}
              h={"34px"}
              p={"10px 18px"}
              gap={"8px"}
              flexShrink={0}
              _hover={"none"}
            >
              Send
            </Button>
          </VStack>
        </Box>

        {/* Footer Section */}
        <Box as="footer" bg="#9678E1" py={10} px={5}>
          <Flex
            maxW="800px"
            mx="auto"
            bg="white"
            borderRadius="lg"
            p={8}
            boxShadow="md"
            align="center"
            justify="space-between"
            direction={{ base: "column", md: "row" }}
          >
            <Text fontSize="2xl" fontWeight="bold" color="purple.500">
              <Text as="span" fontWeight="extrabold">
                Secure
              </Text>{" "}
              What Matters with Advanced
              <Text as="span" display="block" color="purple.500">
                AI-Powered Surveillance
              </Text>
            </Text>
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
                (window.location.href = "https://delta.arcisai.io/signup")
              }
            >
              Get Started
            </Button>
          </Flex>
          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "center", md: "flex-start" }}
            justify="space-between"
            maxW="1200px"
            mx="auto"
            py={6}
            px={4} // Optional padding for consistent spacing
          >
            {/* Logo and Social Icons */}
            <Box
              textAlign={{ base: "center", md: "left" }}
              mb={{ base: 6, md: 0 }}
            >
              <Image
                src="./images/arcisGPTcolorWhite.png"
                alt="Logo"
                w="120px"
                mx={{ base: "auto", md: "0" }}
              />
              <HStack
                mt={4}
                spacing={4}
                justify={{ base: "center", md: "flex-start" }}
              >
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Facebook"
                  icon={<FaFacebook />}
                  variant="ghost"
                  color="white"
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Twitter"
                  icon={<FaTwitter />}
                  variant="ghost"
                  color="white"
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="Instagram"
                  icon={<FaInstagram />}
                  variant="ghost"
                  color="white"
                />
                <IconButton
                  as="a"
                  href="#"
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  variant="ghost"
                  color="white"
                />
              </HStack>
            </Box>

            {/* Navigation Links */}
            <HStack
              spacing={{ base: 4, md: 6 }}
              divider={<Divider orientation="vertical" borderColor="white" />}
              wrap="wrap"
              justify={{ base: "center", md: "flex-end" }}
              textAlign="center"
              fontSize="14px"
              color="white"
            >
              <Link href="#" _hover={{ textDecoration: "none" }}>
                OUR PRODUCTS
              </Link>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                PRIVACY POLICY
              </Link>
              <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
                TERMS OF SERVICES
              </Link>
              <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
                WARRANTY SERVICES
              </Link>
              <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
                WARRANTY POLICY
              </Link>
            </HStack>
          </Flex>

          <Text textAlign="center" mt={4} fontSize="sm" color="white">
            Copyright © 2024 ArcisAI
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Landing;
