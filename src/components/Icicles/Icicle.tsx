import React from 'react';
import { IcicleStyle } from './IciclesStyles';

interface IcicleProps {
	values: { height: number; sides: number };
}

const Icicle: React.FC<IcicleProps> = ({ values }) => {
	return (
		<>
			<IcicleStyle
				style={{
					borderTopWidth: values.height,
					borderLeftWidth: values.sides,
					borderRightWidth: values.sides,
				}}
			/>
		</>
	);
};

export default Icicle;
