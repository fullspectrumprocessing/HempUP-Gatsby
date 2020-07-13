import React from "react"
import styled from "styled-components"

const DrawerOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  margin-top: 4.3em;
  top: 0;
  left: 0;
  background: linear-gradient(
    rgba(216, 190, 190, 0.6),
    rgba(185, 202, 152, 0.7)
  );
  z-index: -2;

  @media (min-width: 769px) {
    display: none;
  }
`

export default props => <DrawerOverlay onClick={props.click} />
