import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Flex,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import CustomButton from "./CustomButton";
import { ReactComponent as UpButtonIcon } from "./Icons/UpButton.svg"; // Adjust path if needed

const UpIcon = (props) => (
  <Icon viewBox="0 0 16 8" fill="none" {...props}>
    <path
      d="M0.640185 7.07674L7.93227 0.999999L15.2244 7.07674"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </Icon>
);

const FAQSection = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  if (!data) return null;

  return (
    <Box py={{ base: 4, md: 8 }} color="white">
      <Box w="100%">
        <Heading
          as="h2"
          fontSize={{ base: "30px", md: "60px" }}
          fontWeight="400"
          textAlign="center"
          mb={8}
        >
          {data.heading}
        </Heading>

        <VStack
          spacing={4}
          align="stretch"
          p={{ base: 2, md: 4 }}
          w={{ base: "100%", md: "70%" }}
          mx="auto"
        >
          {data.data.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <Box
                key={index}
                // width="80%" // 80% of screen width
                borderBottom="5px solid"
                borderColor="rgba(255,255,255,0.2)"
                pb={{ base: 2, md: 4 }}
                pt={2}
                cursor="pointer"
                onClick={() => handleToggle(index)}
                // mx="auto" 
              >
                <Flex justify="space-between" align="center">
                  <Heading
                    as="h3"
                    fontSize={{ base: "14px", md: "20px" }}
                    fontWeight="400"
                    fontWeight="medium"
                    // color={isOpen ? "white" : "gray.400"}
                    _hover={{ color: "white" }}
                    transition="color 0.2s"
                    flex="1"
                    pr={4}
                  >
                    {item.question}
                  </Heading>

                  <CustomButton
                    width="40px"
                    height="40px"
                    bgColor="rgba(255, 255, 255, 0.05)"
                    hoverBgColor="rgba(255, 255, 255, 0.1)"
                    borderColor={isOpen ? "#A4FF79" : "#fff"}
                    hoverBorderColor="#A4FF79"
                    textColor="white"
                    hoverTextColor="white"
                    showGlow={isOpen}
                    glowColor="#A4FF79"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggle(index);
                    }}
                  >
                    <UpIcon
                      w={3.5}
                      h={3.5}
                      transform={isOpen ? "rotate(0deg)" : "rotate(180deg)"}
                      transition="transform 0.3s"
                      color={isOpen ? "#A4FF79" : "white"}
                    />
                  </CustomButton>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                  <Text
                    w="80%"
                    mt="2"
                    mb="4"
                    fontSize={{ base: "12px", md: "14px" }}
                    textAlign="justify"
                    lineHeight={{ base: "15px", md: "20px" }}
                  >
                    {item.answer}
                  </Text>
                </Collapse>
              </Box>
            );
          })}
        </VStack>
      </Box>
    </Box>
  );
};

export default FAQSection;
