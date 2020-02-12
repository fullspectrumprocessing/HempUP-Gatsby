import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import GlobalStyle from "../theme/globalStyle"
import cssVars from "../theme/_variables"

const SubscribeTitle = styled.h1`
  font-size: 50px;
  margin-top: 150px;
  max-width: 800px;
  text-align: center;  
// font-size: 50px;
  // font-family: ${cssVars.LATO};
  // color: ${cssVars.txtBrwn};
`
const SubscriptionMessage = styled.h3`
  font-size: 30px;
  text-align: center;
  max-width: 800px;
`
const SubscribeNow = () => (
  <>
    <Layout>
      <SubscribeTitle>Thank You!</SubscribeTitle>
      <SubscriptionMessage>
        We appreciate you joining our mailing list.
        <SubscriptionMessage>
          Please check your inbox for a confirmation message.
        </SubscriptionMessage>
        Once you subscribe you will receive news, promotions, and updates about
        Hemp Up.
      </SubscriptionMessage>
    </Layout>
    <GlobalStyle />
  </>
)

export default SubscribeNow
