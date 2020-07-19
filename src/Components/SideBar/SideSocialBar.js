import React from 'react';

import {
  StyledSocialLinks,
  StyledGithub,
  StyledLinkedin,
  StyledLine,
  StyledInstagram,
} from './SideBar.style';

const SideBAr = () => {
  return (
    <StyledSocialLinks>
      <StyledGithub />
      <StyledLinkedin />
      <StyledInstagram />
      <StyledLine />
    </StyledSocialLinks>
  );
};

export default SideBAr;
