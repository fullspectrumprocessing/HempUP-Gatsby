import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import AboutUsComp from "../components/about/about"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import SEO from "../components/seo"
const AboutTitle = styled.h1`
  font-size: 50px;
  font-family: lato, sans serif;
  margin-bottom: 20px;
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
        {fadeNSlide(<AboutTitle>About Us</AboutTitle>)}

        <AboutUsComp />
      </Layout>
    </>
  )
}
export default About
