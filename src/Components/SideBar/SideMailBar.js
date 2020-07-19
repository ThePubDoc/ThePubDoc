import React from 'react';
import { StyledLine, StyledMail, StyledMailLink } from './SideBar.style';

const SideMailBar = () => {
  return (
    <StyledMailLink>
      <StyledMail>aayush9152@gmail.com</StyledMail>
      <StyledLine />
    </StyledMailLink>
  );
};

export default SideMailBar;
