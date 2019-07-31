import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

import Layout from '../../components/layout'
import cssVars from '../../theme/_variables'


const ProductHeader = styled.div`
  font-family: objektiv-mk1, sans-serif;
  text-align: center;
  font-size: 2em;
  color: ${cssVars.txtGrn}
  margin: 10px auto;
  @media only screen and (max-width: 576px) {
    text-align: center;
    font-size: 1.5em;

  }
`
const StyledContainer = styled(Container)`
  background: rgba(255,255,255, 0.7);
  margin-bottom: 50px;
  padding-bottom: 50px;

`
const ProducTypePage = (props) => {
  const products = props.data.allShopifyProduct.edges

  console.log('ProductTypePage props' , props)
  // console.log('ProductTypePage' , props.data, props.pageContext)

  return (
    <Layout>

      <StyledContainer>
        <ProductHeader >
            {
              products.map( (product, inx) => {
              return <div key={inx}> {product.node.title} </div>
            })
          }
        </ProductHeader >


      </StyledContainer>

    </ Layout>
  )
}

export const query = graphql`
  query ($productType: String) {
    allShopifyProduct(filter: {productType: {eq: $productType}}) {
      edges {
        node {
          handle
          title
        }
      }
    }
  }
`

export default ProducTypePage
