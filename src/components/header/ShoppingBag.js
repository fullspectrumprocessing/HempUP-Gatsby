import React, {useContext} from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import ShopBag from '../../images/bag.svg'
import { GlobalStateContext } from "../../provider/ContextProvider";

const ShoppingBag = styled.div`
  flex-direction: column;
  align-self: center;
  padding: 15px;
`

const BagSvg = styled.img`
  width: 31px;
  height: 41px;
`
const Item = styled.div`
  width: 31px;
  height: 20px;
  background: blue;
`

export default () => {

  const state = useContext(GlobalStateContext);
  return (


    <ShoppingBag>
      <Link to="/store/cart/">
        <BagSvg src={ShopBag} />
        {/* <Item>{state.numInCart}</Item> */}
      </Link>
    </ShoppingBag>
  )

}
