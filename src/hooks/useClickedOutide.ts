import { useEffect, useRef } from 'react';

export const useClickedOutside = <T extends HTMLElement = HTMLDivElement>(
	clickedInside: () => void = () => {
		return;
	},
	clickedOutside: () => void = () => {
		return;
	},
) => {
	const ref = useRef<T>(null);

	const handleClick = (e) => {
		if (ref.current !== null) {
			if (ref.current.contains(e.target)) {
				clickedInside();
				return;
			}
		}
		// outside click
		clickedOutside();
	};

	useEffect(() => {
		// add when mounted
		document.addEventListener('mousedown', handleClick);
		// return function to be called when unmounted
		return () => {
			document.removeEventListener('mousedown', handleClick);
		};
	}, []);

	return ref;
};
