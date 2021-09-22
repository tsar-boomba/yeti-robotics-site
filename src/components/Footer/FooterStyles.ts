import { MotionStyle } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterWrapper = styled.footer`
	display: flex;
	width: 100%;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	color: ${colors.light};
	background-color: ${colors.primary};
	padding: 10px;
`;

export const CommunicationsWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const CommunicationsTitle = styled.h1`
	margin: 0;
	font-size: 30px;
`;

export const CommunicationsText = styled.p`
	width: 70%;
`;

export const SocialMediaWrapper = styled.div`
	display: flex;
	flex-flow: row;
	color: ${colors.secondary};
`;

export const SocialMediaIconWrapper = styled.a`
	margin: 10px;
	transition: color 0.15s;
	&:hover,
	&:active,
	&:focus {
		color: ${colors.secondaryHovered};
	}
`;

export const DonateButtonStyle: MotionStyle = {
	backgroundColor: colors.primaryHovered,
	color: colors.secondary,
	padding: 10,
	borderRadius: 10,
	marginLeft: '2vw',
	cursor: 'pointer',
	fontSize: '15px',
	fontWeight: 'bold',
};
