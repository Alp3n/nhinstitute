module.exports = {
  siteMetadata: {
    title: `Nutrition Health Institute`,
    description: ` TenFertil On to suplement diety dla mężczyzn starających się o dzieci.`,
    author: `nhinstitute.pl`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `png`,
        path: `${__dirname}/src/images/png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jpg`,
        path: `${__dirname}/src/images/jpg`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `people`,
        path: `${__dirname}/src/content/people`,
      },
    },
    { resolve: `gatsby-plugin-mdx`, extenstions: [`.mdx`, `.md`] },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tenfertil-on`,
        short_name: `tenfertil`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
