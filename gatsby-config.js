module.exports = {
	siteMetadata: {
		title: 'YETI Robotics',
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-styled-components',
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'events',
				path: `${__dirname}/src/pages/events`,
				ignore: ['**/.*'],
			},
		},
		'gatsby-plugin-mdx',
	],
};
