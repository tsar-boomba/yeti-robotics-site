import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DisplayWrapper } from './EventsDisplayStyles';
import Month from './Month';
import { EventData } from './types';

const EventsDisplay = () => {
	// getting data
	const { allMdx }: { allMdx: { nodes: EventData[] } } = useStaticQuery(graphql`
		query {
			allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 50) {
				nodes {
					frontmatter {
						title
						date
						time
						location
					}
					id
					slug
				}
			}
		}
	`);

	// typing and setting data fetched from filesystem
	const [events] = useState<EventData[]>(
		allMdx.nodes.filter(
			(event) =>
				new Date(event.frontmatter.date).valueOf() >= new Date().valueOf() - 129600000,
		),
	);
	const currentMonth = new Date().getMonth() + 1;

	// how many months we show      v
	const months = Array.from(Array(12).keys());

	// mkaes sure we don't go out of bounds on months (december -> january)
	const wrapMonths = (currMonth: number) => {
		if (currMonth > 12) {
			return currMonth - 12;
		} else {
			return currMonth;
		}
	};

	return (
		<>
			<h1 style={{ fontSize: 40, marginTop: 80 }}>Events</h1>
			<DisplayWrapper>
				{months.map((_, index) => {
					return (
						<Month
							key={index}
							id={index}
							month={wrapMonths(currentMonth + index)}
							events={events}
						/>
					);
				})}
			</DisplayWrapper>
		</>
	);
};

export default EventsDisplay;
