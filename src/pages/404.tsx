import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '@/components/Layout';

const NotFound: React.FC<PageProps> = () => (
	<Layout title='Not Found'>
		<h1>Sorry, page not found.</h1>
	</Layout>
);

export default NotFound;
