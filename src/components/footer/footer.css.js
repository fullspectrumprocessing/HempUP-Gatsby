import styled from "styled-components"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import cssVars from "../../theme/_variables"

export const Foot = styled.footer`
  display: flex;
  height: 375px;
  flex-direction: row;
  row-wrap: no-wrap;
  justify-content: center;
  width: 100%;
  padding: 20px 40px;
  color: black;
  @media (max-width: 800px) {
    justify-content: left;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: auto;
    padding: 0px;
  }
`

export const UL = styled.ul`
  list-style-type: none;
  width: 320px;
  margin: 0 auto;
  padding-left: 80px;
  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    text-align: center;
  }
`

export const NavWrap = styled.div`
  display: flex;
  width: 33.3%;
  height: 375px;
  margin-top: 40px;
  flex-direction: column;
  @media (max-width: 800px) {
    width: 80%;
    height: auto;
    text-align: center;
  }
`
export const LI = styled.li`
  padding: 5px;
  color: pink;
  margin: 0;
  width: 90%;
`

// export const StyledLink = styled(Link)`
//   text-decoration: none;
//   font-family: Montserrat, sans-serif;
//   font-size: 14px;
//   padding: 0;
//   margin: 0;
//   color: green;
//   &:hover {
//     color: yellow;
//   }
//   @media (min-width: 1300px) {
//     font-size: 20px;
//     height: auto;
//   }
// `
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
`

export const IconWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

export const Icon = styled.div`
  width: 25px;
`

export const LogoWrap = styled.div`
  width: 33.3%;
  height: 375px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  //nesting
  .gatsby-image-wrapper {
    width: 200px;
  }
  @media (min-width: 1300px) {
    align-items: center;
  }
  @media (max-width: 900px) {
    width: 20%;
    height: 350px;
    justify-content: left;
    .gatsby-image-wrapper {
      width: 150px;
    }
  }
  @media (max-width: 800px) {
    width: 80%;
    align-items: center;
    display: none;
    height: auto;
    margin-left: -50px;
  }
`
export const H3 = styled.h3`
  color: green;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  width: 320px;
  padding-left: 80px;
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
    padding: 0px;
  }
  @media (min-width: 1300px) {
    font-size: 20px;
    height: auto;
  }
`

export const H3SignUp = styled.h3`
  color: green;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  width: 320px;
  text-align: left;
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
  @media (min-width: 1300px) {
    font-size: 20px;
    height: auto;
  }
`
export const A = styled(OutboundLink)`
  color: green;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  &:hover {
    color: yellow;
  }
  @media (min-width: 1300px) {
    font-size: 16px;
    height: auto;
  }
`
export const P = styled.label`
  width: 250px;
  color: #777;
  font-size: 16px;
  padding: 5px;
  @media (max-width: 800px) {
    width: initial;
    text-align: center;
  }
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 40px;
  @media (max-width: 800px) {
    width: 80%;
    align-items: center;
    // text-align: left;
    // align-items: left;
    // padding-left: 30px;
    // margin-left: 18px;
  }
`
export const Form = styled.form`
  color: green;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  width: 80%;
  padding: 5px;
  display: flex;
  align-items: center;
  @media (max-width: 750px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    justify-content: center;
  }
`
export const Input = styled.input`
  border-radius: 5px;
  height: 35px;
`
export const Submit = styled.button`
  background: ${cssVars.btnGrdntLghtGreen};
  border-radius: 5px;
  color: white;
  height: 35px;
  margin: 10px;
  &:hover {
    background: ${cssVars.ttnGrdntDrkGrn};
  }
  @media (max-width: 1300px) {
    height: auto;
    margin: 10px;
  }
  @media (max-width: 750px) {
    height: auto;
    width: 80%;
  }
  @media (max-width: 800px) {
    margin: 10px 0px;
  }
`
export const Div = styled.div`
  width: 100%;
  text-align: center;
  @media (max-width: 400px) {
    width: 230px;
    text-align: center;
  }
`
export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(255,255,255, 0.4), rgba(255,255,255, 0.95));
  z-index: 100;
  /* width: 100vw; */
  padding: 1rem ;
  margin-top: 40px;
  padding: 10px 10px 0 10px;
  text-align: left;
  /* color: ${cssVars.txtBrwn}; */
  color:#777;
  font-family: ${cssVars.LATO}
`
export const StyledLink = styled(Link)`
  /* color: ${cssVars.txtBrwn}; */
  color:#777;
  margin: 5px 0px;
  margin-left: 0px !important;
  padding: 0px;
  font-size: 16px;
  text-decoration: none;
  :hover {
      color:${cssVars.txtGrn} !important;
  }
  @media (min-width: 796px) {
    flex-direction: column;
    font-size: 14px;
    margin: 5px 15px;
  }
`
export const UpperSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
  @media (min-width: 796px) {
    flex-direction: row;
    font-size: 15px;
  }
`
export const LowerSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  width: 50%;
  align-self: center;
  text-align: center;
  padding: 0px 0px 50px 0px;
  line-height: 2;
  @media (max-width: 800px) {
    width: 90%;
  }
`
export const FooterLink = styled(OutboundLink)`
  color: ${cssVars.txtGrn};
  &:hover {
    text-shadow: 1px 1px 10px ${cssVars.txtBrwn};
  }
`
