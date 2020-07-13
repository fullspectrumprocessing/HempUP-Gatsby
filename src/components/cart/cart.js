import React, { useContext, useEffect } from "react"
import StoreContext from "../../context/globalcontext"
import LineItem from "./lineItem"
import {
  Button,
  Wrapper,
  ItemWrap,
  CheckoutWrap,
  Empty,
  P,
  H2,
} from "./cart.css"
import { GlobalDispatchContext } from "../../provider/ContextProvider"
import { GlobalStateContext } from "../../provider/ContextProvider"
import { Link } from "gatsby"

const Cart = props => {
  const product = props
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return (
      <LineItem
        key={line_item.id.toString()}
        line_item={line_item}
        product={product}
      />
    )
  })

  useEffect(() => {
    let array = []
    const reducer = (accumulator, currentValue) => accumulator + currentValue

    for (let i = 0; i < checkout.lineItems.length; i++) {
      array.push(checkout.lineItems[i].quantity)
    }
    let total = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    )

    dispatch({ type: "SET_NUM", numInCart: total })
  }, [checkout.lineItems.length])

  const estimatedCost = (
    parseFloat(checkout.totalPrice) +
    parseFloat(checkout.totalPrice) * 0.08
  ).toFixed(2)

  return (
    <Wrapper>
      <ItemWrap>
        {checkout.subtotalPrice > 0 ? (
          line_items
        ) : (
          <Empty>Your Bag is Empty</Empty>
        )}
      </ItemWrap>
      <CheckoutWrap>
        <H2>Sub Total</H2>
        <P>
          $ {checkout.totalPrice} <em>*before tax</em>
        </P>
        <H2>Total</H2>
        <P>
          $ {estimatedCost} <em>*with estimated tax</em>
        </P>
        <br />
        <Button onClick={handleCheckout}>
          <Link style={{ color: "white" }} to="/store/cart">
            Check out
          </Link>
        </Button>
      </CheckoutWrap>
    </Wrapper>
  )
}

export default Cart
