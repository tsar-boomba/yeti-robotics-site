import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import EventsDisplay from '../components/EventsDisplay';
import Slideshow from '@/components/Slideshow';

// importing slideshow images

const Home = ({ data }) => {
	return (
		<Layout title='Home' description='Home page for YETI Robotics'>
			<h1>YETI Robotics</h1>
			<h1>Team 3506</h1>
			<Slideshow images={data.allFile.nodes} />
			<h1 style={{ fontSize: 60, marginTop: 60 }}>We create more than robots.</h1>
			<h2 style={{ width: 'clamp(300px, 700px, 100%)', textAlign: 'center' }}>
				YETI Robotics is a community-based FIRST Robotics Competition (FRC) team and one of
				the four founding FRC teams of the Queen City Robotics Alliance. Our team is a
				mixture of high school-age public, private, and home schooled students. Students
				participating in FIRST have opportunities to learn hands-on applications of
				engineering, technology, marketing, presentation, and design.
			</h2>
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
