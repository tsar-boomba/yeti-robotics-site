import styled from 'styled-components';
import { colors } from '../../styles/colors';

//ClickableDropdown Styles
export const DropdownWrapper = styled.menu`
	position: relative;
	display: flex;
	justify-content: center;
	width: 100%;
	font-size: 16px;
	font-weight: bold;
	color: ${colors.secondary};
	border-color: black;
	background-color: ${colors.primary};
	z-index: 999;
	padding: 0;
	margin-bottom: 0;
	cursor: pointer;
	box-shadow: 0px 0px 8px 0px ${colors.secondary};
	-webkit-tap-highlight-color: transparent;
`;

export const DropdownMenu = styled.div`
	display: flex;
	flex-flow: column;
	flex-grow: 1;
	color: ${colors.secondary};
`;

//ClickableDropdownItem Styles
export const TitleWrapper = styled.div`
	display: flex;
	flex-grow: 1;
	width: 100%;
	flex-flow: column;
	position: relative;
	align-items: center;
`;

export const Title = styled.div`
	padding-left: 5px;
	padding-right: 5px;
`;

export const ExpandButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bolder;
	font-size: 2rem;
	padding: 20px;
	padding-bottom: 5px;
	padding-top: 5px;
	border-left: 2px solid #000000;
	width: 32px;
`;

export const InteractiveWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row;
	border-bottom: 2px solid black;
	width: 100%;
	background-color: ${colors.primary};
`;

export const ChildrenMenu = styled.div`
	width: 100%;
`;

export const Child = styled.div`
	display: flex;
	flex-grow: 1;
	position: relative;
	top: 100%;
	padding: 5px;
	border-bottom: 1px solid black;
	background-color: #24654a;
`;
