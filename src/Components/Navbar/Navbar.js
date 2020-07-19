import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';

import {
  StyledNavbar,
  StyledLogo,
  StyledLinks,
  StyledLink,
} from './Navbar.style';
import { darkTheme } from '../../GlobalStyles/Theme';

const Navbar = ({ change, Theme }) => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    if (Theme == darkTheme) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [Theme]);

  return (
    <StyledNavbar>
      <StyledLogo>
        <h1>A</h1>
      </StyledLogo>
      <StyledLinks>
        <StyledLink to='/home'>
          <h3>Home</h3>
        </StyledLink>
        <StyledLink to='/home'>
          <h3>Education</h3>
        </StyledLink>
        <StyledLink to='/home'>
          <h3>Work</h3>
        </StyledLink>
        <StyledLink to='/home'>
          <h3>Projects</h3>
        </StyledLink>
        <StyledLink to='/home'>
          <h3>Contact</h3>
        </StyledLink>
        <Switch
          onChange={change}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={true}
        />
      </StyledLinks>
    </StyledNavbar>
  );
};

export default Navbar;
