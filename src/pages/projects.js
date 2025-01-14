import * as React from "react"
import Navigation from "../components/navigation"

const IndexPage = () => {
    return (
      <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Navigation />
        <h1 style={{ color: 'white' }}>projects</h1>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <h2 style={{ color: 'white' }}>Project 1</h2>
        -
        <h2 style={{ color: 'white' }}>Project 2</h2>
        -
        <h2 style={{ color: 'white' }}>Project 3</h2>
        -
        <h2 style={{ color: 'white' }}>Project 4</h2>
        -
        <h2 style={{ color: 'white' }}>Project 5</h2>
        </div>
      </main>
    )
  }
  
  export default IndexPage