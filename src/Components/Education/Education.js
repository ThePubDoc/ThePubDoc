import React from 'react';

import {
	StyledContainer,
	StyledUniversity,
	StyledLogo,
	StyledDescription,
} from './Education.style';
import { CSSTransition } from 'react-transition-group';
import '../../style.css';

import { education } from './data';
const Education = () => {
	return (
		<CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
			<StyledContainer>
				<StyledUniversity>
					<StyledLogo src='https://raw.githubusercontent.com/thepubdoc/thepubdoc/master/src/Components/Education/Images/gbu.png' />
					<h1>Gautam Buddha University, Greater Noida, India</h1>
					<h3>Intergrated B.Tech+M.Tech (CSE) - 2015-20</h3>
				</StyledUniversity>
				<StyledDescription>
					I have done my post graduation from Gautam Buddha University. I have
					completed my thesis under the mentorship of Dr. Pradeep Tomar. Topic
					of my thesis is "AN EFFICIENT CRYPTOGRAPHY TECHNIQUE USING DIFFERENT
					BLOCK CIPHER MODES OF OPERATION TO SECURE IoT DATA".
				</StyledDescription>
			</StyledContainer>
		</CSSTransition>
	);
};

export default Education;
