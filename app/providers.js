'use client';

// See ./emotion-ssr-cache.js for why we use our own hook here instead of
// @chakra-ui/next-js's CacheProvider/useEmotionCache: this is what makes
// Chakra's SSR emotion <style> tags get collected into <head> instead of
// scattered inline throughout <body> (invalid HTML, flagged sitewide by the
// W3C validator), without the duplicate-flush size blowup that package's own
// hook has.
import { CacheProvider as EmotionCacheProvider } from '@emotion/react';
import { useNextEmotionCache } from './emotion-ssr-cache';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

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
  components: {
    // Apply lazy loading and decoding=async globally to every Chakra <Image>
    Image: {
      defaultProps: {
        loading: 'lazy',
        decoding: 'async',
      },
    },
  },
});

export function Providers({ children }) {
  const cache = useNextEmotionCache();
  return (
    <EmotionCacheProvider value={cache}>
      <ChakraProvider theme={theme}>
        <HelmetProvider>
          {children}
        </HelmetProvider>
      </ChakraProvider>
    </EmotionCacheProvider>
  );
}
