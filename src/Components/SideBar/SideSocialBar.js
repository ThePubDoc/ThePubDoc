import React from 'react';

import {
  StyledSocialLinksContainer,
  StyledGithub,
  StyledLinkedin,
  StyledLine,
  StyledInstagram,
  StyledLink,
} from './SideBar.style';

const SideBAr = () => {
  return (
    <StyledSocialLinksContainer>
      <StyledLink src='https://www.github.com/thepubdoc'>
        <StyledGithub />
      </StyledLink>

      <StyledLink src='https://www.linkedin.com/in/aayushagrawal'>
        <StyledLinkedin />
      </StyledLink>

      <StyledLink src='https://www.instagram.com/cyber.smoke_/'>
        <StyledInstagram />
      </StyledLink>

      <StyledLine />
    </StyledSocialLinksContainer>
  );
};

export default SideBAr;
