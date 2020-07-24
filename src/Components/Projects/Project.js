import React, { useState, useEffect } from 'react';

import {
  StyledContainer,
  StyledProjectName,
  StyledDescription,
  StyledScreenshot,
} from './Project.style';
const Project = ({ project }) => {
  const [Project, setProject] = useState(project);

  return (
    <StyledContainer>
      <StyledProjectName>{Project.name}</StyledProjectName>
      <StyledDescription>{Project.description}</StyledDescription>
      <StyledScreenshot src={Project.image} />
    </StyledContainer>
  );
};

export default Project;
