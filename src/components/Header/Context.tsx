import React, { createContext, useState } from 'react';

export const HeaderContext = createContext({
	headerShown: true,
	showHeader: () => {},
	hideHeader: () => {},
	clickableDropdownShown: false,
	showClickableDropdown: () => {},
	hideClickableDropdown: () => {},
});

const ContextProvider: React.FC = ({ children }) => {
	const [headerShown, setHeaderShown] = useState(true);
	const [clickableDropdownShown, setClickableDropdownShown] = useState(false);

	const showHeader = () => setHeaderShown(true);

	const hideHeader = () => setHeaderShown(false);

	const showClickableDropdown = () => setClickableDropdownShown(true);

	const hideClickableDropdown = () => setClickableDropdownShown(false);

	return (
		<HeaderContext.Provider
			value={{
				headerShown,
				showHeader,
				hideHeader,
				clickableDropdownShown,
				showClickableDropdown,
				hideClickableDropdown,
			}}
		>
			{children}
		</HeaderContext.Provider>
	);
};

export default ContextProvider;
