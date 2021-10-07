import React from 'react';
import { TitleStyles } from './TitleStyles';

interface TitleProps {
	style?: React.CSSProperties;
}

const Title: React.FC<TitleProps> = ({ style, children }) => {
	return <TitleStyles style={style}>{children}</TitleStyles>;
};

export default Title;
