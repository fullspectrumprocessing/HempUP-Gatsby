import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import { LogoImage } from "./logoimage"

const HempUpLogo = styled.div`
  z-index: 2;
  margin-bottom: 10px;
`

export default () => {
  return (
    <HempUpLogo>
      <Link to="/">
        <LogoImage />
      </Link>
    </HempUpLogo>
  )
}
