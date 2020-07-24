import React from 'react';

import { CSSTransition } from 'react-transition-group';
import '../../style.css';

const Experience = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
      <StyledContainer></StyledContainer>
    </CSSTransition>
  );
};

export default Experience;
