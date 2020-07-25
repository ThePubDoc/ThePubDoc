import React from 'react';

import {
	StyledContainer,
	StyledHeading,
	StyledMailLink,
} from './Contact.style';
import { CSSTransition } from 'react-transition-group';
import '../../style.css';
const Contact = () => {
	return (
		<CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
			<StyledContainer>
				<StyledHeading>Let's Get In Touch</StyledHeading>
				<StyledMailLink src='mailto:aayush9152@gmail.com'>
					Say Hello
				</StyledMailLink>
			</StyledContainer>
		</CSSTransition>
	);
};

export default Contact;
