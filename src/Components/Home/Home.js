import React from 'react';
import {
  StyledContainer,
  StyledIntroLine,
  StyledHeading,
  StyledParagraph,
} from './Home.style';
import { CSSTransition } from 'react-transition-group';
import '../../style.css';
const Home = () => {
  return (
    <StyledContainer>
      <StyledIntroLine>Hi, my name is</StyledIntroLine>
      <StyledHeading>Aayush Agrawal.</StyledHeading>
      <StyledHeading>I build web applications.</StyledHeading>
      <StyledParagraph>
        I'm a software engineer from India. I try to build web applications
        using ReactJS and NodeJS.
      </StyledParagraph>
    </StyledContainer>
  );
};

export default Home;
