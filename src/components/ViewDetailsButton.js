import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'
import styled from 'styled-components'


const ViewDetailsButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 12px;
  background-color: #fff;
  /* background-image: radial-gradient( circle, rgba(255, 255, 255, 0.6), 50%,  rgba(255, 255, 255, 0.6)); */
  border: solid 1px grey;
  margin:8px 4px 0px 4px;

  @media only screen and (min-width: 800px) {
    width: 170px;
  }
`

const Text = styled.span`
  color: rgba(76, 116, 72, 1);
  font-family: 'objektiv-mk1', 'sans-serif';
  font-size: 16px;
  letter-spacing: 2px;
`

export default () => (
  <ViewDetailsButton
    className ="ViewDetailsButton"
  >
    <Text>view details</Text>
  </ViewDetailsButton>
)
