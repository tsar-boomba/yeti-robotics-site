import * as React from 'react';
import { SectionStyles } from './SectionStyles';

interface SectionProps {
	style?: React.CSSProperties;
}

const Section: React.FC<SectionProps> = ({ style, children }) => {
	return <SectionStyles style={style}>{children}</SectionStyles>;
};

export default Section;
