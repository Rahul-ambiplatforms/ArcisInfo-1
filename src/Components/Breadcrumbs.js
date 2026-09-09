'use client';
import React from 'react';
import NextLink from 'next/link';
import { Box, Container, HStack, Text, Icon } from '@chakra-ui/react';

// SEO audit fix (2026-09-07, checklist item #59): a BreadcrumbList JSON-LD
// schema has been emitted on these pages for a while (see
// src/data/buildSeoPageSchemas.js), but there was never a matching VISIBLE
// breadcrumb trail in the actual page UI — search engines strongly prefer
// (and some treat as a soft requirement for the breadcrumb rich result) that
// the structured data mirror something a real visitor can see and click.
// This component renders that visible trail, and its labels/hrefs are meant
// to match whatever crumbs a given page's JSON-LD already declares — pass the
// same `crumbs` array used to build the schema so the two never drift apart.
//
// `crumbs`: an array of { name, href? } — the LAST entry is treated as the
// current page (rendered as plain, non-linked text, matching how Google
// allows the trailing BreadcrumbList item to omit a URL). Every entry before
// that must have an `href` to be a real link.
const ChevronIcon = (props) => (
  <Icon viewBox="0 0 24 24" boxSize="14px" {...props}>
    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
  </Icon>
);

const Breadcrumbs = ({ crumbs = [] }) => {
  if (!Array.isArray(crumbs) || crumbs.length < 2) return null;

  return (
    <Box bg="#171717" borderBottom="1px solid" borderColor="rgba(255,255,255,0.08)" py={3}>
      <Container maxW="1200px">
        <HStack as="nav" aria-label="Breadcrumb" spacing={2} fontSize="sm" flexWrap="wrap">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <HStack key={i} spacing={2}>
                {i > 0 && <ChevronIcon color="whiteAlpha.500" />}
                {isLast || !crumb.href ? (
                  <Text color="whiteAlpha.700" fontWeight={isLast ? '600' : '400'} noOfLines={1} maxW="280px">
                    {crumb.name}
                  </Text>
                ) : (
                  <Text
                    as={NextLink}
                    href={crumb.href}
                    color="whiteAlpha.600"
                    _hover={{ color: '#9678E1', textDecoration: 'underline' }}
                    noOfLines={1}
                    maxW="280px"
                  >
                    {crumb.name}
                  </Text>
                )}
              </HStack>
            );
          })}
        </HStack>
      </Container>
    </Box>
  );
};

export default Breadcrumbs;
