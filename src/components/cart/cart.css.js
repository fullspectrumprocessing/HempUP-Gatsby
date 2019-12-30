import styled from "styled-components"
import cssVars from "../../theme/_variables"

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  background-image: ${cssVars.whiteGlow};
  border: 1px solid black;
  margin: 100px;
  padding: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
`

export const ItemWrap = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-left: 0;
  align-items: center;
  justify-content: center;
  @media (max-width: 1052px) {
    align-items: center;
  }
`

export const Empty = styled.h3`
  display: flex;
  margin-top: 80px;
  width: 70%;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-top: 80px;
  font-size: 80px;
  color: ${cssVars.txtBrwn};
`

export const H2 = styled.h2`
  font-style: normal;
  text-shadow: 1px 2px 5px ${cssVars.grdntPink};
  font-family: ${cssVars.LATO};
  @media (max-width: 1052px) {
    text-align: center;
  }
`

export const P = styled.p`
  @media (max-width: 1052px) {
    text-align: center;
  }
`

export const CheckoutWrap = styled.div`
  margin-top: 80px;
  margin-bottom: 30px;
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1052px) {
    width: 40%;
  }
`

export const Button = styled.div`
         background: ${cssVars.btnGrdntLghtGreen};
         color: white;
         font-size: 40px;
         padding: 15px;
         width: 90%;
         height: 100px;
         text-align: center;
         border-radius: 5px;
         border: 2px #4da744 outset;
         display: flex;
         justify-content: center;
         align-items: center;
         text-shadow: 1px 2px 5px ${cssVars.grdntPink};
         @media (max-width: 1090px) {
           margin: 0 auto;
           font-size: 24px;
         }
         &:hover {
             color: 
           box-shadow: 1px 1px 15px ${cssVars.txtGrn};
         }
       `
