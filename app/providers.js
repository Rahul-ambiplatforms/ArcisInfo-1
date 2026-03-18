'use client';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

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
 * We use StaticRouter (server) vs BrowserRouter (client) to avoid the
 * "document is not defined" error during Next.js SSR prerendering.
 * BrowserRouter accesses window/document on mount; StaticRouter does not.
 *
 * HelmetProvider is kept for legacy <Helmet> usage during migration.
 */
export function Providers({ children }) {
  const isServer = typeof window === 'undefined';

  let content;
  if (isServer) {
    // During SSR, use StaticRouter which doesn't access browser globals
    const { StaticRouter } = require('react-router-dom/server');
    content = <StaticRouter location="/">{children}</StaticRouter>;
  } else {
    const { BrowserRouter } = require('react-router-dom');
    content = <BrowserRouter>{children}</BrowserRouter>;
  }

  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        {content}
      </HelmetProvider>
    </ChakraProvider>
  );
}
