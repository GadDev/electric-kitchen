const dotenv = require('dotenv')
const path = require(`path`)
if (process.env.NODE_ENV !== 'production') {
  dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
})
}

module.exports = {
  siteMetadata: {
    title: `Electric Kitchen Cambodia`,
    description: `  `,
    author: `Alexandre Gadaix`,
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
    "@contentful/gatsby-transformer-contentful-richtext",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "4rj7hd2fdkpg",
        accessToken: "HQXJDUNIm4XIUVVMWJCrTeKhlGVOn9zecyeYOzlVMpA",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `6koo75`, // Your Instagram
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
