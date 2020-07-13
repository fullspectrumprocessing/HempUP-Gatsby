import React from "react"
import styled from "styled-components"
import { MenuImage } from "./menu"
import { CloseMenuIcon } from "./closemenu"
import SideDrawer from "./sidedrawer"
import DrawerOverlay from "./draweroverlay"

const MenuIconWrapper = styled.a`
  align-self: center;
  padding: 15px;
  @media (min-width: 796px) {
    display: none;
  }
`
class NavMobile extends React.Component {
  state = {
    sideDrawerOpen: false,
    expandedStore: false,
    expandedAbout: false,
    expandedNews: false,
  }

  // !The Below Methods are handling the side drawer animations and state changes.
  handleDrawer = () => {
    // Pretty much setting state to be the opposite of what state was previously
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  handleDrawerOverlay = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  //refactored a bit so the desktop nav can share the same state as the mobile nav
  // NEVERMIND... but now its a big loop. could refactor for readability
  handleSetSubMenu = type => {


    this.setState(
      prevState => {
        let newState = {}
        for (let nav in prevState) {
          const openSubMenu = type && nav.search(type) > -1
          if (nav.search("expanded") > -1) {
            newState[nav] = openSubMenu ? !prevState[nav] : false
          } else {
            newState[nav] = prevState[nav]
          }
        }
        return newState
      },
      () => {
    
      }
    )
  }

  expandStoreList = () => this.handleSetSubMenu("expandedStore")
  expandAboutList = () => this.handleSetSubMenu("expandedAbout")
  expandNewsList = () => this.handleSetSubMenu("expandedNews")

  render() {
    let overlay

    if (this.state.sideDrawerOpen) {
      overlay = <DrawerOverlay click={this.handleDrawerOverlay} />
    }
    return (
      <React.Fragment>
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
        {this.props.children}
        {overlay}
      </React.Fragment>
    )
  }
}

export default NavMobile
