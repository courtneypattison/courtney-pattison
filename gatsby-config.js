module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
