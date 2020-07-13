import React, { useState, useContext, useCallback } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import AddToCartButton from "../../components/store/AddToCartButton"
import { formatPrice } from "../../utils/stringFormatHelpers"
import StoreContext from "../../context/globalcontext"
import { GlobalDispatchContext } from "../../provider/ContextProvider"
import { GlobalStateContext } from "../../provider/ContextProvider"
import { Input } from "reactstrap"

const GridItem = styled.li`
  display: inline-block;
  width: calc(100% - 20px);
  height: auto;
  padding-bottom: 10px;
  margin: 10px;
  font-family: "lato";
  color: #444;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  :hover {
    margin-top: -15px;
    margin-bottom: 10px;
    box-shadow: 1px 5px 20px #303030;
    -webkit-transition: all 0.6s cubic-bezier(0.24, 2, 0.3, 1);
  }

  @media only screen and (min-width: 593px) {
    width: calc(50% - 20px);
  }
  @media only screen and (min-width: 900px) {
    width: calc(33% - 20px);
  }
`

const GridTitle = styled.div`
  font-family: objektiv-mk1, sans-serif;
  font-size: 18px;
  color: #707070;
  font-weight: 400;
  pointer-events: none;
  height: 54px;
  padding: 0 10px;
`

const GridPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #98795b;
  pointer-events: none;
`

const GridDescription = styled.div`
  font-size: 9px;
  pointer-events: none;
`

const GridImg = styled(Img)`
  width: calc(100% - 40px);
  margin: 20px 20px 1.45rem 20px;
  padding: 0;
  pointer-events: none;
`

const InputStyled = styled(Input)`
  width: 50px !important;
  height: 44px !important;
  padding: 5px !important;
  padding-left: 10px !important;
  margin-top: 12px !important;
  display: inline-block !important;
`
const Span = styled.div`
  height: 70px;
`

const ProductGridItem = ({ product }) => {
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  let max = 0
  let min = 0

  const initialItem = product.node.variants[0]

  const [varient, setVarient] = useState(initialItem)

  const [quantity, setQuantity] = useState(1)

  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)

  //! this function handles the change in quantity via the number selector
  const handleQuantityChange = evt => {
    const isDigit = evt.target.value.match(/\d/g, "") && evt.target.value < 21 //number
    isDigit && setQuantity(evt.target.value)
  }

  //! this handles the add to cart submission
  const handleAddToCart = () => {
    addVariantToCart(productVariant.shopifyId, quantity)
    checkAvailability(product.shopifyId)
    dispatch({
      type: "SET_NUM",
      numInCart: (state.numInCart += parseInt(quantity)),
    })
  }

  //!Handling product variant availability
  const productVariant = varient
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = product.variants.filter(
          variant => varient.shopifyId === productVariant.shopifyId
        )
        setAvailable(result[0].availableForSale)
      })
    },
    [client.product, productVariant.shopifyId, product.variants]
  )

  if (product && product.node) {
    max = formatPrice(product.node.priceRange.maxVariantPrice.amount)
    min = formatPrice(product.node.priceRange.minVariantPrice.amount)
  }

  return (
    product &&
    product.node && (
      <GridItem>
        <Link to={`/store/product/${product.node.handle}/`}>
          <GridImg
            fluid={product.node.images[0].localFile.childImageSharp.fluid}
          />

          <GridTitle className="title">{product.node.title}</GridTitle>
        </Link>
        <GridPrice>{min === max ? min : min + " - " + max}</GridPrice>
        <GridDescription>{product.node.description}</GridDescription>
        <Span>
          <InputStyled
            defaultValue={quantity}
            onChange={handleQuantityChange}
            type="number"
            name="quantity"
            id="quantitySelect"
            min="1"
          />

          <AddToCartButton
            handleAddToCart={() => {
              handleAddToCart(product.node)
            }}
            handleAddToCart={handleAddToCart}
            disabled={!available || adding}
          />
        </Span>
      </GridItem>
    )
  )
}
export default ProductGridItem
