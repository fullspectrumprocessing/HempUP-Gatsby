import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
    LogoImage,
} from './logoimage'
import {
    BagImage
} from './bagImage'
import {
    MenuImage
} from './menu'
import '../styles/header.scss'

const Header = () => (
    <header className='header'>
        <div id='shoppingbag'>
            <BagImage />
        </div>

        <div id='logo'>
            <LogoImage />
        </div>

        <div id='menu'>
            <MenuImage />
        </div>


    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
