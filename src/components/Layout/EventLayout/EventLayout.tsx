import React from 'react';
import Layout from '..';
import { EventWrapper } from './EventLayoutStyles';

interface EventLayoutProps {
	children?: React.ReactNode;
	style?: React.CSSProperties;
	title: string;
	description?: string;
	image?: string;
	article?: boolean;
}

const EventLayout: React.FC<EventLayoutProps> = ({
	children,
	style,
	title,
	description,
	image,
	article,
}) => {
	return (
		<Layout
			title={title}
			description={description}
			image={image}
			article={article}
			style={style}
		>
			<EventWrapper>{children}</EventWrapper>
		</Layout>
	);
};

export default EventLayout;
