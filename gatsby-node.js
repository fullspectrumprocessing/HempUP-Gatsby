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
    }
  `).then(result => {
    result.data.allShopifyProduct.edges.forEach(({ node }) => {

      createPage({
        path: `/store/product/${node.handle}/`,
        component: path.resolve(`./src/pages/store/productpage.js`),
        context: {
          handle: node.handle,
        },
      })
    })
  })
}
