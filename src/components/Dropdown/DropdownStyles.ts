import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DropdownWrapper = styled.div`
	display: flex;
	position: relative;
	flex-flow: column;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
`;

export const DropdownButton = styled.div`
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
	justify-content: center;
	padding-top: 2rem;
	padding-bottom: 2rem;
	font-size: 16px;
	font-weight: bold;
	transition: background-color 0.15s ease, color 0.15s ease;
	color: ${colors.secondary};
	background-color: ${colors.primary};
	z-index: 2;
	cursor: pointer;
	&:hover {
		color: ${colors.secondaryHovered};
		background-color: ${colors.primary};
	}
`;

export const BorderTop = styled.div`
	position: absolute;
	background-color: #000000;
	top: 0;
	left: 0;
	height: 2px;
	width: 100%;
	margin: 0;
	padding: 0;
	z-index: 4;
`;

export const Menu = styled.div`
	display: flex;
	flex-flow: column;
	position: absolute;
	top: 100%;
	color: ${colors.secondary};
	justify-content: center;
	box-shadow: 0px 0px 8px 4px ${colors.secondary};
	z-index: 3;
`;

export const MenuItemWrapper = styled.div`
	display: flex;
	flex-flow: row-wrap;
	background-color: #63f6ff;
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
