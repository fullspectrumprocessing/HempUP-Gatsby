import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import ProductGrid from './productgrid'


export default () => (
  <Layout>
    <SEO title="Hemp Up - Store" keywords={[`CBD`, `hemp`, `oil`, `edibles`]} />

    <ProductGrid />
  </Layout>
)
