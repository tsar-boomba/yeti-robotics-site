import { useEffect, useRef } from 'react';

/**
 *
 * @param headerShown Function with what to do when the header is shown
 * @param headerHidden Function with what to do when the header is hidden
 * @param initialPosition If the header is shown or hidden by default
 * @returns an object with headerRef to be attached to your header and headerShown to let you know if the header is shown or not
 */
export const useHidingHeader = <T extends HTMLElement = HTMLElement>(
	headerShown: () => void = () => {
		return;
	},
	headerHidden: () => void = () => {
		return;
	},
	animationLength = 0.3,
) => {
	const headerRef = useRef<T>(null);

	useEffect(() => {
		const header = headerRef.current;
		//making sure transition and position are correct
		header.style.position = 'fixed';
		header.style.transition = `top ${animationLength}s`;

		//need this to persist between scroll events, self-explanatory
		let lastScroll = window.scrollY;

		//whether the header was hidden or shown last, cuts down on unnecesarry executions
		let lastState = false;

		//header goes away on scroll down
		window.addEventListener('scroll', () => {
			//getting height of header including margin
			const headerHeight =
				header.offsetHeight +
				parseFloat(window.getComputedStyle(header).getPropertyValue('margin-top')) +
				parseFloat(window.getComputedStyle(header).getPropertyValue('margin-bottom'));

			//where the current scroll went
			const end = window.scrollY;

			if (end > lastScroll) {
				//scroll down
				if (lastState) {
					header.style.top = `-${headerHeight + 20}px`;
					headerHidden();
					lastState = false;
				}
			} else {
				//scroll up
				if (end <= 0) {
					//top of page
					header.style.boxShadow = `0px 0px 0px 0px`;
				} else {
					//not top of page
					header.style.boxShadow = `0px 20px 8px 0px #0000001f`;
				}
				if (!lastState) {
					header.style.top = '0';
					headerShown();
					lastState = true;
				}
			}
			lastScroll = end;
		});
	}, []);

	return { headerRef };
};
