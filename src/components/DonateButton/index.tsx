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
			{windowWidth > 800 ? (
				<motion.a
					whileTap={{ scale: 0.9 }}
					whileHover={{ scale: 1.1 }}
					ref={buttonRef}
					style={DonateButtonStyle}
				>
					Donate
					<Icicles
						parentRef={buttonRef}
						heightConstrains={{ max: 70, min: 35 }}
						widthConstrains={{ max: 10, min: 5 }}
						top='80%'
					/>
				</motion.a>
			) : null}
		</>
	);
};

export default DonateButton;
