import React from 'react';

import {
  StyledNavbar,
  StyledLogo,
  StyledLinks,
  StyledLink,
} from './Navbar.style';

const Navbar = ({ change }) => {
  return (
    <StyledNavbar>
      <StyledLogo>
        <h1>A</h1>
      </StyledLogo>
      <StyledLinks>
        <StyledLink>
          <h3>Home</h3>
        </StyledLink>
      </StyledLinks>
      <button onClick={change}>Switch</button>
    </StyledNavbar>
  );
};

export default Navbar;
