import Event from './Event';
import React, { useEffect, useState } from 'react';
import { MonthWrapper } from './EventsDisplayStyles';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface MonthProps {
	month: number;
	id: number;
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

const Month: React.FC<MonthProps> = ({ month, events, id }) => {
	// removing events not in this month and sorting so closer events are at the top
	const [monthEvents, setMonthEvents] = useState(
		events
			.filter(
				(event) =>
					new Date(event.frontmatter.date).toLocaleString(undefined, {
						month: 'long',
					}) === new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' }),
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

	// re-removing, just in case
	useEffect(
		() =>
			setMonthEvents(
				events
					.filter(
						(event) =>
							new Date(event.frontmatter.date).toLocaleString(undefined, {
								month: 'long',
							}) ===
							new Date(`${month}/1/2000`).toLocaleString(undefined, {
								month: 'long',
							}),
					)
					.sort((a, b) => {
						if (
							new Date(a.frontmatter.date).valueOf() <=
							new Date(b.frontmatter.date).valueOf()
						) {
							return -1;
						} else {
							return 1;
						}
					}),
			),
		[],
	);

	// animation variants
	const EventsAnimation: Variants = {
		open: {
			height: 'auto',
			transition: {
				staggerChildren: 0.1,
			},
		},
		closed: {
			height: 0,
			transition: {
				duration: 0.3,
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
	};

	const EventAnimation: Variants = {
		open: {
			y: 0,
			opacity: 1,
		},
		closed: {
			y: -10,
			opacity: 0,
		},
	};

	return (
		<>
			{month === 1 ? (
				new Date().getMonth() === 0 ? (
					<h1>
						{Number.parseInt(new Date().toLocaleString(undefined, { year: 'numeric' }))}
					</h1>
				) : (
					<h1>
						{Number.parseInt(
							new Date().toLocaleString(undefined, { year: 'numeric' }),
						) + 1}
					</h1>
				)
			) : null}
			{monthEvents.length ? (
				<motion.div
					whileHover={{ scale: 1.05, zIndex: 2 }}
					whileTap={{ scale: 0.95, zIndex: 2 }}
					onClick={() => setOpen(!open)}
					style={MonthWrapper}
				>
					{/* Turns number month into word month */}
					<h1>
						{new Date(`${month}/1/2000`).toLocaleString(undefined, { month: 'long' })}
					</h1>
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
										<motion.div key={index} variants={EventAnimation}>
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
