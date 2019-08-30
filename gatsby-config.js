require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const config = require("./content/meta/config")

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.authorName,
    siteUrl: config.siteUrl,
    lamguage: config.siteLanguage,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [
          {
            userAgent: `*`,
            allow: [`/`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hemp-up-cbd`,
        short_name: `hempup`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hempUpLogo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: "gatsby-source-shopify2",
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        verbose: true,
      },
    },
    // !this (optional) plugin enables Progressive Web App + Offline functionality
    // !To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
