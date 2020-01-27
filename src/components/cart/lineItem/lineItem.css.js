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
  // height: 20%;
  // align-self: center;
  // width: 100px;
position: absolute;
background-color: transparent;
top: 0;
right: 0;
border: none;
&:hover {
  color: #880000;
}
`
export const Wrapper = styled.div`
// width: 650px;
// background-color: rgba(255, 255, 255, 0.7);
// padding: 30px 50px;
// margin: 0 auto;
// @media (max-width: 1101px) {
//     max-width: none;
//     width: 700px;
// }
// @media (max-width: 751px) {
//     max-width: none;
//     width: 90%;
// }
// @media (max-width: 600px) {
//     margin: 0 auto;
// }
// @media (max-width: 500px) {
//     width: 100%;
// }
// @media (max-width: 400px) {
//     width: 100%;
// }
`
// export const Wrapper = styled.div`
//   width: 75%;
//   background-color: rgba(255, 255, 255, 0.7);
//   padding: 30px 40px;
//   margin: 0px 10px 10px 10px;
//   display: flex;
//   justify-content: center;
//   @media (max-width: 800px) {
//     width: 100%;
//     flex-direction: column;
//   }
// `
export const ContentRow1 = styled.div`
width: 235px;
  background: white;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  justify-content: center;
  @media (max-width: 550px) {
    width: 170px;
    padding-top: 0px;
  }
  @media (max-width: 400px) {
    width: 170px;
  }
`
export const ContentRow2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 235px;

  background: white;
  padding-top: 15px;

  @media (max-width: 1050px) {
  }
  @media (max-width: 550px) {
    padding-top: 0px;
    width: 170px;
    height: 160px;
    text-align: center;
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
  background-color: rgba(255, 255, 255, 0.7);
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  border: 1px solid white;
  @media (max-width: 550px) {
    flex-direction: column;
    width: auto;
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
