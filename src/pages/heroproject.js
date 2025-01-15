import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const Heroproject = ({ data }) => {

  const { gamegif } = data.contentfulHomePage
  const imageData = getImage(gamegif)

    return (
      <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Navigation />
        <h1 style={{ color: 'white' }}> VampireShooter</h1>
        <h2 style={{ color: 'white' }}> A game where you play as a spacemarine and kill monsters</h2>
        <GatsbyImage image={imageData} alt="Game Gif" style={{ height: 100 }} />
        
      </main>
    )
  }
  
  export const query = graphql`
  query {
    contentfulHomePage {
      gamegif {
        gatsbyImageData(layout: CONSTRAINED, width: 100)
      }
    }
  }
`

  export default Heroproject