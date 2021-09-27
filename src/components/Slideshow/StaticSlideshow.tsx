import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image, IndicatorsWrapper, SlideshowWrapper } from './SlideshowStyles';
import Controls from './Controls';
import PositionIndicator from './PositionIndicator';

// importing images
import picture1 from '@/images/home/2019-team-pic.jpg';
import picture2 from '@/images/home/2021-scrap-individual-pic.jpg';
import picture3 from '@/images/home/2021-scrap-group-pic.jpg';
import paavan from '@/images/home/PAAVAN-hearts-hearts.jpg';
import { StaticImage } from 'gatsby-plugin-image';

const images = [picture1, picture2, picture3, paavan];

const StaticSlideshow: React.FC = () => {
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
				<AnimatePresence initial={false} exitBeforeEnter={true} custom={direction}>
					{images.map((image, index) => (
						<motion.div
							key={index}
							initial='enter'
							animate='center'
							exit='exit'
							transition={{
								x: { type: 'spring', stiffness: 300, damping: 30 },
							}}
							custom={direction}
							variants={variants}
							style={Image}
						>
							<StaticImage
								src={image}
								alt={image}
								style={{ objectFit: 'scale-down' }}
							/>
						</motion.div>
					))}
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

StaticSlideshow.defaultProps = {
	images: [],
	style: null,
};

export default StaticSlideshow;
