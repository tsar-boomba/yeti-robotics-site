import EventsDisplay from '../../components/EventsDisplay/EventsDisplay';
import Layout from '@/components/Layout';
import React from 'react';

const Events = () => {
	return (
		<Layout title='Events' description='YETI Robotics events'>
			<EventsDisplay />
		</Layout>
	);
};

export default Events;
