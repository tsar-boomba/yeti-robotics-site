import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Grid from '@/components/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import { colors } from '@/styles/colors';

const Join: React.FC<PageProps> = () => {
	return (
		<Layout title='Join Us'>
			<Title>Join Our Team!</Title>
			<Grid style={{ justifyContent: 'space-around' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '0 40px 0 40px',
						width: 'clamp(300px, 400px, 100%)',
					}}
				>
					<Title style={{ textAlign: 'center' }}>Lead</Title>
					<StaticImage
						src='../../images/join/FLL-referee.webp'
						alt='FLL Referee'
						width={300}
						height={300}
						imgStyle={{ borderRadius: '50%' }}
					/>
					<h1 style={{ color: colors.primary, textAlign: 'center', marginTop: '4rem' }}>
						Benefits of Joining
					</h1>
					<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
						FIRST offers more than $18 million dollars in scholarships to FRC students.
						YETI provides leadership opportunities to build your resume by facilitating
						student-led initiatives that range from technical innovations to community
						development both locally and internationally. We also offer professional
						technical training in the following areas:
						<ul>
							<li>Electrical engineering</li>
							<li>Mechanical Engineering</li>
							<li>Photo/Videography</li>
							<li>Marketing and Business</li>
							<li>Programming (JAVA)</li>
						</ul>
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '0 40px 0 40px',
						width: 'clamp(300px, 400px, 100%)',
					}}
				>
					<Title style={{ textAlign: 'center' }}>Learn</Title>
					<StaticImage
						src='../../images/join/working-on-robot.jpg'
						alt='Team members working on the robot'
						width={300}
						height={300}
						imgStyle={{ borderRadius: '50%' }}
					/>
					<h1 style={{ color: colors.primary, textAlign: 'center', marginTop: '4rem' }}>
						What is YETI?
					</h1>
					<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
						YETI Robotics is a world-class community-based FIRST Robotics Competition
						(FRC) team and one of the four founding FRC teams of the Queen City Robotics
						Alliance. Our team consists of more than 40 public, private, and
						homeschooled high school students who work closely with industry
						professionals serving as mentors. YETI provides students with opportunities
						to learn the hands-on applications of graphic design, engineering,
						technology, marketing, presentation, and finance.
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						padding: '0 40px 0 40px',
						width: 'clamp(300px, 400px, 100%)',
					}}
				>
					<Title style={{ textAlign: 'center' }}>Inspire</Title>
					<StaticImage
						src='../../images/join/team-pic-with-award.webp'
						alt='Team picture with award'
						width={300}
						height={300}
						imgStyle={{ borderRadius: '50%' }}
					/>
					<h1 style={{ color: colors.primary, textAlign: 'center', marginTop: '4rem' }}>
						Get Involved
					</h1>
					<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
						Students can enroll anytime between May and October. However, we strongly
						recommend joining before summer because our summer sessions help train
						students for build season and provide several unique leadership
						opportunities through our outreach projects.
					</p>
				</div>
			</Grid>
			<Grid>
				{/* Put recruitment night image here when we recuitin again */}
				<div style={{ padding: 10 }}>
					<Title style={{ textAlign: 'center' }}>Steps for joining:</Title>
					<ol style={{ fontSize: '2rem' }}>
						<li style={{ padding: '0 0 1rem 0' }}>
							Complete the YETI Student Application
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>
							Complete the YETI Parent Application
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>
							<a
								href='yeti-expectations-2020-2021.docx'
								style={{ textDecoration: 'underline', padding: '0 0 1rem 0' }}
							>
								YETI FRC Expectations and Annual Schedule (Download)
							</a>
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>
							Acknowledgment of Expectations Form
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>
							QCRA Medical Record and Consent Form
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>
							<a
								href='yeti-handbook-2020-2021.docx'
								style={{ textDecoration: 'underline', padding: '0 0 1rem 0' }}
							>
								YETI 2020-2021 Handbook (Download)
							</a>
						</li>
						<li style={{ padding: '0 0 1rem 0' }}>Register with FIRST</li>
					</ol>
				</div>
			</Grid>
		</Layout>
	);
};

export default Join;
