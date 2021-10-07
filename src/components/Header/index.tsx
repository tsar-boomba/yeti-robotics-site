import React from 'react';
import ContextProvider from './Context';
import Header from './Header';

export default () => (
	<ContextProvider>
		<Header />
	</ContextProvider>
);
