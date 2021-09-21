import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const IcicleStyle = styled.div`
	width: 15px;
	height: 40px;
	border: 0;
	background: transparent
		linear-gradient(0deg, rgba(205, 252, 255, 1) 0%, rgba(84, 182, 229, 1) 78%);
	clip-path: polygon(0 0, 50% 100%, 100% 0);
	-webkit-transform: rotate(360deg);
`;

export const IcicleWrapper = styled.div`
	display: flex;
	position: absolute;
	width: 100%;
	top: 100%;
	flex-flow: row;
	align-items: flex-start;
	justify-content: space-around;
`;
