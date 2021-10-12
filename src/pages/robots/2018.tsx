import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyEighteen = () => {
	return (
		<Layout
			title='2018 Season'
			description='The 2018 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2018 Season</Title>
			<StaticImage src='../../images/team-pics/2018-team.webp' alt='2018 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2018 YETI team</p>
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
						<h1>The 2018 FRC Game: FIRST POWER UP</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							FIRST Power Up, is the FIRST Robotics Competition game for the 2018
							season. It involves two alliances of three teams each, with each team
							controlling a robot and performing specific tasks on a field to score
							points. The game has a retro 8-bit theme and teams are required to place
							milk crates, or "power cubes", on large balancing scales to tip the
							scale and gain ownership. Alliances can also trade power cubes for power
							ups, giving them a temporary advantage in a match. At the end of the
							match, robots can climb the tower attached to the centre balancing scale
							using a rung attached to the tower, giving them additional points.
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
						<a href='https://www.youtube.com/watch?v=HZbdwYiCY74'>
							<StaticImage
								src='../../images/game-logos/2018-game-logo.webp'
								alt='Power Up Logo'
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=HZbdwYiCY74'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2011 Robot: AVALANCHE</Title>
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
							src='../../images/robots/avalanche-pic.webp'
							alt='Avalanche Pic'
							width={300}
						/>
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/NUO2ZuJFXYg'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								6in pneumatic 8WD West Coast Style tank drive, 6 CIMS with pneumatic
								shifters 22ft/s.
							</li>
							<li>
								Variable intake arm which is laser cut from ¼in aluminum sheet
								pivots by one rs775 motor with a VersaPlanetary Gearbox 330:1.
							</li>
							<li>
								Roller bar built into pivoting arm to grab power cube using two
								rs775 motors with a 50:1 VersaPlanetary Gearbox.{' '}
							</li>
							<li>
								Each roller bar contains two 4 35A durometer compliant wheels which
								are chained to motors.
							</li>
							<li>Capable of picking up power cubes from any orientation.</li>
							<li>
								Continuous elevator enables the intake arm to raise 7ft in 2
								seconds.
							</li>
							<li>Elevator controlled with encoders and limit switches.</li>
							<li>
								Winch made from 2 rs775 motors with Vex VersaPlanetary Gearbox 28:1
								which spools dyneema cord.
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

export default TwentyEighteen;
