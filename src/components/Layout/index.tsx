import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import DonateButton from '../DonateButton'
import PageContainer from '../PageContainer';
import { MainContainer } from './LayoutStyles';

interface LayoutProps {
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

const Layout: React.FC<LayoutProps> = ({ children, style }) => {
	return (
		<PageContainer>
			<Header />
			<MainContainer style={style}><DonateButton />{children}</MainContainer>
			<Footer />
		</PageContainer>
	);
};

export default Layout;
