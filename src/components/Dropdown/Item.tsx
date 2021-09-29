import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { MenuItemWrapper } from './DropdownStyles';
import { colors } from '../../styles/colors';

interface DropdownItemProps {
	href: string;
	title: string;
	parentState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, title, parentState }) => {
	const [parentVisible, setParentVisible] = parentState;
	const childButtonRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (parentVisible) {
			if (location.pathname.includes(href)) {
				childButtonRef.current.style.color = colors.primary;
				childButtonRef.current.style.backgroundColor = colors.secondary;
				childButtonRef.current;
			}
		}
	}, [parentVisible, childButtonRef, href]);

	return (
		<>
			<Link to={href}>
				<MenuItemWrapper
					ref={childButtonRef}
					onMouseEnter={() => setParentVisible(true)}
					onMouseLeave={() => setParentVisible(false)}
				>
					{title}
				</MenuItemWrapper>
			</Link>
		</>
	);
};

export default DropdownItem;
