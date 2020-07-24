import React from 'react';
import {
  StyledContainer,
  StyledIntroLine,
  StyledHeading,
  StyledParagraph,
  StyledName,
  StyledSkillsContainer,
  StyledArrow,
  StyledSkill,
} from './Home.style';

import { CSSTransition } from 'react-transition-group';
import '../../style.css';

const Home = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
      <StyledContainer>
        <StyledIntroLine>Hi, my name is</StyledIntroLine>
        <StyledName>Aayush Agrawal.</StyledName>
        <StyledHeading>I build web applications.</StyledHeading>
        <StyledParagraph>
          I'm a software engineer from India. I try to build web applications
          using ReactJS and NodeJS. Technologies and Tools I have been working
          on:
          <StyledSkillsContainer>
            <StyledSkill>
              <StyledArrow />
              <p>JavaScript</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>NodeJS</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>ExpressJS</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>ReactJS</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>MongoDB</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>HTML/CSS</p>
            </StyledSkill>

            <StyledSkill>
              <StyledArrow />
              <p>Git</p>
            </StyledSkill>
          </StyledSkillsContainer>
        </StyledParagraph>
      </StyledContainer>
    </CSSTransition>
  );
};

export default Home;
