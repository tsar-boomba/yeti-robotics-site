import { MotionStyle } from 'framer-motion';
import { colors } from '../../styles/colors';

export const DonateButtonStyle: MotionStyle = {
	position: 'absolute',
	top: 60,
	right: 40,
	backgroundColor: colors.primary,
	color: colors.secondary,
	padding: 10,
	borderRadius: 10,
	cursor: 'pointer',
	fontSize: 48,
	fontWeight: 'bold',
};
