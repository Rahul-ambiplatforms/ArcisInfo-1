import React from "react";
import { Box, Heading, Text, Grid } from "@chakra-ui/react";
import CustomButton from "../../../Components/CustomButton";
import DownloadFormPopup from "./DownloadFormPopup";

const CameraComparision = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = React.useState("");

  if (!data) return null;
  const { heading, headers, rows, d_image, m_image } = data;

  const handleDownloadClick = (pdfUrl) => {
    if (pdfUrl) {
      setCurrentPdfUrl(pdfUrl);
      setIsModalOpen(true);
    }
  };

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
          <Box minW={{ base: "900px", md: "100%", lg: "100%" }}>
            <Grid
              templateColumns={
                headers.length > 4
                  ? `1.5fr repeat(${headers.length - 1}, minmax(200px, 1fr))`
                  : `1.5fr repeat(${headers.length - 1}, 1fr)`
              }
              // gap={0} implies we handle spacing via padding/borders in cells
            >
              {/* Header Cells */}
              {headers.map((header, index) => (
                <Box
                  key={`header-${index}`}
                  bg="rgba(255, 255, 255, 0.2)"
                  backdropFilter="blur(2px)"
                  p={4}
                  pr={{ base: 0, md: index === 0 ? 32 : 4 }}
                  borderBottom="1px solid white"
                >
                  <Text
                    fontWeight="700"
                    fontSize={{ base: "14px", md: "20px" }}
                    color="white"
                    opacity={index === 0 ? 0.8 : 1}
                  >
                    {header}
                  </Text>
                </Box>
              ))}

              {/* Rows */}
              {rows.map((row, rowIndex) => (
                <React.Fragment key={`row-${rowIndex}`}>
                  {/* Label Cell */}
                  <Box
                    p={4}
                    pr={{ base: 0, md: 16 }}
                    borderBottom="0.5px solid white"
                    borderColor="rgba(255,255,255,0.3)"
                    display="flex"
                    alignItems="center"
                  >
                    <Text
                      fontWeight="700"
                      color="white"
                      fontSize={{ base: "14px", md: "16px" }}
                    >
                      {row.label}
                    </Text>
                  </Box>

                  {/* Value Cells */}
                  {row.values.map((val, valIndex) => (
                    <Box
                      key={`val-${rowIndex}-${valIndex}`}
                      p={4}
                      borderBottom="0.5px solid white"
                      borderColor="rgba(255,255,255,0.3)"
                      display="flex"
                      alignItems="center"
                    >
                      {row.isButton ? (
                        <CustomButton
                          width="100%"
                          maxWidth="160px"
                          height="40px"
                          fontSize="14px"
                          onClick={() => {
                             if (row.links && row.links[valIndex]) {
                                handleDownloadClick(row.links[valIndex]);
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
                </React.Fragment>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>

      {/* Download Popup */}
      <DownloadFormPopup 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        pdfUrl={currentPdfUrl} 
      />
    </Box>
  );
};

export default CameraComparision;
