import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../styles/landing.scss'

const Landing = () => (
  <Layout>
    <SEO title='Landing Page' />
    <div id='landingText'>
      <h3> we are</h3>
      <h1>CBD</h1>
      <h2>wellness</h2>
    </div>
    <button id='explore'>
      explore our line >
            </button>
  </Layout>
)

export default Landing