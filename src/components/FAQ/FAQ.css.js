import styled from "styled-components"
import cssVars from "../../theme/_variables"

export const Wrapper1 = styled.div`
  min-height: 900px;
  width: 100%;
  color: ${cssVars.txtLghtGrn};
  font-size: 20px;
  font-family: ${cssVars.LATO};
  @media (max-width: 920px) {
    min-height: 500px;
  }
`

export const P = styled.p`
  padding: 20px;
`

export const ToggleWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Hind sans-serif;
  border-radius: 50px;
  justify-content: space-around;
  @media (max-width: 920px) {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  @media (max-width: 870px) {
    padding-left: 45px;
  }
`

export const Symbol = styled.div`
  height: 25px;
  width: 25px;
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  font-family: Hind, sans-serif;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 870px) {
    position: absolute;
    left: 10px;
    top: 42px;
  }
`

export const DivWrap = styled.div`
  height: 100%;
  width: 1000px;
  margin: 0 auto;
  border-radius: 5px;
  padding: 30px 40px 100px 40px;
  margin-bottom: 100px;
  margin-top: 50px;
  @media (max-width: 1444px) {
    width: 75%;
    margin: 0 auto;
  }
  @media (max-width: 920px) {
    height: auto;
  }
  @media (max-width: 500px) {
    padding: 20px;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`

export const H3 = styled.h3`
  font-size: 30px;
  font-weight: 400;
  font-family: ${cssVars.Objktv};
`

export const Pdiv = styled.div`
  display: none;
`
