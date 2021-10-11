import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyTwentyOne = () => {
	return (
		<Layout
			title='2021 Season'
			description='The 2021 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2021 Season</Title>
			<StaticImage src='../../images/team-pics/2021-team.webp' alt='2021 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2021 YETI team</p>
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
						<h1>Game</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>about game</p>
					</div>
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							margin: 15,
						}}
					>
						<a href='https://www.youtube.com/watch?v=93Tygo0_O5c'>
							<StaticImage
								src='../../images/game-logos/2011-game-logo.webp'
								alt='Logo Motion Logo'
								width={300}
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=93Tygo0_O5c'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2011 Robot: WAMPA</Title>
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
							src='../../images/robots/wampa-pic.webp'
							alt='Wampa Pic'
							width={300}
						/>
						<iframe
							width='300'
							src='https://www.youtube.com/embed/6ZE9XD22MnU'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								Mecanum drive driven by 4 AndyMark CIMpleboxs one CIM motor each
								(top speed 15 ft/sec)
							</li>
							<li>Scope gripper using a 4 bar linkage connected to a Denso motor</li>
							<li>Arm driven by a single Denso door motor, spring assisted</li>
							<li>
								Three stage lift driven by Fisher Price gearbox winch and industrial
								door slides
							</li>
							<li>
								BB rs380 motor on a belt drive to place game pieces faster
								(installed later)
							</li>
							<li>
								Mini-bot deployment using stretched rubber tubing and drawer slides
								released by a servo
							</li>
							<li>
								Mini-bot speed approximately 1 second climb using hard drive magnets
								and two motors
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

export default TwentyTwentyOne;
