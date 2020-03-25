import React, { useState } from "react"
import { Wrapper1, P, DivWrap, H3, Symbol, ToggleWrap, Pdiv } from "./faqcss"
import styled from "styled-components"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import cssVars from "../../theme/_variables"

const FaqHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100px;
  background-image: ${cssVars.grdntGreen};
  align-self: flex-start;
  text-align: center;
`
const FaqTitle = styled.h1`
  font-size: 60px;
  font-family: lato, sans serif;
  margin: 20px;
  color: ghostwhite;
  @media (max-width: 900px) {
    font-size: 50px;
  }
  @media (max-width: 700px) {
    font-size: 35px;
    padding-top: 15px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
    padding-top: 15px;
  }
`
const Shell = styled.div`
  width: 100%;
  position: relative;
  height: auto;
  display: flex;
  align-items: center;
  background: rgba(6, 12, 7, 0.35);
  font-family: Hind sans-serif;
  border-radius: 50px;
  margin-bottom: 15px;
  padding: 20px 15px 20px 15px;
  justify-content: space-around;
  // :hover {
  //   // background-image: ${cssVars.grdntGreen};
  //   background-color: ${cssVars.navBarGreenGradient};
  }
`
const Shell2 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
`
const PrivacyMain = () => {
  const fadeNSlide = (component, delay = 0) => {
    return (
      <Fade delay={delay}>
        <Slide bottom cascade delay={delay}>
          {component}
        </Slide>
      </Fade>
    )
  }
  // state for each section to isolate toggle and change symbol
  const [toggle, setToggle] = useState({
    show1: "+",
    show2: "+",
    show3: "+",
    show4: "+",
    show5: "+",
    show6: "+",
  })
  return (
    <>
      <FaqHeader>
        {fadeNSlide(<FaqTitle>Frequently Asked Questions</FaqTitle>)}
      </FaqHeader>
      <Wrapper1>
        {/* top paragraph */}
        <DivWrap>
          {/* Section 1 */}
          <Shell>
            <ToggleWrap  onClick={() => {
                    toggle.show1 === "-"
                      ? setToggle({ ...toggle, show1: "+" })
                      : setToggle({ ...toggle, show1: "-" })
                  }}>
              <Shell2>
                <H3>What is CBD?</H3>
                <Symbol
                  // onClick={() => {
                  //   toggle.show1 === "-"
                  //     ? setToggle({ ...toggle, show1: "+" })
                  //     : setToggle({ ...toggle, show1: "-" })
                  // }}
                >
                  {toggle.show1}
                </Symbol>
              </Shell2>
              <Pdiv
                style={
                  toggle.show1 === "-"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <P>
                  CBD is short for cannabidiol. Cannabidiol is an extract from
                  hemp, a commonly used term for strains of the cannabis sativa
                  plant with very low levels of THC. Today, hemp is used in a
                  wide range of products in the United States and globally.
                </P>
              </Pdiv>
            </ToggleWrap>
          </Shell>

          {/* Section 2 */}
          <Shell>
            <ToggleWrap onClick={() => {
                    toggle.show2 === "-"
                      ? setToggle({ ...toggle, show2: "+" })
                      : setToggle({ ...toggle, show2: "-" })
                  }}>
              <Shell2>
                <H3>Is CBD legal?</H3>
                <Symbol
                  onClick={() => {
                    toggle.show2 === "-"
                      ? setToggle({ ...toggle, show2: "+" })
                      : setToggle({ ...toggle, show2: "-" })
                  }}
                >
                  {toggle.show2}
                </Symbol>
              </Shell2>
              <Pdiv
                style={
                  toggle.show2 === "-"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <P>
                  CBD is legal in all 50 states. The FDA considers hemp and
                  hemp-derived extracts to be food-based products, so there are
                  no legal restrictions on their importation, production, sale
                  or consumption in the United States, as well as many other
                  countries. Hemp oil is legal in over 40 countries around the
                  world. Hemp oil is consumed by millions of people, and this
                  number is rapidly rising as an increasing number of studies
                  explore hemp’s many health benefits.
                </P>
              </Pdiv>
            </ToggleWrap>
          </Shell>

          {/* Section 3 */}
          <Shell>
            <ToggleWrap onClick={() => {
                    toggle.show3 === "-"
                      ? setToggle({ ...toggle, show3: "+" })
                      : setToggle({ ...toggle, show3: "-" })
                  }}>
              <Shell2>
                <H3>Will CBD get me high?</H3>
                <Symbol
                  onClick={() => {
                    toggle.show3 === "-"
                      ? setToggle({ ...toggle, show3: "+" })
                      : setToggle({ ...toggle, show3: "-" })
                  }}
                >
                  {toggle.show3}
                </Symbol>
              </Shell2>
              <Pdiv
                style={
                  toggle.show3 === "-"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <P>
                  No, CBD is not intoxicating, does not have any psychoactive
                  effects, and will not get you high. THC is the compound in
                  marijuana that produces a high and our products contain less
                  than .3% of THC.
                </P>
              </Pdiv>
            </ToggleWrap>
          </Shell>

          {/* Section 4 */}
          <Shell>
            <ToggleWrap onClick={() => {
                    toggle.show4 === "-"
                      ? setToggle({ ...toggle, show4: "+" })
                      : setToggle({ ...toggle, show4: "-" })
                  }}>
              <Shell2>
                <H3>How is hemp different from marijuana?</H3>
                <Symbol
                  onClick={() => {
                    toggle.show4 === "-"
                      ? setToggle({ ...toggle, show4: "+" })
                      : setToggle({ ...toggle, show4: "-" })
                  }}
                >
                  {toggle.show4}
                </Symbol>
              </Shell2>
              <Pdiv
                style={
                  toggle.show4 === "-"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <P>
                  The difference between marijuana and hemp is the percentage of
                  THC. They are both types of cannabis plants, but industrial
                  hemp is a plant with less than 0.3% THC by dry weight while
                  marijuana has far more than that. CBD derived from industrial
                  hemp, such as ours, is legal at the federal level. Marijuana
                  remains illegal at the federal level.
                </P>
              </Pdiv>
            </ToggleWrap>
          </Shell>

          {/* Section 5 */}
          <Shell>
            <ToggleWrap onClick={() => {
                    toggle.show5 === "-"
                      ? setToggle({ ...toggle, show5: "+" })
                      : setToggle({ ...toggle, show5: "-" })
                  }}>
              <Shell2>
                <H3>Does HempUp CBD need to be refrigerated?</H3>
                <Symbol
                  onClick={() => {
                    toggle.show5 === "-"
                      ? setToggle({ ...toggle, show5: "+" })
                      : setToggle({ ...toggle, show5: "-" })
                  }}
                >
                  {toggle.show5}
                </Symbol>
              </Shell2>
              <Pdiv
                style={
                  toggle.show5 === "-"
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <P>No, there is no need to refrigerate our CBD products.</P>
              </Pdiv>
            </ToggleWrap>
          </Shell>
        </DivWrap>
      </Wrapper1>
    </>
  )
}

export default PrivacyMain
