import React, { useContext } from 'react'
import {GlobalStateContext} from "../../context/globalcontext";
import LineItem from './LineItem'

const Cart = () => {
  // const {
      
  //   store: { checkout },
  // } = useContext(GlobalStateContext)


 

  const handleCheckout = () => {
    // window.open(checkout.webUrl)
    // console.log(store)
  }

  // const line_items = checkout.lineItems.map(line_item => {
    // return <LineItem key={line_item.id.toString()} line_item={line_item} />
  // })

  return (
    <div>
      {/* {line_items} */}
      <h2>Subtotal</h2>
      {/* <p>$ {checkout.subtotalPrice}</p> */}
      <br />
      <h2>Taxes</h2>
      {/* <p>$ {checkout.totalTax}</p> */}
      <br />
      <h2>Total</h2>
      {/* <p>$ {checkout.totalPrice}</p> */}
      <br />
      {/* <button onClick={handleCheckout}>Check out</button> */}
    </div>
  )
}

export default Cart