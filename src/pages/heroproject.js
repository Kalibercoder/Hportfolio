import * as React from "react"
import Navigation from "../components/navigation"

const IndexPage = () => {
    return (
      <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Navigation />
        <h1 style={{ color: 'white' }}> Heroproject</h1>
        <h2 style={{ color: 'white' }}> This is my heroproject</h2>
        
      </main>
    )
  }
  
  export default IndexPage