import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
  z-index: 1000;
`;

export const StyledLogo = styled.div``;

export const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  margin: 0 1rem;
`;

export const StyledSwitch = styled(Switch)`
  margin: 0 1rem;
`;
