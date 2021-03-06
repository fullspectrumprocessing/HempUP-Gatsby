import React from 'react'
import styled from 'styled-components'


const AddToCartButton = styled.button`
  display: inline-block;
  height: 40px;
  border-radius: 12px;
  background-color: rgba(76, 116, 72, 1);
  background-image: radial-gradient( circle, rgba(76, 116, 72, 0.6), 50%, rgba(76, 116, 72, 0.9));
  border: none;
  margin:8px 4px 0px 4px;
  &:hover {
    background-color: white;
  }
`

const Text = styled.span`
  color: #fff;
  font-family: 'objektiv-mk1', 'sans-serif';
  font-size: 16px;
  letter-spacing: 2px;
  padding: 7px;
`

export default (props) => (

  <AddToCartButton
    className ="AddToCartButton"
    onClick={ props.handleAddToCart}
  >
    <Text>add to bag</Text>
  </AddToCartButton>
)
