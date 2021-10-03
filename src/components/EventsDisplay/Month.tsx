import Event from './Event';
import React, { useState } from 'react';
import { MonthWrapper } from './EventsDisplayStyles';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { extractMonth, extractYear } from './date-helpers';
import { colors } from '@/styles/colors';
import { EventData } from './types';

interface MonthProps {
	month: number;
	id: number;
	events: EventData[];
}

const Month: React.FC<MonthProps> = ({ month, events, id }) => {
	// removing events not in this month and sorting so closer events are at the top
	const [monthEvents] = useState(
		events
			.filter(
				(event) => extractMonth(event.frontmatter.date) === extractMonth(`${month}/1/2000`),
			)
			.sort((a, b) => {
				if (
					new Date(a.frontmatter.date).valueOf() <= new Date(b.frontmatter.date).valueOf()
				) {
					return -1;
				} else {
					return 1;
				}
			}),
	);
	const [open, setOpen] = useState(id === 0 ? true : false);

	// animation variants
	const EventsAnimation: Variants = {
		open: {
			height: 'auto',
			transition: {
				type: 'tween',
				staggerChildren: 0.05,
				delayChildren: 0.2,
			},
		},
		closed: {
			height: 0,
			transition: {
				type: 'tween',
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const EventAnimation: Variants = {
		open: {
			scale: 1,
			y: 0,
			opacity: 1,
		},
		closed: (index) => ({
			scale: 0,
			y: -30 * index,
			opacity: 0,
		}),
	};

	return (
		<>
			{month === 1 ? (
				new Date().getMonth() === 0 ? (
					<h1>{Number.parseInt(extractYear(new Date().toString()))}</h1>
				) : (
					<h1>{Number.parseInt(extractYear(new Date().toString())) + 1}</h1>
				)
			) : null}
			{monthEvents.length ? (
				<motion.div
					animate='animate'
					whileHover={{ scale: 1.05, zIndex: 2 }}
					whileTap={{ scale: 0.95, zIndex: 2 }}
					onClick={() => setOpen(!open)}
					style={{
						...MonthWrapper,
						backgroundColor: open ? 'transparent' : colors.primary,
						color: open ? 'black' : colors.secondary,
					}}
				>
					{/* Turns number month into word month */}
					<h1>{extractMonth(`${month}/1/2000`)}</h1>
					<AnimatePresence initial={false}>
						{open && (
							<motion.div
								initial='closed'
								animate='open'
								exit='closed'
								variants={EventsAnimation}
							>
								{monthEvents.map((event, index) => {
									return (
										<motion.div
											key={index}
											custom={index}
											variants={EventAnimation}
										>
											<Event event={event} />
										</motion.div>
									);
								})}
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			) : null}
		</>
	);
};

export default Month;
