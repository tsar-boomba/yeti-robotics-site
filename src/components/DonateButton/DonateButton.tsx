import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { DonateButtonStyle } from './DonateButtonStyles';
import Icicles from '../Icicles';
import { useDimensions } from '../../hooks/useDimensions';

const DonateButton = () => {
	const buttonRef = useRef<HTMLAnchorElement>(null);
	const { windowWidth } = useDimensions();

	return (
		<>
			{windowWidth > 1500 ? (
				<motion.a
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
					ref={buttonRef}
					href='https://www.paypal.com'
					style={DonateButtonStyle}
				>
					Donate
					<Icicles
						parentRef={buttonRef}
						heightConstrains={{ max: 50, min: 35 }}
						widthConstrains={{ max: 10, min: 5 }}
						top='85%'
					/>
				</motion.a>
			) : null}
		</>
	);
};

export default DonateButton;
