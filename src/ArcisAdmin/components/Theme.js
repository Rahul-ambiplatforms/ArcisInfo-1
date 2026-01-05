import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  fonts: {
    heading: "'WixMadeforDisplay', sans-serif",
    body: "'WixMadeforDisplay', sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#e7e7e7',
      },
    },
  },
});

export default Theme;
