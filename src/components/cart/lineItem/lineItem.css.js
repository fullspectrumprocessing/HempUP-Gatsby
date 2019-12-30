import styled from "styled-components"
import cssVars from "../../../theme/_variables"

export const H2 = styled.h2`
  margin-top: 30px;
  font-weight: 700 !important;
  font-size: 30px;
  font-family: ${cssVars.Objktv};
`

export const RemoveButton = styled.button`
  color: ${cssVars.txtBrwn};
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px; 
`
export const Wrapper = styled.div`
  width: 75%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 30px 40px;
  margin: 0px 10px 10px 10px;
  display: flex;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`
export const ContentRow1 = styled.div`
  width: 50%;
  background: white;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 170px;
  }
`
export const ContentRow2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  background: white;
  padding-top: 15px;
  @media (max-width: 800px) {
    padding-top: 25px;
    width: 170px;
    text-align: center;
  }
  @media (max-width: 1050px){

  }
`
export const Image = styled.img`
  height: 180px;
  overflow: hidden;
`
export const ButtonLeft = styled.div`
  padding: 0px;
  color: pink;
  position: absolute;
  top: 45%;
  left: 19;
  @media (max-width: 400px) {
    left: 30px;
  }
`
export const ButtonRight = styled.div`
  padding: 0px;
  color: pink;
  position: absolute;
  top: 45%;
  right: 19;
  @media (max-width: 400px) {
    right: 30px;
  }
`
export const Card = styled.div`
  width: 85%;
  margin: 0 auto;
  position: relative;
  background: #fff;
  display: flex;
  flex-direction: row;
  padding: 10px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
export const Title = styled.h3`
  font-size: 16px;
  height: 55px;
  color: grey;
  font-family: ${cssVars.Objktv};
  padding-bottom: 20px;
`
export const Price = styled.h3`
  font-size: 18px;
  color: ${cssVars.txtBrwn};
  margin: 20px 0px 20px 0px;
`
