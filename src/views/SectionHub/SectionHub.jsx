'use client';
// Generic index/hub view for a section of SEO landing pages (/industry,
// /resources, /compare, /state). These sections previously had NO page at
// their own root — only the /<section>/<slug> dynamic route existed — so
// visiting /industry or /resources 404'd, and there was no on-site page
// linking every entry in the section together. That both broke the bare URL
// (confirmed live-404, and the source of several "Not found (404)" entries
// in GSC) and left the whole cluster reachable only through the sitemap,
// which is a weak discovery signal on its own — a real, crawlable, visible
// hub page is what actually gets these pages out of "Discovered - currently
// not indexed".
//
// SEO audit fix (2026-09-19, technical SEO pass): see app/industry/page.js,
// app/resources/page.js, app/compare/page.js, app/state/page.js.
import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';

export default function SectionHub({ eyebrow, title, description, links = [], basePath }) {
  return (
    <Box bg="#171717" minH="60vh" pb={20}>
      <Box
        py={{ base: 14, md: 20 }}
        bg={`linear-gradient(135deg, ${ACCENT_DEEP} 0%, ${ACCENT} 100%)`}
        color="white"
        textAlign="center"
        >
      <Container maxW="4xl">
        {eyebrow && (
          <Text fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" fontSize="sm" opacity={0.85} mb={3}>
            {eyebrow}
          </Text>
          )}
      <Heading as="h1" size={{ base: 'xl', md: '2xl' }} mb={4}>
        {title}
      </Heading>
        {description && (
          <Text fontSize={{ base: 'md', md: 'lg' }} opacity={0.92} maxW="2xl" mx="auto">
            {description}
          </Text>
          )}
      </Container>
      </Box>
    
    <Container maxW="6xl" mt={{ base: 10, md: 14 }}>
      {links.length === 0 ? (
      <Text color="whiteAlpha.700" textAlign="center">
      No pages published in this section yet.
      </Text>
      ) : (
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={5}>
        {links.map((l) => (
        <NextLink key={l.slug} href={`/${basePath}/${l.slug}`} style={{ textDecoration: 'none' }}>
        <VStack
          align="start"
          spacing={3}
          bg="#1F1F1F"
          border="1px solid rgba(255,255,255,0.08)"
          borderRadius="xl"
          p={5}
          h="100%"
          transition="all 0.2s"
          _hover={{ borderColor: ACCENT, transform: 'translateY(-2px)' }}
          >
        <Box display="flex" alignItems="center" justifyContent="space-between" w="100%">
        <Heading as="h2" size="sm" color="white" noOfLines={2}>
          {l.title}
        </Heading>
        <Icon as={FiArrowUpRight} color={ACCENT} flexShrink={0} ml={2} />
        </Box>
          {l.description && (
            <Text fontSize="sm" color="whiteAlpha.700" noOfLines={3}>
              {l.description}
            </Text>
            )}
        </VStack>
        </NextLink>
        ))}
      </SimpleGrid>
      )}
    </Container>
    </Box>
    );
}</Box>
