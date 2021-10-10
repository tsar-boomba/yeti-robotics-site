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
				<Grid style={{ margin: 0 }}>
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
					<div style={{ display: 'grid', placeItems: 'center', margin: 15 }}>
						<StaticImage src='../../images/qcra-logo.webp' alt='ph' width={100} />
						<a>link to game</a>
					</div>
				</Grid>
			</Section>
			<Section style={{ borderTop: 0 }}>
				<Title>Our 2021 Robot: SUBZERO</Title>
				<Grid style={{ margin: 0, alignItems: 'center' }}>
					<div style={{ margin: '0 15px 15px 15px' }}>
						<StaticImage
							src='../../images/robots/subzero-pic.webp'
							alt='subzero Pic'
							width={300}
						/>
					</div>
					<div style={{ margin: '0 15px 15px 15px' }}>
						<h1>Robot Info:</h1>
						<ul style={{ lineHeight: 1.3, fontSize: '1.5rem' }}>
							<li>ph</li>
						</ul>
					</div>
				</Grid>
			</Section>
		</Layout>
	);
};

export default TwentyTwentyOne;
