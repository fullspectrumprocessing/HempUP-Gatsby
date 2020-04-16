import React from "react"
import styled from "styled-components"
import cssVars from "../theme/_variables"
import Layout from "../components/layout"

const H1 = styled.h1`
  font-size: 50px;
  margin-top: 50px;
  max-width: 800px;
  text-align: center;
`

const H3 = styled.h3`
  font-size: 30px;
  text-align: center;
  max-width: 800px;
  text-shadow: ${cssVars.h1shadow};
`

const ThankYouWrap = styled.div`
  background-color: ${cssVars.bckgrndBeige};
  text-align: center;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const ThankYou = () => {
  return (
    <>
      <Layout>
        <ThankYouWrap>
          <H1>Thank You!</H1>
          <H3>We have received your submission.</H3>
          <H3>One of our representatives will contact you shortly.</H3>
        </ThankYouWrap>
      </Layout>
    </>
  )
}
export default ThankYou
