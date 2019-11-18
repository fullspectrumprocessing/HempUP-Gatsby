import React from "react"
import styled from "styled-components"
import cssVars from "../theme/_variables"
import GlobalStyle from "../theme/globalStyle"

const ThankYou = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Thank You for submitting your message.</h1>
      <h3>One of our representatives will cintact you shortly</h3>
    </>
  )
}
export default ThankYou
