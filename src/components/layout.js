import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import '../styles/layout.scss'
import StyledBGImage from '../components/bgimage'
import Header from "./header"
import Footer from '../components/footer'
import SideDrawer from '../components/sidedrawer'
import DrawerOverlay from '../components/draweroverlay'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( rgba(250, 230, 230, 0.43), rgba(220, 230, 180, 0.54));
`

class Layout extends React.Component {

  state = {
    sideDrawerOpen: false,
    // expanded: false
  }

  handleDrawer = () => {
    // e.preventDefault()
    // this.setState({content: !this.state.content})\
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
    console.log('clicked');
    console.log(this.state, 'state')
  }

  handleDrawerOverlay = () => {
    this.setState({
      sideDrawerOpen: false
    })
    console.log(this.state, 'state')
  }
  render() {

    const { children } = this.props
    let overlay
    if (this.state.sideDrawerOpen) {
      overlay = <DrawerOverlay click={this.handleDrawerOverlay} />
    }
    return (
      <>

                    <Header />

                    <main>
                      {children}
                      <Footer />
                    </main>

                    <StyledBGImage>
                      <Overlay>
                      </Overlay>
                    </StyledBGImage>


      </>


    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
