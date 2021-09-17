import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const DropdownButton = styled.a`
	position: relative;
	display: flex;
	justify-content: center;
	margin: 5px;
	margin-right: 30px;
	padding-top: 2rem;
	padding-bottom: 2rem;
	font-size: 16px;
	font-weight: bold;
	border: 0px;
	transition: background-color 0.15s ease, color 0.15s ease;
	color: ${colors.secondary};
	background-color: ${colors.primary};
	z-index: 999;
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
	top: 98%;
	color: ${colors.secondary};
	justify-content: center;
	border-top: 2px solid #000000;
	box-shadow: 0px 0px 8px 4px ${colors.secondary};
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
