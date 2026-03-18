'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

/**
 * Chakra UI theme — matches the original CRA app (src/index.js)
 */
const theme = extendTheme({
  styles: {
    global: {
      body: { bg: '#171717' },
      html: { bg: '#171717' },
    },
  },
  fonts: {
    heading: "'WixMadeforDisplay', sans-serif",
    body:    "'WixMadeforDisplay', sans-serif",
  },
});

/**
 * Providers wraps the entire app client-side.
 *
 * BrowserRouter is kept for backward-compatibility with existing components
 * that use react-router-dom hooks (Link, useNavigate, useParams).
 * Next.js intercepts <a> tag clicks, so Link components navigate correctly
 * through Next.js routing.  useParams() will return {} here; pages that
 * need dynamic params pass them explicitly as props.
 *
 * HelmetProvider is kept for any legacy <Helmet> usage still present in
 * components during the migration phase.  Prefer Next.js Metadata API for
 * new / updated pages.
 */
export function Providers({ children }) {
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </HelmetProvider>
    </ChakraProvider>
  );
}
