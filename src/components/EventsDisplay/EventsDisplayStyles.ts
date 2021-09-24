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
	borderRadius: '10px',
	padding: '5px',
	margin: '10px',
	cursor: 'pointer',
};
export const EventsWrapper: MotionStyle = {};

// event styles
export const EventWrapper: MotionStyle = {
	border: '4px solid #000000',
	borderLeft: `7px solid ${colors.secondaryPrimay}`,
	borderRadius: '10px',
	padding: '5px',
	margin: '10px',
};
export const EventText = styled.div`
	font-weight: bold;
	font-size: clamp(20px, 30px, 40px);
`;
