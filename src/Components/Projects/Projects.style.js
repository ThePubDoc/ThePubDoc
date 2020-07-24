import styled from 'styled-components';

import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

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

export const StyledButton = styled.button``;
export const StyledLeftArrow = styled(TiArrowLeftThick)`
	font-size: 2rem;
	margin: 0 1rem;
`;

export const StyledRightArrow = styled(TiArrowRightThick)`
	font-size: 2rem;
	margin: 0 1rem;
`;

export const StyledGridContainer = styled.div`
	display: grid;
	grid-template-columns: 60% 40%;
	column-gap: 3rem;
`;

export const StyledProjectName = styled.h1`
	margin: 2rem 0;
`;

export const StyledDescription = styled.h3`
	line-height: 2;
	text-align: justify;
`;

export const StyledScreenshot = styled.img.attrs((props) => ({
	src: props.src,
}))`
	grid-row-start: 1;
	grid-row-end: 3;
	grid-column-start: 2;
	height: 100%;
	width: 100%;
`;
