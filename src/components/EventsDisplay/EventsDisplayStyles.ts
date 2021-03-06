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
	borderRadius: '10px',
	padding: '5px',
	margin: '10px',
	cursor: 'pointer',
	color: colors.secondary,
};
export const EventsWrapper: MotionStyle = {};

// event styles
export const EventWrapper: MotionStyle = {
	display: 'flex',
	alignItems: 'center',
	border: '4px solid #000000',
	borderRadius: '10px',
	padding: '5px',
	margin: '10px',
	color: colors.secondary,
	backgroundColor: colors.primary,
};
export const EventText = styled.div`
	p {
		font-weight: bold;
		font-size: clamp(20px, 30px, 40px);
		strong {
			font-size: clamp(25px, 35px, 45px);
			margin-right: clamp(0px, 10px, 15px);
		}
	}
`;
