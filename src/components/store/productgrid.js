import React from 'react'
import styled from 'styled-components'
import ProductGridItem from './ProductGridItem'


const ProductGrid = styled.ul`
  margin: 30px auto;
  padding: 0;
  padding-inline-start: 0;
  width: 70%;
`

export default ({products}) => {


  return (
    <ProductGrid>
      {products.map((product, inx) => (

          <ProductGridItem product={product} key={inx} />

      ))}
    </ProductGrid>
  )
}
