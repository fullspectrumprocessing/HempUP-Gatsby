import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import GlobalStyle from "../theme/globalStyle"
import cssVars from "../theme/_variables"


const SubscribeTitle = styled.h1`
  font-size: 50px;
  font-family: ${cssVars.LATO};
  color: ${cssVars.txtBrwn};
`

const SubscribeNow = () => (
  <>
    <Layout>
      <SubscribeTitle>Subscription Page</SubscribeTitle>
    </Layout>
    <GlobalStyle />
  </>
)

export default SubscribeNow
