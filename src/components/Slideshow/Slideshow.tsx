import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ImageWrapper, IndicatorsWrapper, SlideshowWrapper } from './SlideshowStyles';
import Controls from './Controls';
import PositionIndicator from './PositionIndicator';
import { GatsbyImage } from 'gatsby-plugin-image';

interface SlideshowProps {
	images: any[];
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	// allows resetting the slide timer from anywhere
	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	// allows for indexing through images, without worrying about going out of bounds
	const wrapImageIndex = (amount = 1) => {
		if (imageIndex + amount > images.length - 1) {
			setImageIndex(0);
		} else if (imageIndex + amount < 0) {
			setImageIndex(images.length - 1);
		} else {
			setImageIndex((prev) => prev + amount);
		}
	};

	// function that indexes by 1, sending image to the left
	// is given as callback to the timeout
	const naturalSlide = useCallback(() => {
		setDirection(-1);
		wrapImageIndex();
	}, [imageIndex]);

	const onControlsClick = (direction: 'left' | 'right') => {
		if (direction === 'left') {
			resetTimeout();
			setDirection(1);
			wrapImageIndex(-1);
		} else {
			resetTimeout();
			setDirection(-1);
			wrapImageIndex();
		}
	};

	useEffect(() => {
		resetTimeout();
		// allows timeout to be reset, no matter what instance of timeout it is
		timeoutRef.current = setTimeout(naturalSlide, 5000);
		return () => resetTimeout();
	}, [imageIndex]);

	// animation variants
	const variants: Variants = {
		enter: (direction: number) => {
			return {
				x: direction > 0 ? 1000 : -1000,
				opacity: 0,
			};
		},
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => {
			return {
				zIndex: 0,
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
			};
		},
	};

	return (
		<>
			<SlideshowWrapper>
				<AnimatePresence initial={false} exitBeforeEnter={true} custom={direction}>
					<motion.div
						key={imageIndex}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
						}}
						custom={direction}
						variants={variants}
					>
						<GatsbyImage
							image={images[imageIndex].childImageSharp.gatsbyImageData}
							objectFit='scale-down'
							style={ImageWrapper}
							alt={`slideshow image ${imageIndex + 1}`}
						/>
					</motion.div>
				</AnimatePresence>
				<Controls type='left' onClick={() => onControlsClick('left')} />
				<IndicatorsWrapper>
					{images.map((image, index) => (
						<PositionIndicator
							key={index}
							id={index}
							state={[imageIndex, setImageIndex]}
							directionState={[direction, setDirection]}
							resetTimeout={resetTimeout}
						/>
					))}
				</IndicatorsWrapper>
				<Controls type='right' onClick={() => onControlsClick('right')} />
			</SlideshowWrapper>
		</>
	);
};

Slideshow.defaultProps = {
	images: [],
};

export default Slideshow;
