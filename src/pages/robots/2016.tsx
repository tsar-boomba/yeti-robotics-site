import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentySixteen = () => {
	return (
		<Layout
			title='2016 Season'
			description='The 2016 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2016 Season</Title>
			<StaticImage src='../../images/team-pics/2016-team.webp' alt='2016 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2016 YETI team</p>
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
						<h1>The 2016 FRC Game: FIRST STRONGHOLD</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							The 2016 FIRST Robotics Competition, Stronghold, was played by two
							alliances of three teams each. The goal was to breach their opponents’
							defenses, known as outer works, and capture the tower by firing
							'boulders' and surrounding or scaling the tower using rungs.
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
						<a href='https://www.youtube.com/watch?v=VqOKzoHJDjA'>
							<StaticImage
								src='../../images/game-logos/2016-game-logo.webp'
								alt='Stronghold Logo'
								width={300}
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=VqOKzoHJDjA'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2011 Robot: BLACK ICE</Title>
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
							src='../../images/robots/black-ice-pic.webp'
							alt='Black Ice Pic'
						/>
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/-IKIAGBdE98'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								Pneumatic 6WD West Coast Style tank drive, 6 CIMS with pneumatic
								shifters19ft/s High, 9ft/s Low
							</li>
							<li>
								Variable intake arm pivoted by one BAG Vex VersaPlanetary Gearbox
								30:1 to grab ball and damage defenses of Stronghold
							</li>
							<li>
								Roller bar built into intake to suck ball in while pinched against
								the bumper driven by BAG VexVersaPlanetary Gearbox 10:1
							</li>
							<li>
								Shooter driven by 2 Mini CIMS and pivoted by a small gearbox or air
								cylinder (design changed through the season)
							</li>
							<li>
								Extending scissor lift climber deployed by stretched spear gun
								tubing, 6 second climb to full 6ft height
							</li>
							<li>
								Climbing Winch made from MiniCim Vex VersaPlanetary Gearbox 60:1 and
								aluminum spool with air brake to prevent falling. Dyneema winch
								string that controlled the extension and retraction of the scissor
								lift
							</li>
							<li>
								Could quickly damage all defenses from the front besides the
								drawbridge and sally port (could backdoor quickly)
							</li>
							<li>Frame 14 inches tall</li>
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

export default TwentySixteen;
