import React from "react"
import styled from "styled-components"
import cssVars from "../theme/_variables"
import GlobalStyle from "../theme/globalStyle"
import Layout from "../components/layout"


const H1 = styled.h1`
  font-size: 50px;
  margin-top: 150px;
  max-width: 800px;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 30px;
  text-align: center;
  max-width: 800px;
`
const ThankYou = () => {
  return (
    <>
      <Layout>
      <H1>Thank You for submitting your message.</H1>
      <H3>One of our representatives will cintact you shortly</H3>
      </Layout>
    </>
  )
}
export default ThankYou
