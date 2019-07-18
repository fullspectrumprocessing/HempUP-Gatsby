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
import styled from 'styled-components'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( rgba(250, 230, 230, 0.43), rgba(220, 230, 180, 0.54));
`

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

      <StyledBGImage>
       
      <Overlay>

      <Header siteTitle={data.site.siteMetadata.title} />

        <div>
          <main>{children}</main>
        </div>
      </Overlay>
        
      </StyledBGImage>
      <Footer />
    </>


  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
