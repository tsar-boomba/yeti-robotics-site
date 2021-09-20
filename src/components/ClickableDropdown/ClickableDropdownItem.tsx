import { motion } from 'framer-motion';
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
	const childAnimation = {
		open: {
			height: 'auto',
		},
		closed: {
			height: 0,
		},
	};

	return (
		<>
			<TitleWrapper>
				<InteractiveWrapper>
					<Link to={item.href}>
						<Title onClick={(e) => e.stopPropagation()}>{item.title}</Title>
					</Link>
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
								<Link to={child.href}>
									<Child onClick={(e) => e.stopPropagation()}>
										{child.title}
									</Child>
								</Link>
							</motion.div>
						))}
					</ChildrenMenu>
				)}
			</TitleWrapper>
		</>
	);
};

export default ClickableDropdownItem;
