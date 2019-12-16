import React, { useContext, useEffect, useState, useCallback } from "react"
import {  Input } from "reactstrap"
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

const LineItem = (props ) => {








  const { line_item } = props

    //!quantity handlinh hook
    const [quantityCart, setQuantityCart] = useState(line_item.quantity ? line_item.quantity : quantityCart)

     //!variant handling hook
  // const [variant, setVariant] = useState({ ...initialVariant })

  const {
    addVariantToCart,
    removeLineItem,
    store: { client, checkout, adding },
  } = useContext(StoreContext)



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

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  // added------------------------------------
  console.log(client)
  console.log(line_item)

   //! this function handles the change in quantity via the number selector
   const handleQuantityChange = evt => {
    const isDigit = evt.target.value.match(/\d/g, "") && evt.target.value < 21 //number
    isDigit && setQuantityCart(evt.target.value)
    console.log(line_item, "line_item")
    // return quantityCart
    addVariantToCart(line_item.variant.id, quantityCart)
  }

    //!Handling product variant availability
  //   const productVariant =
  //   client.product.helpers.variantForOptions(line_item, line_item.variant) || line_item.variant
  // const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        // const result = line_item.variants.filter(
          // console.log(client)
          // variant => line_item.variant.id === productVariant.shopifyId
        // )
        // setAvailable(result[0].availableForSale)
      })
    },
    // [client.product,  productVariant.shopifyId, line_item.variants]
  )

    // ! checking for product availability on mount
    // useEffect(() => {
    //   console.log(line_item)
    //   checkAvailability(line_item.id)
    // }, [ checkAvailability, line_item.id])
  

  return (
    <Wrapper>
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
          <Input
            defaultValue={quantityCart}
            onChange={handleQuantityChange}
            // disabled={!available || adding}
            type="number"
            name="quantity"
            id="quantitySelect"
            min="1"
            step="1"
          />

          {/* {line_item.quantity} */}
          <br></br>
          <br></br>
          <RemoveButton onClick={handleRemove}>X</RemoveButton>
        </ContentRow2>
      </Card>
    </Wrapper>
  )
}

export default LineItem
