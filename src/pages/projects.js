import * as React from "react"
import Navigation from "../components/navigation"
import { Link } from "gatsby"

const IndexPage = () => {
    return (
      <main style={{ backgroundColor: 'black', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
        <Navigation />
        <h1 style={{ color: 'white' }}>Projects</h1>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxHeight: '50vh', overflowY: 'auto'}}>
        <Link to="/roleplay" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ color: 'white' }}>shooter</h2>
        </Link>
        <h3 style={{ color: 'white' }}>A 2D shooter game where you play as a spacemarine.</h3>
        <Link to="/projectTwo" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ color: 'white' }}>Roleplay website</h2>
        </Link>
        <h3 style={{ color: 'white' }}>A website where you play a monolog game</h3>
    
        <Link to="/projectOne" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ color: 'white' }}>Pacopac</h2>
        </Link>
        <h3 style={{ color: 'white' }}>A webshop that sells backpacks</h3>
        
        <Link to="/projectThree" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ color: 'white' }}>Spotify clone</h2>
        </Link>
        <h3 style={{ color: 'white' }}>A clone of the music streaming service Spotify</h3>
        
        <Link to="/projectFour" style={{ color: 'white', textDecoration: 'none' }}>
        <h2 style={{ color: 'white' }}>Chat forum</h2>
        </Link>
        <h3 style={{ color: 'white' }}>A forum where you can chat with other users</h3>
        </div>
      </main>
    )
  }
  
  export default IndexPage