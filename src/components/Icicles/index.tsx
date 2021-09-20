import React, { useEffect, useLayoutEffect, useState } from 'react';
import Icicle from './Icicle';
import { IcicleWrapper } from './IciclesStyles';

interface IciclesProps {
	parentRef: React.MutableRefObject<HTMLElement>;
	heightConstrains?: { min: number; max: number };
	sideConstrains?: { min: number; max: number };
}

const Icicles: React.FC<IciclesProps> = ({ parentRef, heightConstrains, sideConstrains }) => {
	const getParentWidth = () => parentRef.current?.offsetWidth;
	const [icicles, setIcicles] = useState<{ height: number; sides: number }[]>([]);

	//checking for props h = height, s = side
	let h: boolean, s: boolean;
	if (heightConstrains) {
		h = true;
	} else {
		h = false;
	}

	if (sideConstrains) {
		s = true;
	} else {
		s = false;
	}

	const createIcicles = () => {
		const max = getParentWidth();
		let curr = 0;
		const icicleValues = [];
		while (true) {
			if (curr <= max) {
				const height = Math.floor(
					Math.random() *
						((h ? heightConstrains?.max : 60) - (h ? heightConstrains?.min : 20) + 1) +
						(h ? heightConstrains?.min : 20),
				);
				const sides = Math.floor(
					Math.random() *
						((s ? sideConstrains?.max : 20) - (s ? sideConstrains?.min : 5) + 1) +
						(s ? sideConstrains?.min : 5),
				);
				if (curr + height >= max) {
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
