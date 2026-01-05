import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  // Icon,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
// import { ExternalLink } from 'lucide-react';

const BlogsDashboard = () => {
  const svgSize = useBreakpointValue({ base: "13", md: "25" });

  return (
    //   {/* Background Image */}
    <Box p="1%">
      <Box
        position="relative"
        borderRadius="24px"
        width="100%"
        aspectRatio={{ base: "57 / 50", md: "16 / 9" }}
        overflow="hidden" // It's good practice to hide overflowing content from the container
      >
        <Image
          src={`${process.env.PUBLIC_URL}/images/thankyou.png`}
          alt="Blogs Dashboard" 
          objectFit={{ base: "cover", md: "cover" }}
          objectPosition={{ base: "right", md: "center" }}
          width="100%"
          height="100%"
          position="absolute"
          top="0"
          left="0"
        />

        {/* Overlay with blur effect */}
        <Box
          borderRadius="24px"
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="#3F77A5"
          opacity={{ base: "0.5", md: "0" }}
        />

        {/* Content */}
        <Flex
          position="relative"
          direction="column"
          height="100%"
          padding="5%"
          color="white"
          justifyContent="flex-start"
        >
          <Heading
            as="h1"
            fontSize={{ base: "24px", md: "48px" }}
            fontWeight="600"
            mb="2%"
            //   bg="red"
          >
            Insights & Innovations: Explore Our Tech Journal
          </Heading>
          <Text as="div" mb="2%">
            <svg
              width={svgSize}
              height={svgSize}
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 33C31.6569 33 33 31.6569 33 30V3C33 1.34315 31.6569 0 30 0C28.3431 0 27 1.34315 27 3V27H3C1.34315 27 0 28.3431 0 30C-4.76837e-07 31.6569 1.34315 33 3 33H30ZM2.87868 7.12132L27.8787 32.1213L32.1213 27.8787L7.12132 2.87868L2.87868 7.12132Z"
                fill="white"
              />
            </svg>
          </Text>
          {/* //maxWidth="50%" */}
          <Text fontSize={{ base: "12px", md: "16px" }} as="p" fontWeight="500">
            Stay ahead of the curve with our expert insights, industry trends,
            and AI innovations.
            <br />
            Explore our latest thoughts and breakthroughs.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default BlogsDashboard;
