import React from "react"
import PropTypes from "prop-types"
import SEO from '../components/seo'
import { useStaticQuery, graphql } from "gatsby"
import StyledBGImage from '../components/bgimage'
import Header from "./header"
import { Link } from 'gatsby'
import '../styles/layout.scss'
import Footer from '../components/footer'
import styled from 'styled-components'
import SideDrawer from '../components/sidedrawer'
import DrawerOverlay from '../components/draweroverlay'

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient( rgba(250, 230, 230, 0.43), rgba(220, 230, 180, 0.54));
`

class Layout extends React.Component {
 
  state = {
    sideDrawerOpen: false
  }
    handleDrawer = (e) => {
    e.preventDefault()
    // this.setState({content: !this.state.content})\
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
    console.log('clicked');
  }

  handleDrawerOverlay = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }
render(){
  
  const { children } = this.props
  let overlay
  if (this.state.sideDrawerOpen){
    overlay = <DrawerOverlay click={this.handleDrawerOverlay}/>
  }
  return (
    <>

      <StyledBGImage>
       
      <Overlay>

      <Header click={this.handleDrawer}/>
      <SideDrawer show={this.state.sideDrawerOpen}/>
      {overlay}
        <div>
          <main>{children}</main>
        </div>
      </Overlay>
        
      </StyledBGImage>
      <Footer />
    </>


)
}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
 