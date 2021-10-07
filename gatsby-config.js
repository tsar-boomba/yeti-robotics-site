module.exports = {
	siteMetadata: {
		title: 'YETI Robotics',
		titleTemplate: '%s | YETI Robtics',
		description: 'Website for FIRST Robotics team 3506, YETI.',
		url: 'https://www.yetirobotics.org',
		image: './src/images/yeti-logo-with-text.png',
	},
	plugins: [
		{
			// allows analyzing of the build bundle, for optimizing bundle size
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
		},
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-styled-components',
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					placeholder: 'blurred',
				},
			},
		},
		`gatsby-transformer-sharp`,
		{
			// allows access to files through graphql queries
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'events',
				path: `${__dirname}/events`,
				ignore: ['**/.*'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images`,
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-preact',
		{
			// set-up for icon and PWA
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'YETI Robotics',
				short_name: 'YETI',
				start_url: '/',
				display: 'minimal-ui',
				background_color: '#54B6E5',
				theme_color: '#54B6E5',
				icon: 'static/icon.png',
			},
		},
	],
};
