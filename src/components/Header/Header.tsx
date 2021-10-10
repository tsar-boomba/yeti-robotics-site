import React, { useCallback, useContext, useEffect } from 'react';
import { HeaderWrapper, LogoWrapper } from './HeaderStyles';
import Dropdown from '../Dropdown';
import ClickableDropdown from '../ClickableDropdown';
import { useHidingHeader } from '../../hooks/useHidingHeader';
import Icicles from '../Icicles';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { HeaderContext } from './Context';
import { GlobalContext } from '@/GlobalContext';

const Header: React.FC = () => {
	const { showHeader, clickableDropdownShown } = useContext(HeaderContext);
	const { windowDimensions } = useContext(GlobalContext);
	const showHeaderCB = useCallback(() => {
		if (!clickableDropdownShown) {
			showHeader();
			return true;
		}
		return false;
	}, [clickableDropdownShown]);
	const hideHeaderCB = useCallback(() => {
		if (!clickableDropdownShown) {
			return true;
		}
		return false;
	}, [clickableDropdownShown]);
	const { headerRef } = useHidingHeader(showHeaderCB, hideHeaderCB);

	useEffect(() => {
		if (headerRef.current === null) return;
		if (clickableDropdownShown) {
			headerRef.current.style.position = 'relative';
			headerRef.current.style.boxShadow = '0px 0px 0px 0px';
		} else {
			headerRef.current.style.position = 'fixed';
			headerRef.current.style.boxShadow = '';
		}
	}, [clickableDropdownShown, headerRef]);

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
				{windowDimensions.width >= 1250 ? (
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
				) : windowDimensions.width > 0 ? (
					<>
						<ClickableDropdown
							items={[
								{
									title: 'About',
									href: '/about',
									children: [],
								},
								{
									title: 'Join Us',
									href: '/join',
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
								{
									title: 'Donate',
									href: 'https://paypal.com',
									children: [],
								},
							]}
						/>
					</>
				) : null}
				<Icicles
					parentRef={headerRef}
					widthConstrains={{ max: 20, min: 15 }}
					heightConstrains={{ max: 100, min: 70 }}
					top='99%'
				/>
				<Icicles
					parentRef={headerRef}
					widthConstrains={{ max: 20, min: 15 }}
					heightConstrains={{ max: 100, min: 70 }}
					top='99%'
				/>
			</HeaderWrapper>
		</>
	);
};

export default Header;
