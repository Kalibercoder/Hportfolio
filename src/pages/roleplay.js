
import * as React from "react"
import Navigation from "../components/navigation"

const IndexPage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
        <h2 style={{ color: 'white' }}>Roleplay website</h2>
        <h3 style={{ color: 'white' }}>A website where you play a monolog game</h3>
    </main>
  )
}

export default IndexPage