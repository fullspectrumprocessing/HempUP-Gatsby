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
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    height: auto;
  }
`

export const UL = styled.ul`
  list-style-type: none;
  width: 320px;
  margin: 0 auto;
  padding-left: 80px;

  @media (max-width: 600px) {
    width: 90%;
    align-items: center;
    margin: 0 auto;
    padding: 30px 30px 0px 30px;
  }
`

export const NavWrap = styled.div`
  display: flex;
  width: 33.3%;
  height: 375px;
  margin-top: 40px;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }
`
export const LI = styled.li`
  padding: 5px;
  color: pink;
  margin: 0;
  width: 90%;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  padding: 0;
  margin: 0;
  color: green;
  &:hover {
    color: yellow;
  }
  @media (min-width: 1300px) {
    font-size: 20px;
    height: auto;
  }
`
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
  @media (max-width: 600px) {
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
  @media (max-width: 600px) {
    font-size: 20px;
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
export const P = styled.p`
  color: green;
  width: 250px;
  color: #777;
  // font-family: Montserrat, sans-serif;
  font-size: 16px;
  padding: 5px;
  @media (max-width: 400px) {
    width: 200px;
  }
`
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: 40px;
  @media (max-width: 600px) {
    width: 80%;
    text-align: left;
    align-items: left;
    padding-left: 30px;
    margin-left: 18px;
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
  @media (max-width: 600px) {
    justify-content: left;
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
    display: block;
    margin: 10px;
  }
  @media (max-width: 750px) {
    height: auto;
    width: 80%;
  }
  @media (max-width: 600px) {
    margin: 10px 0px;
    justify-content: left;
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
export const FooterLink = styled(OutboundLink)`
  &:hover {
    text-shadow: 1px 1px 10px black;
  }
`
