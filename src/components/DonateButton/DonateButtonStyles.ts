import { MotionStyle } from 'framer-motion';
import { colors } from '../../styles/colors';

export const DonateButtonStyle: MotionStyle = {
	position: 'fixed',
	top: 200,
	right: '2vw',
	backgroundColor: colors.primary,
	color: colors.secondary,
	padding: 10,
	borderRadius: 10,
	cursor: 'pointer',
	fontSize: '2vw',
	fontWeight: 'bold',
};
