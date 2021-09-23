import { Link } from 'gatsby';
import React from 'react';
import { EventText, EventWrapper } from './EventsDisplayStyles';

interface EventProps {
	event: {
		frontmatter: {
			title: string;
			date: string;
			time: string;
			location: string;
		};
		id: string;
		slug: string;
	};
}

const Event: React.FC<EventProps> = ({ event }) => {
	return (
		<Link to={`/events/${event.slug}`}>
			<EventWrapper>
				<EventText>
					{event.frontmatter.date} {event.frontmatter.title}
				</EventText>
			</EventWrapper>
		</Link>
	);
};

export default Event;
