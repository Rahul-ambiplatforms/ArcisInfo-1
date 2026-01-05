import React from "react";
import HeroSection from "./HeroSection";
import BlogsGrid from "./BlogsGrid";
import { Box } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
const BlogsDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Explore AI Security Trends & CCTV Insights | ArcisAI </title>
        <meta
          name="description"
          content="Discover the latest AI CCTV and smart security insights from ArcisAI. Explore trends, innovations, and expert tips shaping the future of surveillance in India."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Explore AI Security Trends & CCTV Insights | ArcisAI"
        />
        <meta
          property="og:description"
          content="Discover the latest AI CCTV and smart security insights from ArcisAI. Explore trends, innovations, and expert tips shaping the future of surveillance in India."
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://arcisai.io/blog" />
        <meta property="og:site_name" content="ArcisAI" />
        {/* <!-- Twitter Card Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <meta
          name="twitter:title"
          content="Explore AI Security Trends & CCTV Insights | ArcisAI"
        />
        <meta
          name="twitter:description"
          content="Discover the latest AI CCTV and smart security insights from ArcisAI. Explore trends, innovations, and expert tips shaping the future of surveillance in India."
        />
        <link rel="canonical" href="https://arcisai.io/blog" />
        {/* {blogsPageSchemas.map((schema, index) => (
          <script
            key={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))} */}
      </Helmet>
      <Box>
        {/* <HeroSection /> */}
        <BlogsGrid />
      </Box>
    </>
  );
};

export default BlogsDashboard;
