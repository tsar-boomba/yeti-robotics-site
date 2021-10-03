import { motion } from 'framer-motion';
import { Link } from 'gatsby';
import React from 'react';
import { extractDay } from './date-helpers';
import { EventText, EventWrapper } from './EventsDisplayStyles';
import { EventData } from './types';

interface EventProps {
	event: EventData;
}

const Event: React.FC<EventProps> = ({ event }) => {
	return (
		<Link to={`/events/${event.slug}`} onClick={(e) => e.stopPropagation()}>
			<motion.div
				whileTap={{ scale: 0.95, zIndex: 3 }}
				whileHover={{ scale: 1.02, zIndex: 3 }}
				style={EventWrapper}
			>
				<EventText>
					<p>
						<strong>{extractDay(event.frontmatter.date)}</strong>
						{'   '}
						{event.frontmatter.title}
					</p>
				</EventText>
			</motion.div>
		</Link>
	);
};

export default Event;
