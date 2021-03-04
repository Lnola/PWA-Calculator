import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from 'screens/Home';
import { GlobalStyles, theme } from 'index.styled';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
};

export default App;
