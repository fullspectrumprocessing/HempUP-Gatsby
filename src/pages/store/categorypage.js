import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import SEO from "../../components/seo"

import ProductGrid from "../../components/store/productgrid"
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
const ProducTypePage = ({data}) => {
  return (
    <Layout>

      <StyledContainer>
        <ProductGrid products={data.allShopifyProduct.edges} />
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
      id
      productType
      createdAt
      images {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
        minVariantPrice {
          amount
        }
      }
    }
  }
}
}

`

export default ProducTypePage
