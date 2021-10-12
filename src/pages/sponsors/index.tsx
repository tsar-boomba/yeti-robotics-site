import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Grid from '@/components/Grid';
import { StaticImage } from 'gatsby-plugin-image';

const Sponsors: React.FC<PageProps> = () => {
	return (
		<Layout title='Sponsors' description='Sponsors of YETI Robotics'>
			<Title>Sponsors</Title>
			<h1
				style={{
					fontSize: '4rem',
					backgroundColor: '#E5E4E2',
					width: '100vw',
					textAlign: 'center',
					padding: 30,
				}}
			>
				Platinum Sponsors
			</h1>
			<Grid style={{ marginTop: 0 }}>
				<a href='https://www.superficiamerica.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/superfici-logo.webp'
						alt='Superfici Logo'
					/>
				</a>
				<a href='https://www.microsoft.com/en-us/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/microsoft-logo.png'
						alt='Microsoft Logo'
						height={300}
					/>
				</a>
				<a href='https://www.collinsaerospace.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/collins-logo.webp'
						alt='Collins AeroSpace Logo'
					/>
				</a>
			</Grid>
			<h1
				style={{
					fontSize: '4rem',
					backgroundColor: '#FFD700',
					width: '100vw',
					textAlign: 'center',
					padding: 30,
				}}
			>
				Gold Sponsors
			</h1>
			<Grid>
				<div style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/asg-logo.png'
						alt='Aviation Services Group Logo'
					/>
				</div>
				<a href='https://www.basf.com/us/en.html' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/basf-logo.png'
						alt='BASF Logo'
						height={200}
					/>
				</a>
				<a href='https://frontiercapital.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/frontier-capital-logo.webp'
						alt='Frontier Capital Foundation Logo'
					/>
				</a>
			</Grid>
			<h1
				style={{
					fontSize: '4rem',
					backgroundColor: '#DDDCDC',
					width: '100vw',
					textAlign: 'center',
					padding: 30,
				}}
			>
				Silver Sponsors
			</h1>
			<Grid>
				<a href='https://www.orthocarolina.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/ortho-carolina-logo.webp'
						alt='Ortho Carolina Logo'
					/>
				</a>
				<a href='https://www.drjosephinc.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/drjoeseph-logo.webp'
						alt='Dr. Joeseph Logo'
					/>
				</a>
				<a href='https://www.solidworks.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/solidworks-logo.png'
						alt='Solidworks Logo'
					/>
				</a>
				<a href='https://fab-tec.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/fabtech-logo.webp' alt='Fab-Tec Logo' />
				</a>
				<a href='https://piedmontng.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/piedmont-ng-logo.svg'
						alt='Piedomont Natural Gas Logo'
					/>
				</a>
				<a
					href='https://www.deere.com/en/index.html'
					target='_blank'
					style={{ padding: 30 }}
				>
					<StaticImage
						src='../../images/sponsors/john-deere-logo.webp'
						alt='John Deere Logo'
					/>
				</a>
				<a href='https://www.transbotics.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/transbotics-logo.webp'
						alt='Transbotics Logo'
					/>
				</a>
				<a
					href='https://new.siemens.com/us/en.html'
					target='_blank'
					style={{ padding: 30 }}
				>
					<StaticImage src='../../images/sponsors/siemens-logo.webp' alt='Siemens Logo' />
				</a>
				<a href='https://www.vanburenlaw.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/van-buren-law-logo.webp'
						alt='Van Buren Law Logo'
					/>
				</a>
			</Grid>
			<h1
				style={{
					fontSize: '4rem',
					backgroundColor: '#CD7F32',
					width: '100vw',
					textAlign: 'center',
					padding: 30,
				}}
			>
				Bronze Sponsors
			</h1>
			<Grid>
				<a href='https://www.aig.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/aig-logo.webp' alt='AIG Logo' />
				</a>
				<a href='https://www.bankofamerica.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/bank-of-america-logo.webp'
						alt='Bank of America Logo'
					/>
				</a>
				<a href='https://www.carotek.com/' target='_blank' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/carotek-logo.webp' alt='Carotek Logo' />
				</a>
				<a
					href='https://www.tiaa.org/public/index.html'
					target='_blank'
					style={{ padding: 30 }}
				>
					<StaticImage src='../../images/sponsors/tiaa-logo.webp' alt='TIAA Logo' />
				</a>
				<a
					href='https://www.womblebonddickinson.com/us'
					target='_blank'
					style={{ padding: 30 }}
				>
					<StaticImage
						src='../../images/sponsors/womble-bond-dickinson-logo.webp'
						alt='Womble Bond Dickinson Logo'
					/>
				</a>
			</Grid>
		</Layout>
	);
};

export default Sponsors;
