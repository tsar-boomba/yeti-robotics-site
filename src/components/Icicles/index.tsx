import React, { useEffect, useState } from 'react';
import Icicle from './Icicle';
import { IcicleWrapper } from './IciclesStyles';

interface IciclesProps {
	parentRef: React.MutableRefObject<HTMLElement>;
	heightConstrains?: { min: number; max: number };
	widthConstrains?: { min: number; max: number };
}

const Icicles: React.FC<IciclesProps> = ({
	parentRef,
	heightConstrains = { min: 30, max: 60 },
	widthConstrains = { min: 10, max: 40 },
}) => {
	const getParentWidth = () => parentRef.current?.offsetWidth;
	const [icicles, setIcicles] = useState<{ height: number; width: number }[]>([]);

	const createIcicles = () => {
		const max = getParentWidth();
		let curr = 0;
		const icicleValues: { height: number; width: number }[] = [];
		while (true) {
			if (curr < max) {
				const height = Math.floor(
					Math.random() * (heightConstrains.max - heightConstrains.min + 1) +
						heightConstrains.min,
				);
				const width = Math.floor(
					Math.random() * (widthConstrains.max - widthConstrains.min + 1) +
						widthConstrains.min,
				);
				if (curr + height > max) {
					const shortenedwidth = max - curr;
					if (shortenedwidth < 20) break;
					icicleValues.push({ height: height, width: shortenedwidth });
					break;
				}
				icicleValues.push({ height: height, width: width });
				curr += width;
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
