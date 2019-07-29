import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {CloseMenuIcon} from "./closemenu"
import { LogoImage } from "./logoimage"
import { BagImage } from "./bagImage"
import { MenuImage } from "./menu"
import "../styles/header.scss"
import SideDrawer from "../components/sidedrawer"
import DrawerOverlay from "../components/draweroverlay"
class Header extends React.Component {
  state = {
    sideDrawerOpen: false,
    expandedStore: false,
    expandedAbout: false,
    expandedNews: false,
  }

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
      <header className="header">
        <div id="shoppingbag">
          <Link to="/store/cart">
            <BagImage />
          </Link>
        </div>

        <div id="logo">
          <Link to="/">
            <LogoImage />
          </Link>
        </div>
        {!this.state.sideDrawerOpen ? (
          <div id="menu">
            <a href="#" onClick={this.handleDrawer}>
              <MenuImage />
            </a>
          </div>
        ) : (
          <a id="close-icon" href="#" onClick={this.handleDrawerOverlay}>
            <CloseMenuIcon />
          </a>
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
      </header>
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
