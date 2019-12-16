import React, { useContext } from "react"
import StoreContext from "../../context/globalcontext"
import LineItem from "./lineItem"
import {Button, Wrapper, ItemWrap, CheckoutWrap} from "./cart.css"

const Cart = (props) => {
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

  return (
    <Wrapper>
      <ItemWrap>
      {line_items}
      </ItemWrap>
      <CheckoutWrap>
      <h2>Subtotal</h2>
      <p>$ {checkout.subtotalPrice}</p>
      <br />
      <h2>Taxes</h2>
      <p>$ {checkout.totalTax}</p>
      <br />
      <h2>Total</h2>
      <p>$ {checkout.totalPrice}</p>
      <br />
      <Button onClick={handleCheckout}>Check out</Button>
      </CheckoutWrap>
    </Wrapper>
  )
}

export default Cart
