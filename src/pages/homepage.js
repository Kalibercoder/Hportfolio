import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const HomePage = ({ data }) => {
  const { title, image } = data.contentfulHomePage
  const imageData = getImage(image)

  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>{title}</h1>
      <h2 style={{ color: 'white' }}>Welcome to my portfolio</h2>
      <GatsbyImage image={imageData} alt={title} style={{ height: 100 }} />
    </main>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 100)
      }
    }
  }
`

export default HomePage