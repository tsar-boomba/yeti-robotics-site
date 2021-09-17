import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Card = styled.a`
	margin: 1rem;
	padding: 1.5rem;
	text-align: left;
	background-color: ${colors.light};
	color: ${colors.primary};
	text-decoration: none;
	border-radius: 10px;
	transition: color 0.15s ease, box-shadow 0.15s ease;
	width: 45%;
	scale: 1;
	&:hover,
	&:focus,
	&:active {
		color: ${colors.secondary};
		box-shadow: 0px 0px 12px 8px ${colors.secondary};
	}
`;

export const CardTitle = styled.h2`
	margin: 0 0 1rem 0;
	font-size: 1.5rem;
`;

export const CardText = styled.p`
	margin: 0;
	font-size: 1.25rem;
	line-height: 1.5;
`;
