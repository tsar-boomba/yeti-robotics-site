import React from 'react';
import {
	FooterWrapper,
	CommunicationsWrapper,
	CommunicationsTitle,
	CommunicationsText,
	SocialMediaWrapper,
	SocialMediaIconWrapper,
} from './FooterStyles';
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer: React.FC = () => {
	return (
		<>
			<FooterWrapper>
				<CommunicationsWrapper>
					<CommunicationsTitle>Follow us on Social Media</CommunicationsTitle>
					<SocialMediaWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://twitter.com/YETI_Robotics'
						>
							<FontAwesomeIcon size='lg' icon={faTwitter} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.facebook.com/YETI3506/'
						>
							<FontAwesomeIcon size='lg' icon={faFacebook} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.instagram.com/yetirobotics/'
						>
							<FontAwesomeIcon size='lg' icon={faInstagram} />
						</SocialMediaIconWrapper>
						<SocialMediaIconWrapper
							type='social'
							href='https://www.youtube.com/user/YETIRobotics3506'
						>
							<FontAwesomeIcon size='lg' icon={faYoutube} />
						</SocialMediaIconWrapper>
					</SocialMediaWrapper>
				</CommunicationsWrapper>
			</FooterWrapper>
		</>
	);
};

export default Footer;
