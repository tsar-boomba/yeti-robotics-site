import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DisplayWrapper } from './EventsDisplayStyles';
import Month from './Month';

const EventsDisplay = () => {
	const { allMdx } = useStaticQuery(graphql`
		query {
			allMdx {
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
	const [events, setEvents] = useState(
		allMdx.nodes.filter(
			(event) => new Date(event.frontmatter.date).valueOf() > Date.now().valueOf(),
		),
	);
	const currentMonth = new Date().getMonth() + 1;
	const months = Array.from(Array(12).keys());
	const wrapMonths = (currMonth: number) => {
		if (currMonth > 12) {
			return currMonth - 12;
		} else {
			return currMonth;
		}
	};

	useEffect(() => {
		setEvents(
			allMdx.nodes.filter(
				(event) => new Date(event.frontmatter.date).valueOf() > Date.now().valueOf(),
			),
		);
	}, []);

	return (
		<>
			<DisplayWrapper>
				{months.map((_, index) => {
					return (
						<Month
							key={index}
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
