import styled from 'styled-components';

import { TiArrowRightThick } from 'react-icons/ti';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: auto;
`;

export const StyledIntroLine = styled.h2`
	margin: 1rem 0;
`;

export const StyledName = styled.h1`
	margin: 1rem 0;
`;

export const StyledHeading = styled.h2`
	margin: 1rem 0;
`;

export const StyledParagraph = styled.p`
	margin: 1rem 0;
	width: 80%;
	line-height: 1.5;
`;

export const StyledSkillsContainer = styled.div`
	display: grid;
	grid-template-columns: auto auto;
	margin: 2rem 0;
	width: 50%;
	row-gap: 0.5rem;
`;

export const StyledArrow = styled(TiArrowRightThick)`
	margin: 0 0.2rem;
`;

export const StyledSkill = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin: 0.5rem 0;
`;
