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
import { Helmet } from "react-helmet-async";

function Landing() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          India’s First AI CCTV Camera Brand with EdgeAI Detections | ArcisAI
        </title>
        <meta
          name="description"
          content="Discover ArcisAI – India’s first AI CCTV camera brand with 8 inbuilt EdgeAI detections, delivering smarter & faster surveillance via cloud VMS & Free mobile app."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://arcisai.io/" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="India’s First AI CCTV Camera Brand with EdgeAI Detections | ArcisAI"
        />
        <meta
          property="og:description"
          content="Discover ArcisAI – India’s first AI CCTV camera brand with 8 inbuilt EdgeAI detections, delivering smarter & faster surveillance via cloud VMS & Free mobile app."
        />
        <meta
          property="og:image"
          content="https://arcisai.io//images/DeviceImage.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://arcisai.io/" />
        <meta property="og:site_name" content="ArcisAI" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta
          name="twitter:title"
          content="India’s First AI CCTV Camera Brand with EdgeAI Detections | ArcisAI"
        />
        <meta
          name="twitter:description"
          content="Discover ArcisAI – India’s first AI CCTV camera brand with 8 inbuilt EdgeAI detections, delivering smarter & faster surveillance via cloud VMS & Free mobile app."
        />
        <meta
          name="twitter:image"
          content="https://arcisai.io//images/DeviceImage.png"
        />
        {/* --- Schema Markup: Organization, LocalBusiness, and WebPage --- */}
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              url: "https://arcisai.io/",
              name: "ArcisAI - AI CCTV Camera Brand",
              logo: "https://arcisai.io/images/ArcisAi.png",
              email: "marketing@arcisai.io",
              telePhone: "+91 9687779999",
              address: [
                {
                  "@type": "PostalAddress",
                  addressCountry: "India",
                  streetAddress:
                    "7, Arista@Eight corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
                  addressLocality: "Ahmedabad",
                  addressRegion: "Gujarat",
                  postalCode: "380054",
                },
              ],
            },
            null,
            2
          )}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ArcisAI - AI CCTV Camera Brand",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
                streetAddress:
                  "Arista@Eight corporate House, Near Satyam House, Behind Rajpath Club, Bodakdev",
                addressLocality: "Ahmedabad",
                addressRegion: "Gujarat",
                postalCode: "380054",
              },
              pricerange: "$$$",
              email: "marketing@arcisai.io",
              telePhone: "+91 9687779999",
              openingHours: "Mo,Tu,We,Th,Fr,Sa 09:30-18:30",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:30",
                  closes: "18:30",
                },
              ],
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.115852",
                longitude: "5.846040",
              },
              image: "https://arcisai.io/images/ArcisAi.png",
            },
            null,
            2
          )}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "India’s First AI CCTV Camera Brand with EdgeAI Detections | ArcisAI",
              description:
                "Discover ArcisAI – India’s first AI CCTV camera brand with 8 inbuilt EdgeAI detections, delivering smarter & faster surveillance via cloud VMS & Free mobile app.",
              url: "https://arcisai.io/",
              datePublished: "2024-07-24",
              dateModified: "2025-10-06",
              publisher: {
                "@type": "Organization",
                name: "ArcisAI - AI CCTV Camera Brand",
                url: "https://arcisai.io/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://arcisai.io/images/ArcisAi.png",
                  width: 107,
                  height: 24,
                },
                sameAs: [
                  "https://www.facebook.com/thearcisai/",
                  "https://www.instagram.com/_arcisai_/",
                  "https://www.linkedin.com/company/thearcisai/",
                  "https://x.com/arcisai",
                ],
              },
              primaryImageOfPage: {
                "@type": "ImageObject",
                url: "https://arcisai.io/images/DeviceImage.png",
                width: 538,
                height: 475,
                caption: "AI-Powered Security Camera Brand",
              },
              inLanguage: "en-US",
            },
            null,
            2
          )}
        </script>
      </Helmet>
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
            as="H1"
            fontSize={["2xl", "4xl"]}
            color="#5B5B5C"
            mb="4"
            lineHeight={["1.2", "1.4"]} // Adjust line-height for better spacing
            w={["100%", "544px"]} // Full width for mobile
          >
            Explore the Future of{" "}
            <span style={{ color: "#9678E1" }}>Smarter Surveillance </span> with
            <span style={{ color: "#9678E1" }}> AI CCTV Ecosystem</span>
          </Heading>

          <Text
            mb="6"
            w={["100%", "473px"]}
            fontSize={["sm", "md"]}
            px={["2", "0"]}
          >
            ArcisAI is India’s first AI CCTV camera brand built to go beyond
            ordinary surveillance. Each camera has 8 inbuilt EdgeAI detections
            like unattended object, missing object, and area detection,
            processing intelligence directly on the device. With our optional
            CloudAI plan, you can add advanced features such as face
            recognition, fire detection, and PPE kit detection. All of this is
            powered by our STQC-certified VMS and mobile app, giving you
            real-time alerts, reports, playback, multi-camera integration,
            two-way audio, access control, custom view modes, auto updates, and
            third-party compatibility - making ArcisAI a smart, reliable, and
            future-ready surveillance ecosystem.
          </Text>
          {/* <Box mb="6">
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
        </Box> */}

          <Button
            variant={"solid"}
            bgColor={"black"}
            color={"white"}
            h={"34px"}
            p={"10px 18px"}
            gap={"8px"}
            flexShrink={0}
            _hover={"none"}
            onClick={() => (window.location.href = "/contact-us")}
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
    </>
  );
}

export default Landing;
