import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from '../components/image'
import '../styles/header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <Image/>
    <div>
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
