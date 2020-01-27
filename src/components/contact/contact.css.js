import styled from "styled-components"
import GlobalStyle from "../../theme/globalStyle"
import cssVars from "../../theme/_variables.js"


export const Container = styled.div`
  height: 900px;
  max-width: 1400px;
  margin: 0 auto;
  @media (max-width: 920px) {
    height: auto;
  }
  @media (max-width: 500px) {
   width: 100%;
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
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    padding: 0px;
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
  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
   }
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
  @media (max-width: 400px) {
    width: 250px;
    margin: 0 auto;
    margin-bottom: 12px;
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
  @media (max-width: 400px) {
    width: 250px;
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
  @media (max-width: 400px) {
    width: 250px;
   }
`


export const AdressWrapper = styled.div`
  min-height: 800px;
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
