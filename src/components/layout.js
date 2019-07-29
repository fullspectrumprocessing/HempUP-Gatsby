import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import "../styles/layout.scss"
import StyledBGImage from "../components/bgimage"
import Header from "./header"
import Footer from "../components/footer"

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(250, 230, 230, 0.43),
    rgba(220, 230, 180, 0.54)
  );
`

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>

            <StyledBGImage>
              <Overlay></Overlay>
            </StyledBGImage>





            <main>
              {children}
              <Footer />
            </main>

            <Header/>



      </>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
