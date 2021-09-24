import { MotionStyle } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const SlideshowWrapper = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	width: clamp(300px, 400px, 100%);
	height: clamp(200px, 500px, 700px);
`;

export const Image: MotionStyle = {
	height: 'clamp(300px, 600px, 100%)',
	width: 'clamp(300px, 400px, 100%)',
};

// controls styles
export const ControlsStyles: MotionStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
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
