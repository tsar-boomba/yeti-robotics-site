import { colors } from '../../styles/colors';
import { MotionStyle } from 'framer-motion';
import styled from 'styled-components';

export const DisplayWrapper = styled.div`
	display: flex;
	flex-flow: column;
	width: clamp(50%, 700px, 90%);
`;

// month styles
export const MonthWrapper: MotionStyle = {
	border: '4px solid #000000',
	borderLeft: `7px solid ${colors.primary}`,
	borderTop: 0,
	borderRadius: '10px',
	padding: '5px',
	cursor: 'pointer',
};
export const EventsWrapper: MotionStyle = {};

// event styles
export const EventWrapper = styled.div``;
export const EventText = styled.h2``;
