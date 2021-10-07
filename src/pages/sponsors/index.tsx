import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Grid from '@/components/Grid';
import { StaticImage } from 'gatsby-plugin-image';

const Sponsors: React.FC<PageProps> = () => {
	return (
		<Layout title='Sponsors'>
			<Title>Sponsors</Title>
			<Grid style={{ width: '100%', marginTop: 0 }}>
				<h1
					style={{
						fontSize: '4rem',
						backgroundColor: '#E5E4E2',
						width: '100%',
						textAlign: 'center',
						padding: 30,
					}}
				>
					Platinum Sponsors
				</h1>
				<a href='https://www.superficiamerica.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/superfici-logo.webp'
						alt='Superfici Logo'
					/>
				</a>
				<a href='https://www.microsoft.com/en-us/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/microsoft-logo.png'
						alt='Microsoft Logo'
						height={300}
					/>
				</a>
				<a href='https://www.collinsaerospace.com/'>
					<StaticImage
						src='../../images/sponsors/collins-logo.webp'
						alt='Collins AeroSpace Logo'
					/>
				</a>
			</Grid>
			<Grid style={{ width: '100%' }}>
				<h1
					style={{
						fontSize: '4rem',
						backgroundColor: '#FFD700',
						width: '100%',
						textAlign: 'center',
						padding: 30,
					}}
				>
					Gold Sponsors
				</h1>
				<div style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/asg-logo.png'
						alt='Aviation Services Group Logo'
					/>
				</div>
				<a href='https://www.basf.com/us/en.html' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/basf-logo.png'
						alt='BASF Logo'
						height={200}
					/>
				</a>
				<a href='https://frontiercapital.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/frontier-capital-logo.webp'
						alt='Frontier Capital Foundation Logo'
					/>
				</a>
			</Grid>
			<Grid style={{ width: '100%' }}>
				<h1
					style={{
						fontSize: '4rem',
						backgroundColor: '#DDDCDC',
						width: '100%',
						textAlign: 'center',
						padding: 30,
					}}
				>
					Silver Sponsors
				</h1>
				<a href='https://www.orthocarolina.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/ortho-carolina-logo.webp'
						alt='Ortho Carolina Logo'
					/>
				</a>
				<a href='https://www.drjosephinc.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/drjoeseph-logo.webp'
						alt='Dr. Joeseph Logo'
					/>
				</a>
				<a href='https://www.solidworks.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/solidworks-logo.png'
						alt='Solidworks Logo'
					/>
				</a>
				<a href='https://fab-tec.com/' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/fabtech-logo.webp' alt='Fab-Tec Logo' />
				</a>
				<a href='https://piedmontng.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/piedmont-ng-logo.svg'
						alt='Piedomont Natural Gas Logo'
					/>
				</a>
				<a href='https://www.deere.com/en/index.html' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/john-deere-logo.webp'
						alt='John Deere Logo'
					/>
				</a>
				<a href='https://www.transbotics.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/transbotics-logo.webp'
						alt='Transbotics Logo'
					/>
				</a>
				<a href='https://new.siemens.com/us/en.html' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/siemens-logo.webp' alt='Siemens Logo' />
				</a>
				<a href='https://www.vanburenlaw.com/' style={{ padding: 30 }}>
					<StaticImage
						src='../../images/sponsors/van-buren-law-logo.webp'
						alt='Van Buren Law Logo'
					/>
				</a>
			</Grid>
			<Grid style={{ width: '100%' }}>
				<h1
					style={{
						fontSize: '4rem',
						backgroundColor: '#CD7F32',
						width: '100%',
						textAlign: 'center',
						padding: 30,
					}}
				>
					Bronze Sponsors
				</h1>
				<a href='https://www.aig.com/' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/aig-logo.webp' alt='AIG Logo' />
				</a>
				<a href='https://www.bankofamerica.com/' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/bank-of-america-logo.webp' alt='Bank of America Logo' />
				</a>
				<a href='https://www.carotek.com/' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/carotek-logo.webp' alt='Carotek Logo' />
				</a>
				<a href='https://www.tiaa.org/public/index.html' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/tiaa-logo.webp' alt='TIAA Logo' />
				</a>
				<a href='https://www.womblebonddickinson.com/us' style={{ padding: 30 }}>
					<StaticImage src='../../images/sponsors/womble-bond-dickinson-logo.webp' alt='Womble bond Dickinson Logo' />
				</a>
			</Grid>
		</Layout>
	);
};

export default Sponsors;
