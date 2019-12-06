import styled from "styled-components"
import cssVars from "../../theme/_variables.js"
import { animated } from "react-spring"

export const H3 = styled.h3`
font-size: 30px;
color: ghostwhite; 
`

//! WHat is CBD section

export const AboutRow = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

export const WhatIsCbd = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  padding: 5px;
  margin: 10px;
  border: 1px solid magenta;
`

export const WhatIsTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.LATO};
  font-style: normal;
`

export const WhatIsTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background-color: #ffffff40;
`

//! Who we are components

export const WhoWeAre = styled.div`
  width: 50%;
  padding: 5px;
  margin: 10px;
  border: 1px solid magenta;
  align-self: flex-end;
`
export const WhoWeAreTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.LATO};
  font-style: normal;
  align-self: flex-end;
`
export const WhoTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background-color: #ffffff40;
`

//! WhyUS components
export const WhyUs = styled.div`
  width: 50%;
  padding: 5px;
  margin: 10px;
  border: 1px solid magenta;
  align-self: flex-start;
`
export const WhyUsTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.LATO};
  font-style: normal;
  align-self: flex-start;
`

export const WhyTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background-color: #ffffff40;
`

//! COntact Us comps
export const ContactUs = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 150px;
  display: flex;
  justify-content: space-around;
`

export const ContactButton = styled.button`
  height: 100%;
  width: 300px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};
  border: 1px dotted magenta:
  color: magenta;

`
export const Animate = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${cssVars.grdntGreen};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: box-shadow 0.5s;
  will-change: transform;
`

//! Shop now comps
export const ShoptButton = styled.button`
  width: 25%;
  height: 100px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};
  border: 1px dotted magenta:
`
