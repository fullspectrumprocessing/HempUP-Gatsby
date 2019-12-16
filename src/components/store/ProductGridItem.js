import React, { useState, useEffect, useContext, useCallback } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import AddToCartButton from "../../components/store/AddToCartButton"
import ViewDetailsButton from "../../components/store/ViewDetailsButton"
import { formatPrice } from "../../utils/stringFormatHelpers"
import StoreContext from "../../context/globalcontext"

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

  @media only screen and (min-width: 500px) {
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
  border: solid 1px grey;
  margin: 20px 20px 1.45rem 20px;
  padding: 0;
  pointer-events: none;
`

// const handleAddToCart = node => {
//   console.log("TODO: ProductGridItem handleAddToCart", node)
// }


// export default ({ product }) => {
  const ProductGridItem = ({product}) => {

  
  let max = 0
  let min = 0

  // const {
  //   variants,
  //   variants: [initialVariant],
  // } = product

    //!variant handling hook
    // const [variant, setVariant] = useState({ ...initialVariant })

     //!quantity handlinh hook
  // const [quantity, setQuantity] = useState(1)

    //!Initializing context
    // const {
    //   addVariantToCart,
    //   store: { client, adding },
    // } = useContext(StoreContext)
  

      //!Handling variant changes
  // const handleVarietyChange = evt => {
  //   setVariant({
  //     ...getVariantDataFromTitle(evt.target.value),
  //   })
  // }

    //! getting product data based on it title
    // const getVariantDataFromTitle = title => {
    //   for (let i = 0; i < product.variants.length; i++) {
    //     if (product.variants[i].title === title) {
    //       return product.variants[i]
    //     }
    //   }
    // }

      //! this handles the add to cart submission
  // TODO: Create Store Context for shopping cart
  const handleAddToCart = () => {
    console.log("TODO: create storecontext")
    // console.log("sel variant", productVariant.shopifyId)
    // console.log("sel quantity", quantity)
    // checkAvailability(product.shopifyId)
    // addVariantToCart(productVariant.shopifyId, quantity)
  }

  //!Handling product variant availability
  // const productVariant =
  //   client.product.helpers.variantForOptions(product, variant) || variant
  // const [available, setAvailable] = useState(productVariant.availableForSale)

  // const checkAvailability = useCallback(
  //   productId => {
  //     client.product.fetch(productId).then(() => {
  //       // this checks the currently selected variant for availability
  //       const result = variants.filter(
  //         variant => variant.shopifyId === productVariant.shopifyId
  //       )
  //       setAvailable(result[0].availableForSale)
  //     })
  //   },
  //   [client.product, productVariant.shopifyId, variants]
  // )

  // ! checking for product availability on mount
  // useEffect(() => {
    
  //   checkAvailability(product.shopifyId)
  // }, [productVariant, checkAvailability, product.shopifyId])
  
useEffect(() => {
  console.log(product)
}, [])


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
        <GridPrice>{min === max ? min : min + " - " + max}</GridPrice>
        <GridDescription>{product.node.description}</GridDescription>
{/* 
        <AddToCartButton
          // handleAddToCart={() => {
          //   handleAddToCart(product.node)
          // }}
          // handleAddToCart={handleAddToCart}
          // disabled={!available || adding}
        /> */}

        <Link to={`/store/product/${product.node.handle}/`}>
          <ViewDetailsButton />
        </Link>
        </Link>
      </GridItem>
    )
  )
}
export default ProductGridItem