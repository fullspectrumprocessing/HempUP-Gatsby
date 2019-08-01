import React from 'react'
import { useStaticQuery,  graphql } from 'gatsby'

const queryProductTypes = () => {
  const data = useStaticQuery(
    graphql`
    query {
      allShopifyProductType {
        edges {
          node {
            name
          }
        }
      }
    }
    `
  )
  console.log('productTypes data', data)

  let productTypes = data.allShopifyProductType.edges.map((item) => {
    return item.node.name
  })

  console.log('productTypes', productTypes)

  return (
    productTypes

  )
}

export default queryProductTypes
