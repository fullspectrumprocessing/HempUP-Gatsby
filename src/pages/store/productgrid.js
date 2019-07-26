import React from 'react'
import { useStaticQuery,  graphql, Link } from 'gatsby'
// import { Flex, Box } from '@rebass/grid/emotion'


const ProductGrid = () => {
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
            }
          }
        }
      }
    `
  )

  const getLink = (handle) => {
    return `/store/product/${handle}/`
  }

  return (
    <div>
      {data.allShopifyProduct.edges.map((product, inx) => (
        <div className='ProductGridItem' key={inx}>

          <Link to={getLink(product.node.handle)}>
            <span className="title"> {product.node.title}</span>
          </Link>
{console.log(product.node.images[0].localFile.childImageSharp.fluid)}
          <Link to={getLink(product.node.handle)}>
            <img src={product.node.images[0].localFile.childImageSharp.fluid.srcWebp}></img>
          </Link>

        </div>

      ))}
    </div>
  )
}

export default ProductGrid
