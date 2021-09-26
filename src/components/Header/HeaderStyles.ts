import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const HeaderWrapper = styled.header`
	display: flex;
	flex-flow: row wrap;
	width: 100%;
	align-items: center;
	justify-content: space-around;
	background-color: ${colors.primary};
	padding: 0px;
	overflow: visible;
	z-index: 998;
	position: fixed;
	top: 0px;
	transition: top 0.5s;
	box-shadow: 0;
`;

export const LogoWrapper = styled.div`
	padding: 5px 50px 0 50px;
	background: ${colors.primary};
	color: ${colors.primary};
	font-family: 'Times New Roman', Times, serif;
	font-size: 48px;
	font-weight: bold;
`;

export const Logo = styled.img`
	display: flex;
	aspect-ratio: auto;
`;
