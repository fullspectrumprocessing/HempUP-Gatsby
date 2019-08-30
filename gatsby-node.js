const path = require(`path`)

/*
TODO:

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
            productType
          }
        }
      }
    }
  `).then(result => {
    const allProducts = result.data.allShopifyProduct.edges
    // edges come back as an array
    const allProductTypes = []

    allProducts.forEach(({ node }) => {

      createPage({
        path: `/store/product/${node.handle}/`,
        component: path.resolve(`./src/pages/store/productpage.js`),
        context: {
          handle: node.handle,
        },
      })

      !allProductTypes.includes(node.productType) && allProductTypes.push(node.productType)

    })


    allProductTypes.forEach((item) => {

      createPage({
        path: `/store/category/${item}/`,
        component: path.resolve(`./src/pages/store/categorypage.js`),
        context: {
          productType: item,
        },
      })

    })
  })

}
