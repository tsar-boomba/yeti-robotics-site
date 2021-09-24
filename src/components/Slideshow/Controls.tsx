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
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.1 }}
				onClick={onClick}
				style={{
					...ControlsStyles,
					left: type === 'left' ? '20px' : '',
					right: type === 'right' ? '20px' : '',
				}}
			>
				{type === 'left' ? '<' : '>'}
			</motion.div>
		</>
	);
};

export default Controls;
