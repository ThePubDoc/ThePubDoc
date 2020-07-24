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
import Home from './Components/Home/Home';
import SideSocialBar from './Components/SideBar/SideSocialBar';
import SideMailBar from './Components/SideBar/SideMailBar';
import { CSSTransition } from 'react-transition-group';

import './style.css';
import Education from './Components/Education/Education';

import { StyledHeroContainer } from './App.style';
import Projects from './Components/Projects/Projects';

const App = () => {
  const [Theme, setTheme] = useState(darkTheme);
  const [showLoader, setShowLoader] = useState(true);
  const [currentSection, setCurrentSection] = useState(<Projects />);

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

  const onClickHome = () => {
    setCurrentSection(<Home />);
  };

  const onClickEducation = () => {
    setCurrentSection(<Education />);
  };

  return (
    <ThemeProvider theme={Theme}>
      <ResetStyle />
      <BrowserRouter>
        {showLoader ? (
          <Loader />
        ) : (
          <CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames='appear'
          >
            <div>
              <Navbar
                change={changeTheme}
                Theme={Theme}
                onClickEducation={onClickEducation}
                onClickHome={onClickHome}
              />
              <StyledHeroContainer>{currentSection}</StyledHeroContainer>
              <SideSocialBar />
              <SideMailBar />
            </div>
          </CSSTransition>
        )}
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
