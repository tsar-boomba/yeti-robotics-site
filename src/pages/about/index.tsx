import Layout from '@/components/Layout';
import React from 'react';
import { PageProps } from 'gatsby';
import Title from '@/components/Title';
import Grid from '@/components/Grid';
import { colors } from '@/styles/colors';
import { StaticImage } from 'gatsby-plugin-image';

const About: React.FC<PageProps> = () => {
	return (
		<Layout title='About' description='About YETI Robotics'>
			<Title>About YETI</Title>
			<Grid style={{ boxShadow: colors.defaultShadow }}>
				<div
					style={{
						backgroundColor: colors.primary,
						flexGrow: 1,
					}}
				>
					<h1 style={{ height: '100%' }}>PH NEED IMAGE</h1>
				</div>
				<div
					style={{
						width: 300,
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
					}}
				>
					<h1>Our Team</h1>
					<p style={{ fontSize: '1.5rem' }}>YETI...Set...Go!!!</p>
					<p style={{ fontSize: '1.5rem' }}>
						YETI began ten years ago with only 16 students and 7 mentors in Charlotte,
						North Carolina. YETI won multiple Chairman’s awards for their efforts to
						engage the Charlotte community in STEM. YETI has founded many FIRST Tech
						Challenge and FIRST Lego League teams to continuously encourage students to
						join the team. YETI Robotics also co-founded the Queen City Robotics
						Alliance, a 501(c)3 organization, with BOW 4290, T-Rex 4935, and Royal
						Robotics 3701. During the summer of '1.5rem'19 in partnership with our very
						own PREPARE a 501(c)3 formed by our Business Co-Captain, we started an FLL
						team and an FTC team in southern INDIA
					</p>
				</div>
			</Grid>
			<Grid style={{ boxShadow: colors.defaultShadow }}>
				<div
					style={{
						display: 'grid',
						placeItems: 'center',
						backgroundColor: colors.primary,
						flexGrow: 1,
					}}
				>
					<StaticImage src='../../images/qcra-logo.webp' alt='QCRA Logo' />
				</div>
				<div
					style={{
						width: 300,
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
					}}
				>
					<p style={{ fontSize: '1.5rem' }}>
						The Queen City Robotics Alliance (QCRA) is a non-profit 501(c)(3) charitable
						organization founded in '1.5rem'14. QCRA was founded by Lia Schwinghammer
						initially as an umbrella fundraising entity for FIRST® teams and events in
						Charlotte, NC. Lia has volunteered with FIRST® in various capacities since
						'1.5rem'08 and upon arriving in Charlotte in '1.5rem'09 found only a handful
						of elementary FIRST® teams (FIRST® LEGO® ), no events and no high school
						(FIRST® Robotics) teams. By bringing coaches and teams together, QCRA
						established the remarkable trendsetting FIRST© Zone, garnering national
						attention from FIRST teams. Over the past five years, the efforts and
						activities of QCRA and Lia Schwinghammer have brought significant growth of
						teams and events in and around Charlotte, NC. Today, QCRA supports multiple
						teams and events at all four FIRST® levels. These teams regularly, learn,
						fund-raise and conduct outreach together making for more successful
						outcomes.
					</p>
				</div>
			</Grid>
			<Grid style={{ boxShadow: colors.defaultShadow }}>
				<div
					style={{
						display: 'grid',
						placeItems: 'center',
						width: 300,
						padding: 10,
						backgroundColor: colors.primary,
						flexGrow: 1,
					}}
				>
					<StaticImage src='../../images/first/vert-first-logo.png' alt='FIRST Logo' />
				</div>
				<div
					style={{
						display: 'grid',
						placeItems: 'center',
						width: 300,
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
					}}
				>
					<p style={{ fontSize: '1.5rem' }}>
						“Our mission is to inspire young people to be science and technology
						leaders, by engaging them in exciting mentor-based programs that build
						science, engineering and technology skills, that inspire innovation, and
						that foster well-rounded life capabilities including self-confidence,
						communication, and leadership. [Our] vision is to transform our culture by
						creating a world where science and technology are celebrated and where young
						people dream of becoming science and technology leaders.”
						<p style={{ textAlign: 'right', fontWeight: 'bold' }}>
							-Dean Kamen, Founder
						</p>
					</p>
					<div
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-around',
							padding: '0 0 10px 0',
						}}
					>
						<a href='https://www.firstinspires.org/robotics/frc'>
							<StaticImage
								src='../../images/first/vert-frc-logo.png'
								alt='FIRST Robotics Competition Logo'
								width={100}
								objectFit='scale-down'
							/>
						</a>
						<a href='https://www.firstinspires.org/robotics/ftc'>
							<StaticImage
								src='../../images/first/vert-ftc-logo.png'
								alt='FIRST Tech Challenge Logo'
								width={100}
								objectFit='scale-down'
							/>
						</a>
						<a href='https://www.firstlegoleague.org/'>
							<StaticImage
								src='../../images/first/vert-fll-logo.png'
								alt='FIRST Lego League Logo'
								width={100}
								objectFit='scale-down'
							/>
						</a>
					</div>
					<p style={{ fontSize: '1.5rem' }}>
						To find out more about FIRST® Robotics programs, which are available for
						kindergarten through high school, follow the links above.
					</p>
				</div>
			</Grid>
		</Layout>
	);
};

export default About;
