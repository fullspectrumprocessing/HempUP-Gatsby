import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import GlobalStyle from "../../theme/globalStyle"

import NavMobile from './NavMobile'
import HempUpLogo from './HempUpLogo'
import ShoppingBag from './ShoppingBag'

import DrawerOverlay from "./draweroverlay"
import DesktopNavLink from './desktopnavsub'
import cssVars from "../../theme/_variables.js"

const navigationMap = {
  "store": ["Edibles", "Pet", "To Go", "Drink", "Vape"],
  "about": ["who we are", "why us", "follow"],
  "news": [],
  "whatiscbd": [],
}


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

`
const SubMenu = styled.div`
    display: none;
    @media (min-width: 796px) {
      display: flex;
      justify-content: center;
      top: 4.3em;
      left: 0px;
      width: 100vw;
      height: 2em;
      background: ${cssVars.navBarGreenGradient};
      color: white;
    }
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
  state = {

  }

  getSubMenu = () => {
    let subMenuItems = []
    switch(window.location.pathname){
      case "/store":
        return  navigationMap.store
      case "/about":
        return  navigationMap.about
      case "/news":
        return  navigationMap.news
      case "/whatiscbd":
        return  navigationMap.whatiscbd

      default:
        return []
    }
  }

  componentDidMount(){
    navigationMap.store = [...this.props.productTypes]
  }

  render() {
    console.log('locaiont', window.location.pathname)
    return (
      <StyledHeader>
        <GlobalStyle/>
        <NavbarContainerUpper>

          <ShoppingBag />

          <DesktopNavBar>
            <DesktopNavLink to="/store">
              store
            </DesktopNavLink>
            <DesktopNavLink to="/about">
              about us
            </DesktopNavLink>
            <DesktopNavLink to="/news">
              news
            </DesktopNavLink>
            <DesktopNavLink to="/whatiscbd">
              what is cbd?
            </DesktopNavLink>

          </DesktopNavBar>

          <HempUpLogo />
          <NavMobile />

        </NavbarContainerUpper>

        { this.getSubMenu().length &&

          <SubMenu>

            {
              this.getSubMenu().map((item, inx) => {
                return <div key={inx}>{ item} </div>
              })
            }
          </SubMenu>
        }

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

    render={data => <Header

                      productTypes={data.allShopifyProduct.edges.reduce((acc, cur) => {
                        return acc.includes(cur.node.productType) ? acc :  [...acc, cur.node.productType]
                      }, [] )}

                      {...props}
                     />}
  />
)
