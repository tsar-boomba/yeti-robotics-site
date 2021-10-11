import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentyEleven = () => {
	return (
		<Layout
			title='2011 Season'
			description='The 2011 season for team 3506, YETI'
			article={true}
		>
			<Title>2011 Season</Title>
			<StaticImage src='../../images/team-pics/2011-team.webp' alt='2011 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2011 YETI team</p>
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
						<h1>The 2011 FRC Game: LOGO MOTION</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							In 2011's game, Logo Motion, teams compete to hang plastic tubes shaped
							as FIRST's logo on their pegs during a 2 minute and 15 second match. The
							higher the teams hang their game pieces on their scoring pegs, the more
							points their alliance receives. The match begins with one 15-second
							autonomous period in which robots operate independently of driver inputs
							and must hang Ubertubes to score extra points. For the rest of the
							match, drivers control robots and try to maximize their score by hanging
							as many logo pieces as possible. Any logo piece hung on the same peg as
							an Ubertube receives double points. If teams assemble the logo pieces on
							their scoring pegs to form the FIRST® logo, the points for the entire
							row are doubled. The match ends with robots deploying minibots, small
							electro-mechanical assemblies that are independent of the main robot,
							onto vertical poles. The mini-bots race to the top of the pole to
							trigger a sensor and earn additional bonus points.
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
						<StaticImage src='../../images/robots/wampa-pic.webp' alt='Wampa Pic' />
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/6ZE9XD22MnU'
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
			<Section style={{ border: 0 }}>
				<Title>Awards</Title>
				<h1>Content coming soon, MATTHEW!</h1>
			</Section>
		</Layout>
	);
};

export default TwentyEleven;
