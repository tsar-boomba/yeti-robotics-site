import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const IcicleStyle = styled.div`
	width: 0;
	height: 0;
	border-style: solid;
	border-color: ${colors.primary} transparent transparent transparent;
	--webkit-transform: rotate(360deg);
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
