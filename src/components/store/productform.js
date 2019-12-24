import React, { useState, useEffect, useContext, useCallback } from "react"
// import PropTypes from "prop-types"
import styled from "styled-components"
// import Img from "gatsby-image"
import { Container, Row, FormGroup, Label, Input } from "reactstrap"
import AddToCartButton from "../../components/store/AddToCartButton"
import { formatPrice } from "../../utils/stringFormatHelpers"
import StoreContext from "../../context/globalcontext"
import { GlobalDispatchContext } from "../../provider/ContextProvider"
import { GlobalStateContext } from "../../provider/ContextProvider"

const StyledContainer = styled(Container)`
  width: 20%;
  margin: 10px auto;
  font-family: "lato";
  color: #444;
`
const StyledFormGroup = styled(FormGroup)`
  margin: 0 auto;
`
const Price = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #98795b;
  pointer-events: none;
  margin: 0 auto;
`
const ButtonContainer = styled.div`
  margin: 0 auto;
  text-align: center;
`

const ProductForm = ({ product }) => {
//  set up global state and dispatch
  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)

  const {
    variants,
    variants: [initialVariant],
  } = product

  //!variant handling hook
  const [variant, setVariant] = useState({ ...initialVariant })

  //!quantity handlinh hook
  const [quantity, setQuantity] = useState(1)

  //!Initializing context
  const {
    addVariantToCart,
    store: { client, adding, checkout },
  } = useContext(StoreContext)

  //!Handling variant changes
  const handleVarietyChange = evt => {
    setVariant({
      ...getVariantDataFromTitle(evt.target.value),
    })
  }

  //! this function handles the change in quantity via the number selector
  const handleQuantityChange = evt => {
    const isDigit = evt.target.value.match(/\d/g, "") && evt.target.value < 21 //number
    isDigit && setQuantity(evt.target.value)
    
  }

  //! getting product data based on it title
  const getVariantDataFromTitle = title => {
    for (let i = 0; i < product.variants.length; i++) {
      if (product.variants[i].title === title) {
        return product.variants[i]
      }
    }
  }

  //! this handles the add to cart submission
  // TODO: Create Store Context for shopping cart
  const handleAddToCart = () => {
 
    addVariantToCart(productVariant.shopifyId, quantity)
  
 
    dispatch({ type: "SET_NUM", numInCart: state.numInCart += parseInt(quantity) })
    dispatch({ type: "SET_FRIEND", bestFriends: "dog" })

  }

  //!Handling product variant availability
  const productVariant =
    client.product.helpers.variantForOptions(product, variant) || variant
  const [available, setAvailable] = useState(productVariant.availableForSale)

  const checkAvailability = useCallback(
    productId => {
      client.product.fetch(productId).then(() => {
        // this checks the currently selected variant for availability
        const result = variants.filter(
          variant => variant.shopifyId === productVariant.shopifyId
        )
        setAvailable(result[0].availableForSale)
      })
    },
    [client.product, productVariant.shopifyId, variants]
  )

  // ! checking for product availability on mount
  useEffect(() => {

    checkAvailability(product.shopifyId)
  }, [productVariant, checkAvailability, product.shopifyId])


  return (
    <StyledContainer>
   
      <Row>
        <StyledFormGroup>
          <Label for="exampleNumber">Select Quantity:</Label>
          <Input
            defaultValue={quantity}
            onChange={handleQuantityChange}
            type="number"
            name="quantity"
            id="quantitySelect"
            min="1"
            // step="1"
          />
        </StyledFormGroup>
        {product.variants && product.variants.length > 1 && (
          <StyledFormGroup>
            <Label for="exampleSelect">Select Variety: </Label>
            <Input
              onChange={handleVarietyChange}
              type="select"
              name="variety"
              id="varietySelect"
            >
              {product.variants.map((item, inx) => {
                return (
                  <option key={inx.toString()} inx={inx}>
                    {item.title}
                  </option>
                )
              })}
            </Input>
          </StyledFormGroup>
        )}
      </Row>
      <Row>
        <Price>{variant.price && formatPrice(variant.price)}</Price>
      </Row>
      <ButtonContainer>
        <AddToCartButton
          handleAddToCart={handleAddToCart}
          disabled={!available || adding}
         
        />
      </ButtonContainer>
    </StyledContainer>
  )
}

export default ProductForm
