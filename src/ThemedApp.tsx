// src/ThemedApp.tsx

import React from 'react';
import App from './App'; // If ThemedApp wraps App
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme'; // Ensure these themes are defined
import { useAppSelector } from './store/hooks'; // Custom hook to access Redux state

const ThemedApp: React.FC = () => {
  const theme = useAppSelector((state) => state.theme); // Access theme from Redux
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <App />
    </ThemeProvider>
  );
};

export default ThemedApp;
