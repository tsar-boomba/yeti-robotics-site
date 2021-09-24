import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
	title?: string;
	description?: string;
	image?: string;
}

const query = graphql`
	query {
		site {
			siteMetadata {
				defaultTitle: title
				titleTemplate
				defaultDescription: description
				siteUrl: url
				defaultImage: image
			}
		}
	}
`;

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
	const { site } = useStaticQuery(query);
	let pathname = '';
	if (typeof location !== 'undefined') pathname = location.pathname;

	const { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage } =
		site.siteMetadata;

	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		image: `${siteUrl}${image || defaultImage}`,
		url: `${siteUrl}${pathname}`,
	};

	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate}>
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			{seo.url && <meta property='og:url' content={seo.url} />}
			{seo.title && <meta property='og:title' content={seo.title} />}
			{seo.description && <meta property='og:description' content={seo.description} />}
			{seo.image && <meta property='og:image' content={seo.image} />}
		</Helmet>
	);
};

SEO.defaultProps = {
	title: null,
	description: null,
	image: null,
};

export default SEO;
