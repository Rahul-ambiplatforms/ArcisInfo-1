'use client';
import React from 'react';
import NextLink from 'next/link';
import { Box, Container, Heading, Text, SimpleGrid, Badge, Image, Button } from '@chakra-ui/react';
import Breadcrumbs from '@/src/Components/Breadcrumbs';

const ACCENT = '#9678E1';
const ACCENT_DEEP = '#8266C9';
const CARD_BG = 'rgba(255,255,255,0.04)';
const CARD_BORDER = 'rgba(255,255,255,0.12)';

const Products = ({ products = [] }) => {
  return (
    <>
      <Breadcrumbs crumbs={[{ name: 'Home', href: '/' }, { name: 'Products' }]} />
      <Box bg="#171717" color="white" py={{ base: 10, md: 16 }} minH="60vh">
        <Container maxW="1200px">
          <Badge bg="whiteAlpha.200" color="white" px={3} py={1} borderRadius="full" mb={4} fontSize="xs" textTransform="uppercase" letterSpacing="wider">
            Product Range
          </Badge>
          <Heading as="h1" fontSize={{ base: '30px', md: '48px' }} fontWeight="700" lineHeight="1.15" mb={4}>
            ArcisAI CCTV Camera Products
          </Heading>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="whiteAlpha.800" mb={10} maxW="4xl">
            BIS-ER &amp; STQC certified, Made-in-India AI surveillance — from premium and value CCTV
            cameras to NVRs, Cloud VMS, and generative-AI video search. Every product below is built
            and certified in India.
          </Text>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={6}>
            {products.map((p) => (
              <Box
                key={p.href}
                as={NextLink}
                href={p.href}
                borderWidth="1px"
                borderColor={CARD_BORDER}
                borderRadius="xl"
                bg={CARD_BG}
                overflow="hidden"
                transition="border-color 0.2s, transform 0.2s"
                _hover={{ borderColor: ACCENT, transform: 'translateY(-2px)' }}
                display="flex"
                flexDirection="column"
              >
                <Image src={p.image} alt={p.name} w="100%" h="160px" objectFit="cover" />
                <Box p={5} display="flex" flexDirection="column" flex="1">
                  <Heading as="h2" fontSize="lg" fontWeight="600" mb={2} color="white">
                    {p.name}
                  </Heading>
                  <Text color="whiteAlpha.800" fontSize="sm" mb={4} flex="1">
                    {p.description}
                  </Text>
                  <Button
                    as="span"
                    alignSelf="flex-start"
                    size="sm"
                    bg={ACCENT}
                    color="white"
                    _hover={{ bg: ACCENT_DEEP }}
                  >
                    Learn more →
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>

          <Box mt={12} p={{ base: 5, md: 7 }} bgGradient={`linear(160deg, ${ACCENT_DEEP}, #2a2342)`} borderRadius="xl">
            <Heading as="h2" fontSize={{ base: '20px', md: '26px' }} fontWeight="700" mb={3}>
              Not sure which product fits your site?
            </Heading>
            <Text color="whiteAlpha.900" mb={4}>
              Talk to our team for a free consultation and quote based on your camera count, site size,
              and compliance requirements.
            </Text>
            <Button as={NextLink} type={undefined} href="/contact-us" bg="white" color={ACCENT_DEEP} fontWeight="700" _hover={{ bg: 'gray.100' }}>
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Products;
