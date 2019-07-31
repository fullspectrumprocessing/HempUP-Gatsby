import React from "react"
import { Link } from "gatsby"
import  styled  from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"

import GlobalStyle from '../theme/globalStyle'

import 'bootstrap/dist/css/bootstrap.min.css';
import  cssVars from '../theme/_variables'


const WeAreCBDText = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 50px;

    h1 {
      margin: 0;
      font-size: 95px;
    }

    h2 {
      font-size: 69px;
      font-weight: ${cssVars.fw_4};
      margin: 0;
    }

    h3 {
      font-size: 53px;
      font-weight: 400;
      margin: 0;
    }

`

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

const ExploreButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 17px;
  background: radial-gradient(rgba(54, 120, 47, 0.63), rgba(54, 120, 47, 0.85));
  color: ${cssVars.txtLghtGrn};
  font-family: ${cssVars.Objktv};
  font-size: 18px;
  font-weight: 200;
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }

`


const Landing = () => (
  <Layout>

    <SEO title="Landing Page" />

    <WeAreCBDText >
      <h3>we are</h3>
      <h1>CBD</h1>
      <h2>wellness</h2>
    </WeAreCBDText>

    <ExploreButton>
      <Link to="/store/">explore our line ></Link>
    </ExploreButton>

    <LandingMessageDiv>
      <LandingMessageP>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Habitant morbi
        tristique senectus et netus et.
      </LandingMessageP>
    </LandingMessageDiv>
    <GlobalStyle/>
  </Layout>
)

export default Landing
