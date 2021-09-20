/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

export const useClickedOutside = <T extends HTMLElement = HTMLDivElement>(
	clickedInside: (e?: any) => void = () => {
		return;
	},
	clickedOutside: (e?: any) => void = () => {
		return;
	},
) => {
	const ref = useRef<T>(null);

	const handleClick = (e: any) => {
		if (ref.current !== null) {
			if (ref.current.contains(e.target)) {
				clickedInside(e);
				return;
			}
		}
		// outside click
		clickedOutside(e);
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
