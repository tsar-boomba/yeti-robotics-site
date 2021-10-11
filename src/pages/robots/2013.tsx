import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyThirteen = () => {
	return (
		<Layout
			title='2013 Season'
			description='The 2013 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2013 Season</Title>
			<StaticImage src='../../images/team-pics/2013-team.webp' alt='2013 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2013 YETI team</p>
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
						<h1>The 2013 FRC Game: ULTIMATE ASCENT</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							In Ultimate Ascent, 2013's game, teams had to shoot frisbees into high
							goals located above the drivers or into the top of pyramids in the
							middle of the game field. These frisbees were put into play by human
							players and robots and there could be up to four frisbees in play at
							once. In the autonomous period, robots try to score points by shooting
							the frisbees into high goals without the control or aim of a human
							driver. In the last twenty seconds of the game, robots begin to make an
							ascent up the pyramids that were in the middle of the field to make a
							final high score.{' '}
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
						<a href='https://www.youtube.com/watch?v=itHNW2OFr4Y'>
							<StaticImage
								src='../../images/game-logos/2013-game-logo.webp'
								alt='Ultimate Ascent Logo'
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=itHNW2OFr4Y'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2013 Robot: MOMO</Title>
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
							src='../../images/robots/momo-pic.webp'
							alt='Momo Pic'
							width={300}
						/>
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/lUzFPl6PJFs'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								MoMo excels in autonomous mode, usually making all three shots in
								the high goal.
							</li>
							<li>
								The frisbee chamber has a vertical orientation, allowing for easy
								and forgiving loading from the middle loading slot, with feeding on
								the opposite side from shooting.
							</li>
							<li>
								The YETI Launcher uses two tires rotating at high speed to launch
								frisbees. There are Hall Effect encoders on the hubs that allow us
								accurate speed control of the launcher motors.{' '}
							</li>
							<li>
								MoMo features a two speed transmission that gives speed when needed,
								plus enough torque to push other robots.
							</li>
						</ul>
					</div>
				</Grid>
			</Section>
			<Section style={{ border: 0 }}>
				<Title>Awards</Title>
				<h1>Content coming soon, MATTHEW!</h1>
			</Section>
		</Layout>
	);
};

export default TwentyThirteen;
