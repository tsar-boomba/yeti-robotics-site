import { MotionStyle } from 'framer-motion';
import { CSSProperties } from 'react';
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
	transition: background-color 0.15s ease, color 0.15s ease;
	&:hover {
		color: ${colors.secondaryHovered};
		background-color: ${colors.secondaryPrimay};
	}
`;

export const DropdownButton: CSSProperties = {
	position: 'relative',
	display: 'flex',
	height: '100%',
	width: '100%',
	justifyContent: 'center',
	paddingTop: '2.1vh',
	paddingBottom: '2.1vh',
	fontSize: '1.5vw',
	fontWeight: 'bold',
	flexGrow: 1,
	color: colors.secondary,
	zIndex: 2,
	cursor: 'pointer',
};

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

export const Menu: MotionStyle = {
	margin: 0,
	padding: 0,
	display: 'flex',
	flexFlow: 'column',
	position: 'absolute',
	top: '100%',
	color: colors.secondary,
	justifyContent: 'center',
	zIndex: 3,
};

export const MenuItemWrapper = styled.div`
	display: flex;
	flex-flow: row-wrap;
	background-color: #4bcdd5;
	padding: 10px;
	padding-top: 1rem;
	padding-bottom: 1rem;
	font-size: 2vh;
	font-weight: bold;
	border-bottom: 2px solid #000000;
	transition: background-color 0.15s ease, color 0.15s ease;
	&:hover {
		color: ${colors.secondaryHovered};
		background-color: ${colors.primaryHovered};
	}
`;
