'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import NewsGrid from './NewsGrid';

const NewsDashboard = () => {
  return (
    <>
      {/* The <Helmet> block that used to sit here was inert: HelmetProvider is
          mounted in the client-only app/providers.js tree, so nothing Helmet
          renders reaches the server HTML. Its title/description/canonical are
          already emitted by the route's `metadata` export. */}
      <Box>
        <NewsGrid />
      </Box>
    </>
  );
};

export default NewsDashboard;
