import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Navigation from "../components/navigation"

const HomePage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Homepage</h1>
      <h2 style={{ color: 'white' }}>Cool introduction to my portfolio website</h2>
      <p style={{ color: 'white' }}>Some more text since I have to write something</p>
      <StaticImage src="../images/icon.png" alt="Random" height={100} />
    </main>
  )
}

export default HomePage