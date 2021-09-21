import React, { useEffect, useRef, useState } from 'react';
import { DropdownWrapper, DropdownMenu, DropdownButtonWrapper } from './ClickableDropdownStyles';
import ClickableDropdownItem from './ClickableDropdownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickedOutside } from '../../hooks/useClickedOutide';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	hideClickableDropdown,
	setClickableVisible,
	showClickableDropdown,
} from '../../store/slices/dropdownSlice';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
	const dispatch = useAppDispatch();
	const headerShown = useAppSelector((state) => state.header.shown);
	const visible = useAppSelector((state) => state.dropdown.clickable.shown);
	const [visibleId, setVisibleId] = useState(-1);
	const [prevVisible, setPrevVisible] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useClickedOutside<HTMLMenuElement>(undefined, (e) => {
		if (buttonRef.current.contains(e.target)) return;
		dispatch(hideClickableDropdown());
	});

	const menuClick = (e: React.MouseEvent) => {
		e.preventDefault();
		if (visible) {
			dispatch(hideClickableDropdown());
		} else if (!visible) {
			dispatch(showClickableDropdown());
		}
	};

	//hides menu when header disappears, but retains previous state
	useEffect(() => {
		if (headerShown) {
			dispatch(setClickableVisible(prevVisible));
		}
		if (!headerShown) {
			if (visible) {
				dispatch(hideClickableDropdown());
				setPrevVisible(true);
			} else {
				setPrevVisible(false);
			}
		}
	}, [headerShown]);
	// Reccomended deps break this logic

	//animation variants
	const menu: Variants = {
		open: {
			height: 'auto',
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.05,
			},
		},
		closed: {
			height: 0,
			transition: {
				staggerChildren: 0.1,
				staggerDirection: -1,
			},
		},
	};

	const title: Variants = {
		open: { opacity: 1 },
		closed: { opacity: 0 },
	};
	return (
		<>
			<DropdownButtonWrapper ref={buttonRef}>
				<FontAwesomeIcon icon={faBars} size='2x' onClick={menuClick} />
			</DropdownButtonWrapper>
			<DropdownWrapper ref={menuRef} onClick={menuClick}>
				<AnimatePresence>
					{visible && (
						<DropdownMenu>
							<motion.div
								initial='closed'
								animate='open'
								exit='closed'
								variants={menu}
								style={{ padding: 0, margin: 0 }}
							>
								{items.map((item, index) => {
									return (
										<motion.div
											key={index}
											variants={title}
											style={{ padding: 0, margin: 0 }}
										>
											<ClickableDropdownItem
												item={item}
												currId={[visibleId, setVisibleId]}
												id={index}
											/>
										</motion.div>
									);
								})}
							</motion.div>
						</DropdownMenu>
					)}
				</AnimatePresence>
			</DropdownWrapper>
		</>
	);
};

export default ClickableDropdown;
