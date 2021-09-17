import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { hideHeader, showHeader } from '../store/slices/headerSlice';
import { HeaderWrapper, LogoWrapper, Logo } from './styles/HeaderStyles';
import Dropdown from './Dropdown';
import ClickableDropdown from './ClickableDropdown';
import { useDimensions } from '../hooks/useDimensions';
import { useHidingHeader } from '../hooks/useHidingHeader';

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const { windowWidth } = useDimensions();
	const { headerRef } = useHidingHeader(
		() => dispatch(showHeader()),
		() => dispatch(hideHeader())
	);

	return (
		<>
			<HeaderWrapper ref={headerRef}>
				<LogoWrapper href='/'>
					{windowWidth >= 440 ? <Logo src='/images/hclogo.png' alt='hc logo' /> : 'HC'}
				</LogoWrapper>
				{/* Changes header based on window's width */}
				{windowWidth >= 1400 ? (
					<>
						<Dropdown
							title='Amenities'
							href='/amenities'
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
			</HeaderWrapper>
		</>
	);
};

export default Header;
