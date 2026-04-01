'use client';

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
  return (
    <ChakraProvider theme={theme}>
      <HelmetProvider>
        {children}
      </HelmetProvider>
    </ChakraProvider>
  );
}
