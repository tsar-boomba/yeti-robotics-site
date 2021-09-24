import { useDimensions } from '../../hooks/useDimensions';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, SlideshowWrapper } from './SlideshowStyles';
import Controls from './Controls';

interface SlideshowProps {
	images: string[];
	style?: React.CSSProperties;
}

const Slideshow: React.FC<SlideshowProps> = ({ images }) => {
	const [imageIndex, setImageIndex] = useState(0);
	const [direction, setDirection] = useState(0);
	const timeoutRef = useRef(null);

	const resetTimeout = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	};

	const wrapImageIndex = (amount = 1) => {
		if (imageIndex + amount > images.length - 1) {
			setImageIndex(0);
		} else if (imageIndex + amount < 0) {
			setImageIndex(images.length - 1);
		} else {
			setImageIndex((prev) => prev + amount);
		}
	};

	const naturalSlide = useCallback(() => {
		setDirection(1);
		wrapImageIndex();
	}, [imageIndex]);

	const onControlsClick = (direction: string) => {
		if (direction === 'left') {
			resetTimeout();
			setDirection(1);
			wrapImageIndex();
		} else {
			resetTimeout();
			setDirection(-1);
			wrapImageIndex(-1);
		}
	};

	useEffect(() => {
		resetTimeout();
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
				<AnimatePresence initial={false} custom={direction}>
					<motion.img
						key={imageIndex}
						src={images[imageIndex]}
						alt={images[imageIndex]}
						initial='enter'
						animate='center'
						exit='exit'
						transition={{
							x: { type: 'spring', stiffness: 300, damping: 30 },
						}}
						custom={direction}
						variants={variants}
						style={Image}
					></motion.img>
				</AnimatePresence>
				<Controls type='left' onClick={() => onControlsClick('left')} />
				<Controls type='right' onClick={() => onControlsClick('right')} />
			</SlideshowWrapper>
		</>
	);
};

Slideshow.defaultProps = {
	images: [],
	style: null,
};

export default Slideshow;
