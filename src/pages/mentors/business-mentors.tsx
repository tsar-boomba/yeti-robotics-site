import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Grid from '@/components/Grid';
import Title from '@/components/Title';
import { colors } from '@/styles/colors';
import { StaticImage } from 'gatsby-plugin-image';

const BusinessMentors: React.FC<PageProps> = () => {
	return (
		<Layout title='Business Mentors' description='Business mentors of YETI Robotics.'>
			<Title>Business Mentors</Title>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/iaiela-dumitrescu-pic.webp'
					alt='Iaiela Dumitrescu'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						width: 'clamp(300px, 600px, 100%)',
						flexGrow: 1,
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Iaiela Dumitrescu</Title>
					<h2 style={{ marginTop: 0 }}>Since 2010</h2>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						Mrs. Dumitrescu was born in Romania and immigrated to Anaheim, CA. USA in
						1983. She finished her primary schooling, being the first in her immediate
						family to even graduate from high school. She decided to apply to one school
						only, not knowing how the system worked and was accepted at that school,
						Biola University. She attended for three years as a Business
						Administration/Accounting major before meeting her husband Marian. They got
						married and she moved to Michigan, where her engineer husband found a job
						after moving to the states from Germany. She was fascinated by engineering,
						but most things went over her head.
					</p>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						The couple was blessed with two children, Jacqueline (the music and art
						nerd) and Josiah (the engineer). While the children were still small she
						went back to school and finished her degree, graduating Magna Cum Laude in
						1999. Marian’s work brought them to NC in 2004 and that is where Mrs.D found
						out about FIRST Lego League. Josiah was too old for that, so she researched
						and found out about FRC, but there was no team in Charlotte in 2008. However
						FIRST mentioned that by 2010 there will be someone in Charlotte that will
						start an FRC team and that is where the story of Mrs. D’s involvement with
						YETI starts.
					</p>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						At first Mrs. D just helped as a parent in whatever was needed, but then she
						took on the role of team logistics, making sure that the team had
						accommodations, travel, and food taken care of while on the road at
						competitions. One things lead to another and she decided to help out on the
						Marketing sub-team each year a little bit. Given the fact that she’s owned
						her own business from 1996-2015 she knew quite a bit about marketing and how
						YETI could benefit from her knowledge. For the upcoming season 2019-2020
						Mrs. D is stepping into an Alternate Lead Mentor as well as overseeing the
						Marketing of the Team 3506 YETI.
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/carol-vanburen-pic.webp'
					alt='Carol VanBuren'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						width: 'clamp(300px, 600px, 100%)',
						flexGrow: 1,
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Carol VanBuren</Title>
					<h2 style={{ marginTop: 0 }}>Since 2014</h2>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						Carol Jones Van Buren graduated Phi Beta Kappa and summa cum laude with a
						B.S. in Physics from Wake Forest University.
					</p>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						After practicing as a Partner in a large regional law firm, Kennedy
						Covington, for many years, Carol saw an opportunity to provide better
						service and value to her clients with a nimble, boutique practice focusing
						on environmental and natural resource law.
					</p>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						Carol founded Van Buren Law, PLLC in 2008 with the goal of providing high
						quality legal services in a small firm environment. Carol has been
						recognized by Business Carolina magazine as one of the Legal Elite in
						Environmental Law from 2008 to 2017. Carol will be helping YETI Robotics
						with administrative matters and will assist with team fundraising.
					</p>
				</div>
			</Grid>
		</Layout>
	);
};

export default BusinessMentors;
