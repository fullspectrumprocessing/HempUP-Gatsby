import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import Cart from "../../components/cart/cart"
import styled from "styled-components"
import Slide from "react-reveal/Slide"
import Fade from "react-reveal/Fade"
import SEO from "../../components/seo"
import cssVars from "../../theme/_variables"

const CartTitle = styled.h1`
  color: ghostwhite;
  font-size: 60px;
  font-family: lato, sans serif;
  margin: 20px;
`
const CartHeader = styled.div`
  width: 100vw;
  background-image: ${cssVars.grdntGreen};
  text-align: center;
  margin-top: 41px;
  align-self: flex-start;
  display: flex;
  justify-content: center;
`

const fadeNSlide = (component, delay = 0) => {
  return (
    <Fade delay={delay}>
      <Slide top cascade delay={delay}>
        {component}
      </Slide>
    </Fade>
  )
}
const CartPage = ({ data }) => {
  const [openModal, setModal] = useState(false)

  useEffect(() => {
    const modalStatus = sessionStorage.getItem("modalStatus")
    if (modalStatus !== "closed") {
      setModal(true)
    }

  }, [])


  return (
    <>
      <Layout>
        <SEO />
        {fadeNSlide(
          <CartHeader>
            <CartTitle>Shopping Bag</CartTitle>
          </CartHeader>,
          500
        )}
        <Cart products={data.allShopifyProduct.edges}/>
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allShopifyProduct(sort: { fields: [createdAt], order: ASC }) {
      edges {
        node {
          id
          productType
          title
          handle
          createdAt
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
            id
            originalSrc
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

export default CartPage
