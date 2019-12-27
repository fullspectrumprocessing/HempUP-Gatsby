import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import AboutUsComp from "../components/about/about"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"
import cssVars from "../theme/_variables"

const AboutTitle = styled.h1`
  font-size: 60px;
  font-family: lato, sans serif;
  margin: 20px;
  color: ghostwhite;
`
const AboutHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100px;
  background-image: ${cssVars.grdntGreen};
  align-self: flex-start;
  text-align: center;
`

const About = () => {
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
    <>
      <Layout>
        <SEO
          title="About Hemp Up"
          keywords={["Who We Are", "What is CBD?", "Hemp Information"]}
        />
        <AboutHeader>
          {fadeNSlide(<AboutTitle>About Us</AboutTitle>)}
        </AboutHeader>

        <AboutUsComp />
      </Layout>
    </>
  )
}
export default About
