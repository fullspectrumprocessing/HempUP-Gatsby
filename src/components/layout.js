import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyle from "../theme/globalStyle"
import "../styles/layout.scss"
import StyledBGImage from "./bgimage"
import Header from "./header/"
import Footer from "./footer/"
import ContextProvider from "../provider/ContextProvider"
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(250, 230, 230, 0.43),
    rgba(220, 230, 180, 0.54)
  );
`

const Main = styled.main`
  min-height: 70vh;
  margin: 60px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Layout = ({ children}) => {
  
 

    return (
      <>
      {/* {console.log(props)} */}
      {console.log(children, "DATA")}
        {/* <ContextProvider> */}
          <GlobalStyle />
          <StyledBGImage>
            <Overlay></Overlay>
          </StyledBGImage>

          <Main>{children}</Main>
          <Footer />
          <Header />
        {/* </ContextProvider> */}
      </>
    )
  
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
