import { motion } from 'framer-motion';
import React from 'react';
import { ControlsStyles } from './SlideshowStyles';

interface ControlsProps {
	type: 'left' | 'right';
	onClick: React.MouseEventHandler;
}

const Controls: React.FC<ControlsProps> = ({ type, onClick }) => {
	return (
		<>
			<motion.div
				whileTap={{ scale: 0.95 }}
				whileHover={{ scale: 1.05 }}
				onClick={onClick}
				style={{ ...ControlsStyles, left: type === 'left' ? '5%' : '95%' }}
			>
				{type === 'left' ? '<' : '>'}
			</motion.div>
		</>
	);
};

export default Controls;
