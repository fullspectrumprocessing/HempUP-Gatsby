import React from "react"
import { Link } from "gatsby"
import { styled } from 'styled-components'
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
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Habitant morbi
        tristique senectus et netus et. Quam quisque id diam vel quam elementum
        pulvinar etiam.
      </p>
    </div>
  </Layout>
)

export default Landing
