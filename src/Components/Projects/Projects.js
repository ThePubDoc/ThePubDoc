import React, { useState } from 'react';

import {
	StyledContainer,
	StyledLeftArrow,
	StyledRightArrow,
	StyleNavigationContainer,
	StyledGridContainer,
	StyledProjectName,
	StyledDescription,
	StyledScreenshot,
	StyledButton,
	StyledTechnologies,
} from './Projects.style';

import { CSSTransition } from 'react-transition-group';
import '../../style.css';
import { projects } from './data';

const Projects = () => {
	const [currentProject, setCurrentProject] = useState(0);
	const [hasNext, setHasNext] = useState(true);
	const [hasPrevious, setHasPrevious] = useState(false);

	const previous = () => {
		if (currentProject === 1) {
			setCurrentProject(currentProject - 1);
			setHasNext(true);
			setHasPrevious(false);
		} else {
			setCurrentProject(currentProject - 1);
			setHasPrevious(true);
			setHasNext(true);
		}
	};

	const next = () => {
		if (currentProject === projects.length - 2) {
			setCurrentProject(currentProject + 1);
			setHasNext(false);
			setHasPrevious(true);
		} else {
			setCurrentProject(currentProject + 1);
			setHasNext(true);
			setHasPrevious(true);
		}
	};

	return (
		<CSSTransition in={true} appear={true} timeout={1000} classNames='appear'>
			<StyledContainer>
				<StyledGridContainer>
					<StyledProjectName>{projects[currentProject].name}</StyledProjectName>
					<StyledDescription>
						{projects[currentProject].description}
					</StyledDescription>
					<StyledTechnologies>
						<h3>Technologies Used:</h3>
						{projects[currentProject].tech.map((tech) => (
							<h3>{tech}</h3>
						))}
					</StyledTechnologies>
					<StyledScreenshot src={projects[currentProject].image} />
				</StyledGridContainer>
				<StyleNavigationContainer>
					<StyledButton disabled={!hasPrevious} onClick={previous}>
						<StyledLeftArrow />
					</StyledButton>
					<StyledButton disabled={!hasNext} onClick={next}>
						<StyledRightArrow />
					</StyledButton>
				</StyleNavigationContainer>
			</StyledContainer>
		</CSSTransition>
	);
};

export default Projects;
