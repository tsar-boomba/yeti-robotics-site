import React from 'react';
import { IcicleStyle } from './IciclesStyles';

interface IcicleProps {
	values: { height: number; sides: number };
}

const Icicle: React.FC<IcicleProps> = ({ values }) => {
	const generateClip = (max: number, min: number) =>
		Math.floor(Math.random() * (max - min + 1) + min);

	return (
		<>
			<IcicleStyle
				style={{
					width: values.sides,
					height: values.height,
					clipPath: `polygon(${generateClip(20, 0)} 0, 50% 100%, ${generateClip(
						100,
						80,
					)}% 0)`,
				}}
			/>
		</>
	);
};

export default Icicle;
