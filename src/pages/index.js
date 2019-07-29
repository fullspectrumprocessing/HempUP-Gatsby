import React from "react"
import { Link } from "gatsby"
import  styled  from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/landing.scss"
import GlobalStyle from '../theme/globalStyle'

const LandingMessageDiv = styled.div`
  width: 100vw;
  background-color: rgba(255, 255, 255, .70);
  text-align: center;
  margin-top: 60px;
`
const LandingMessageP = styled.p`
  margin: 20px 35px 20px 35px;
  line-height: 2;
  color: rgba(152, 121, 91, 1);
  font-family: lato, sans-serif;
  font-size: 20px;
`

const Landing = () => (
  <Layout>
    <GlobalStyle/>
    <SEO title="Landing Page" />

    <div id="landingText">
      <h3> we are</h3>
      <h1>CBD</h1>
      <h2>wellness</h2>
    </div>
    <button id="explore">
      <Link to="/store/">explore our line ></Link>
    </button>
    <LandingMessageDiv>
      <LandingMessageP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Habitant morbi
        tristique senectus et netus et. 
      </LandingMessageP>
    </LandingMessageDiv>
  </Layout>
)

export default Landing





