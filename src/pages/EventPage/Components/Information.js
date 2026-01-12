import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Helper function to parse text and render links for format [text](url)
const parseText = (text) => {
  if (typeof text !== "string") return text;

  // Regex to match [text](url)
  const regex = /\[(.*?)\]\((.*?)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Push text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    // Push the link component
    parts.push(
      <Link
        key={match.index}
        to={match[2]}
        style={{
          color: "#fff",
          textDecoration: "underline",
        }}
      >
        {match[1]}
      </Link>
    );

    lastIndex = regex.lastIndex;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const Information = ({ data }) => {
  const { sections } = data;

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <Box bg="black" py={{ base: "40px", md: "80px" }} px={{ base: 4, md: 2 }}>
      <Box maxW="1400px" mx="auto">
        <VStack spacing={{ base: 8, md: 12 }} align="stretch">
          {sections.map((section, index) => (
            <Box key={index}>
              {/* Heading */}
              <Heading
                as="h2"
                fontSize={{
                  base: section.headingProps?.mobile?.fontSize || "24px",
                  md: section.headingProps?.desktop?.fontSize || "36px",
                }}
                fontWeight={{
                  base: section.headingProps?.mobile?.fontWeight || "700",
                  md: section.headingProps?.desktop?.fontWeight || "700",
                }}
                lineHeight={{
                  base: section.headingProps?.mobile?.lineHeight || "32px",
                  md: section.headingProps?.desktop?.lineHeight || "44px",
                }}
                color="white"
                textAlign={{
                  base: section.headingProps?.mobile?.textAlign || "center",
                  md: section.headingProps?.desktop?.textAlign || "center",
                }}
                mb={{ base: 4, md: 6 }}
              >
                {section.heading}
              </Heading>

              {/* Description - Support both string and array */}
              {Array.isArray(section.description) ? (
                <VStack spacing={0} align="stretch" w="100%">
                  {section.description.map((paragraph, pIndex) => (
                    <Text
                      key={pIndex}
                      color="white"
                      fontSize={{
                        base:
                          section.descriptionProps?.mobile?.fontSize || "14px",
                        md:
                          section.descriptionProps?.desktop?.fontSize || "16px",
                      }}
                      lineHeight={{
                        base:
                          section.descriptionProps?.mobile?.lineHeight ||
                          "22px",
                        md:
                          section.descriptionProps?.desktop?.lineHeight ||
                          "26px",
                      }}
                      fontWeight={{
                        base:
                          section.descriptionProps?.mobile?.fontWeight || "400",
                        md:
                          section.descriptionProps?.desktop?.fontWeight ||
                          "400",
                      }}
                      textAlign={{
                        base:
                          section.descriptionProps?.mobile?.textAlign ||
                          "center",
                        md:
                          section.descriptionProps?.desktop?.textAlign ||
                          "center",
                      }}
                      w="100%"
                      minH={paragraph === "" ? "24px" : "auto"}
                    >
                      {parseText(paragraph || "\u00A0")}
                    </Text>
                  ))}
                </VStack>
              ) : (
                <Text
                  color="white"
                  fontSize={{
                    base: section.descriptionProps?.mobile?.fontSize || "14px",
                    md: section.descriptionProps?.desktop?.fontSize || "16px",
                  }}
                  lineHeight={{
                    base:
                      section.descriptionProps?.mobile?.lineHeight || "22px",
                    md: section.descriptionProps?.desktop?.lineHeight || "26px",
                  }}
                  fontWeight={{
                    base: section.descriptionProps?.mobile?.fontWeight || "400",
                    md: section.descriptionProps?.desktop?.fontWeight || "400",
                  }}
                  textAlign={{
                    base:
                      section.descriptionProps?.mobile?.textAlign || "center",
                    md:
                      section.descriptionProps?.desktop?.textAlign || "center",
                  }}
                  whiteSpace="pre-line"
                  w="100%"
                >
                  {parseText(section.description)}
                </Text>
              )}
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Information;
