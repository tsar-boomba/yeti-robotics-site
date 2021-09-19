import React, { useEffect, useRef, useState } from 'react';
import { DropdownWrapper, DropdownMenu } from './ClickableDropdownStyles';
import ClickableDropdownItem from './ClickableDropdownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickedOutside } from '../../hooks/useClickedOutide';
import { AnimatePresence, motion } from 'framer-motion';
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
	const buttonRef = useRef<HTMLDivElement>(null);
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
	const menu = {
		open: {
			height: 'auto',
		},
		closed: { height: 0 },
	};

	const title = {
		open: { height: 'auto' },
		closed: { height: 0 },
	};
	return (
		<>
			<div ref={buttonRef}>
				<FontAwesomeIcon icon={faBars} onClick={menuClick} />
			</div>
			<AnimatePresence>
				<DropdownWrapper ref={menuRef} onClick={menuClick}>
					{visible && (
						<DropdownMenu>
							<motion.menu
								initial='closed'
								animate='open'
								exit='closed'
								variants={menu}
								transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
								style={{ padding: 0, margin: 0 }}
							>
								{items.map((item, index) => {
									return (
										<motion.div
											key={index}
											initial='closed'
											animate='open'
											exit='closed'
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
							</motion.menu>
						</DropdownMenu>
					)}
				</DropdownWrapper>
			</AnimatePresence>
		</>
	);
};

export default ClickableDropdown;
