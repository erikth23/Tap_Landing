require(`dotenv`).config()

module.exports = {
	siteMetadata: {
		title: "Tap Tech Systems",
		description: "Tap Tech Systems Landing Page",
		siteUrl: process.env.SITE_URL || "http://localhost:8000"
	},
	plugins: [
		"@reflexjs/gatsby-theme-base",
		"@reflexjs/gatsby-theme-post", {
			resolve: "@reflexjs/gatsby-plugin-metatags",
			options: {
				types: [`Page`, `Post`]
			}
		}
	]
}
