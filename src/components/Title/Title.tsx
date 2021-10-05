import React from 'react';

const Title: React.FC = ({ children }) => {
	return (
		<h1 style={{ fontSize: 48, padding: '0 15px 0 15px', borderBottom: '5px solid #000000' }}>
			{children}
		</h1>
	);
};

export default Title;
