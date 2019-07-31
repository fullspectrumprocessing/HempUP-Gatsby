const path = require(`path`)

/*
TODO:
 - make another createPages call with allShopifyProductTypes
 - also use allShopifyProductTypes to generate sub menus and links, with different graphql node method?
https://www.gatsbyjs.org/docs/node-apis

*/

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allShopifyProduct {
            edges {
              node {
                handle
              }
            }
          }
      allShopifyProductType {
        edges {
          node {
            id
          }
        }
      }
    }
  `).then(result => {
    const allProducts = result.data.allShopifyProduct.edges
    const allProductTypes = result.data.allShopifyProductType.edges

    allProducts.forEach(({ node }) => {
      createPage({
        path: `/store/product/${node.handle}/`,
        component: path.resolve(`./src/pages/store/productpage.js`),
        context: {
          handle: node.handle,
        },
      })
    })


    allProductTypes.forEach(({ node }) => {


      const productType = node.id.split('__')[2]
      createPage({
        path: `/store/category/${productType}/`,
        component: path.resolve(`./src/pages/store/categorypage.js`),
        context: {
          productType: productType,
        },
      })
    })
  })

}
