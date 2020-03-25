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
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://fullspectrumprocessing.us4.list-manage.com/subscribe/post?u=6548501c9103012c6ee746617&amp;id=5de09f95ed",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
        fileName: true,
        //Add any options here
        //refer to => https://www.styled-components.com/docs/tooling#babel-plugin//
      },
    },
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
        name: `Hemp Up - A CBD Wellness Company`,
        short_name: `Hemp Up`,
        start_url: `/`,
        background_color: `#e9DeCe80`,
        theme_color: `#4c7448`,
        display: `minimal-ui`,
        icon: `src/images/hempUpLogo.png`, // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
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
    `gatsby-plugin-offline`,
  ],
}
