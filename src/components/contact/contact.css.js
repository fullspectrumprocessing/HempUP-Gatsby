import styled from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"

// const FormWrap = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `
// const FORM = styled.form`
// width: 60%;
// padding: 20px
// margin: 30px 20px;
// `
// const StyledInput = styled.input`
//   padding: 5px 10px;
// `
// const StyledTextArea = styled.textarea`
//   padding: 5px 10px;
// `
// const StyledButton = styled.button`
//   width: 100px;
//   padding: 20px;
//   background-color: ${cssVars.btnGrdntLghtGreen};

export const OverlayLanding = styled.div`
  height: 1200px;
  opacity: 0.7;
  // background: #1a3940;
  background: green;
  filter: contrast(1.75);
  width: 100vw;
  z-index: 1;
  margin-top: 0px;
`
export const Container = styled.div`
  height: 900px;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 920px) {
    height: auto;
  }
`
export const RowWrap = styled.div`
  height: 650px;
  color: white;
  display: flex;
  position: relative;
  padding: 10px 60px;
  margin-top: 70px;
  background: ${cssVars.btnGrdntLghtGreen};
  flex-direction: row;
  border-radius: 5px;
  width: 100%;
  @media (min-width: 1366px) {
   padding: 10px 150px;
  }
  @media (max-width: 920px) {
    flex-wrap: wrap;
    padding-top: 0px;
  }
`
export const ApplyWrapper = styled.form`
  height: 900px;
  color: white;
  display: flex;
  position: relative;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 920px) {
    flex-wrap: wrap;
    width: 100%;
    height: auto;
  }
`
export const ApplyFormComp = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  height: 25%;
  background: blue;
  border-radius: 5px;
  padding: 20px;
`
export const FormInput = styled.input`
  color: ghostwhite;
  width: 350px;
  font-size; 30px;
  background: transparent;
  margin: 0px 6px 40px 6px; 
  padding: 10px 15px 0px 5px; 
  border-left: none;
  border-right: none; 
  border-top: none;
  ::placeholder{
    color: white;
 font-family: Hind;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`
export const FormTextArea = styled.textarea`
  color: ghostwhite;
  font-size; 30px;
  background: transparent;
  margin: 20px 6px; 
  padding: 5px 15px 0px 5px; 
  border: 2px solid white;
  width: 350px;
  height: 110px;
  ::placeholder{
    color: white;
    font-family: 'Sarabun', sans-serif;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`
export const StyledLabel = styled.label`
  color: white;
  font-size: 20px;
  margin-bottom: 0px;
  font-family: 'Sarabun', sans-serif;
  text-align: left;
  width: 350px;
  color: white;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  @media (max-width: 450px) {
    width: 300px;
  }
`
export const H1 = styled.h1`
margin: 0;
font-family: ${cssVars.POSDI};
font-weight: ${cssVars.fw_4};
font-style: ${cssVars.fs_n};
font-size: 45px;
padding-bottom: 40px;

  text-align: center;
  color: white;
  line-height: 80px;
  text-transform: capitalize;
  @media (max-width: 450px) {
    font-size: 50px;
  }
`

export const H2 = styled.h2`
 
  font-family: 'Sarabun', sans-serif;
  max-width: 350px;
  font-size: 30px;
  color: white;
  line-height: 35px;
  font-weight: 700 !important;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
  :hover {
    color: yellow;
  }
`

export const H22 = styled.h2``
export const P1 = styled.p`
  font-family: Montserrat;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 14px;
  line-height: 30px;
  font-weight: 700;
`
export const StyledButton = styled.button`

  align-self: center;
  margin: 10px;
  width: 200px;
  border-radius: 20px;
  padding: 5px;
  font-weight: 600;
  background-color: white;
  color: green;
  font-family: 'Sarabun', sans-serif;
  :hover {
    padding: 5px;
    background: ${cssVars.txtBrwn};
 
    color: white;
  }
  :focus {
    outline: aliceblue;
    outline-offset: 5px;
    outline-style: ridge;
    outline-color: chartreuse;
    outline-width: thin;
  }
  @media (max-width: 515px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    width: 300px;
  }
`

export const Select = styled.select`
  width: 150px;
  font-family: Sarabun, sans-serif;
  font-size: 16px;
  display: block;

  @media (max-width: 450px) {
    width: 300px;
  }
`
export const Option = styled.option`
  border-bottom: 2px solid white;
  color: white;
`

export const AdressWrapper = styled.div`
  min-height: 600px;
  color: white;
  display: flex;
  position: relative;
  margin: 0 auto;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  width: 45%;
  text-decoraion: none;
  @media (max-width: 920px) {
    width: 100%;
    height: auto;
    // border: 2px solid white;
  }
`
export const A = styled.a``
export const TextWrap = styled.div`
  min-height: 400px;
  color: white;
  display: flex;
  position: relative;
  padding-left: 20px;
  flex-direction: column;
  width: 400px;
  text-align: left;
  margin: 20px;
  @media (max-width: 920px) {
    min-height: auto;
    border: 2px solid white;
    padding-top: 15px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: auto;
  }
`
