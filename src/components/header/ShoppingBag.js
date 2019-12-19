import React, {useContext} from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import ShopBag from '../../images/bag.svg'
import { GlobalStateContext } from "../../provider/ContextProvider";
import cssVars from "../../theme/_variables"

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
  width: 25px;
  height: 25px;
  background: ${cssVars.grdntGreen};
  position: absolute;
  color: white;
  top: 0;
  left: 15px;
  text-align: center;
  border-radius: 50%;
`
const CartDiv = styled.div`
 width: 80px;
 height: 50px;
 position: relative;
//  color: blue;
`

export default ({props}) => {

  const state = useContext(GlobalStateContext);
  return (


    <ShoppingBag>
    
      <Link to="/store/cart/">
        <CartDiv>
        <BagSvg src={ShopBag} />
  {state.numInCart > 0 ?<Item>{state.numInCart}</Item> : null}
        </CartDiv>
      </Link>
    </ShoppingBag>
  )

}
