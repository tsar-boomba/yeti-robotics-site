module.exports = {
	siteMetadata: {
		title: 'YETI Robotics',
		titleTemplate: '%s | YETI Robtics',
		description: 'Website for FIRST Robotics team 3506, YETI.',
		url: 'https://www.yetirobotics.org',
		image: '/images/yeti-logo-with-text.png',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
			options: {
				devMode: true,
			},
		},
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
		'gatsby-plugin-preact',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'YETI Robotics',
				short_name: 'YETI',
				start_url: '/',
				icon: 'src/images/icon.png',
			},
		},
	],
};
