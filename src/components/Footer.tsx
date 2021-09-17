import React from 'react';
import {
	FooterWrapper,
	CommunicationsWrapper,
	CommunicationsTitle,
	CommunicationsText,
	SocialMediaWrapper,
	SocialMediaIconWrapper,
} from './styles/FooterStyles';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
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
							<FontAwesomeIcon size='lg' icon={faTwitter} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.facebook.com/Highland-Creek-Community-Association-Events-Activities-136735343100583/'
						>
							<FontAwesomeIcon size='lg' icon={faFacebook} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.instagram.com/highlandcreeknews/'
						>
							<FontAwesomeIcon size='lg' icon={faInstagram} />
						</SocialMediaIconWrapper>
					</SocialMediaWrapper>
				</CommunicationsWrapper>
			</FooterWrapper>
		</>
	);
};

export default Footer;
