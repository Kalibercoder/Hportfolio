import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const AboutPage = ({ data }) => {
  const { imagethree } = data.contentfulImage
  const imageData = getImage(imagethree)
  return (
    <main style={{ backgroundColor: 'black', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>About page</h1>
      <p style={{ color: 'white' }}>Hello, My name is Theo</p>
      <GatsbyImage image={imageData} alt="" style={{ height: 200 }} />
    </main>
  )
}

export const query = graphql`
  query {
    contentfulImage {
      imagethree {
        gatsbyImageData(layout: CONSTRAINED, width: 200)
      }
    }
  }
`

export default AboutPage