import React from 'react';
import { Card, CardTitle, CardText } from './BasceCardStyles';

interface BaseCardProps {
	title: string;
	text: string;
	href?: string;
	style?: React.CSSProperties;
}

const BaseCard: React.FC<BaseCardProps> = ({ title, text, href, style }) => {
	return (
		<Card href={href} style={style}>
			<CardTitle>{title} &rarr;</CardTitle>
			<CardText>{text}</CardText>
		</Card>
	);
};

export default BaseCard;
