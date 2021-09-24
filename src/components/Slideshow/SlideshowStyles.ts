import { MotionStyle } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SlideshowWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: clamp(300px, 70%, 100%);
	height: 40vh;
`;

export const Image: MotionStyle = {
	placeSelf: 'center',
	objectFit: 'scale-down',
	height: '40vh',
};

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
