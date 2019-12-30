import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Container, Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../../components/layout"
import ProductForm from "../../components/store/productform"
import cssVars from "../../theme/_variables"

const ProductHeader = styled.div`
  font-family: objektiv-mk1, sans-serif;
  padding: 20px;
  text-align: center;
  font-size: 2em;
  color: ${cssVars.txtGrn}
  margin: 10px auto;
  @media only screen and (max-width: 576px) {
    text-align: center;
    font-size: 1.5em;
  }
`
const ProductImage = styled(Img)`
  max-width: 500px;
  min-width: 250px;
  width: 100%;
  margin: 10px auto;
  border: solid 1px grey;
  @media only screen and (max-width: 576px) {
    width: calc(50% - 20px);
  }
`
<<<<<<< HEAD
const ProductDescription = styled.div`
white-space: pre-wrap;
=======
const ProductDescription = styled.text`
  white-space: pre-wrap;
>>>>>>> master
  min-width: 200px;
  width: 80%;
  font-family: lato, sans-serif;
  margin: 0 auto;
  @media only screen and (max-width: 576px) {
    text-align: center;
  }
`
const StyledContainer = styled(Container)`
  background: rgba(255, 255, 255, 0.7);
  padding-top: 20px;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 100%;
  padding-bottom: 50px;
`
const ProductPage = ({ data }) => {
  const product = data.shopifyProduct


  return (
    <Layout>
      <StyledContainer>
        <ProductHeader>{product.title}</ProductHeader>
        <Row>
          <Col sm>
            <ProductImage
              fluid={product.images[0].localFile.childImageSharp.fluid}
            />
          </Col>
          <Col sm>
            <ProductForm variants={product.variants || []} product={product} />
<<<<<<< HEAD
          
           <ProductDescription > {product.description.split('\n').map((item, key) => {
  return <span  key={key}>{item}<br/></span>

})}</ProductDescription>

=======
            <ProductDescription>
              {" "}
              {product.description.split("\n").map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                )
              })}
            </ProductDescription>
            {console.log(product, "descrtipion")}
>>>>>>> master
          </Col>
        </Row>
      </StyledContainer>
    </Layout>
  )
}

export const query = graphql`
  query($handle: String) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      shopifyId
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
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage
