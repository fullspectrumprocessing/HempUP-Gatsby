import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"

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
  text-align: center;
  /* color: ${cssVars.txtBrwn}; */
  color:#777;
  font-family: ${cssVars.LATO}
`
const StyledLink = styled(Link)`
  /* color: ${cssVars.txtBrwn}; */
  color:#777;
  margin: 5px 10px;
  text-decoration: none;
  :hover {
      color:${cssVars.txtGrn} !important;
  }
  @media (min-width: 796px) {
    flex-direction: row;
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
const Footer = () => (
  <StyledFooter>
    <UpperSection>
    {
      Object.keys(navigationFooterLinks).map( (item, inx) => {
        return (
          <StyledLink to={navigationFooterLinks[item]}>{item}</StyledLink>
        )
      })
    }
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

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: "",
}



export default Footer
