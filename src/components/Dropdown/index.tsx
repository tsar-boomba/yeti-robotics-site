import { colors } from '../../styles/colors';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { BorderTop, DropdownButton, DropdownWrapper, Menu } from './DropdownStyles';
import { Link } from 'gatsby';
import DropdownItem from './DropdownItem';
import Icicles from '../Icicles';

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
	const menuIciclesRef = useRef<HTMLDivElement>(null);
	const parentButtonRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (visible && !headerShown) {
			setVisible(false);
		}
	}, [headerShown]);

	//This adds the border over a dropdown when it's pages are active
	useLayoutEffect(() => {
		if (location.pathname === '/') {
			parentButtonRef.current.style.height = '0';
			return;
		}
		const pathname = location.pathname.substring(1);
		const formattedPathname = '/' + pathname.slice(0, pathname.lastIndexOf('/'));
		if (href.includes(formattedPathname)) {
			parentButtonRef.current.style.height = '5px';
		} else {
			parentButtonRef.current.style.height = '0';
		}
	}, [href, items]);

	return (
		<>
			<DropdownWrapper
				onMouseOver={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
			>
				<Link to={href}>
					<BorderTop
						ref={parentButtonRef}
						style={{ height: 0, backgroundColor: colors.secondary }}
					/>

					<DropdownButton>{title}</DropdownButton>
				</Link>
				{visible && (
					<Menu ref={menuIciclesRef}>
						<BorderTop
							onMouseEnter={() => setVisible(true)}
							onMouseLeave={() => setVisible(false)}
						/>
						{items.map((item, index) => {
							return (
								<DropdownItem
									href={item.href}
									title={item.title}
									parentState={[visible, setVisible]}
									key={index}
								/>
							);
						})}
						<Icicles parentRef={menuIciclesRef} />
					</Menu>
				)}
			</DropdownWrapper>
		</>
	);
};

export default Dropdown;
