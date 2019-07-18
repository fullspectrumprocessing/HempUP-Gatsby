import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'


 const Footer = () => (
    <StyledFooter>
        © {new Date().getFullYear()}, Built with
          {` `}<br></br>
        <a href="https://www.gatsbyjs.org" style={{color: 'red'}}>Gatsby</a>
        {` `}<br />
        <StyledLink to='/'>Index</StyledLink>
        <br />
        <StyledLink to="/page-2/">Go to page 2</StyledLink>
        {` `}<br />
        <StyledLink to="/landing/">Landing</StyledLink>
    </StyledFooter>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
}

Footer.defaultProps = {
    siteTitle: ''
}

const StyledFooter = styled.footer`
    position: relative;
    bottom: 0;
    left: 0;
    background: #00446f;
    z-index: 1;
    width:100vw;
    padding: 1rem;
    text-align: center;
    color: white;
    
`
const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`


export default Footer