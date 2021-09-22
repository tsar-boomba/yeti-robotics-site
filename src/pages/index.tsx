import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import EventsDisplay from '../components/EventsDisplay';

const Home: React.FC<PageProps> = ({ data }) => {
	return (
		<Layout>
			<h1>Hello World</h1>
			<EventsDisplay />
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx {
			nodes {
				frontmatter {
					date
					title
				}
				id
				body
			}
		}
	}
`;

export default Home;
