import { useState, useEffect } from 'react';

/**
 *
 * @returns windowWidth and windowHeight in an object
 */
export const useDimensions = (lastDimension = { windowWidth: 0, windowHeight: 0 }) => {
	const [windowWidth, setWindowWidth] = useState(lastDimension.windowWidth);
	const [windowHeight, setWindowHeight] = useState(lastDimension.windowHeight);

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
