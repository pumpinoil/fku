// src/theme.ts

import { createGlobalStyle } from 'styled-components';

export const GlobalVariables = createGlobalStyle`
  :root {
    --color-primary: #6B46C1;
    --color-secondary: #4299E1;
    /* Define more variables as needed */
  }

  body.dark {
    --color-primary: #805AD5;
    --color-secondary: #63B3ED;
    /* Override variables for dark mode */
  }
`;

export const lightTheme = {
  // Define light theme properties if needed
};

export const darkTheme = {
  // Define dark theme properties if needed
};
