import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import DonateButton from '../DonateButton';
import PageContainer from '../PageContainer';
import { MainContainer } from './LayoutStyles';
import SEO from '../SEO';

interface LayoutProps {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	title?: string;
	description?: string;
	image?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, style, title, description, image }) => {
	return (
		<>
			<SEO title={title} description={description} image={image} />
			<PageContainer>
				<Header />
				<MainContainer style={style}>
					<DonateButton />
					{children}
				</MainContainer>
				<Footer />
			</PageContainer>
		</>
	);
};

Layout.defaultProps = {
	title: null,
	description: null,
	image: null,
};

export default Layout;
