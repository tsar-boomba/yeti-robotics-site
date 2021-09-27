import * as React from 'react';
import { SectionStyles } from './SectionStyles';

const Section: React.FC = ({ children }) => {
	return <SectionStyles>{children}</SectionStyles>;
};

export default Section;
