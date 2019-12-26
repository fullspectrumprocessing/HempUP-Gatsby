import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import GlobalStyle from "../theme/globalStyle"

import "bootstrap/dist/css/bootstrap.min.css"
import cssVars from "../theme/_variables"
import HomeShop from "../components/home/homeshop"

const WeAreCBDText = styled.div`
  text-align: center;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
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

  @media (min-width: 796px) {
    text-align: left;
    margin-top: 40px;
    width: 570px;
    h1 {
      line-height: 90px;
    }
    h2 {
      font-size: 80px;
      line-height: 90px;
      font-weight: ${cssVars.fw_4};
      margin-left: 20px;
    }
  }
`

const CBDTextUpper = styled.div`
  @media (min-width: 796px) {
    margin-bottom: 10px;
  }
`
const CBDTextLower = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 796px) {
    flex-direction: row;
    align-items: bottom;
  }
`
const LandingMessageDiv = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 60px;
  margin-bottom: 50px;

  @media (min-width: 796px) {
    margin: 60px 140px 0 140px;
    border-radius: 5px;
    max-width: 1100px;
    margin: 0 auto;
  }
  @media (max-width: 400px) {
    margin: 60px 0px 0 0px;
    border-radius: 5px;
  }
`
const LandingMessageP = styled.p`
  // margin: 20px 35px 20px 35px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  line-height: 2;
  // background-color: rgba(255, 255, 255, 0.5);
  // color: rgba(152, 121, 91, 1);
  color: ${cssVars.txtBrwn};
  font-family: lato, sans-serif;
  font-size: 20px;
  // font-weight: 600;
  max-width: 700px;
  padding: 20px;
  @media (min-width: 796px) {
    font-size: 16px;
  }
`

const ExploreButton = styled.button`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 240px;
  height: 60px;
  border: none;
  border-radius: 17px;
  margin: 0 auto;
  background: radial-gradient(rgba(54, 120, 47, 0.63), rgba(54, 120, 47, 0.85));
  color: ${cssVars.txtLghtGrn};
  font-family: ${cssVars.Objktv};
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  letter-spacing: 1px;
  text-decoration: none;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white;
  }
  :hover {
    background: radial-gradient(
      rgba(74, 140, 67, 0.63),
      rgba(74, 140, 67, 0.85)
    );
  }

  @media (min-width: 796px) {
    border-radius: 5px;
    width: 400px;
    height: 60px;
    font-size: 22px;
    letter-spacing: 3px;
  }
`

const ExploreButtonArrow = styled.div`
  font-family: ${cssVars.LATO};
`

const HomeProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`

//!  Layout alreadyt has an overlay so this is redundant

// const Overlay = styled.div`
//  width: 100%;
//  min-height: 1175px;
//  background-color: rgba(255, 255, 255, 0.35);
//  position: absolute;
//  top: 0;
//  bottom: 0;
//  z-index: -20;
//  @media (max-width: 1100px) {
// min-height: 1000px;
// }
// `
const Landing = () => {
  const fadeNSlide = (component, delay = 0) => {
    return (
      <Fade delay={delay}>
        <Slide bottom cascade delay={delay}>
          {component}
        </Slide>
      </Fade>
    )
  }

  return (
    <Layout>
      <Wrapper>
        {/* <Overlay></Overlay> */}
        <SEO
          title="Hemp Up - Landing Page"
          keywords={["wellness", "CBD", "herbal", "hemp"]}
        />

        <WeAreCBDText>
          <CBDTextUpper>{fadeNSlide(<h3>we are</h3>)}</CBDTextUpper>
          <CBDTextLower>
            {fadeNSlide(<h1>CBD</h1>, 500)}
            {fadeNSlide(<h2>wellness</h2>, 1000)}
          </CBDTextLower>
        </WeAreCBDText>

        {fadeNSlide(
          <Link to="/store/">
            <ExploreButton>
              <div> explore our line </div>
              <ExploreButtonArrow> > </ExploreButtonArrow>
            </ExploreButton>
          </Link>,

          1500
        )}

        <LandingMessageP>
          HempUp is the best source for thoughtfully formulated CBD products.
          Our mission is to provide the highest quality CBD on the market by
          following unparalleled industry standards. We are dedicated to
          bringing wellness into the lives of anyone who uses our products.
        </LandingMessageP>

        <LandingMessageDiv>
          <HomeShop />
        </LandingMessageDiv>
        <GlobalStyle />
      </Wrapper>
    </Layout>
  )
}
export default Landing
