import React, { useEffect, useState } from 'react';
import Icicle from './Icicle';
import { IcicleWrapper } from './IciclesStyles';

interface IciclesProps {
	parentRef: React.MutableRefObject<HTMLElement>;
	heightConstrains?: { min: number; max: number };
	sideConstrains?: { min: number; max: number };
}

const Icicles: React.FC<IciclesProps> = ({
	parentRef,
	heightConstrains = { min: 30, max: 60 },
	sideConstrains = { min: 10, max: 40 },
}) => {
	const getParentWidth = () => parentRef.current?.offsetWidth;
	const [icicles, setIcicles] = useState<{ height: number; sides: number }[]>([]);

	const createIcicles = () => {
		const max = getParentWidth();
		let curr = 0;
		const icicleValues: { height: number; sides: number }[] = [];
		while (true) {
			if (curr < max) {
				const height = Math.floor(
					Math.random() * (heightConstrains.max - heightConstrains.min + 1) +
						heightConstrains.min,
				);
				const sides = Math.floor(
					Math.random() * (sideConstrains.max - sideConstrains.min + 1) +
						sideConstrains.min,
				);
				if (curr + height > max) {
					const shortenedHeight = max - curr;
					if (shortenedHeight < 20) break;
					icicleValues.push({ height: shortenedHeight, sides: sides });
					break;
				}
				icicleValues.push({ height: height, sides: sides });
				curr += height;
			} else {
				break;
			}
		}
		setIcicles(icicleValues);
	};

	useEffect(() => {
		createIcicles();
		window.addEventListener('resize', createIcicles);
		return () => window.removeEventListener('resize', createIcicles);
	}, [parentRef]);

	return (
		<IcicleWrapper>
			{icicles.map((icicleValues, index) => {
				return <Icicle values={icicleValues} key={index} />;
			})}
		</IcicleWrapper>
	);
};

export default Icicles;
