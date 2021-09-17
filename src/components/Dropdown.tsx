import { colors } from '../styles/colors';
import React, { useEffect, useRef, useState } from 'react';
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
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible && !headerShown) {
			setVisible(false);
		}
	}, [headerShown]);

	useEffect(() => {
		if (window.location.pathname === href) {
			dropdownRef.current.style.borderTop = `solid 3px ${colors.primaryHovered}`;
		}
	}, []);

	return (
		<React.Fragment>
			<div ref={dropdownRef}>
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
