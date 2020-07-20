import React from 'react';
import Typewriter from 'typewriter-effect';

import { StyledContainer } from './Loader.style';
const Loader = () => {
  return (
    <StyledContainer>
      <Typewriter
        options={{
          strings: ["console.log('Hello World');"],
          autoStart: true,
          loop: true,
        }}
      />
    </StyledContainer>
  );
};

export default Loader;
