import { useEffect, useRef } from 'react';

/**
 *
 * @param headerShown Function with what to do when the header is shown
 * @param headerHidden Function with what to do when the header is hidden
 * @param initialPosition If the header is shown or hidden by default
 * @returns an object with headerRef to be attached to your header and headerShown to let you know if the header is shown or not
 */
export const useHidingHeader = <T extends HTMLElement = HTMLElement>(
	headerShown: () => boolean = () => {
		return true;
	},
	headerHidden: () => boolean = () => {
		return true;
	},
	animationLength = 0.3,
) => {
	const headerRef = useRef<T>(null);
	const lastState = useRef(false);
	const lastScroll = useRef(0);

	const handleScroll = () => {
		if (headerRef.current === null) return;
		const header = headerRef.current;
		//making sure transition and position are correct
		header.style.position = 'fixed';
		header.style.transition = `top ${animationLength}s`;

		//need this to persist between scroll events, self-explanatory
		lastScroll.current = window.scrollY;

		//whether the header was hidden or shown last, cuts down on unnecesarry executions
		lastState.current = false;

		//header goes away on scroll down
		window.addEventListener('scroll', () => {
			//getting height of header including margin

			//where the current scroll went
			const end = window.scrollY;

			if (end > lastScroll.current) {
				//scroll down
				if (lastState.current) {
					lastState.current = false;
					const hideIt = headerHidden();
					if (!hideIt) return;
				}
				if (end <= 0) {
					//top of page
				} else {
					//not top of page
				}
			} else {
				//scroll up
				if (!lastState.current) {
					lastState.current = true;
					const showIt = headerShown();
					if (!showIt) return;
				}
				if (end <= 0) {
					//top of page
					header.style.boxShadow = `0px 0px 0px 0px`;
				} else {
					//not top of page
				}
			}
			lastScroll.current = end;
		});
	};

	useEffect(() => {
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return { headerRef };
};
