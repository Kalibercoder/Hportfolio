import * as React from "react"
import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const { imagetwo } = data.contentfulImagetwo
  const imageData = getImage(imagetwo)

  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Hello</h1>
      <h2 style={{ color: 'white' }}>Welcome to my portfolio</h2>
      <GatsbyImage image={imageData} alt="" style={{ height: 300 }} />
    </main>
  )
}

export const query = graphql`
  query {
    contentfulImagetwo {
      imagetwo {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
`

export default IndexPage