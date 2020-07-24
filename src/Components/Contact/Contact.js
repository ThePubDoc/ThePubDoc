import React from 'react';

import { StyledContainer, StyledHeading, StyledLink } from './Contact.style';
import { CSSTransition } from 'react-transition-group';
import '../../style.css';
const Contact = () => {
	return (
		<CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
			<StyledContainer>
				<StyledHeading>Let's talk</StyledHeading>
				<StyledLink to='mailto:aayush9152@gmail.com'>Sey Hello</StyledLink>
			</StyledContainer>
		</CSSTransition>
	);
};

export default Contact;
