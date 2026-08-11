'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import NewsGrid from './NewsGrid';

const NewsDashboard = () => {
  return (
    <>
      <Helmet>
        <title>News & Press Releases | ArcisAI</title>
        <meta
          name="description"
          content="Latest news, announcements and press releases from ArcisAI. Stay up to date with our newest AI surveillance products, events and milestones."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="News & Press Releases | ArcisAI"
        />
        <meta
          property="og:description"
          content="Latest news, announcements and press releases from ArcisAI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://arcisai.io/news" />
        <meta property="og:site_name" content="ArcisAI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@arcisai" />
        <link rel="canonical" href="https://arcisai.io/news" />
      </Helmet>
      <Box>
        <NewsGrid />
      </Box>
    </>
  );
};

export default NewsDashboard;
