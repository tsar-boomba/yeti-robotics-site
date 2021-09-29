import React from 'react';
import { PageContainerWrapper } from './PageContainerStyles';

interface PageContainerProps {
	children: (JSX.Element | React.FC)[];
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
	return <PageContainerWrapper>{children}</PageContainerWrapper>;
};

export default PageContainer;
