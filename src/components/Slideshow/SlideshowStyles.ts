import { MotionStyle } from 'framer-motion';
import { CSSProperties } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SlideshowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: clamp(300px, 70%, 100%);
	height: 40vh;
	margin-bottom: 40px;
`;

export const ImageWrapper: CSSProperties = {
	height: '40vh',
};

export const IndicatorsWrapper = styled.div`
	display: flex;
	z-index: 2;
	position: absolute;
	bottom: -40px;
	align-items: center;
	justify-content: space-around;
`;

// controls styles
export const ControlsStyles: MotionStyle = {
	display: 'grid',
	placeItems: 'center',
	position: 'absolute',
	top: '50%',
	zIndex: 2,
	width: 40,
	height: 40,
	borderRadius: 20,
	backgroundColor: colors.primary,
	fontWeight: 900,
	fontSize: 20,
	cursor: 'pointer',
};

// PositionIndicator style
export const PositionIndicatorStyles = styled.div`
	width: 5px;
	height: 5px;
	border-radius: 15px;
	background-color: black;
	border: 0px solid #000000;
	margin: 5px;
	padding: 10px;
	cursor: pointer;
`;
