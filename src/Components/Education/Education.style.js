import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
`;

export const StyledUniversity = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
`;

export const StyledLogo = styled.img.attrs((props) => ({ src: props.src }))`
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const StyledDescription = styled.p`
  margin: 2rem 0;
  line-height: 2;
  text-align: justify;
`;
