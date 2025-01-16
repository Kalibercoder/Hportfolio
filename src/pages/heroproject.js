import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const Heroproject = ({ data }) => {
  const { gamegif, image } = data.contentfulHomePage
  const gameGifData = getImage(gamegif)

  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}> VampireShooter</h1>
      <h2 style={{ color: 'white' }}> A game where you play as a spacemarine and kill monsters</h2>
      {gameGifData ? (
        <GatsbyImage image={gameGifData} alt="Game GIF" style={{ height: 300 }} />
      ) : (
        <p style={{ color: 'white' }}>Game GIF not available</p>
      )}
    </main>
  )
}

export const query = graphql`
  query {
    contentfulHomePage {
      gamegif {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
  }
`

export default Heroproject