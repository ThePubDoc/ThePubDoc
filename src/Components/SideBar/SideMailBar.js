import React from 'react';
import {
  StyledLine,
  StyledMailLink,
  StyledMailLinkContainer,
} from './SideBar.style';

const SideMailBar = () => {
  return (
    <StyledMailLinkContainer>
      <StyledMailLink src='mailto:aayush9152@gmail.com'>
        aayush9152@gmail.com
      </StyledMailLink>
      <StyledLine />
    </StyledMailLinkContainer>
  );
};

export default SideMailBar;
