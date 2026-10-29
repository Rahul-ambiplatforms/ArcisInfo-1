'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
import Header from '@/src/Components/Header/Header';
import FloatingContact from '@/src/Components/FloatingContact';
import { isEventLive } from '@/src/data/currentEvent';

// Footer is below-fold — code-split its chunk, but SERVER-RENDER it so its
// internal links are in the initial HTML and crawlable by search engines (SEO).
const Footer = dynamic(() => import('@/src/Components/Footer/Footer'), { ssr: true });

// Set to true to show the event banner. It also hides itself once the event in
// src/data/currentEvent.js is over.
const SHOW_EVENT_BANNER = true;

/**
 * ClientLayout renders the global Header and Footer around every public page.
 * Admin routes (/admin/*) get neither — their own app/admin/layout.js handles them.
 */
export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');
  // The homepage is prerendered at build time, so the date check runs after
  // mount: server and first client render agree (no hydration mismatch), and a
  // build made before the event ends drops the banner once it's over.
  const [eventLive, setEventLive] = useState(true);
  useEffect(() => {
    setEventLive(isEventLive());
  }, []);
  // Banner is scoped to the homepage: the modal it opens is mounted in
  // HomeDashboard, so on any other route the banner's CTA has no counterpart.
  const showEventBanner = SHOW_EVENT_BANNER && eventLive && pathname === '/';

  return (
    <>
      {!isAdmin && <Header showEvent={showEventBanner} />}
      <Box
        pt={
          isAdmin
            ? '0'
            : showEventBanner
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

