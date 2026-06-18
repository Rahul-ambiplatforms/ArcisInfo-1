'use client';

import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import Header from '@/src/Components/Header/Header';
import FloatingContact from '@/src/Components/FloatingContact';

// Footer is below-fold — code-split its chunk, but SERVER-RENDER it so its
// internal links are in the initial HTML and crawlable by search engines (SEO).
const Footer = dynamic(() => import('@/src/Components/Footer/Footer'), { ssr: true });

// Keep in sync with App.js — set to true to show the event banner
const SHOW_EVENT_BANNER = false;

/**
 * ClientLayout renders the global Header and Footer around every public page.
 * Admin routes (/admin/*) get neither — their own app/admin/layout.js handles them.
 */
export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  return (
    <>
      {!isAdmin && <Header showEvent={SHOW_EVENT_BANNER} />}
      <Box
        pt={
          isAdmin
            ? '0'
            : SHOW_EVENT_BANNER
              ? { base: '150px', md: '150px' }
              : { base: '100px', md: '100px' }
        }
      >
        {children}
      </Box>
      {!isAdmin && <Footer />}
      {!isAdmin && <FloatingContact />}
    </>
  );
}

