import React, { useState } from 'react';
import ResetStyle from './GlobalStyles/Reset.style';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './GlobalStyles/Theme';

const App = () => {
  // const [darkTheme, setDarkTheme] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
      <ResetStyle />
      <h1>Hello</h1>
    </ThemeProvider>
  );
};

export default App;
