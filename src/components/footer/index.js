import React, { useState } from "react"
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
  ContactWrap,
} from "./footer.css"
import Img from "gatsby-image"
import cssVars from "../../theme/_variables"
import { navigationFooterLinks } from "../navigationMap"

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
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 8px;
  width: 50%;
  align-self: center;
  text-align: center;
`
const Footer = () => {
  const [info, setInfo] = useState({
    email: ""
  })

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }
  function Subscribe(e) {
    e.preventDefault()

    if (info) {
      console.log(info, "this is state")
      //if state is populated send data to netlefy
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "subscribe",
          ...info,
        }),
      })
        // then go to thank you page
        .then(() => navigate("/"))
        .catch(error => alert(error))
    }
  }

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "hempUP_final_transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledFooter>
      <UpperSection>
        <Foot>
          <LogoWrap>
            <Img fluid={data.logo.childImageSharp.fluid} alt="Hemp UP logo" />
          </LogoWrap>

          <NavWrap>
            <UL>
              <H3>MENU</H3>
              {Object.keys(navigationFooterLinks).map((item, inx) => {
                return (
                  <LI>
                    <StyledLink to={navigationFooterLinks[item]}>
                      {item}
                    </StyledLink>
                  </LI>
                )
              })}
            </UL>
          </NavWrap>

          <SubWrapper>
            <H3>SIGN UP</H3>
            <P>Sign up for latest offers</P>
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
                name="email"
                type="email"
                placeholder="Your Email Address"
                value={info}
                onChange={e => setInfo({email: e.target.value})}
              />
              <Submit type="submit">Sign Up</Submit>
            </Form>
          </SubWrapper>
        </Foot>
      </UpperSection>

      <LowerSection>
        <div style={{ fontSize: "10px" }}>
          **This product is not for use by or sale to persons under the age of
          18. This product should be used only as directed on the label. It
          should not be used if you are pregnant or nursing. Consult with a
          physician before use if you have a serious medical condition or use
          prescription medications. A Doctor’s advice should be sought before
          using this and any supplemental dietary product. The statements
          regarding these products have not been evaluated by the Food and Drug
          Administration. This product is not intended to diagnose, treat, cure
          or prevent any disease. Results from products may vary.**
        </div>
        <div style={{ fontSize: "10px" }}>
          © {new Date().getFullYear()} Hemp Up
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
