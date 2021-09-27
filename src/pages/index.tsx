import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import EventsDisplay from '../components/EventsDisplay';
import Slideshow from '@/components/Slideshow';

// importing slideshow images

const Home = ({ data }) => {
	return (
		<Layout title='Home' description='Home page for YETI Robotics'>
			<Slideshow images={data.allFile.nodes} />
			<EventsDisplay />
		</Layout>
	);
};

export const query = graphql`
	query {
		allFile(filter: { relativePath: { regex: "/home/" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED)
				}
			}
		}
	}
`;

export default Home;
