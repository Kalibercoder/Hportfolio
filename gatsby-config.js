
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      accessToken: "MQr1684oFqZKPG15ZWTGwy2sN9dn6dU06-189uGd9qg",
      spaceId: "zfjbahldkvn6"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};