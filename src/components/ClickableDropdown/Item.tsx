import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {
	TitleWrapper,
	Title,
	ExpandButton,
	InteractiveWrapper,
	ChildrenMenu,
	Child,
} from './ClickableDropdownStyles';

interface ClickableDropDownItemProps {
	item: {
		title: string;
		href: string;
		children: {
			title: string;
			href: string;
		}[];
	};
	currId: [number, React.Dispatch<React.SetStateAction<number>>];
	id: number;
}

const ClickableDropdownItem: React.FC<ClickableDropDownItemProps> = ({ item, currId, id }) => {
	const [thisOpen, setThisOpen] = useState(false);
	const [opened, setOpened] = currId;

	useEffect(() => {
		if (opened === id) setThisOpen(true);
		if (opened !== id) setThisOpen(false);
	}, [id, opened]);

	const handleOpen = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.stopPropagation();
		if (!thisOpen) {
			setOpened(id);
			setThisOpen(true);
		} else if (thisOpen) {
			setThisOpen(false);
			setOpened(-1);
		}
	};

	//animation variants
	const childMenu: Variants = {
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

	const childTitle: Variants = {
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
			<TitleWrapper onClick={(e) => e.stopPropagation()}>
				<InteractiveWrapper>
					<Link to={item.href} style={{ flexGrow: 1 }}>
						<Title>{item.title}</Title>
					</Link>
					{item.children.length ? (
						<ExpandButton onClick={handleOpen}>{thisOpen ? '-' : '+'}</ExpandButton>
					) : (
						<div style={{ height: 47 }} />
					)}
				</InteractiveWrapper>
				<AnimatePresence>
					{thisOpen && (
						<ChildrenMenu>
							<motion.div
								initial='closed'
								animate='open'
								exit='closed'
								variants={childMenu}
							>
								{item.children.map((child, index) => (
									<motion.div key={index} variants={childTitle}>
										<Link to={child.href}>
											<Child onClick={(e) => e.stopPropagation()}>
												{child.title}
											</Child>
										</Link>
									</motion.div>
								))}
							</motion.div>
						</ChildrenMenu>
					)}
				</AnimatePresence>
			</TitleWrapper>
		</>
	);
};

export default ClickableDropdownItem;