// filepath: /Users/theostenman/Documents/GitHub/workspace/headless/portfolio/src/components/navigation.js
import * as React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <ul style={{ position: 'sticky', display: 'flex', listStyle: 'none', justifyContent: 'space-around', padding: 20 }}>
      <li><Link to="/homepage" style={{ color: 'white' }}>Home</Link></li>
      -
      <li><Link to="/about" style={{ color: 'white' }}>About</Link></li>
      -
      <li><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
      -
      <li><Link to="/heroproject" style={{ color: 'white' }}>Heroproject</Link></li>
      -
      <li><Link to="/projects" style={{ color: 'white' }}>Projects</Link></li>
    </ul>
  </nav>
)

export default Navigation