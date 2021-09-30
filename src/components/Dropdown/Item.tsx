import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { MenuItemWrapper } from './DropdownStyles';
import { colors } from '../../styles/colors';

interface DropdownItemProps {
	href: string;
	title: string;
	parentState: boolean;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, title, parentState }) => {
	const parentVisible = parentState;
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
			<Link to={href} style={{ position: 'relative' }}>
				<MenuItemWrapper ref={childButtonRef}>{title}</MenuItemWrapper>
			</Link>
		</>
	);
};

export default DropdownItem;
