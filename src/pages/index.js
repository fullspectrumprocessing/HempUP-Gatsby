import React from "react"
import { Link } from "gatsby"
import  styled  from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
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

    @media (min-width: 796px) {
      margin-top: 40px;
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
  /* width: 100vw; */
  background-color: rgba(255, 255, 255, .70);
  text-align: center;
  margin-top: 60px;

  @media (min-width: 796px) {
    margin: 60px 140px 0 140px;
    border-radius: 5px;
  }
`
const LandingMessageP = styled.p`
  margin: 20px 35px 20px 35px;
  line-height: 2;
  color: rgba(152, 121, 91, 1);
  font-family: lato, sans-serif;
  font-size: 20px;
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
  :hover{
    background:  radial-gradient(rgba(74, 140, 67, 0.63), rgba(74, 140, 67, 0.85));
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

const Landing = () =>{

  const fadeNSlide = (component, delay=0) => {
    return(
      <Fade delay={delay}>
        <Slide bottom cascade delay={delay}>
          {  component }
        </Slide>
      </Fade>
    )
  }


  return (
    <Layout>

      <SEO title="Hemp Up - Landing Page" keywords={['wellness', 'CBD', 'herbal', 'hemp' ]}/>

      <WeAreCBDText >
        <CBDTextUpper>
            { fadeNSlide(<h3>we are</h3>) }
        </CBDTextUpper>
        <CBDTextLower>
            { fadeNSlide(<h1>CBD</h1>, 500) }
            { fadeNSlide(<h2>wellness</h2>, 1000) }
        </CBDTextLower>
      </WeAreCBDText>

      { fadeNSlide(

        <Link to="/store/">
          <ExploreButton>
            <div>  explore our line </div>
            <ExploreButtonArrow> > </ExploreButtonArrow>
          </ExploreButton>
        </Link>

        , 1500) }



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
}
export default Landing
