'use client';
import React from "react";
import HeroSection from "./HeroSection";
import BlogsGrid from "./BlogsGrid";
import { Box } from "@chakra-ui/react";
const BlogsDashboard = ({ initialBlogs = [] }) => {
  return (
    <>
      {/* The <Helmet> block that used to sit here was inert — HelmetProvider
          is mounted in the client-only app/providers.js tree, so nothing it
          rendered reached the server HTML. Its title/description/canonical are
          already emitted by the `metadata` export in app/blog/page.js, and its
          JSON-LD had been commented out, leaving /blog with no structured data
          at all. The Blog + BreadcrumbList schema is now built server-side in
          app/blog/page.js from the same post list this component renders. */}
      <Box>
        {/* <HeroSection /> */}
        <BlogsGrid initialBlogs={initialBlogs} />
      </Box>
    </>
  );
};

export default BlogsDashboard;
