import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { DonateButtonStyle } from './DonateButtonStyles';
import Icicles from '../Icicles';

const DonateButton = () => {
	const buttonRef = useRef<HTMLAnchorElement>(null);

	return (
		<motion.a
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.1 }}
			ref={buttonRef}
			style={DonateButtonStyle}
		>
			Donate
			<Icicles
				parentRef={buttonRef}
				heightConstrains={{ max: 60, min: 15 }}
				widthConstrains={{ max: 10, min: 5 }}
				top='90%'
			/>
		</motion.a>
	);
};

export default DonateButton;
