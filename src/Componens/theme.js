// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    dark: {
      50: '#f7fafc',
      100: '#edf2f7',
      150:"red"
      // Add more color values for the dark mode
    },
    bright: {
      50: '#ffffff',
      100: '#f7fafc',
      // Add more color values for the bright mode
    },
  },
});

export default theme;
