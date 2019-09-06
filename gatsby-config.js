module.exports = {
  siteMetadata: {
    title: `an4morph`,
    description: `This is my resume, portfolio and contacts`,
    author: `@an4morph`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#64a9ff`,
        theme_color: `#64a9ff`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio-pages`,
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
