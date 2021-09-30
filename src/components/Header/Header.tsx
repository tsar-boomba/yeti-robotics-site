import React, { useCallback, useEffect } from 'react';
import { HeaderWrapper, LogoWrapper } from './HeaderStyles';
import Dropdown from '../Dropdown';
import ClickableDropdown from '../ClickableDropdown';
import { useDimensions } from '../../hooks/useDimensions';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import Icicles from '../Icicles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import useStore from '../../store';

const Header: React.FC = () => {
	const showHeader = useStore((state) => state.showHeader);
	const clickableDropdownStatus = useStore((state) => state.clickableDropdownShown);
	const windowDimendions = useStore((state) => state.windowDimensions);
	const setWindowDimensions = useStore((state) => state.setWindowDimensions);
	const { windowWidth, windowHeight } = useDimensions(windowDimendions);
	const showHeaderCB = useCallback(() => {
		if (!clickableDropdownStatus) {
			showHeader();
			return true;
		}
		return false;
	}, [clickableDropdownStatus]);
	const hideHeaderCB = useCallback(() => {
		if (!clickableDropdownStatus) {
			return true;
		}
		return false;
	}, [clickableDropdownStatus]);
	const { headerRef } = useHidingHeader(showHeaderCB, hideHeaderCB);

	useEffect(() => {
		if (clickableDropdownStatus) {
			headerRef.current.style.position = 'relative';
			headerRef.current.style.boxShadow = '0px 0px 0px 0px';
		} else {
			headerRef.current.style.position = 'fixed';
			headerRef.current.style.boxShadow = '';
		}
	}, [clickableDropdownStatus, headerRef]);

	//keeping window dimensions between pages, stops flashing of header
	useEffect(() => {
		setWindowDimensions({ windowWidth, windowHeight });
	}, [windowWidth, windowHeight]);

	return (
		<>
			<HeaderWrapper ref={headerRef}>
				<LogoWrapper>
					<Link to='/'>
						<StaticImage
							src='../../images/yeti-logo-with-text2.png'
							height={82}
							width={150}
							loading='eager'
							placeholder='blurred'
							alt='YETI Logo'
						/>
					</Link>
				</LogoWrapper>

				{/* Changes header based on window's width */}
				{windowWidth >= 1250 ? (
					<>
						<Dropdown title='About' href='/about' items={[]} />
						<Dropdown title='Join Us' href='/join' items={[]} />
						<Dropdown title='Outreach' href='/outreach' items={[]} />
						<Dropdown
							title='Robots'
							href='/robots'
							items={[
								{ title: 'Polaris 2019', href: '/robots/2019' },
								{ title: 'Avalanche 2018', href: '/robots/2018' },
								{ title: 'Permafrost 2017', href: '/robots/2017' },
								{ title: 'Black Ice 2016', href: '/robots/2016' },
								{ title: 'Frostbyte 2015', href: '/robots/2015' },
								{ title: 'Fluffy 2014', href: '/robots/2014' },
								{ title: 'Momo 2013', href: '/robots/2013' },
								{ title: 'Chompa 2012', href: '/robots/2012' },
								{ title: 'Wampa 2011', href: '/robots/2011' },
							]}
						/>
						<Dropdown
							title='Mentors'
							href='/mentors'
							items={[
								{ title: 'Technical Mentors', href: '/mentors/technical-mentors' },
								{ title: 'Business Mentors', href: '/mentors/business-mentors' },
							]}
						/>
						<Dropdown title='Sponsors' href='/sponsors' items={[]} />
						<Dropdown title='Contact' href='/contact' items={[]} />
					</>
				) : (
					<>
						<ClickableDropdown
							items={[
								{
									title: 'About',
									href: '/about',
									children: [],
								},
								{
									title: 'Outreach',
									href: '/outreach',
									children: [],
								},
								{
									title: 'Robots',
									href: '/robots',
									children: [
										{ title: 'Polaris 2019', href: '/robots/2019' },
										{ title: 'Avalanche 2018', href: '/robots/2018' },
										{ title: 'Permafrost 2017', href: '/robots/2017' },
										{ title: 'Black Ice 2016', href: '/robots/2016' },
										{ title: 'Frostbyte 2015', href: '/robots/2015' },
										{ title: 'Fluffy 2014', href: '/robots/2014' },
										{ title: 'Momo 2013', href: '/robots/2013' },
										{ title: 'Chompa 2012', href: '/robots/2012' },
										{ title: 'Wampa 2011', href: '/robots/2011' },
									],
								},
								{
									title: 'Mentors',
									href: '/mentors',
									children: [
										{
											title: 'Technical Mentors',
											href: '/mentors/tech-mentors',
										},
										{
											title: 'Business Mentors',
											href: '/mentors/business-mentors',
										},
									],
								},
								{
									title: 'Sponsors',
									href: '/sponsors',
									children: [],
								},
								{
									title: 'Contact',
									href: '/contact',
									children: [],
								},
							]}
						/>
					</>
				)}
				<Icicles
					parentRef={headerRef}
					widthConstrains={{ max: 20, min: 15 }}
					heightConstrains={{ max: 100, min: 70 }}
				/>
				<Icicles
					parentRef={headerRef}
					widthConstrains={{ max: 20, min: 15 }}
					heightConstrains={{ max: 100, min: 70 }}
				/>
			</HeaderWrapper>
		</>
	);
};

export default Header;
