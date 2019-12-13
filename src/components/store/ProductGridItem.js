import React, { useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import StoreContext from "../../context/globalcontext"
import AddToCartButton from "../../components/store/AddToCartButton"
import ViewDetailsButton from "../../components/store/ViewDetailsButton"
import { formatPrice } from "../../utils/stringFormatHelpers"

const ProductGridItem = styled.li`
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
  min-height: 20px;
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

export default ({ product }) => {
  const {
    addVariantToCart,
    store: { client, adding },
  } = useContext(StoreContext)


  //! Sending product to shoppoing cart
  const handleAddToCart = () => {
    // let variant = 
    console.log("shopify id", product.node.shopifyId)
    console.log("quantity", quantity)
    addVariantToCart(product.node.shopifyId, quantity)
  }
  const quantity = 1

  let max = 0
  let min = 0

  if (product && product.node) {
    max = formatPrice(product.node.priceRange.maxVariantPrice.amount)
    min = formatPrice(product.node.priceRange.minVariantPrice.amount)
  }

  return (
    product &&
    product.node && (
      <ProductGridItem>
        <Link to={`/store/product/${product.node.handle}/`}>
          <GridImg
            fluid={product.node.images[0].localFile.childImageSharp.fluid}
          />
        </Link>
        <GridTitle className="title">{product.node.title}</GridTitle>
        <GridPrice>{min === max ? min : min + " - " + max}</GridPrice>
        <GridDescription>{product.node.description}</GridDescription>

        <AddToCartButton
          handleAddToCart={handleAddToCart}
        />

        <Link to={`/store/product/${product.node.handle}/`}>
          <ViewDetailsButton />
        </Link>
      </ProductGridItem>
    )
  )
}
