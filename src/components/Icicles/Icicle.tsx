import React from 'react';
import { IcicleStyle } from './IciclesStyles';

interface IcicleProps {
	values: { height: number; width: number };
}

const Icicle: React.FC<IcicleProps> = ({ values }) => {
	return (
		<>
			<IcicleStyle
				style={{
					width: values.width,
					height: values.height,
				}}
			/>
		</>
	);
};

export default Icicle;
