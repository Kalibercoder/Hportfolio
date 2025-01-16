import * as React from "react"
import Navigation from "../components/navigation"

const IndexPage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
        <h2 style={{ color: 'white' }}>Pacopac</h2>
        <h3 style={{ color: 'white' }}>A webshop that sells backpacks made with Vue3 and vite</h3>
    </main>
  )
}

export default IndexPage