import * as React from "react"
import Navigation from "../components/navigation"

const NotFoundPage = () => {
  return (
    <main style={{ backgroundColor: 'black', height: '70vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Error 404</h1>
      <p style={{ color: 'white' }}>The page you are looking for does not exist.</p>
      <a href="/" style={{ color: 'white' }}>Go back to the homepage</a>
    </main>
  )
}

export default NotFoundPage