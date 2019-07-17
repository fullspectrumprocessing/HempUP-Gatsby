import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header';


const Landing = () => (
    <Layout>
        <SEO title='Landing Page'/>
        <h2> we are</h2>
        <h1>CBD</h1>
        <h2>wellness</h2>
        <span>
            <button id='explore'>
                explore our line >
            </button>
        </span>
    </Layout>
)

export default Landing