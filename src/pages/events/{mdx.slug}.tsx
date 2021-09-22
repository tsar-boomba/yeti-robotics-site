import Layout from '../../components/Layout';
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Event = ({ data }) => {
	return (
		<Layout>
			<h1>{data.mdx.frontmatter.title}</h1>
			<h2>
				{new Date(data.mdx.frontmatter.date).toLocaleString(undefined, {
					month: 'long',
					day: '2-digit',
					year: 'numeric',
				})}
			</h2>
			<MDXRenderer>{data.mdx.body}</MDXRenderer>
		</Layout>
	);
};

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				date
			}
			body
		}
	}
`;

export default Event;
