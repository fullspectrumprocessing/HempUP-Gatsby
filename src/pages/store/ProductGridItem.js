import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import AddToCartButton from '../../components/AddToCartButton'
import ViewDetailsButton from '../../components/ViewDetailsButton'

const ProductGridItem = styled.li`
  display: inline-block;
  width: calc(100% - 20px);
  height: auto;
  padding-bottom: 10px;
  margin:10px;
  font-family: 'lato';
  color: #444;
  text-align: center;

  background-color: rgba(255,255,255, 0.7);

  @media only screen and (min-width: 400px) {
    width: calc( 50% - 20px);
  }
  @media only screen and (min-width: 800px) {
    width: calc( 33% - 20px);
  }
`


const GridTitle = styled.div`
  font-size: 18px;
  pointer-events: none;
`

const GridPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #777;
  pointer-events: none;
`

const GridDescription = styled.div`
    font-size: 9px;
    pointer-events: none;
`

const GridImg = styled.img`
  width: calc(100% - 40px);
  border: solid 1px grey;
  margin: 20px 20px 1.45rem 20px ;
  padding: 0;
  pointer-events: none;
`


export default ({product}) => {
  const max = product.node.priceRange.maxVariantPrice.amount
  const min = product.node.priceRange.minVariantPrice.amount
  return(
    <ProductGridItem className="ProductGridItem">

        <Link to={`/store/product/${product.handle}/`} >
          <GridImg src={product.node.images[0].localFile.childImageSharp.fluid.srcWebp}></GridImg>
        </Link>
        <GridTitle className="title">
          {product.node.title}
        </GridTitle>
        <GridPrice>
          { "$" + ( min === max ? min : min + " - " + max) + "0"}
        </GridPrice>
        <GridDescription>
          {product.node.description}
        </GridDescription>

        <AddToCartButton />

        <Link to={`/store/product/${product.handle}/`} >
          <ViewDetailsButton />
        </Link>
    </ProductGridItem>
  )

}
