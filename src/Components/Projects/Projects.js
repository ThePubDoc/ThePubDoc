import React from 'react';

import { StyledContainer } from './Projects.style';

import '../../style.css';
import { projects } from './data';

import Project from './Project';

const Projects = () => {
  return (
    <StyledContainer>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </StyledContainer>
  );
};

export default Projects;
