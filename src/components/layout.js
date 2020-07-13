import React, { useContext, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import GlobalStyle from "../theme/globalStyle"
import "../styles/layout.scss"
import StyledBGImage from "./bgimage"
import Header from "./header/"
import Footer from "./footer/"
import StoreContext from "../context/globalcontext"
import { GlobalDispatchContext } from "../provider/ContextProvider"
import { GlobalStateContext } from "../provider/ContextProvider"
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

const Layout = ({ children }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  //!Initializing context
  const {
    store: { client, adding, checkout },
  } = useContext(StoreContext)

  useEffect(() => {
    let array = []

    for (let i = 0; i < checkout.lineItems.length; i++) {
      array.push(checkout.lineItems[i].quantity)
    }
    let total = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    dispatch({ type: "SET_NUM", numInCart: total })
  }, [checkout.lineItems.length])
  return (
    <>
      <GlobalStyle />
      <StyledBGImage>
        <Overlay></Overlay>
      </StyledBGImage>

      <Main>{children}</Main>
      <Footer />
      <Header />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
