import * as React from "react"
import Navigation from "../components/navigation"

const NotFoundPage = () => {
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Error 404</h1>
      <p style={{ color: 'white' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: 'white' }}>Go back to the homepage</a>
    </main>
  )
}

export default NotFoundPage