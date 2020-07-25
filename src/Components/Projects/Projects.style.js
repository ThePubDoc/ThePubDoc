import styled from 'styled-components';

import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';
import { AiFillGithub } from 'react-icons/ai';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: auto;
`;

export const StyleNavigationContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin: 5rem 0;
`;

export const StyledButton = styled.button`
	margin: 0 1rem;
	padding: 0.2rem 0.5rem;
	border: none;
	background-color: transparent;
`;

export const StyledLeftArrow = styled(TiArrowLeftThick)`
	font-size: 2rem;
	/* margin: 0.5rem 1rem; */
`;

export const StyledRightArrow = styled(TiArrowRightThick)`
	font-size: 2rem;
	/* margin: 0.5rem 1rem; */
`;

export const StyledGridContainer = styled.div`
	display: grid;
	grid-template-columns: 40% 60%;
	column-gap: 3rem;
	height: 50vh;
`;

export const StyledProjectName = styled.h1`
	margin: 2rem 0;
	grid-row-start: 1;
`;

export const StyledDescription = styled.h3`
	line-height: 2;
	/* text-align: justify; */
	grid-row-start: 2;
`;

export const StyledScreenshot = styled.img.attrs((props) => ({
	src: props.src,
}))`
	grid-row-start: 2;
	grid-row-end: 6;
	grid-column-start: 2;
	height: 100%;
	width: 100%;
`;

export const StyledTechnologies = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	margin: 2rem 0;
	width: 50%;
	gap: 1rem;
	grid-row-start: 3;

	h2 {
		margin: 1rem 0;
		grid-column-start: 1;
		grid-column-end: 4;
	}
`;

export const StyledTechnology = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

export const StyledArrow = styled(TiArrowRightThick)`
	margin: 0 0.2rem;
`;

export const StyledGithub = styled(AiFillGithub)`
	margin: 1rem 0;
	font-size: 1.5rem;

	height: 60%;
`;

export const StyledLink = styled.a.attrs((props) => ({
	href: props.src,
	target: '_blank',
}))`
	color: inherit;
	justify-self: flex-end;
`;
