import React, { useState } from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
import {
  Foot,
  UL,
  SubWrapper,
  LogoWrap,
  H3,
  LI,
  P,
  Form,
  Input,
  Submit,
  NavWrap,
  StyledFooter,
  StyledLink,
  UpperSection,
  LowerSection,
  FooterLink,
} from "./footer.css"
import Img from "gatsby-image"
import { navigationFooterLinks } from "../navigationMap"

const Footer = () => {
  const [info, setInfo] = useState({
    email: "",
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
                value={info.email}
                onChange={e => setInfo({ email: e.target.value })}
              />
              <Submit type="submit">Sign Up</Submit>
            </Form>
          </SubWrapper>
        </Foot>
      </UpperSection>

      <LowerSection>
        <div style={{ fontSize: "12px" }}>
          <em>
            This product is not for use by or sale to persons under the age of
            18. This product should be used only as directed on the label. It
            should not be used if you are pregnant or nursing. Consult with a
            physician before use if you have a serious medical condition or use
            prescription medications. A Doctor’s advice should be sought before
            using this and any supplemental dietary product. The statements
            regarding these products have not been evaluated by the Food and
            Drug Administration. This product is not intended to diagnose,
            treat, cure or prevent any disease. Results from products may vary.
          </em>
        </div>
        <div style={{ fontSize: "12px", color: "green", paddingTop: "10px" }}>
          © {new Date().getFullYear()} Hemp Up
        </div>
        <div style={{ fontSize: "12px" }}>
          Built with{" "}
          <FooterLink
            href="https://www.gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </FooterLink>
          {` `}
          by
          {` `}
          <FooterLink
            href="http://fullspectrumprocessing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Spectrum Processing
          </FooterLink>
        </div>
      </LowerSection>
    </StyledFooter>
  )
}

export default Footer
