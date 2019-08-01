import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'
import styled from 'styled-components'
import ProductGridItem from './ProductGridItem'


const ProductGrid = styled.ul`
/* display:inline-block; */
  margin: 30px auto;
  padding: 0;
  padding-inline-start: 0;

  @media only screen and (min-width: 400px) {
    width: 80%;
  }
  @media only screen and (min-width: 800px) {
    width: 90%;
  }
`

export default ({products}) => {


  return (
    <ProductGrid className="ProductGrid">
      {products.map((product, inx) => (

          <ProductGridItem product={product} key={inx} />

      ))}
    </ProductGrid>
  )
}
