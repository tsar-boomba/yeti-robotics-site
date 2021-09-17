import React, { useEffect, useRef, useState } from 'react';
import { DropdownWrapper, DropdownMenu } from './styles/ClickableDropdownStyles';
import ClickableDropdownItem from './ClickableDropdownItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickedOutside } from '../hooks/useClickedOutide';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppSelector } from '../store/hooks';

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
	const headerShown = useAppSelector((state) => state.header.shown);
	const [visible, setVisible] = useState(false);
	const [visibleId, setVisibleId] = useState(-1);
	const [prevVisible, setPrevVisible] = useState(false);
	const menuRef = useClickedOutside<HTMLMenuElement>(undefined, () => {
		setVisible(false);
	});

	const menuClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (visible) {
			setVisible(false);
		} else if (!visible) {
			setVisible(true);
		}
	};

	//hides menu when header disappears, but retains previous state
	useEffect(() => {
		if (headerShown) {
			setVisible(prevVisible);
		}
		if (!headerShown) {
			if (visible) {
				setVisible(false);
				setPrevVisible(true);
			} else {
				setPrevVisible(false);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headerShown]);
	// Reccomended deps break this logic

	//animation variants
	const menu = {
		open: {
			opacity: 1,
			height: 'auto',
			transition: {
				duration: 0.4,
				ease: [0.04, 0.62, 0.23, 0.98],
				staggerChildren: 0.2,
			},
		},
		closed: { opacity: 0, height: 0 },
	};

	const title = {
		open: { opacity: 1, height: 'auto' },
		closed: { opacity: 0, height: 0 },
	};
	return (
		<>
			<DropdownWrapper ref={menuRef} onClick={menuClick}>
				<FontAwesomeIcon icon='bars' />
				<AnimatePresence>
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
				</AnimatePresence>
			</DropdownWrapper>
		</>
	);
};

export default ClickableDropdown;
