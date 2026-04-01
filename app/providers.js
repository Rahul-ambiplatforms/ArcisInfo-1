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
