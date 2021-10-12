import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyFifteen = () => {
	return (
		<Layout
			title='2015 Season'
			description='The 2015 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2015 Season</Title>
			<StaticImage src='../../images/team-pics/2015-team.webp' alt='2015 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2015 YETI team</p>
			<Section>
				<Grid style={{ margin: 0, justifyContent: 'space-evenly', alignItems: 'center' }}>
					<div
						style={{
							display: 'grid',
							placeItems: 'center',
							width: 'clamp(300px, 600px, 100%)',
							margin: 15,
						}}
					>
						<h1>The 2015 FRC Game: RECYCLE RUSH</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							The 2015 game revolved around recycling. Teams were faced with the
							challenge of stacking six gray and yellow totes on slight platforms. The
							twist, however, was that the only interaction with the opposing alliance
							was during the cooperation opportunity, where two robots of opposing
							alliances worked together to stack totes in the middle of the field,
							allowing both teams to earn additional points. In autonomous, teams
							would try to gain possession of the recycling bins, which would be
							placed on top of the stacks of gray and yellow totes. During the game,
							human players can throw pool noodles, representing trash, across the
							field onto the other teams' area for additional points to their
							alliance.
						</p>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							margin: 15,
						}}
					>
						<a href='https://www.youtube.com/watch?v=W6UYFKNGHJ8'>
							<StaticImage
								src='../../images/game-logos/2015-game-logo.webp'
								alt='Recycle Rush Logo'
								width={300}
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=W6UYFKNGHJ8'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2015 Robot: FROSTBYTE</Title>
				<Grid style={{ margin: 0, alignItems: 'center' }}>
					<div
						style={{
							margin: '0 15px 15px 15px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<StaticImage
							src='../../images/robots/frostbyte-pic.webp'
							alt='Frostbyte Pic'
						/>
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/c_MMO9uprDc'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>6WD Single speed custom West Coast Products drive, 4 CIMS</li>
							<li>Air powered tote stacker 1x4 (later turned into 2x1 stacker)</li>
							<li>
								Giant roller claw with gravity wrist for cap bin collection driven
								by BAG motor and Vex Versa Planetary Gearbox 10:1
							</li>
							<li>
								Large arm mechanism to move claw up and down driven by two Mini CIMS
								with Vex Versa Planetary Gearboxes 63:1 reduction
							</li>
							<li>
								<strong>2016 configuration:</strong>
							</li>
							<li>6WD converted to pneumatic wheels and 6 CIM upgrade</li>
							<li>
								Arm converted into ball intake that could activate drawbridge, sally
								port, cheval de frise, and all other defenses except for the low bar
								driven by one RS775 10:1 Vex Versa Planetary Gearbox
							</li>
							<li>
								Belt fed intake from lower intake to shooter powered by one RS775
								10:1 Vex Versa Planetary Gearbox
							</li>
							<li>
								Shooter powered by one CIM and a cylinder with a drum cymbal on the
								end to eject the ball through the shooter flywheel into the high
								goal
							</li>
							<li>
								<strong>2017 configuration:</strong>
							</li>
							<li>
								Drive system converted back to traction wheel tank drive with corner
								omnis, 6 CIMS
							</li>
							<li>
								Roller bar gear intake driven by one RS775 10:1 Vex Versa Planetary
								Gearbox
							</li>
							<li>Ejection doors powered by one air cylinder to place gear</li>
							<li>
								Velcro climber powered by two RS775 Vex Versa Planetary Gearboxes
								30:1
							</li>
						</ul>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Awards</Title>
				<h1>Content coming soon, MATTHEW!</h1>
			</Section>
		</Layout>
	);
};

export default TwentyFifteen;
