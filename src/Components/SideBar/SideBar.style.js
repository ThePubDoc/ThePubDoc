import styled from 'styled-components';

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';

export const StyledSocialLinks = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

export const StyledGithub = styled(AiFillGithub)`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

export const StyledLinkedin = styled(AiFillLinkedin)`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

export const StyledLine = styled.div`
  content: '';
  height: 5rem;
  width: 0.1rem;
  border: 1px solid;
  margin-top: 1rem;
`;

export const StyledInstagram = styled(AiOutlineInstagram)`
  margin: 1rem 0;
  font-size: 1.5rem;
`;

export const StyledMail = styled.p`
  writing-mode: vertical-lr;
`;

export const StyledMailLink = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
`;
