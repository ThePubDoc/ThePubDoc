import React, { useState, useEffect } from 'react';

import {
	StyledNavbar,
	StyledLogo,
	StyledLinks,
	StyledLink,
	StyledSwitch,
} from './Navbar.style';
import { darkTheme } from '../../GlobalStyles/Theme';
import Education from '../Education/Education';

const Navbar = ({
	change,
	Theme,
	onClickEducation,
	onClickHome,
	onClickProject,
	onClickContact,
}) => {
	const [checked, setChecked] = useState(true);

	useEffect(() => {
		if (Theme == darkTheme) {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [Theme]);

	return (
		<StyledNavbar>
			<StyledLogo onClick={onClickHome}>
				<h1>A</h1>
			</StyledLogo>
			<StyledLinks>
				<StyledLink onClick={onClickHome}>
					<h3>Home</h3>
				</StyledLink>

				<StyledLink onClick={onClickEducation}>
					<h3>Education</h3>
				</StyledLink>
				<StyledLink>
					<h3>Experience</h3>
				</StyledLink>
				<StyledLink onClick={onClickProject}>
					<h3>Projects</h3>
				</StyledLink>
				<StyledLink onClick={onClickContact}>
					<h3>Contact</h3>
				</StyledLink>
				<StyledSwitch
					onChange={change}
					checked={checked}
					uncheckedIcon={false}
					checkedIcon={true}
					onColor='#2e88fd'
				/>
			</StyledLinks>
		</StyledNavbar>
	);
};

export default Navbar;
