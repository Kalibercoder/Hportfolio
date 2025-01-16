import * as React from "react"
import Navigation from "../components/navigation"
import { graphql } from "gatsby"

const ContactPage = ({ data }) => {
  const { github, linkedin, email } = data.contentfulContact
  return (
    <main style={{ backgroundColor: 'black', margin: '25vh', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '25px' }}>
      <Navigation />
      <h1 style={{ color: 'white' }}>Contact</h1>
      <p style={{ color: 'white' }}>Email: <a href={`mailto:${email}`} style={{ color: 'white' }}>{email}</a></p>
      <p style={{ color: 'white' }}>GitHub: <a href={github} style={{ color: 'white' }}>{github}</a></p>
      <p style={{ color: 'white' }}>LinkedIn: <a href={linkedin} style={{ color: 'white' }}>{linkedin}</a></p>
    </main>
  )
}

export const query = graphql`
  query {
    contentfulContact {
      email
      github
      linkedin
    }
  }
`

export default ContactPage