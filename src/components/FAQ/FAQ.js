import React, { useState } from "react"
import {
  Wrapper1,
  P,
  DivWrap,
  H3,
  Symbol,
  ToggleWrap,
  Pdiv,

  
} from "./FAQ.css"

const PrivacyMain = () => {
  // state for each section to isolate toggle and change symbol
  const [toggle, setToggle] = useState({
    show1: "+",
    show2: "+",
    show3: "+",
    show4: "+",
    show5: "+",
    show6: "+",
    show7: "+",
    show8: "+",
    show9: "+",
    show10: "+",
    show11: "+",
    show12: "+",
    show13: "+",
  })
  return (
    <>
     
      <Wrapper1>
        
        {/* top paragraph */}
        <DivWrap>
  
          {/* Section 1 */}
          <ToggleWrap
            onClick={() => {
              toggle.show1 === "-"
                ? setToggle({ ...toggle, show1: "+" })
                : setToggle({ ...toggle, show1: "-" })
            }}
          >
            <H3>What is CBD?</H3>
            <Symbol>{toggle.show1}</Symbol>
            <Pdiv
              style={
                toggle.show1 === "-"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <P>
              CBD is short for cannabidiol. Cannabidiol is an extract from hemp, a commonly used term for strains of the cannabis sativa plant with very low levels of THC. Today, hemp is used in a wide range of products in the United States and globally.
              </P>
            </Pdiv>
          </ToggleWrap>

          {/* Section 2 */}
          <ToggleWrap
            onClick={() => {
              toggle.show2 === "-"
                ? setToggle({ ...toggle, show2: "+" })
                : setToggle({ ...toggle, show2: "-" })
            }}
          >
            <H3>Is CBD legal?</H3>
            <Symbol>{toggle.show2}</Symbol>
            <Pdiv
              style={
                toggle.show2 === "-"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <P>
              CBD is legal in all 50 states. The FDA considers hemp and hemp-derived extracts to be food-based products, so there are no legal restrictions on their importation, production, sale or consumption in the United States, as well as many other countries. Hemp oil is legal in over 40 countries around the world. Hemp oil is consumed by millions of people, and this number is rapidly rising as an increasing number of studies explore hemp’s many health benefits.
              </P>
            </Pdiv>
          </ToggleWrap>

          {/* Section 3 */}
          <ToggleWrap
            onClick={() => {
              toggle.show3 === "-"
                ? setToggle({ ...toggle, show3: "+" })
                : setToggle({ ...toggle, show3: "-" })
            }}
          >
            <H3>Will CBD get me high?</H3>
            <Symbol>{toggle.show3}</Symbol>
            <Pdiv
              style={
                toggle.show3 === "-"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <P>No. CBD is not intoxicating. THC is the compound in marijuana that produces a high and our products contain less than .3% of THC.</P>
            </Pdiv>
          </ToggleWrap>

          
          {/* Section 4 */}
          <ToggleWrap
            onClick={() => {
              toggle.show4 === "-"
                ? setToggle({ ...toggle, show4: "+" })
                : setToggle({ ...toggle, show4: "-" })
            }}
          >
            <H3>How is hemp different from marijuana?</H3>
            <Symbol>{toggle.show4}</Symbol>
            <Pdiv
              style={
                toggle.show4 === "-"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <P>
              The difference between marijuana and hemp is the percentage of THC. They are both types of cannabis plants, but industrial hemp is a plant with less than 0.3% THC by dry weight while marijuana has far more than that. CBD derived from industrial hemp, such as ours, is legal at the federal level. Marijuana remains illegal at the federal level.
              </P>
            </Pdiv>
          </ToggleWrap>

          {/* Section 5 */}
          <ToggleWrap
            onClick={() => {
              toggle.show5 === "-"
                ? setToggle({ ...toggle, show5: "+" })
                : setToggle({ ...toggle, show5: "-" })
            }}
          >
            <H3>Does HempUp CBD need to be refrigerated?</H3>
            <Symbol>{toggle.show5}</Symbol>
            <Pdiv
              style={
                toggle.show5 === "-"
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <P>
              No, there is no need to refrigerate our CBD products.
              </P>
            </Pdiv>
          </ToggleWrap>
        </DivWrap>
      </Wrapper1>
    </>
  )
}

export default PrivacyMain
