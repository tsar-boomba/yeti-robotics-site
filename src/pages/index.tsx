import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import EventsDisplay from '../components/EventsDisplay';

const Home: React.FC<PageProps> = () => {
	return (
		<Layout title='Home' description='Home page for YETI Robotics'>
			<h1>Hello World</h1>
			<EventsDisplay />
		</Layout>
	);
};

export default Home;
