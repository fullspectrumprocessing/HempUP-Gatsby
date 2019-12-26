import React, { useContext, useEffect, useCallback,  useState, useRef } from "react"
import StoreContext from "../../context/globalcontext"
import LineItem from "./lineItem"
import {Button, Wrapper, ItemWrap, CheckoutWrap, Empty, P, H2} from "./cart.css"
import { GlobalDispatchContext } from "../../provider/ContextProvider"
import { GlobalStateContext } from "../../provider/ContextProvider"

const Cart = (props) => {

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  const [totalCart, setTotalCart] = useState();
  const getSearchResults = () => {
    console.log(state.numInCart, "HERE I AM")
  }


  const {
    store: { checkout },
  } = useContext(StoreContext)
  

  const handleCheckout = () => {
    window.open(checkout.webUrl)
    console.log(props)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })


  useEffect(() => {
    let array = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(checkout)
    for (let i = 0; i < checkout.lineItems.length; i++) {
        array.push(checkout.lineItems[i].quantity)
        console.log(array,"array")
    }
     let total = array.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0
    )
 
    console.log(totalCart)
 
    dispatch({ type: "SET_NUM", numInCart: total })
  
    console.log(total, "final")

getSearchResults()
    
  }, [checkout.lineItems.length])

  return (
    <Wrapper>
       <ItemWrap>
      {checkout.subtotalPrice > 0 ?   line_items : <Empty>Your Cart is Empty</Empty>}
     
    
      </ItemWrap>
      <CheckoutWrap>
      {/* <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br /> */}
      {/* <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br /> */}
      <H2>Total</H2>
      <P>$ {checkout.totalPrice}</P>
      <br />
      <Button onClick={handleCheckout}>Check out</Button>
      </CheckoutWrap>
    </Wrapper>
  )
}

export default Cart
