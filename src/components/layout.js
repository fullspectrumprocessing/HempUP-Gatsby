import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import "../styles/layout.scss"
import StyledBGImage from "../components/bgimage"
import Header from "./header"
import Footer from "../components/footer"
import SideDrawer from "../components/sidedrawer"
import DrawerOverlay from "../components/draweroverlay"

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(250, 230, 230, 0.43),
    rgba(220, 230, 180, 0.54)
  );
`

class Layout extends React.Component {
  state = {
    sideDrawerOpen: false,
    expanded: false,
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
  expandList = () => {
    console.log("its alive!!!")
    if (this.state.expanded == false) {
      this.setState({
        expanded: true,
      })
    } else
      this.setState({
        expanded: false,
      })
  }
  render() {
    const { children } = this.props
    let overlay
    if (this.state.sideDrawerOpen) {
      overlay = <DrawerOverlay click={this.handleDrawerOverlay} />
    }
    return (
      <>
        <Parallax pages={1}>
          <ParallaxLayer speed={0} factor={3} offset={0}>
            <StyledBGImage>
              <Overlay></Overlay>
            </StyledBGImage>
          </ParallaxLayer>
        </Parallax>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          click={this.handleDrawerOverlay}
          expanded={this.state.expanded}
          expandList={this.expandList}
          expandedAbout={this.state.expandedAbout}
          expandedNews={this.state.expandedNews}
        />
        {overlay}
        <Parallax pages={4.0}>
          <Header click={this.handleDrawer} />

          <ParallaxLayer offset={0.2} speed={0.5} factor={0.25}>
            <main>{children}</main>
          </ParallaxLayer>
          <Footer />
        </Parallax>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
