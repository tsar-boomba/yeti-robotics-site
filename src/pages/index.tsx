import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import EventsDisplay from '../components/EventsDisplay';

const Home: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>Hello World</h1>
			<EventsDisplay />
		</Layout>
	);
};

export default Home;
