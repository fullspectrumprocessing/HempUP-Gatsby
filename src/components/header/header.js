import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import { CloseMenuIcon } from "./closemenu"
import { LogoImage } from "./logoimage"
import { BagImage } from "./bagImage"
import { MenuImage } from "./menu"
import SideDrawer from "./sidedrawer"
import DrawerOverlay from "./draweroverlay"
import DesktopNavSubBar from './desktopnavsub'
import ShopBag from '../../images/bag.svg'


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

  margin-left: 120px;
  justify-content: space-between;
  @media (max-width: 796px) {
    display: none;
  }
`

const BagSvg = styled.img`
  width: 31px;
  height: 41px;

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

  //refactored a bit so the desktop nav can share the same state as the mobile nav
  handleSubMenu = (type) => {
    this.setState( (prevState) => {
      let newState = {}
      for( let nav in prevState ){
        const openSubMenu = (type && nav.search(type) > -1 )
        if( nav.search('expanded') > -1 ){
          newState[nav] =  openSubMenu ? !prevState[nav] :  false;
        }else{
          newState[nav] = prevState[nav]
        }
      }
      return newState
    })
  }


  expandStoreList = () => this.handleSubMenu('expandedStore')
  expandAboutList = () => this.handleSubMenu('expandedAbout')
  expandNewsList = () => this.handleSubMenu('expandedNews')


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
            <BagSvg src={ShopBag} />

          </Link>
        </ShoppingBag>

        <DesktopNavBar>
          <DesktopNavSubBar to="/store"
            expandState={this.state.expandedStore}
            handleExpand={this.expandStoreList}
            subMenu={this.props.productTypes.map(item => item.node.name)}
            >
            store
          </DesktopNavSubBar>
          <DesktopNavSubBar to="/about"
            expandState={this.state.expandedAbout}
            handleExpand={this.expandStoreList}
            subMenu={[]}>
            about us
          </DesktopNavSubBar>
          <DesktopNavSubBar to="/news"
            expandState={this.state.expandedStore}
            handleExpand={this.expandedNews}
            subMenu={[]}>
            news
          </DesktopNavSubBar>
          <DesktopNavSubBar to="/whatiscbd"
            expandState={this.state.expandedStore}
            handleExpand={this.expandStoreList}
            subMenu={[]}>
            what is cbd?
          </DesktopNavSubBar>
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


export default props => (
  <StaticQuery
    query={graphql`
      query {
        allShopifyProductType {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={data => <Header productTypes={data.allShopifyProductType.edges} {...props} />}
  />
)
