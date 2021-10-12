import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyNineteen = () => {
	return (
		<Layout
			title='2019 Season'
			description='The 2019 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2019 Season</Title>
			<StaticImage src='../../images/team-pics/2019-team.webp' alt='2019 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2019 YETI team</p>
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
						<h1>The 2019 FRC Game: DEEP SPACE</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							Destination: Deep Space, is the FIRST Robotics Competition game for the
							2019 season. It involves two alliances of three teams each, with each
							team controlling a robot and performing specific tasks on a field to
							score points. The game centers around an outer space theme involving two
							alliances consisting of three teams each competing to place
							poly-carbonate hatch covers and orange rubber balls or "cargo" on
							rockets and cargo ships before returning to their HAB platform to climb
							at the end of the match.
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
						<a href='https://www.youtube.com/watch?v=Mew6G_og-PI'>
							<StaticImage
								src='../../images/game-logos/2019-game-logo.webp'
								alt='Deep Space Logo'
								width={300}
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=Mew6G_og-PI'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2011 Robot: POLARIS</Title>
				<Grid style={{ margin: 0, alignItems: 'center' }}>
					<div
						style={{
							margin: '0 15px 15px 15px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<StaticImage src='../../images/robots/polaris-cad.webp' alt='Polaris Pic' />
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/YkbfHnbxGzY'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								8WD West Coast Style tank drive 6 Colson and 4 omni, 4 CIMS 2 mini
								CIMS with pneumatic shifters 13.4ft/s. 9:1 ratio in high and 19:6:1
								ratio in low.
							</li>
							<li>
								Use of tank drive because of high pushing power and ease when
								defending.
							</li>
							<li>
								Disk intake inspired by jaws of life which uses a one inch stroke
								piston and 3d printed claws and linkages. This mechanism grips hatch
								panels.
							</li>
							<li>
								There are two arcade style buttons that when pressed close the
								listening disk intake and bring back two pistons that extend the
								mechanism forward.
							</li>
							<li>
								Ball intake that uses 2 roller bars connected by chain. 2in straight
								flex wheels powered by a rs775 motor with a 5:1 Vex VersaPlanetary
								Gearbox.
							</li>
							<li>
								Cascade elevator powered with 2 rs775 motors with 350:1 Vex
								VersaPlanetary gearbox. Elevator is programmed with 4 stages and is
								able to reach the third level of the rocket.
							</li>
							<li>
								Programming utilized vision, limit switches, encoders, and line
								followers to create consistent and accurate autonomous routines.
							</li>
							<li>Bumpers are made with wood and pool noodles</li>
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

export default TwentyNineteen;
