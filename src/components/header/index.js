import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Slide from "react-reveal/Slide"
import GlobalStyle from "../../theme/globalStyle"
import NavMobile from "./NavMobile"
import HempUpLogo from "./HempUpLogo"
import ShoppingBag from "./ShoppingBag"
import DesktopNavButton from "./DesktopNavButton"
import NavDesktopSubMenu from "./NavDesktopSubmenu"
import { navigationMap } from "../navigationMap"
import { Location } from "@reach/router"
import AgeModal from "../modals/ageRestriction"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 796px) {
  }
`
const NavbarContainerUpper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  height: 4.3em;
  z-index: 10;
`

const DesktopNavBar = styled.nav`
  display: inline-flex;
  list-style: none;
  align-items: flex-end;

  margin-left: 120px;
  justify-content: space-between;
  @media (max-width: 796px) {
    display: none;
  }
`

class Header extends React.Component {
  state = {}
  getMenuName(page) {
    switch (page) {
      case "FAQ":
        return "FAQ"
      case "/":
        return "home"
      default:
        return page
    }
  }
  componentDidMount() {
    navigationMap.store = [...this.props.productTypes]
  }
  render() {
    return (
      <StyledHeader>
        <GlobalStyle />
        <AgeModal />
        <NavbarContainerUpper>
          <ShoppingBag />
          <DesktopNavBar>
            {Object.keys(navigationMap).map((slug, inx) => {
              return (
                <DesktopNavButton to={slug} key={inx}>
                  {this.getMenuName(slug)}
                </DesktopNavButton>
              )
            })}
          </DesktopNavBar>
          <HempUpLogo />
          <NavMobile />
        </NavbarContainerUpper>
        <Location>
          {({ location }) => {
            return (
              <Slide top duration={300}>
                <NavDesktopSubMenu location={location} />
              </Slide>
            )
          }}
        </Location>
      </StyledHeader>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        allShopifyProduct {
          edges {
            node {
              handle
              productType
            }
          }
        }
      }
    `}
    render={data => (
      <Header
        productTypes={data.allShopifyProduct.edges.reduce((acc, cur) => {
          return acc.includes(cur.node.productType)
            ? acc
            : [...acc, cur.node.productType]
        }, [])}
        slug={"test"}
        {...props}
      />
    )}
  />
)
