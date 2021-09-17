import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
	TitleWrapper,
	Title,
	ExpandButton,
	InteractiveWrapper,
	ChildrenMenu,
	Child,
} from './styles/ClickableDropdownStyles';

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
	const childAnimation = {
		open: {
			opacity: 1,
			top: '100%',
			transition: {
				ease: [0.04, 0.62, 0.23, 0.98],
			},
		},
		closed: {
			opacity: 0,
			top: 0,
		},
	};

	return (
		<>
			<TitleWrapper>
				<InteractiveWrapper>
					<Title href={item.href} onClick={(e) => e.stopPropagation()}>
						{item.title}
					</Title>
					<ExpandButton onClick={handleOpen}>{thisOpen ? '-' : '+'}</ExpandButton>
				</InteractiveWrapper>
				{thisOpen && (
					<ChildrenMenu>
						{item.children.map((child, index) => (
							<motion.div
								key={index}
								initial='closed'
								animate='open'
								exit='closed'
								variants={childAnimation}
								style={{ padding: 0, margin: 0 }}
							>
								<Child href={child.href} onClick={(e) => e.stopPropagation()}>
									{child.title}
								</Child>
							</motion.div>
						))}
					</ChildrenMenu>
				)}
			</TitleWrapper>
		</>
	);
};

export default ClickableDropdownItem;
