import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
`;

export const StyledProjectName = styled.h1``;

export const StyledDescription = styled.h3``;

export const StyledScreenshot = styled.img.attrs((props) => ({
    src: props.src,
}))`
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  height: 100%;
  width: 100%;
`;
