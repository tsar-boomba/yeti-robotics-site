import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import EventsDisplay from '../components/EventsDisplay';
import Slideshow from '@/components/Slideshow';
import Section from '@/components/Section';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { colors } from '@/styles/colors';
import Grid from '@/components/Grid';
import { motion } from 'framer-motion';

interface HomeProps {
	data: {
		allFile: {
			nodes: {
				childImageSharp: { gatsbyImageData: IGatsbyImageData };
			}[];
		};
	};
}

const Home: React.FC<HomeProps> = ({ data }) => {
	return (
		<Layout title='Home' description='Home page for YETI Robotics'>
			<div style={{ margin: '0 0 4rem 0' }}>
				<StaticImage
					src='../images/yeti-logo-with-text.png'
					width={800}
					loading='eager'
					placeholder='tracedSVG'
					alt='YETI logo with text'
				/>
			</div>
			<Slideshow images={data.allFile.nodes} />
			<Section>
				<h1 style={{ fontSize: 60, margin: '10px 0 10px 0' }}>
					We create more than robots.
				</h1>
				<h2 style={{ width: 'clamp(300px, 700px, 100%)', textAlign: 'center' }}>
					YETI Robotics is a community-based FIRST Robotics Competition (FRC) team and one
					of the four founding FRC teams of the Queen City Robotics Alliance. Our team is
					a mixture of high school-age public, private, and home schooled students.
					Students participating in FIRST have opportunities to learn hands-on
					applications of engineering, technology, marketing, presentation, and design.
				</h2>
			</Section>
			<Grid
				style={{
					boxShadow: colors.defaultShadow,
					width: 'clamp(300px, 890px, 100%)',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						flexGrow: 1,
						backgroundColor: colors.primary,
					}}
				>
					<StaticImage
						src='../images/polaris-cad.webp'
						alt='Polaris CAD image'
						style={{ backgroundColor: colors.primary }}
					/>
				</div>
				<div
					style={{
						display: 'flex',
						flexFlow: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						textAlign: 'center',
						width: 'clamp(300px, 300px, 100%)',
						height: 574,
						flexGrow: 100,
						padding: 10,
						backgroundColor: colors.primaryTransparent,
					}}
				>
					<div>
						<h1>Polaris</h1>
						<h3>
							Check out our most recent robot and read more about our previous seasons
							and robots on our "Robots" page.
						</h3>

						<Link to='/robots' style={{ textAlign: 'center' }}>
							<motion.div
								whileTap={{ scale: 0.95 }}
								whileHover={{ scale: 1.05 }}
								style={{
									backgroundColor: colors.primary,
									color: colors.secondary,
									padding: 10,
									borderRadius: 6,
									fontSize: 20,
								}}
							>
								Learn More
							</motion.div>
						</Link>
					</div>
				</div>
			</Grid>
			<EventsDisplay />
		</Layout>
	);
};

// querying files for images in home folder (out of included folders, events and images)
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
