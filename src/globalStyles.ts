// src/globalStyles.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Custom global styles */

  body {
    @apply bg-gray-100 text-gray-900;
    font-family: 'Inter', sans-serif;
  }

  /* Scrollbar Styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-gray-200;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-gray-400 rounded;
  }

  /* Dark Mode Adjustments */
  body.dark {
    @apply bg-gray-900 text-white;
  }
`;

export default GlobalStyle;
