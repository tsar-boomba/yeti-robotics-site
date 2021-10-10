import React from 'react';
import GlobalContextProvider from './src/GlobalContext';

export default ({ element }) => {
	return <GlobalContextProvider>{element}</GlobalContextProvider>;
};
