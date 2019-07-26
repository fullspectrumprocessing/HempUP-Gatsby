import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header';
import '../styles/landing.scss'

const Landing = () => (
    <Layout>
        <SEO title='Landing Page'/>
        <div id='landingText'>

        <h3> we are</h3>
        <h1>CBD</h1>
        <h2>wellness</h2>

        </div>

            <Link
              to="/store"
              activeClassName={"explore"}
            >
              <button id='explore'>
                {"explore our line >"}
              </button>
            </Link>


    </Layout>
)
//
export default Landing
