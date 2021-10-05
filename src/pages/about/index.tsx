import Layout from '@/components/Layout';
import React from 'react';
import { PageProps } from 'gatsby';
import Title from '@/components/Title';

const About: React.FC<PageProps> = () => {
	return (
		<Layout title='About' description='About YETI Robotics'>
			<Title>About YETI</Title>
		</Layout>
	);
};

export default About;
