module.exports = {
	siteMetadata: {
		title: 'YETI Robotics',
		titleTemplate: '%s | YETI Robtics',
		description: 'Website for FIRST Robotics team 3506, YETI.',
		url: 'https://www.yetirobotics.org',
		image: '/images/yeti-logo-with-text.png',
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
				path: `${__dirname}/events`,
				ignore: ['**/.*'],
			},
		},
		'gatsby-plugin-mdx',
		'gatsby-plugin-react-helmet',
	],
};
