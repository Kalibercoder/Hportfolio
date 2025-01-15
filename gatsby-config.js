module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: "H1d40wUTdY6-jH01Ypnbt4JotZ5ltExMAf9e8mD6JAc",
        spaceId: "zfjbahldkvn6"
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
  ]
};