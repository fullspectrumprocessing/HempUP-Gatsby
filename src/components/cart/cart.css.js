import styled from "styled-components"
import cssVars from "../../theme/_variables"

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  background-image: radial-gradient(
    rgba(192, 254, 254, 0) 0%,
    rgba(255, 255, 256, 0.5) 60%
  );
  border: 1px solid white;
  margin: 100px;
  padding: 20px;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    padding: 0px;
  }
  &:hover {
    box-shadow: 1px 2px 15px darkgreen;
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
  font-family: ${cssVars.Objktv};
  display: flex;
  width: 70%;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  font-size: 80px;
  color: ${cssVars.txtBrwn};
  text-shadow: ${cssVars.pshadow};
  @media (max-width: 800px) {
    margin-top: 80px;
  }
`

export const H2 = styled.h2`
  font-style: normal;
  text-shadow: ${cssVars.pshadow};
  font-family: ${cssVars.LATO};
  text-decoration: underline;
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
  border: 1px solid white;
  padding: 20px;
  @media (max-width: 1052px) {
    width: 40%;
  }
  &:hover {
    box-shadow: 1px 1px 10px white;
  }
  @media (max-width: 500px) {
    width: 250px;
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
    box-shadow: 1px 1px 15px ${cssVars.txtGrn};
  }
`
