import React from 'react';
import { PositionIndicatorStyles } from './SlideshowStyles';

interface PositionIndicatorProps {
	id: number;
	state: [number, React.Dispatch<React.SetStateAction<number>>];
	directionState: [number, React.Dispatch<React.SetStateAction<number>>];
	resetTimeout: () => void;
}

const PositionIndicator: React.FC<PositionIndicatorProps> = ({
	id,
	state,
	directionState,
	resetTimeout,
}) => {
	const [imageIndex, setImageIndex] = state;
	const [, setDirection] = directionState;

	return (
		<>
			<PositionIndicatorStyles
				onClick={() => {
					resetTimeout();
					setDirection(id < imageIndex ? -1 : 1);
					setImageIndex(id);
				}}
				style={{
					backgroundColor: imageIndex === id ? 'transparent' : '',
					borderWidth: imageIndex === id ? '5px' : '',
				}}
			/>
		</>
	);
};

export default PositionIndicator;
