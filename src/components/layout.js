/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import StyledBGImage from '../components/bgimage'
import Header from "./header"
import { Link } from 'gatsby'
import '../styles/layout.scss'
import Footer from '../components/footer'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Header siteTitle={data.site.siteMetadata.title} />
      <StyledBGImage>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>

        </div>
      </StyledBGImage>
      <Footer />
    </>


  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
