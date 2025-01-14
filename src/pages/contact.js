import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const HomePage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>ContactPage</h1>
      <p style={{ color: 'white' }}>Github</p>
      <p style={{ color: 'white' }}>LinkedIn</p>
    </main>
  )
}

export default HomePage