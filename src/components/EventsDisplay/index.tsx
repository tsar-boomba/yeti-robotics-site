import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { DisplayWrapper } from './EventsDisplayStyles';
import Month from './Month';

const EventsDisplay = () => {
	// getting data
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

	// typing and setting data fetched from filesystem
	const [events, setEvents] = useState<
		{
			frontmatter: {
				title: string;
				date: string;
				time: string;
				location: string;
			};
			id: string;
			slug: string;
		}[]
	>(
		allMdx.nodes.filter(
			(event) => new Date(event.frontmatter.date).valueOf() > Date.now().valueOf(),
		),
	);
	const currentMonth = new Date().getMonth() + 1;

	// how many months we show
	const months = Array.from(Array(12).keys());

	// mkaes sure we don't go out of bounds on months (december -> january)
	const wrapMonths = (currMonth: number) => {
		if (currMonth > 12) {
			return currMonth - 12;
		} else {
			return currMonth;
		}
	};

	// re-setting data, just to make sure we got it
	useEffect(() => {
		setEvents(
			allMdx.nodes.filter(
				(event) => new Date(event.frontmatter.date).valueOf() > Date.now().valueOf(),
			),
		);
	}, []);

	return (
		<>
			<h1>Events</h1>
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
