const path = require(`path`)

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
