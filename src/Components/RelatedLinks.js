'use client';
import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Heading, Text, Link, Wrap, WrapItem } from '@chakra-ui/react';

// Plain, crawlable internal links (real <a href>) shown near the end of a page.
// Each entry: { href, label, note? }. Only pass destinations that exist.
const RelatedLinks = ({ title = 'Related ArcisAI pages', links = [] }) => {
  if (!links.length) return null;
  return (
    <Box as="nav" aria-label={title} py={{ base: 8, md: 10 }} color="white">
      <Container maxW="1100px">
        <Heading as="h2" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="600" mb={4}>
          {title}
        </Heading>
        <Wrap spacing={{ base: 4, md: 6 }}>
          {links.map((l) => (
            <WrapItem key={l.href} maxW="320px" display="block">
              <Link as={NextLink} href={l.href} color="#9678E1" fontWeight="600" textDecoration="underline">
                {l.label}
              </Link>
              {l.note && (
                <Text fontSize="sm" color="whiteAlpha.700" mt={1}>
                  {l.note}
                </Text>
              )}
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

export default RelatedLinks;
