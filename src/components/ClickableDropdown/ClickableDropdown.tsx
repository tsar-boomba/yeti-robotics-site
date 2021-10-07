import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { DropdownWrapper, DropdownMenu, DropdownButtonWrapper } from './ClickableDropdownStyles';
import Item from './Item';
import { useClickedOutside } from '../../hooks/useClickedOutide';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { HeaderContext } from '../Header/Context';

interface ClickableDropdownProps {
	items: {
		title: string;
		href: string;
		children: {
			title: string;
			href: string;
		}[];
	}[];
}

const ClickableDropdown: React.FC<ClickableDropdownProps> = ({ items }) => {
	const { clickableDropdownShown, showClickableDropdown, hideClickableDropdown } =
		useContext(HeaderContext);
	const [visibleId, setVisibleId] = useState(-1);
	const prevScroll = useRef(0);
	const buttonRef = useRef<HTMLDivElement>(null);
	const clickedOut = useCallback(
		(e) => {
			if (buttonRef.current && buttonRef.current.contains(e.target)) return;
			if (!menuRef.current) return;
			// scrolling to where they currentlly are without the menu
			window.scrollTo({ top: window.scrollY - menuRef.current.offsetHeight - 287 });
			hideClickableDropdown();
		},
		[clickableDropdownShown],
	);
	const menuRef = useClickedOutside<HTMLMenuElement>(undefined, clickedOut);

	const menuClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (clickableDropdownShown) {
			window.scrollTo({ top: prevScroll.current });
			hideClickableDropdown();
		} else {
			prevScroll.current = window.scrollY;
			window.scrollTo({ top: 0 });
			showClickableDropdown();
		}
	};

	// hides menu if it unrenders
	useEffect(() => hideClickableDropdown, []);

	//animation variants
	const menu: Variants = {
		open: {
			height: 'auto',
			transition: {
				duration: 0.13,
				staggerChildren: 0.05,
				delayChildren: 0.1,
			},
		},
		closed: {
			height: 0,
			transition: {
				duration: 0.1,
				staggerChildren: 0.0166666666666666666666666666666666666666666666666666666,
				staggerDirection: -1,
			},
		},
	};

	const title: Variants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: -10,
			opacity: 0,
		},
	};

	return (
		<>
			<motion.div
				animate='animate'
				custom={clickableDropdownShown}
				variants={{
					animate: (visible: boolean) => ({ rotate: visible ? 90 : 0 }),
				}}
				ref={buttonRef}
				onClick={menuClick}
				style={DropdownButtonWrapper}
			>
				<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
					<path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
				</svg>
			</motion.div>
			<AnimatePresence initial={false}>
				{clickableDropdownShown && (
					<DropdownWrapper ref={menuRef} onClick={menuClick}>
						<motion.menu
							key='menu'
							initial='closed'
							animate='open'
							exit='closed'
							variants={menu}
							style={DropdownMenu}
						>
							{items.map((item, index) => {
								return (
									<motion.div
										key={index}
										variants={title}
										transition={{ duration: 0.1 }}
									>
										<Item
											item={item}
											currId={[visibleId, setVisibleId]}
											id={index}
										/>
									</motion.div>
								);
							})}
						</motion.menu>
					</DropdownWrapper>
				)}
			</AnimatePresence>
		</>
	);
};

export default ClickableDropdown;
