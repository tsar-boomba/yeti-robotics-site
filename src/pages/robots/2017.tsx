import Grid from '@/components/Grid';
import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const TwentySeventeen = () => {
	return (
		<Layout
			title='2017 Season'
			description='The 2017 season for tem 3506, YETI.'
			article={true}
		>
			<Title>2017 Season</Title>
			{/* TODO find actual 2017 team pic */}
			<StaticImage src='../../images/team-pics/2017-team.webp' alt='2017 team' width={512} />
			<p style={{ marginTop: 0, fontSize: '1.5rem' }}>The 2017 YETI team</p>
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
						<h1>The 2017 FRC Game: FIRST STEAMWORKS</h1>
						<p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
							The 2017 FIRST Robotics Competition game, Steamworks, was played by two
							alliances of three teams each who competed on a field by scoring
							wiffleballs. The wiffleballs represent fuel which needs to be taken to a
							simulated boiler which transfers the generated steam into an airship in
							the middle of the field. Each alliance has one airship, which they
							pressurize with steam from the boiler and load with plastic gears from
							the field. At the end of the match, robots attempt to hang on
							team-supplied ropes attached to the airship for additional points.
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
						<a href='https://www.youtube.com/watch?v=EMiNmJW7enI'>
							<StaticImage
								src='../../images/game-logos/2017-game-logo.webp'
								alt='Steamworks Logo'
								width={300}
							/>
						</a>
						<a
							href='https://www.youtube.com/watch?v=EMiNmJW7enI'
							style={{ marginTop: 30, textDecoration: 'underline' }}
						>
							Link to game reveal.
						</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2011 Robot: PERMAFROST</Title>
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
							src='../../images/robots/permafrost-pic.webp'
							alt='Permafrost Pic'
						/>
						<iframe
							width='300'
							src='https://www.youtube-nocookie.com/embed/orVfimozp5c'
							title='YouTube video player'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							style={{ marginTop: 30 }}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px', width: 'clamp(300px, 500px, 100%)' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.5, fontSize: '1.5rem', textAlign: 'left' }}>
							<li>
								Traction wheel tank drive, 6 CIMS, ⅛ in. drop center with corner
								omnis added later
							</li>
							<li>15 ft/s high speed, 18 ft/s low speed</li>
							<li>
								Active claw intake in the front of the robot driven by one RS775
								10:1 Vex Versa Planetary Gearbox to pick up game pieces
							</li>
							<li>
								Storage compartment in the back of the robot to store game pieces
							</li>
							<li>Ejection doors powered by one air cylinder to place gears</li>
							<li>
								Climber with velcro on the winch and at the end of the rope that was
								powered by two RS775 Vex Versa Planetary Gearboxes 30:1
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

export default TwentySeventeen;
