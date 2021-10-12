import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@/components/Grid';
import { colors } from '@/styles/colors';

const TechnicalMentors: React.FC<PageProps> = () => {
	return (
		<Layout title='Technical Mentors' description='Technical mentors of YETI Robotics.'>
			<Title>Technical Mentors</Title>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/robbie-hoyler-pic.webp'
					alt='Robbie Hoyler'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						width: 'clamp(300px, 600px, 100%)',
						flexGrow: 1,
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Robbie Hoyler</Title>
					<h2 style={{ marginTop: 0 }}>Since 2010</h2>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						Robbie has been doing FIRST Robotics for a long time. From 2003-2007 Robbie
						participated as a student on team 587 in Hillsborough, NC. Upon graduation
						in 2007 he became a mentor and started getting involved with other teams in
						the Charlotte area but there were no real sustainable FRC teams until 2010
						when he became a founding mentor with 3506 YETI Robotics. Robbie has worked
						in the industry as a sheet metal design engineer as well as an educator.
						Currently Robbie is the lead technical mentor for YETI Robotics and keeps
						the machine shop up to speed for the Queen City Robotics Alliance. For a day
						job he works as a SOLIDWORKS Application Engineer for TPM in Charlotte where
						he fills a current role as a FEA and CFD simulation expert using the
						software to educate engineers on better product design and failure
						criterion. Starting with the 2019-2020 season Robbie will only be a
						technical mentor, but also the team Lead Mentor.
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/antoine-campbell-pic.webp'
					alt='Antoine Campbell'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
						width: 'clamp(300px, 600px, 100%)',
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Antoine Campbell</Title>
					<h2 style={{ marginTop: 0 }}>Since 2013</h2>
					<p
						style={{
							fontSize: '1.3rem',
							flexGrow: 1,
						}}
					>
						Antoine Campbell has been a programming mentor with the team for the last 4
						years. He is a Manager at CapTech Consulting where he works as a full-stack
						developer and an Android developer. Each year Antoine helps train new
						students, teaching Java classes open to all teams and Web Development during
						the off-season. Antoine holds a Bachelors and a Masters in Computer Science
						from The University of North Carolina at Charlotte. In his spare time,
						Antoine enjoys long-distance running, watching NFL football, and building
						robots with his 11-year-old son.
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage src='../../images/mentors/bruce-evans-pic.webp' alt='Bruce Evans' />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
						width: 'clamp(300px, 600px, 100%)',
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Bruce Evans</Title>
					<h2 style={{ marginTop: 0 }}>Since 2016</h2>
					<p style={{ fontSize: '1.3rem', flexGrow: 1 }}>
						Mr. Evans is a native of Western Massachusetts, where he grew up playing
						baseball and dreaming of flying on the space shuttle. He attended Rensselaer
						Polytechnic Institute (RPI) in Troy, NY, and graduated with a B.S. degree in
						Mechanical Engineering. After graduation he lived in the Washington, D.C.,
						area for 10 years, where he was blessed to meet and marry his lovely wife
						Amy and worked for a telecommunications research company, where among other
						things, they designed a satellite transmitter/receiver that flew on the
						International Space Station. He is a father to one son, Colin, and has lived
						in Matthews, NC, for the past 15 years, where he currently works as a
						software configuration and release manager for TIAA. Mr. Evans is the new
						Outreach Coordinator and a Mechanical Fabrication and Electrical team mentor
						for Team 3506, YETI Robotics.
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/kevin-colwell-pic.webp'
					alt='Kevin Colwell'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
						width: 'clamp(300px, 600px, 100%)',
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Kevin Colwell</Title>
					<h2 style={{ marginTop: 0 }}>Since 2016</h2>
					<p style={{ fontSize: '1.3rem', flexGrow: 1 }}>
						Kevin has a long history with FIRST and his passion to pass on information
						he learned to the next generation drove him to mentor for YETI in the last
						year. Kevin started as an FRC student in 2009 and graduated from team 435,
						Robodogs, in 2012. He has been a volunteer for FIRST since 2011 and decided
						to mentor for YETI for the 2018 season. On YETI he is an electrical and
						programming mentor and outside of YETI he works as a Windows Linux server
						admin at UNCC and likes to program, build computers, and play games. His
						advice to new students is to “look up to veteran members, they made the same
						mistakes so that you wouldn’t.”
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage
					src='../../images/mentors/sam-perlmutter-pic.webp'
					alt='Sam Perlmutter'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
						width: 'clamp(300px, 600px, 100%)',
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Sam Perlmutter</Title>
					<h2 style={{ marginTop: 0 }}>Since 2017</h2>
					<p style={{ fontSize: '1.3rem', flexGrow: 1 }}>
						With a not so complex history with FIRST, Sam joined YETI 6 years ago and
						has been mentoring for 2 years. He joined YETI with no certain interests and
						through the years has learned to master programming and become the lead
						programming student mentor. He decided to mentor because finishing high
						school, he was still in Charlotte and figured YETI could use his programming
						expertise. He has an internship at PunchTechInc which, thanks to YETI. he
						found out about and qualified due to his expertise. Upon asking him of his
						hobbies outside of school, Sam responded with, “Outside of Robotics?” His
						advice to new students is to “Float around a bit before choosing a field.”
					</p>
				</div>
			</Grid>
			<Grid style={{ width: 'clamp(300px, 1100px, 100%)' }}>
				<StaticImage src='../../images/mentors/chris-putnam-pic.webp' alt='Chris Putnam' />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 10,
						backgroundColor: colors.primaryTransparent,
						flexGrow: 1,
						width: 'clamp(300px, 600px, 100%)',
					}}
				>
					<Title style={{ margin: '0 0 10px 0' }}>Chris Putnam</Title>
					<h2 style={{ marginTop: 0 }}>Since 2018</h2>
					<p style={{ fontSize: '1.3rem', flexGrow: 1 }}>
						Mr. Putman, is one of our newest mentors with FIRST experience. He decided
						to mentor when his son joined the team. Mr. Putnam runs an IT company
						(ComplS2, LLC) and shares his expertise with our students as a programming
						mentor. His advice to new students is to “learn as much as you can, it will
						pay off.”
					</p>
				</div>
			</Grid>
		</Layout>
	);
};

export default TechnicalMentors;
