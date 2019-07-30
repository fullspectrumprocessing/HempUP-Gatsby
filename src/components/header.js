import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import GlobalStyle from "../theme/globalStyle"
import { CloseMenuIcon } from "./closemenu"
import { LogoImage } from "./logoimage"
import { BagImage } from "./bagImage"
import { MenuImage } from "./menu"
import SideDrawer from "../components/sidedrawer"
import DrawerOverlay from "../components/draweroverlay"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  background: #ffffff;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  height: 4.3em;

  @media (min-width: 796px) {

  }
`
const ShoppingBag = styled.div`
  flex-direction: column;
  align-self: center;
  padding: 15px;
`
const HempUpLogo = styled.div`
  z-index: 2;
  margin-bottom: 10px;
`
const MenuIconWrapper = styled.a`
  align-self: center;
  padding: 15px;
  @media (min-width: 796px) {
    display: none;
  }
`
const DesktopNavBar = styled.nav`
  display: inline-flex;
  list-style: none;
  align-items: flex-end;
  margin-bottom: 10px;
  margin-left: 120px;
  justify-content: space-between;
  @media (max-width: 796px) {
    display: none;
  }
`

const StyledLink = styled(Link)`
  color: rgba(152, 121, 91, 1);
  padding-left: 20px;
  padding-right: 20px;
  font-family: lato, sans serif;
`
class Header extends React.Component {
  state = {
    sideDrawerOpen: false,
    expandedStore: false,
    expandedAbout: false,
    expandedNews: false,
  }

  // !The Below Methods are handling the side drawer animations and state changes.
  handleDrawer = () => {
    // e.preventDefault()
    // this.setState({content: !this.state.content})\
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
    console.log("clicked")
    console.log(this.state, "state")
  }
  handleDrawerOverlay = () => {
    this.setState({
      sideDrawerOpen: false,
    })
    console.log(this.state, "state")
  }
  expandStoreList = () => {
    console.log("its alive!!!")
    if (this.state.expandedStore == false) {
      this.setState({
        expandedStore: true,
      })
    } else
      this.setState({
        expandedStore: false,
      })
  }
  expandAboutList = () => {
    if (this.state.expandedAbout == false) {
      this.setState({
        expandedAbout: true,
      })
    } else {
      this.setState({
        expandedAbout: false,
      })
    }
  }
  expandNewsList = () => {
    if (this.state.expandedNews == false) {
      this.setState({
        expandedNews: true,
      })
    } else {
      this.setState({
        expandedNews: false,
      })
    }
  }

  render() {
    let overlay
    if (this.state.sideDrawerOpen) {
      overlay = <DrawerOverlay click={this.handleDrawerOverlay} />
    }
    return (
      <StyledHeader>
        <GlobalStyle/>
        <ShoppingBag>
          <Link to="/store/cart/">
            <BagImage />
          </Link>
        </ShoppingBag>
        <DesktopNavBar>
          <StyledLink to="/store">store</StyledLink>
          <StyledLink to='/about'>about us</StyledLink>
          <StyledLink to="/news">news</StyledLink>
          <StyledLink to='#'>what is cbd?</StyledLink>
        </DesktopNavBar>
        <HempUpLogo>
          <Link to="/">
            <LogoImage />
          </Link>
        </HempUpLogo>
        {!this.state.sideDrawerOpen ? (
          <MenuIconWrapper href="#" onClick={this.handleDrawer}>
            <MenuImage />
          </MenuIconWrapper>
        ) : (
          <MenuIconWrapper href="#" onClick={this.handleDrawerOverlay}>
            <CloseMenuIcon />
          </MenuIconWrapper>
        )}
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.handleDrawerOverlay}
          expandedStore={this.state.expandedStore}
          expandStoreList={this.expandStoreList}
          expandedAbout={this.state.expandedAbout}
          expandAboutList={this.expandAboutList}
          expandedNews={this.state.expandedNews}
          expandNewsList={this.expandNewsList}
        />
        {overlay}
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

export default Header
