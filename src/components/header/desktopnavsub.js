import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import getProductTypes from '../../utils/getProductTypes'
import GlobalStyle from "../../theme/globalStyle"

const DesktopNavSubBar = styled.div`
  display: inline-flex;
  list-style: none;
  align-items: flex-end;

  margin-left: 120px;
  justify-content: space-between;
  @media (max-width: 796px) {
    display: none;
  }

`

export default () => {
  <DesktopNavSubBar>
  {
    // getProductTypes().map( (item, inx) => {
    //   <button>{item}</button>
    // })
  }

  </DesktopNavSubBar>
}
