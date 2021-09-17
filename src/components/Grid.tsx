import React from 'react';
import { GridStyle } from './styles/GridStyles';

interface GridProps {
	children?: (string | JSX.Element)[] | JSX.Element;
	style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = ({ children, style }) => {
	return (
		<>
			<GridStyle style={style}>{children}</GridStyle>
		</>
	);
};

export default Grid;
