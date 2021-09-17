import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const FooterWrapper = styled.footer`
	display: flex;
	width: 100%;
	flex-flow: row;
	align-items: center;
	justify-content: center;
	color: ${colors.light};
	background-color: ${colors.primary};
	padding: 10px;
	overflow: visible;
	align-self: flex-end;
`;

export const CommunicationsWrapper = styled.div`
	display: flex;
	flex-flow: column;
`;

export const CommunicationsTitle = styled.h1`
	margin: 0;
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
