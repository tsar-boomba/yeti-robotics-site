import { PageProps } from 'gatsby';
import React from 'react';
import Layout from '@/components/Layout';
import useSWR from 'swr';
import fetcher from '@/lib/fetch';

const Sponsors: React.FC<PageProps> = () => {
	const { data } = useSWR('/api/tes', fetcher);

	return (
		<Layout title='Sponsors'>
			<h1>Team Sponsors</h1>
			<h1>API TEST</h1>
			<h1>{data ? JSON.stringify(data) : 'loding...'}</h1>
		</Layout>
	);
};

export default Sponsors;
