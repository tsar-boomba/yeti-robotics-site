import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import EventsDisplay from '../components/EventsDisplay';
import Slideshow from '@/components/Slideshow';

// importing slideshow images
import picture1 from '@/images/home/2019-team-pic.jpg';
import picture2 from '@/images/home/2021-scrap-individual-pic.jpg';
import picture3 from '@/images/home/2021-scrap-group-pic.jpg';
import paavan from '@/images/home/PAAVAN-hearts-hearts.jpg';

const Home: React.FC<PageProps> = () => {
	return (
		<Layout title='Home' description='Home page for YETI Robotics'>
			<Slideshow images={[picture1, picture2, picture3, paavan]} />
			<EventsDisplay />
		</Layout>
	);
};

export default Home;
