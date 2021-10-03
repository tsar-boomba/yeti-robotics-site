import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { EventData } from '@/components/EventsDisplay/types';
import EventLayout from '@/components/Layout/EventLayout';

interface PageData {
	data: {
		mdx: EventData & { body: string };
	};
}

const Event = ({ data }: PageData) => {
	return (
		<EventLayout title={data.mdx.frontmatter.title} article={true}>
			<summary>
				<div>
					<h1>{data.mdx.frontmatter.title}</h1>
					<h2>
						{new Date(data.mdx.frontmatter.date).toLocaleString(undefined, {
							month: 'long',
							day: '2-digit',
							year: 'numeric',
						})}
					</h2>
					<h2>Location: {data.mdx.frontmatter.location}</h2>
				</div>
			</summary>
			<main>
				<MDXRenderer>{data.mdx.body}</MDXRenderer>
			</main>
		</EventLayout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date
				time
				location
			}
			id
			slug
			body
		}
	}
`;

export default Event;
