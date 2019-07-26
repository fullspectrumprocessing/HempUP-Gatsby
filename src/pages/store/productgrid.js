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


export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
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
  )


  return (
    <ProductGrid className="ProductGrid">
      {data.allShopifyProduct.edges.map((product, inx) => (

          <ProductGridItem product={product} key={inx} />

      ))}
    </ProductGrid>
  )
}
