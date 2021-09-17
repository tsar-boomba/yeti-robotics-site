import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { DropdownButton, Menu, MenuItemWrapper } from './styles/DropdownStyles';

interface DropdownProps {
	title: string;
	href: string;
	items: {
		title: string;
		href: string;
	}[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, href, items }) => {
	const headerShown = useAppSelector((state) => state.header.shown);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible && !headerShown) {
			setVisible(false);
		}
	}, [headerShown]);

	return (
		<>
			<DropdownButton
				href={href}
				onMouseOver={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				{title}
				{visible && (
					<Menu>
						{items.map((item, index) => {
							return (
								<MenuItemWrapper
									href={item.href}
									onClick={(e) => e.stopPropagation()}
									onMouseEnter={() => setVisible(true)}
									onMouseLeave={() => setVisible(false)}
									key={index}
								>
									{item.title}
								</MenuItemWrapper>
							);
						})}
					</Menu>
				)}
			</DropdownButton>
		</>
	);
};

export default Dropdown;
