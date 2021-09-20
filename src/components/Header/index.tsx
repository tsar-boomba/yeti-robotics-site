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
							title='About YETI'
							href='/about'
							items={[
								{ title: 'What is YETI?', href: '/about/who-we-are' },
								{ title: 'Join The Team', href: '/about/join' },
							]}
						/>
						<Dropdown
							title='Our Leadership'
							href='/leaders'
							items={[
								{ title: 'Student Leaders', href: '/leaders/student-leaders' },
								{ title: 'Technical Mentors', href: '/leaders/tech-mentors' },
								{ title: 'Business Mentors', href: '/leaders/business-mentors' },
							]}
						/>
					</>
				) : (
					<ClickableDropdown
						items={[
							{
								title: 'About YETI',
								href: '/about',
								children: [
									{ title: 'What is YETI?', href: '/about/who-we-are' },
									{ title: 'Join The Team', href: '/about/join' },
								],
							},
							{
								title: 'Our Leadership',
								href: '/leaders',
								children: [
									{ title: 'Student Leaders', href: '/leaders/student-leaders' },
									{ title: 'Technical Mentors', href: '/leaders/tech-mentors' },
									{
										title: 'Business Mentors',
										href: '/leaders/business-mentors',
									},
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
