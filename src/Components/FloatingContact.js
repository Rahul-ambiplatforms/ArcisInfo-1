'use client';
import React, { useEffect } from 'react';
import { Box, Link, VStack, Tooltip } from '@chakra-ui/react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { captureAttribution, trackContactClick } from '@/src/utils/track';

// Floating WhatsApp + click-to-call — the #1 and #2 lead channels for CCTV buyers in India.
// Pure links (no backend), shown on every public page.
const PHONE = '+919687779999';
const WA = 'https://wa.me/919687779999?text=Hi%20ArcisAI%2C%20I%27d%20like%20a%20quote%20for%20AI%20CCTV%20cameras.';

const Btn = ({ href, label, bg, children, isExternal, onClick }) => (
  <Tooltip label={label} placement="left" hasArrow>
    <Link
      href={href}
      isExternal={isExternal}
      onClick={onClick}
      aria-label={label}
      display="flex"
      alignItems="center"
      justifyContent="center"
      w={{ base: '44px', md: '56px' }}
      h={{ base: '44px', md: '56px' }}
      borderRadius="full"
      bg={bg}
      color="white"
      fontSize={{ base: '20px', md: '24px' }}
      boxShadow="0 4px 14px rgba(0,0,0,0.35)"
      transition="transform 0.15s"
      _hover={{ transform: 'scale(1.08)', textDecoration: 'none' }}
    >
      {children}
    </Link>
  </Tooltip>
);

export default function FloatingContact() {
  // Record first-touch source (UTM / landing page) once per session.
  useEffect(() => { captureAttribution(); }, []);
  return (
    <Box position="fixed" bottom={{ base: '12px', md: '24px' }} right={{ base: '10px', md: '24px' }} zIndex={1400}>
      <VStack spacing={{ base: 2, md: 3 }}>
        <Btn href={WA} label="Chat on WhatsApp" bg="#25D366" isExternal onClick={() => trackContactClick('whatsapp', 'floating')}>
          <FaWhatsapp />
        </Btn>
        <Btn href={`tel:${PHONE}`} label="Call ArcisAI" bg="#8266C9" onClick={() => trackContactClick('call', 'floating')}>
          <FaPhoneAlt />
        </Btn>
      </VStack>
    </Box>
  );
}
