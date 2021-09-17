import { useState, useEffect } from 'react';

/**
 *
 * @returns windowWidth and windowHeight in an object
 */
export const useDimensions = () => {
	const [windowWidth, setWindowWidth] = useState(0);
	const [windowHeight, setWindowHeight] = useState(0);

	const setDimensions = () => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
	};

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		setWindowHeight(window.innerHeight);
		window.addEventListener('resize', setDimensions);
		return () => window.removeEventListener('resize', setDimensions);
	}, []);

	return { windowWidth, windowHeight };
};
