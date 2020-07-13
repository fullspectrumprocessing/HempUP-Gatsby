import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
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

const LineItem = props => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const { line_item, product } = props

  const [title, setTitle] = useState("")

  const {
    addVariantToCart,
    updateLineItem,
    removeLineItem,
    store: { client, checkout, adding },
  } = useContext(StoreContext)

  const getLink = () => {
    let arr = product.products
    let name = ""
    for (let i = 0; i < arr.length; i++) {
   
      if (arr[i].node.title === line_item.title) {
        name = arr[i].node.handle
        setTitle(name)
      }
    }
  }

  useEffect(() => {
    getLink()
  })

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


    dispatch({
      type: "SET_NUM",
      numInCart: (state.numInCart -= parseInt(line_item.quantity)),
    })

    callDispatch()
  }

  useEffect(() => {}, [])

  return (
    <Wrapper>
      <Card>
        <ContentRow1>{variantImage}</ContentRow1>
        <ContentRow2>
          <Link to={`/store/product/${title}/`}>
            {" "}
            <Title>
              {line_item.title}
              {`  `}
              {line_item.variant.title === !"Default Title"
                ? line_item.variant.title
                : ""}
            </Title>
          </Link>

          <Price>${line_item.variant.price}</Price>

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
