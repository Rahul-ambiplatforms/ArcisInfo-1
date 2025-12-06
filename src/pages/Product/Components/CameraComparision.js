import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";

const CameraComparision = ({ data }) => {
  if (!data) return null;
  const { heading, headers, rows, d_image, m_image } = data;

  return (
    <Box
      bg="black"
      py={{ base: 4, md: 8 }}
      color="white"
      position="relative"
      backgroundImage={{ base: `url(${m_image})`, md: `url(${d_image})` }}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Box w="100%" mx="auto" px={{ base: 4, lg: 8 }}>
        <Heading
          textAlign="center"
          mb={{ base: 4, md: 8 }}
          fontSize={{ base: "30px", md: "48px", lg: "60px" }}
          lineHeight={{ base: "38px", md: "56px", lg: "76px" }}
          fontWeight="400"
        >
          {heading}
        </Heading>

        <Box overflowX="auto" pb={4}>
          <Box minW={{ base: "900px", lg: "100%" }}>
            {/* Header */}
            <Grid
              templateColumns="1.5fr 1fr 1fr 1fr"
              gap={6}
              mb={{ base: 0, md: 4 }}
              bg="rgba(255, 255, 255, 0.2)"
              backdropFilter="blur(2px)"
              // bg="red"
              p={4}
            >
              {headers.map((header, index) => (
                <Text
                  key={index}
                  fontWeight="700"
                  fontSize={{ base: "14px", md: "20px" }}
                  color={index === 0 ? "white" : "white"}
                  opacity={index === 0 ? 0.8 : 1}
                >
                  {header}
                </Text>
              ))}
            </Grid>

            {/* Rows */}
            {rows.map((row, rowIndex) => (
              <Grid
                key={rowIndex}
                templateColumns="1.5fr 1fr 1fr 1fr"
                gap={6}
                py={4}
                px={{ base: 4, md: 4 }}
                borderBottom="0.5px solid"
                borderColor="#fff"
                alignItems="center"
                // _last={{ borderBottom: "none" }}
              >
                <Text
                  fontWeight="700"
                  color="white"
                  fontSize={{ base: "14px", md: "16px" }}
                >
                  {row.label}
                </Text>
                {row.values.map((val, valIndex) => (
                  <Box key={valIndex}>
                    {row.isButton ? (
                      <CustomButton
                        width="100%"
                        maxWidth="160px"
                        height="40px"
                        fontSize="14px"
                        onClick={() => {
                          if (row.links && row.links[valIndex]) {
                            window.open(row.links[valIndex], "_blank");
                          } else {
                            console.log("No PDF link found");
                          }
                        }}
                      >
                        {val}
                      </CustomButton>
                    ) : (
                      <Text
                        fontSize={{ base: "14px", md: "16px" }}
                        fontWeight="400"
                      >
                        {val}
                      </Text>
                    )}
                  </Box>
                ))}
              </Grid>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CameraComparision;
