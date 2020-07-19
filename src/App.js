import React, { useState, useEffect } from 'react';
import ResetStyle from './GlobalStyles/Reset.style';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './GlobalStyles/Theme';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';

import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const [Theme, setTheme] = useState(darkTheme);

  const [showLoader, setShowLoader] = useState(true);

  const changeTheme = () => {
    if (Theme === darkTheme) {
      setTheme(lightTheme);
    } else {
      setTheme(darkTheme);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1);
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <ResetStyle />
      <BrowserRouter>
        {showLoader ? <Loader /> : <Navbar change={changeTheme} />}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
