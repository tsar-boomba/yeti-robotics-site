import React from 'react';
import {
	FooterWrapper,
	CommunicationsWrapper,
	CommunicationsTitle,
	CommunicationsText,
	SocialMediaWrapper,
	SocialMediaIconWrapper,
} from './styles/FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
	return (
		<>
			<FooterWrapper>
				<CommunicationsWrapper>
					<CommunicationsTitle>Stay in touch</CommunicationsTitle>
					<CommunicationsText>
						Sign up for our newsletter, like us on Facebook, and follow us on Instagram
						and Twitter!
					</CommunicationsText>
					<SocialMediaWrapper>
						<SocialMediaIconWrapper type='social' href='https://twitter.com/HCCANEWS'>
							<FontAwesomeIcon icon={['fab', 'twitter']} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.facebook.com/Highland-Creek-Community-Association-Events-Activities-136735343100583/'
						>
							<FontAwesomeIcon icon={['fab', 'facebook']} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.instagram.com/highlandcreeknews/'
						>
							<FontAwesomeIcon icon={['fab', 'instagram']} />
						</SocialMediaIconWrapper>
					</SocialMediaWrapper>
				</CommunicationsWrapper>
			</FooterWrapper>
		</>
	);
};

export default Footer;
