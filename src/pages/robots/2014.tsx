import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyFourteen = () => {
	return (
		<Layout
			title='2014 Season'
			description='The 2014 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2014 Season</Title>
			<StaticImage src='../../images/team-pics/2014-team.webp' alt='2014 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2014 YETI team</p>
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
						<h1>The 2014 FRC Game: AERIAL ASSIST</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							In 2014's game, robots would try to score points by launching yoga sized
							balls in large overhead or floor level goals located at either end of
							the field. Additionally, a 5’ tall truss was located in the middle of
							the field where the robots would pass the ball to another robot or human
							player. The goal of passing the ball was to have it in possession of a
							robot or human player in as many divisions of the field as possible.
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
						<a href='https://www.youtube.com/watch?v=f5zWzICG5to'>
							<StaticImage
								src='../../images/game-logos/2014-game-logo.webp'
								alt='Aerial Assist Logo'
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=f5zWzICG5to'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2014 Robot: FLUFFY</Title>
				<Grid style={{ margin: 0, alignItems: 'center' }}>
					<div
						style={{
							margin: '0 15px 15px 15px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<StaticImage src='../../images/robots/fluffy-pic.webp' alt='fluffy Pic' />
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
								AndyMark Sheet metal chassis with Mecanum drive geared at 15-18 ft/s
							</li>
							<li>Forklift style ball intake corral driven by geared AM PG71</li>
							<li>
								Air powered catapult driven by 4 air cylinders that stretch speargun
								tubing{' '}
							</li>
							<li>
								Short shot pass – 1ft -5 ft range air assisted or simple no assist
								pass
							</li>
							<li>
								Long shot pass range – 35 ft range for trussing, no high goal shots
							</li>
							<li>
								Catch frame on top to catch the ball when the ball is shot towards
								our robot by other teams
							</li>
							<li>
								Plexiglass frame to block shots and keep the ball contained by our
								robot so no theft of the game piece occurred
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

export default TwentyFourteen;
