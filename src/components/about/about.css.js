import styled from "styled-components"
import cssVars from "../../theme/_variables.js"

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
  width: 200px;
  padding: 5px;
  margin: 10px;
  border: 1px solid magenta;
`
export const ContactButton = styled.button`
  width: 100px;
  border: 1px dotted magenta:

`
