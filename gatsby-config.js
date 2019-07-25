require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Hemp Up Test`,
    description: `CBD Wellness Site Testing.`,
    author: `Full Spectrum Processing`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hempUpLogo.png`, // This path is relative to the root of the site.
      },
    },

    {
      resolve: 'gatsby-source-shopify2',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_ACCESS_TOKEN,
        // shopName: 'hempuptest',
        // accessToken:'1087437fc7ba5e6705705deb2121c02e',
        verbose: true,
      },
    },
    // !this (optional) plugin enables Progressive Web App + Offline functionality
    // !To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
