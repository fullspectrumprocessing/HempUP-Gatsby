import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/landing.scss"

const Landing = () => (
  <Layout>
    <SEO title="Landing Page" />

    <div id="landingText">
      <h3> we are</h3>
      <h1>CBD</h1>
      <h2>wellness</h2>
    </div>
    <button id="explore">
      <Link to="/store/">explore our line ></Link>
    </button>
  </Layout>
)

export default Landing
