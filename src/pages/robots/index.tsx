import { Link, PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { colors } from '@/styles/colors';
import Grid from '@/components/Grid';
import { StaticImage } from 'gatsby-plugin-image';
import { useDimensions } from '@/hooks/useDimensions';

interface RobotCardProps {
	href: string;
	year: number;
	robot: string;
}

const RobotCard: React.FC<RobotCardProps> = ({ href, year, robot, children }) => {
	const { windowWidth } = useDimensions();

	return (
		<Link
			to={href}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				backgroundColor: colors.primary,
				color: colors.secondary,
				padding: 10,
				margin: '0 15px 15px 15px',
				boxShadow: colors.defaultShadow,
			}}
		>
			<Title style={{ borderColor: colors.secondary }}>
				{year} with {robot}
			</Title>
			{/* image goes here */}
			{windowWidth > 500 ? children : null}
			<p style={{ color: '#eaeaea', textAlign: 'center' }}>click to learn more</p>
		</Link>
	);
};

const Robots: React.FC<PageProps> = () => {
	return (
		<Layout title='Robots' description='Past seasons and robots made by YETI Robotics.'>
			<Title>Robots</Title>
			<Grid>
				<RobotCard href='/robots/2019' year={2019} robot='Polaris'>
					<StaticImage
						src='../../images/robots/polaris-cad.webp'
						alt='Plaris Cad'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2018' year={2018} robot='Avalanche'>
					<StaticImage
						src='../../images/robots/avalanche-pic.webp'
						alt='Avalanche Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2017' year={2017} robot='Permafrost'>
					<StaticImage
						src='../../images/robots/permafrost-pic.webp'
						alt='Permafrost Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2016' year={2016} robot='Black Ice'>
					<StaticImage
						src='../../images/robots/black-ice-pic.webp'
						alt='Black Ice Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2015' year={2015} robot='Frostbyte'>
					<StaticImage
						src='../../images/robots/frostbyte-pic.webp'
						alt='Frostbyte Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2014' year={2014} robot='Fluffy'>
					<StaticImage
						src='../../images/robots/fluffy-pic.webp'
						alt='Fluffy Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2013' year={2013} robot='Momo'>
					<StaticImage
						src='../../images/robots/momo-pic.webp'
						alt='Momo Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2012' year={2012} robot='Chompa'>
					<StaticImage
						src='../../images/robots/chompa-pic.webp'
						alt='Chompa Pic'
						height={400}
					/>
				</RobotCard>
				<RobotCard href='/robots/2011' year={2011} robot='Wampa'>
					<StaticImage
						src='../../images/robots/wampa-pic.webp'
						alt='Wampa Pic'
						height={400}
					/>
				</RobotCard>
			</Grid>
		</Layout>
	);
};

export default Robots;
