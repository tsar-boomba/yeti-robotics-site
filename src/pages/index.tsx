import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';

const Home: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>Hello World</h1>
		</Layout>
	);
};

export default Home;
