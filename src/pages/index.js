// filepath: /Users/theostenman/Documents/GitHub/workspace/headless/portfolio/src/pages/index.js
import * as React from "react"
import Navigation from "../components/navigation"

const IndexPage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Hello</h1>
    </main>
  )
}

export default IndexPage