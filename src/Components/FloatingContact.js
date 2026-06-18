'use client';
import React from 'react';
import { Box, Link, VStack, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

// Floating WhatsApp + click-to-call — the #1 and #2 lead channels for CCTV buyers in India.
// Pure links (no backend), shown on every public page.
const PHONE = '+919687779999';
const WA = 'https://wa.me/919687779999?text=Hi%20ArcisAI%2C%20I%27d%20like%20a%20quote%20for%20AI%20CCTV%20cameras.';

const Btn = ({ href, label, bg, children, isExternal }) => (
  <Tooltip label={label} placement="left" hasArrow>
    <Link
      href={href}
      isExternal={isExternal}
      aria-label={label}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={{ base: '52px', md: '56px' }}
      h={{ base: '52px', md: '56px' }}
      borderRadius="full"
      bg={bg}
      color="white"
      fontSize="24px"
      boxShadow="0 4px 14px rgba(0,0,0,0.35)"
      transition="transform 0.15s"
      _hover={{ transform: 'scale(1.08)', textDecoration: 'none' }}
    >
      {children}
    </Link>
  </Tooltip>
);

export default function FloatingContact() {
  return (
    <Box position="fixed" bottom={{ base: '16px', md: '24px' }} right={{ base: '16px', md: '24px' }} zIndex={1400}>
      <VStack spacing={3}>
        <Btn href={WA} label="Chat on WhatsApp" bg="#25D366" isExternal>
          <FaWhatsapp />
        </Btn>
        <Btn href={`tel:${PHONE}`} label="Call ArcisAI" bg="#8266C9">
          <FaPhoneAlt />
        </Btn>
      </VStack>
    </Box>
  );
}
