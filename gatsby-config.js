module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "2236796261", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
        },
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Courtney Pattison`,
        icon: `src/images/icon.png`,
        short_name: `Courtney`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyCsZuNGA0ZeH0RqzDJVda5QCqwPQOkOZjc",
          authDomain: "courtney-pattison.firebaseapp.com",
          databaseURL: "https://courtney-pattison.firebaseio.com",
          projectId: "courtney-pattison",
          storageBucket: "courtney-pattison.appspot.com",
          messagingSenderId: "998345040255",
          appId: "1:998345040255:web:47513a02d51e7e86eb7a4a",
        },
      },
    },
  ],
  siteMetadata: {
    title: `Courtney Pattison`,
  },
};
