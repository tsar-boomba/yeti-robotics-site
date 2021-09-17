import { colors } from '../../styles/colors';
import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { BorderTop, DropdownButton, Menu, MenuItemWrapper } from './DropdownStyles';
import { Link } from 'gatsby';

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
			<div>
				<Link
					to={href}
					activeStyle={{ BorderTop: `5px solid ${colors.primaryHovered}` }}
					onMouseOver={() => setVisible(true)}
					onMouseLeave={() => setVisible(false)}
				>
					<DropdownButton>{title}</DropdownButton>
				</Link>
				{visible && (
					<Menu>
						<BorderTop
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
						{items.map((item, index) => {
							return (
								<Link
									to={item.href}
									onMouseEnter={() => setVisible(true)}
									onMouseLeave={() => setVisible(false)}
									key={index}
								>
									<MenuItemWrapper>{item.title}</MenuItemWrapper>
								</Link>
							);
						})}
					</Menu>
				)}
			</div>
		</>
	);
};

export default Dropdown;
