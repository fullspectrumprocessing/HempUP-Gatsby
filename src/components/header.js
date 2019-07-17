import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  LogoImage,
} from './logoimage'
import {
  BagImage
} from '/bagImage'
import {
  MenuImage 
} from './menu'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header className='header'>
    
    <BagImage/> 
    
    <LogoImage />
    <MenuImage/>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
