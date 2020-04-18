module.exports = {
  siteMetadata: {
    title: "Felix Sargent's Resume",
    author: "Felix Sargent",
    description: "Felix Sargent's Resume",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/favicons/android-chrome-192x192.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Source Sans Pro",
              variants: ["300", "400", "500"],
              fontDisplay: "swap",
            },
          ],
        },
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Source Sans Pro"],
        },
      },
    },
  ],
};
