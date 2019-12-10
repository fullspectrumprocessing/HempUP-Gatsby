import styled from "styled-components"
import cssVars from "../../theme/_variables.js"
import { animated } from "react-spring"

export const H3 = styled.h3`
  font-size: 40px;
  color: ghostwhite;
  //! WHat is CBD section
`
export const WhatRow = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

export const WhatIsCbd = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 5px;
  margin: 10px;
`

export const WhatIsTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.POSDI};
  font-style: normal;
  margin-left: 50px;
`

export const WhatIsTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background: ${cssVars.whiteGlow};
  font-family: ${cssVars.Objktv};
  padding: 15px;
  color: ${cssVars.txtBrwnDrk};
  border: 1px ghostwhite solid;
  box-shadow: 1px 2px 10px ${cssVars.txtBrwnDrk};
`

//! Who we are components
export const WhoRow = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
`
export const WhoWeAre = styled.div`
  width: 100%;
  padding: 5px;
  margin: 10px;
  align-self: flex-end;
`
export const WhoWeAreTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.POSDI};
  font-style: normal;
  align-self: flex-end;
`
export const WhoTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background: ${cssVars.whiteGlow};
  font-family: ${cssVars.Objktv};
`

//! WhyUS components
export const WhyRow = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`
export const WhyUs = styled.div`
  width: 100%;
  padding: 5px;
  margin: 10px;
  align-self: flex-start;
`
export const WhyUsTitle = styled.h2`
  font-size: 30px;
  color: ${cssVars.txtGrn};
  font-family: ${cssVars.POSDI};
  font-style: normal;
  align-self: flex-start;
  margin-left: 50px;
`

export const WhyTextWrap = styled.div`
  text-align: center;
  width: 95%;
  margin: 20px 0px 20px 0px;
  background: ${cssVars.whiteGlow};
  font-family: ${cssVars.Objktv};
`

//! React Srping Wrapper
export const ContactUs = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  height: 200px;
`
//! COntact Us comps

export const ContactButton = styled.button`
  height: 100%;
  width: 300px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};

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
  height: 200px;
`

//! Shop now comps
export const ShopButton = styled.button`
  height: 100%;
  width: 300px;
  border-radius: 20px;
  background-color: ${cssVars.btnGrdntLghtGreen};

  color: magenta;
`
export const AnimateShop = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cssVars.grdntGreen};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  transition: box-shadow 0.5s;
  will-change: transform;
  height: 200px;
`
