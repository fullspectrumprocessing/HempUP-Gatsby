import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <Image/>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `10px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `red`,
            textDecoration: `none`,
            textAlign: `center`,
          }}
        >
          {/* {siteTitle} */}
        </Link>
      </h1>
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
