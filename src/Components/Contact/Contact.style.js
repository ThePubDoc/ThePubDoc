import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: auto;
`;

export const StyledHeading = styled.h1``;

export const StyledMailLink = styled.a.attrs((props) => ({
	href: props.src,
	target: '_blank',
}))`
	color: inherit;
	width: 15%;
	margin: 10rem auto;
	border: 1px solid;
	padding: 0.8rem 1rem;
	border-radius: 5px;
	text-align: center;
`;
