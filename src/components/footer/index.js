import React, {useState} from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql, useStaticQuery, navigate } from "gatsby"
import {
  Foot,
  UL,
  // StyledLink,
  SubWrapper,
  LogoWrap,
  H3,
  A,
  LI,
  P,
  Form,
  Input,
  Submit,
  NavWrap,
  ContactWrap
} from "./footer.css"
import Img from "gatsby-image"
import  cssVars from '../../theme/_variables'
import {navigationFooterLinks} from '../navigationMap'

const StyledFooter = styled.footer`
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
const StyledLink = styled(Link)`
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
const UpperSection = styled.section`
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
const LowerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 8px;

  @media (min-width: 796px) {
    flex-direction: row;
  }

`
const Footer = () => {

  const [email, setEmail] = useState("")

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  function Subscribe(e) {
    e.preventDefault()

    if (email) {
      console.log(email, "this is state")
      //if state is populated send data to netlefy
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "subscribe",
          ...email,
        }),
      })
        // then go to thank you page
        .then(() => navigate("/"))
        .catch(error => alert(error))
    }
  }

  const data = useStaticQuery(graphql`
  query {
    logo: file(relativePath: { eq: "hempUpLogo.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)
  return(
  <StyledFooter>
    <UpperSection>
      <Foot>

      <LogoWrap>
      <Img fluid={data.logo.childImageSharp.fluid} alt="Hemp UP logo" />
      </LogoWrap>

      <NavWrap>
        <UL>
        <H3>MENU</H3>
    {
      Object.keys(navigationFooterLinks).map( (item, inx) => {
        return (
          <LI>
          <StyledLink to={navigationFooterLinks[item]}>{item}</StyledLink>
          </LI>
        )
      })
    }
    </UL>
    </NavWrap>

    <SubWrapper>
      <H3>SIGN UP</H3>
      <P>Sign up to hear about our offers</P>
      <Form
        onSubmit={Subscribe}
        data-netlify-honeypot="bot-field"
        method="post"
        action="/"
        data-netlify="true"
        name="subscribe"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="subscribe" />
        {/* <label>Email Address:</label> */}
        <Input
          name="Email"
          type="email"
          placeholder="Your Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Submit type="submit" >Sign Up</Submit>
      </Form>
    </SubWrapper>
    </Foot>
    </UpperSection>

    <LowerSection>
      <div>
        © {new Date().getFullYear()} Hemp Up
      </div>

      <div>
        Legal ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>

    </LowerSection>




  </StyledFooter>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: "",
}



export default Footer
