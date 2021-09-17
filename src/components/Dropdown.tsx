import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { BorderTop, DropdownButton, Menu, MenuItemWrapper } from './styles/DropdownStyles';

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
		<React.Fragment>
			<div>
				<DropdownButton
					href={href}
					onMouseOver={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
				>
					{title}
				</DropdownButton>
				{visible && (
					<Menu>
						<BorderTop
							onClick={(e) => e.stopPropagation()}
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
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
			</div>
		</React.Fragment>
	);
};

export default Dropdown;
