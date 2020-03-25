import React, { useContext, useEffect, useState, useCallback } from "react"

import StoreContext from "../../../context/globalcontext"
import {
  Wrapper,
  Card,
  ContentRow1,
  ContentRow2,
  Title,
  Price,
  Image,
  RemoveButton,
} from "./lineItem.css"
import { GlobalDispatchContext } from "../../../provider/ContextProvider"
import { GlobalStateContext } from "../../../provider/ContextProvider"
// import Cart from "../cart"

const LineItem = props => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const { line_item } = props

  //!quantity handlinh hook
  // const [quantityChange, setQuantityChange] = useState(false)
  // const [quantityCart, setQuantityCart] = useState(line_item.quantity ? line_item.quantity : quantityCart)

  const {
    addVariantToCart,
    updateLineItem,
    removeLineItem,
    store: { client, checkout, adding },
  } = useContext(StoreContext)

  const checkState = () => {}

  const variantImage = line_item.variant.image ? (
    <Image
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const callDispatch = () => {
    dispatch({ type: "SET_CART", isCart: true })
  }

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
    console.log(line_item, "lineItem---")
    console.log(checkout, "CHECKOUT")

    dispatch({
      type: "SET_NUM",
      numInCart: (state.numInCart -= parseInt(line_item.quantity)),
    })

    callDispatch()

    console.log(state, "STATE!!")

    // checkState()
  }

  // added------------------------------------
  // console.log(client)
  // console.log(line_item)

  // updates modal state toggle to true
  // const updateQuantity = () => {
  //   setQuantityChange(true)
  // }

  //! this function handles the change in quantity via the number selector
  //  const handleQuantityChange = evt => {
  //   const isDigit = evt.target.value.match(/\d/g, "") && evt.target.value < 21 //number
  //   isDigit && setQuantityCart(evt.target.value)

  //   updateQuantity()
  //   console.log(quantityChange, "quantity change")

  //   console.log(quantityCart, "quantity cart")
  // }

  //!Handling product variant availability
  //   const productVariant =
  //  line_item.variant
  // const [available, setAvailable] = useState(productVariant.availableForSale)

  // const checkAvailability = useCallback(
  //   productId => {
  //     client.product.fetch(productId).then(() => {
  //       // this checks the currently selected variant for availability
  //       const result = line_item.variant.id

  //       setAvailable(result.availableForSale)
  //     })
  //   },
  //   [client.product,  line_item.variant.id, line_item.variants]
  // )

  // useEffect(() => {
  //   if (quantityChange === true) {
  //     // if true run handle show function to open modal
  //    console.log(quantityCart, "quantity in effenct")
  //    checkAvailability(line_item.variant.id)
  //   //  updateLineItem(client, checkout.id, line_item.variant.id, quantityCart)
  //    addVariantToCart(line_item.variant.id, quantityCart,  console.log(line_item, "quantity cart"))
  //    console.log(line_item, "quantity cart")

  //     // set state  back to false
  //     setQuantityChange(false)

  //   }
  // })

  useEffect(() => {
    console.log(state, "STATE IN EFFECT")
  }, [])

  return (
    <Wrapper>
      {console.log(state, "line_state!!!")}
      <Card>
        <ContentRow1>{variantImage}</ContentRow1>
        <ContentRow2>
          <Title>
            {line_item.title}
            {`  `}
            {line_item.variant.title === !"Default Title"
              ? line_item.variant.title
              : ""}
          </Title>
          {/* <Price>{selectedOptions}</Price> */}
          <Price>${line_item.variant.price}</Price>
          {/* <Input
            defaultValue={quantityCart}
            onChange={handleQuantityChange}
            // disabled={!available || adding}
            type="number"
            name="quantity"
            id="quantitySelect"
            min="1"
            step="1"
          /> */}
          <Title>Quantity: {line_item.quantity}</Title>
        </ContentRow2>
        <div>
          <RemoveButton onClick={handleRemove}>X</RemoveButton>
        </div>
      </Card>
    </Wrapper>
  )
}

export default LineItem
