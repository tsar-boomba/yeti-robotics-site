import { Link } from 'gatsby';
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
	// removing events not in this month
	const [monthEvents, setMonthEvents] = useState(
		events.filter(
			(event) =>
				new Date(event.frontmatter.date).toLocaleString(undefined, { month: 'long' }) ===
				new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' }),
		),
	);

	// re-removing, just in case
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
					return (
						<Link to={`/events/${event.slug}`} key={event.id}>
							{event.frontmatter.title}
						</Link>
					);
				})}
			</MonthWrapper>
		</>
	);
};

export default Month;
