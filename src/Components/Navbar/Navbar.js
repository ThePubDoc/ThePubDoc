import React, { useState, useEffect } from 'react';

import {
  StyledNavbar,
  StyledLogo,
  StyledLinks,
  StyledLink,
  StyledSwitch,
} from './Navbar.style';
import { darkTheme } from '../../GlobalStyles/Theme';
import Education from '../Education/Education';

const Navbar = ({ change, Theme, onClickEducation, onClickHome }) => {
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
        <StyledLink onClick={onClickHome}>
          <h3>Home</h3>
        </StyledLink>

        <StyledLink onClick={onClickEducation}>
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
        <StyledSwitch
          onChange={change}
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={true}
          onColor='#2e88fd'
        />
      </StyledLinks>
    </StyledNavbar>
  );
};

export default Navbar;
