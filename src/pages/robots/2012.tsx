import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyTwelve = () => {
	return (
		<Layout
			title='2012 Season'
			description='The 2012 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2012 Season</Title>
			<StaticImage src='../../images/team-pics/2012-team.webp' alt='2012 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2012 YETI team</p>
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
						<h1>The 2012 FRC Game: REBOUND RUMBLE</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							In 2012's game, Rebound Rumble, teams competed to score basketballs into
							their hoops during a 2 minute and 15 second match. Teams can get more
							points by scoring in higher hoops. The match begins with a 15-second
							Hybrid Period where robots operate without driver input but one robot on
							each Alliance may be controlled using a Microsoft Kinect. Additionally,
							baskets scored during this period are worth extra points. For the
							remainder of the match, drivers control robots and the match ends with
							robots attempting to balance on bridges located in the middle of the
							field. In Qualification Matches, a robot from each Alliance will also
							try to balance on the white Coopertition™ bridge to score additional
							ranking points.
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
						<a href='https://www.youtube.com/watch?v=13HpbFjZWto'>
							<StaticImage
								src='../../images/game-logos/2012-game-logo.webp'
								alt='Rebound Logo'
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=13HpbFjZWto'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2012 Robot: CHOMPA</Title>
				<Grid style={{ margin: 0, alignItems: 'center' }}>
					<div
						style={{
							margin: '0 15px 15px 15px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<StaticImage src='../../images/robots/chompa-pic.webp' alt='Chompa Pic' />
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/kIcZP077tPw'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								AndyMark CIMpleboxs with one motor each side on an 8W drive, later
								converted to 6WD
							</li>
							<li>Multi roller urethane belt system driven by 2 Denso door motors</li>
							<li>
								“Muzzle Loaded” articulating shooter driven by AndyMark PG71 winch
								system
							</li>
							<li>
								Shooter contained belt system driven by Denso door motor and two
								belt driven CIM motors to fire the ball
							</li>
							<li>Articulating pneumatic arm to drop the bridges for balancing</li>
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

export default TwentyTwelve;
