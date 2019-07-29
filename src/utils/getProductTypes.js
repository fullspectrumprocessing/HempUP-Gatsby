
import { useStaticQuery,  graphql } from 'gatsby'

export default () => {
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

  let productTypes = data.allShopifyProductType.edges

  console.log('productTypes', productTypes)

  return (
    productTypes

  )
}
