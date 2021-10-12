import { Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@/components/Grid';
import { colors } from '@/styles/colors';
import { motion } from 'framer-motion';

const Mentors: React.FC<PageProps> = () => {
	return (
		<Layout title='Mentors' description='About the mentors of YETI Robotics.'>
			<Title>Mentors</Title>
			<p
				style={{
					fontSize: '1.5rem',
					width: 'clamp(300px, 1000px, 100%)',
					textAlign: 'center',
				}}
			>
				The YETI mentors bring technical and non-technical expertise to the team. They
				provide opportunities for students to learn through experiences by inspiring and
				guiding them. Mentors provide the environment for students to succeed.
			</p>
			<StaticImage
				src='../../images/mentors/2018-2019-mentors.webp'
				alt='2018-2019 mentors'
			/>
			<p style={{ fontSize: '1.5rem' }}>Our 2018-2019 Mentors</p>
			<Grid style={{ margin: 0 }}>
				<motion.div
					style={{
						display: 'grid',
						placeItems: 'center',
						margin: 15,
						color: colors.secondary,
						backgroundColor: colors.primary,
						borderRadius: 10,
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link to='/mentors/technical-mentors' style={{ padding: 20 }}>
						Meet our Technical Mentors
					</Link>
				</motion.div>
				<motion.div
					style={{
						display: 'grid',
						placeItems: 'center',
						margin: 15,
						color: colors.secondary,
						backgroundColor: colors.primary,
						borderRadius: 10,
					}}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					<Link to='/mentors/business-mentors' style={{ padding: 20 }}>
						Meet our Business Mentors
					</Link>
				</motion.div>
			</Grid>
		</Layout>
	);
};

export default Mentors;
