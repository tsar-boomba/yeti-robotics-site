import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Grid from '@/components/Grid';
import { colors } from '@/styles/colors';
import PeopleIcon from '../../images/svg/people-reached.svg';
import { StaticImage } from 'gatsby-plugin-image';

interface OutreachCardProps {
	title: string;
	since: number; //year
	pplReached: number;
}

const OutreachCard: React.FC<OutreachCardProps> = ({ title, since, pplReached, children }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				backgroundColor: colors.secondary,
				boxShadow: colors.defaultShadow,
				padding: 10,
				margin: '0 15px 15px 15px',
				width: 'clamp(130px, 500px, 100%)',
			}}
		>
			<h1>Since {since}</h1>
			<Title style={{ color: colors.primary, fontSize: '2.5rem', marginTop: 0 }}>
				{title}
			</Title>
			<div style={{ display: 'grid', placeItems: 'center', flexGrow: 1 }}>{children}</div>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					padding: 5,
					borderTop: '2px solid #000000',
					width: '100%',
				}}
			>
				<PeopleIcon width='80' height='80' fill={colors.primary} />
				<h2 style={{ marginLeft: 20 }}>
					<h1 style={{ color: colors.primary, margin: 0 }}>{pplReached}</h1> People
					Reached
				</h2>
			</div>
		</div>
	);
};

