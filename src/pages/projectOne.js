
import * as React from "react"
import Navigation from "../components/navigation"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const { title, image, descriptiontext } = data.contentfulProjectpage
  const imageData = getImage(image)
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
        <h1 style={{ color: 'white' }}>{title}</h1>
              <h2 style={{ color: 'white' }}> {descriptiontext}</h2>
              {imageData ? (
                <GatsbyImage image={imageData} alt='' style={{ height: 300 }} />
              ) : (
                <p style={{ color: 'white' }}>Game GIF not available</p>
              )}
    </main>
  )
}

export const query = graphql`
  query {
    contentfulProjectpage {
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
       descriptiontext
    }
  }
`

export default IndexPage