import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DropdownButton = styled.a`
	position: relative;
	display: flex;
	justify-content: center;
	margin-right: 30px;
	padding-top: 2rem;
	padding-bottom: 2rem;
	font-size: 16px;
	font-weight: bold;
	transition: background-color 0.15s ease, color 0.15s ease;
	color: ${colors.secondary};
	background-color: ${colors.primary};
	z-index: 9999;
	cursor: pointer;
	&:hover {
		color: ${colors.secondaryHovered};
		background-color: ${colors.primary};
	}
`;

export const Menu = styled.div`
	display: flex;
	flex-flow: column;
	position: absolute;
	top: 100%;
	color: ${colors.secondary};
	justify-content: center;
	margin: 0;
	z-index: 10000;
`;

export const BorderTop = styled.div`
	position: relative;
	background-color: #000000;
	top: 0;
	height: 2px;
	width: 100%;
	margin: 0;
	padding: 0;
	z-index: 10001;
`;

export const MenuItemWrapper = styled.a`
	display: flex;
	flex-flow: row-wrap;
	background-color: #24654a;
	padding: 10px;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 20px;
	font-weight: bold;
	border-bottom: 2px solid #000000;
	transition: background-color 0.15s ease, color 0.15s ease;
	&:hover {
		color: ${colors.secondaryHovered};
		background-color: ${colors.primaryHovered};
	}
`;
