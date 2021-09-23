import { motion } from 'framer-motion';
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
			<motion.div
				whileTap={{ scale: 0.95, zIndex: 3 }}
				whileHover={{ scale: 1.02, zIndex: 3 }}
				style={EventWrapper}
			>
				<EventText>
					<p>
						{new Date(event.frontmatter.date).toLocaleDateString(undefined, {
							day: '2-digit',
						})}
						{'   '}
						{event.frontmatter.title}
					</p>
				</EventText>
			</motion.div>
		</Link>
	);
};

export default Event;