const Outrach: React.FC<PageProps> = () => {
	return (
		<Layout
			title='Outreach'
			description='The outreach done by YETI Robotics to spread STEM and help communities.'
		>
			<Title>Outreach</Title>
			<p
				style={{
					fontSize: '2rem',
					width: 'clamp(300px, 1500px, 100%)',
					padding: '0 10px 10px 10px',
					textAlign: 'center',
				}}
			>
				Like many Hall of Fame teams, YETI aspires to consistently deliver Chairman’s worthy
				performances. Our mission of sharing the win includes bridging the gap between the
				empowered and the powerless. We champion our cause to bring unique and tailored STEM
				experiences to youth across borders and barriers. As Charlotte’s (CLT) inaugural FRC
				team, we empower the academically left-behind and neglected groups i.e. girls,
				refugees, homeless, impoverished, ESL students, and most recently, thousands of
				students from India.
			</p>
			<Grid style={{ width: 'clamp(300px, 1600px, 100%)' }}>
				<OutreachCard title='Project 658' since={2011} pplReached={150}>
					<StaticImage src='../../images/outreach/project-658.webp' alt='Project 658' />
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						YETI’s initiative to inspire and welcome people across borders is fondly
						referred to as Going Global Local. Many refugee students hesitate to
						actively engage in traditional classroom settings due to the culture shock,
						economic situation and the language barrier. Since 2015, we have worked with
						Project 658, a local refugee support organization. We hosted STEM summer
						camps, ran a winter clothing drive, and built an irrigation system to grow
						produce for The Diner at Proj. 658. This year, we started teaching STEM
						enrichment classes every other week using Code.org for 3-5th grade and Maker
						Camp activities for K-2nd grade. Our continued efforts with Proj. 658, were
						noticed by the Comp-Sci Teachers Assoc. and Code.org who recently awarded us
						the Champions of Computer Science for Broadening Participation Award.
					</p>
				</OutreachCard>
				<OutreachCard title='FIRST Family' since={2011} pplReached={8000}>
					<StaticImage src='../../images/outreach/referee.webp' alt='FLL referee' />
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						FIRST teams are like family for YETI and we realize that sustainability is
						an important challenge. YETI rises to this challenge by nurturing our teams
						every step of the way. Last year we started team 6894, Iced Java, and along
						with mentoring them, we also shared our knowledge and workspace in hopes
						that they would emulate us. Given our history of helping teams and our
						recently released informational YouTube series, YETI Tips, that supports and
						guides new FRC teams to a sustainable future, YETI was selected for the
						TEAMS Grant to mentor FRC team 7815. To date, we have spent $100,000+
						helping other FIRST teams cover registration expenses, food at competitions,
						rent expenses, and by hosting off-season and official tournaments for FIRST
						teams of all levels.
					</p>
				</OutreachCard>
				<OutreachCard title='Pink Piepline' since={2012} pplReached={40}>
					<StaticImage
						src='../../images/outreach/pink-pipeline.webp'
						alt='Pink Pipeline'
					/>
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						YETI addresses the absence of female presence by encouraging girls to
						overcome gender bias and strive for their passions by seizing opportunities.
						Our first year, YETI was 97% male, so we created and maintain the Pink
						Pipeline, a series of all-girl Jr. FLL, FLL, and FTC teams designed to
						involve girls in engineering by providing a streamlined, enriching pathway
						to pursue STEM in higher education and beyond. Our Pink Pipeline
						consistently provides young women with a solid base of engineering skills.
						The Pink Pipeline’s success increased the female YETI population by 700%,
						attracting the attention of Ashley Maria, director of Pioneers in Skirts, a
						recently released documentary. Pioneers in Skirts focuses on our former team
						captains’ journeys as women in STEM and the struggles women face when
						entering the workforce.
					</p>
				</OutreachCard>
				<OutreachCard title='Prepare' since={2017} pplReached={2810}>
					<StaticImage
						src='../../images/outreach/prepare-students.webp'
						alt='Prepare students'
					/>
					<p
						style={{
							fontSize: '1.3rem',
							textAlign: 'center',
							lineHeight: 1.2,
							marginTop: 10,
						}}
					>
						Expanding on the YETI Global initiative, our co-captain created PREPARE, a
						501(c)3 that focuses on providing public school students in rural Indian
						villages access to quality STEM education. In India, only the poorest attend
						public schools which lack funds to provide adequate pre-college STEM
						education. When these kids attend college with private-schooled peers, they
						fall behind due to technological disadvantages. In a country that produces
						more graduates with STEM majors than STEM jobs, class rank is vital to
						getting a job. PREPARE, as the name suggests, better prepares these public
						schoolers to compete with their private school peers in college. PREPARE
						trains and hires teachers to teach a carefully curated 4-year STEM
						curriculum developed by YETI students and has provided over $60,000 worth of
						salaries and materials (like laptops, KNEX kits, and EV3 sets) with the help
						of YETI. Over the last 2 years, PREPARE has inducted 7 schools totaling
						2,810 students. This year, the Government of Andhra Pradesh, India agreed to
						provide 70% of the costs and requested the induction of 1,300 schools. The
						self-sustaining nature of this program will allow nearly 100 new schools to
						be inducted by the end of this year. Through PREPARE, YETI wishes to break
						the rampant cycle of poverty in these farming villages where the public
						education system fails to teach 21st-century skills vital to present-day
						employability.
					</p>
				</OutreachCard>
				<OutreachCard title={"A Child's Place"} since={2018} pplReached={30}>
					<StaticImage
						src='../../images/outreach/childs-place.webp'
						alt='Child painting'
					/>
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						It is imperative for children to have their physiological needs met before
						they can focus on learning. NC public schools reported that nearly 30,000
						students are recognized as homeless under the McKinney Vento Act. YETI
						contacted local grocery stores and hosted donation drives for hygiene
						products to provide these students with some of their basic needs. We also
						partnered with A Child’s Place to initiate the Bag4Bag program. When a
						customer purchases a YETI drawstring bag on our online store, we donate a
						bag of hygiene products to homeless students at the Governor’s Village STEM
						Academy. With their physiological needs met, students will be much more
						engaged during the STEM programs we will implement in the fall. YETI’s goal
						is to see disadvantaged students pursue STEM careers and break the poverty
						cycle.
					</p>
				</OutreachCard>
				<OutreachCard title='Girl Scouts' since={2018} pplReached={200}>
					<StaticImage
						src='../../images/outreach/merit-badges.webp'
						alt="Girl Scout's merit badges"
					/>
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						It is imperative for children to have their physiological needs met before
						they can focus on learning. NC public schools reported that nearly 30,000
						students are recognized as homeless under the McKinney Vento Act. YETI
						contacted local grocery stores and hosted donation drives for hygiene
						products to provide these students with some of their basic needs. We also
						partnered with A Child’s Place to initiate the Bag4Bag program. When a
						customer purchases a YETI drawstring bag on our online store, we donate a
						bag of hygiene products to homeless students at the Governor’s Village STEM
						Academy. With their physiological needs met, students will be much more
						engaged during the STEM programs we will implement in the fall. YETI’s goal
						is to see disadvantaged students pursue STEM careers and break the poverty
						cycle.
					</p>
				</OutreachCard>
				<OutreachCard title='ESL' since={2018} pplReached={25}>
					<StaticImage
						src='../../images/outreach/smiling-students.webp'
						alt='Group of smiling students'
					/>
					<p
						style={{
							fontSize: '1.5rem',
							textAlign: 'center',
							lineHeight: 1.3,
							marginTop: 10,
						}}
					>
						YETI is committed to helping underserved groups like ESL (English as a
						Second Language) students. Our meetings with several ESL coordinators
						revealed that for ESL students, the language barrier inevitably translates
						into an educational barrier. They often hesitate to ask for clarification in
						normal classroom settings with native English speakers for fear of ridicule.
						In an effort to simplify course load, these students are discouraged by
						counselors and teachers from taking honors and college-level classes,
						especially in STEM. While understanding concepts is well within their mental
						capabilities, they often need one on one instruction or a more
						tactile/visual teaching method to gain mastery. YETI students work closely
						with the staff at these schools to create an environment that introduces ESL
						students to the fun of Computer Science. Our students collaborated with STEM
						teachers to tailor a custom curriculum relying heavily on tactile/visual
						rather than verbal instruction. These students will be less hesitant to take
						STEM courses and extracurriculars in the future.
					</p>
				</OutreachCard>
			</Grid>
		</Layout>
	);
};

export default Outrach;
