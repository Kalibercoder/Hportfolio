
import * as React from "react"
import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const { titlefour, imagefour, descriptiontextfour } = data.contentfulProjectpage
  const imageData = getImage(imagefour)
  return (
    <main style={{ backgroundColor: 'black', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
        <h1 style={{ color: 'white' }}>{titlefour}</h1>
              <h2 style={{ color: 'white' }}> {descriptiontextfour}</h2>
              {imageData ? (
                <GatsbyImage image={imageData} alt='' style={{ height: 300 }} />
              ) : (
                <p style={{ color: 'white' }}>image not available</p>
              )}
    </main>
  )
}

export const query = graphql`
  query {
    contentfulProjectpage {
      titlefour
      imagefour {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
       descriptiontextfour
    }
  }
`

export default IndexPage