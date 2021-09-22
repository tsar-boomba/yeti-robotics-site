import React, { useEffect, useState } from 'react';
import { MonthWrapper } from './EventsDisplayStyles';

interface MonthProps {
	month: number;
	events: {
		frontmatter: {
			title: string;
			date: string;
			time: string;
			location: string;
		};
		id: string;
		slug: string;
	}[];
}

const Month: React.FC<MonthProps> = ({ month, events }) => {
	const [monthEvents, setMonthEvents] = useState(
		events.filter(
			(event) =>
				new Date(event.frontmatter.date).toLocaleString(undefined, { month: 'long' }) ===
				new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' }),
		),
	);

	useEffect(
		() =>
			setMonthEvents(
				events.filter(
					(event) =>
						new Date(event.frontmatter.date).toLocaleString(undefined, {
							month: 'long',
						}) ===
						new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' }),
				),
			),
		[],
	);

	return (
		<>
			<MonthWrapper>
				{/* Turns number month into word month */}
				{month === 1 ? (
					new Date().getMonth() === 0 ? (
						<h1>
							{Number.parseInt(
								new Date().toLocaleString(undefined, { year: 'numeric' }),
							)}
						</h1>
					) : (
						<h1>
							{Number.parseInt(
								new Date().toLocaleString(undefined, { year: 'numeric' }),
							) + 1}
						</h1>
					)
				) : null}
				<h1>{new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' })}</h1>
				{monthEvents.map((event) => {
					console.log(event);
					return (
						<a href={`/events/${event.slug}`} key={event.id}>
							{event.frontmatter.title}
						</a>
					);
				})}
			</MonthWrapper>
		</>
	);
};

export default Month;
