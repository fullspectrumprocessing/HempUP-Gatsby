import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import ShopBag from '../../images/bag.svg'

const ShoppingBag = styled.div`
  flex-direction: column;
  align-self: center;
  padding: 15px;
`

const BagSvg = styled.img`
  width: 31px;
  height: 41px;
`

export default () => {
  return (


    <ShoppingBag>
      <Link to="/store/cart/">
        <BagSvg src={ShopBag} />
      </Link>
    </ShoppingBag>
  )

}
