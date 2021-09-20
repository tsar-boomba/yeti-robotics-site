import React, { useCallback, useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showHeader } from '../../store/slices/headerSlice';
import { HeaderWrapper, LogoWrapper, Logo } from './HeaderStyles';
import Dropdown from '../Dropdown';
import ClickableDropdown from '../ClickableDropdown';
import { useDimensions } from '../../hooks/useDimensions';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import Icicles from '../Icicles';

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const logoIciclesRef = useRef<HTMLAnchorElement>(null);
	const clickableDropdownStatus = useAppSelector((state) => state.dropdown.clickable.shown);
	const { windowWidth } = useDimensions();
	const showHeaderCB = useCallback(() => {
		if (!clickableDropdownStatus) {
			dispatch(showHeader());
			return true;
		}
		return false;
	}, [clickableDropdownStatus, dispatch]);
	const hideHeaderCB = useCallback(() => {
		if (!clickableDropdownStatus) {
			return true;
		}
		return false;
	}, [clickableDropdownStatus]);
	const { headerRef } = useHidingHeader(showHeaderCB, hideHeaderCB);

	useEffect(() => {
		if (clickableDropdownStatus) {
			headerRef.current.style.position = 'static';
			headerRef.current.style.boxShadow = '0px 0px 0px 0px';
		} else {
			headerRef.current.style.position = 'fixed';
			headerRef.current.style.boxShadow = '';
		}
	}, [clickableDropdownStatus, headerRef]);

	return (
		<>
			<HeaderWrapper ref={headerRef}>
				<LogoWrapper ref={logoIciclesRef} href='/'>
					{windowWidth >= 440 ? <Logo src='/images/hclogo.png' alt='hc logo' /> : 'HC'}
					{/* <Icicles parentRef={logoIciclesRef} /> */}
				</LogoWrapper>
				{/* Changes header based on window's width */}
				{windowWidth >= 1400 ? (
					<>
						<Dropdown
							title='Amenities'
							href='/'
							items={[
								{ title: 'Clubhouse', href: '/amenities/clubhouse' },
								{ title: 'Fitness Center', href: '/amenities/fitness-center' },
							]}
						/>
						<Dropdown
							title='Community Info'
							href='/community-info'
							items={[
								{ title: 'ID Cards', href: '/community-info/id-cards' },
								{ title: 'Adult Care', href: '/community-info/adult-care' },
							]}
						/>
					</>
				) : (
					<ClickableDropdown
						items={[
							{
								title: 'Amenities',
								href: '/amenities',
								children: [
									{ title: 'Clubhouse', href: '/amenities/clubhouse' },
									{ title: 'Fitness Center', href: '/amenities/fitness-center' },
								],
							},
							{
								title: 'Community Info',
								href: '/community-info',
								children: [
									{ title: 'ID Cards', href: '/community-info/id-cards' },
									{ title: 'Adult Care', href: '/community-info/adult-care' },
								],
							},
						]}
					/>
				)}
				<Icicles parentRef={headerRef} />
				<Icicles parentRef={headerRef} />
			</HeaderWrapper>
		</>
	);
};

export default Header;
