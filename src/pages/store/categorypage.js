import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../../components/seo"
import ProductGrid from "../../components/store/productgrid"
import Layout from "../../components/layout"
import cssVars from "../../theme/_variables"

const PageHeader = styled.div`
  font-family: objektiv-mk1, sans-serif;
  text-align: center;
  font-size: 2.5em;
  color: ${cssVars.txtGrn}
  margin: 10px auto;
  @media only screen and (max-width: 576px) {
    text-align: center;
    font-size: 1.5em;
  }
`

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
const StyledContainer = styled.div`
  /* background: rgba(255,255,255, 0.7); */
  margin-left: 0px !important;
  margin-right: 0px !important;
  width: 100% !important;
  @media only screen and (max-width: 576px) {
    margin-bottom: 50px;
    padding-bottom: 50px;
  }
`
const ProducTypePage = props => {
  const { data } = props
  console.log("PRO TYPE", data.allShopifyProduct.edges[0].node.productType)
  return (
    <Layout>
      <SEO
        title="Hemp Up Product Types"
        keywords={[`CBD`, `hemp`, `pet`, `edibles`, `tinctures`, `oil`]}
      />
      <StyledContainer>
        <PageHeader>
          {/* {data.allShopifyProduct.edges[0].node.productType} */}
        </PageHeader>
        <ProductGrid
          products={data.allShopifyProduct.edges}
          page={data.allShopifyProduct.edges[0].node.productType}
        />
      </StyledContainer>
    </Layout>
  )
}

export const query = graphql`
  query($productType: String) {
    allShopifyProduct(filter: { productType: { eq: $productType } }) {
      edges {
        node {
          handle
          title
          id
          productType
          createdAt
          options {
            id
            name
            values
          }
          variants {
            id
            title
            price
            availableForSale
            shopifyId
            selectedOptions {
              name
              value
            }
          }
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
