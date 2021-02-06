const Promise = require('bluebird')
const path = require('path')


exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      products: allContentfulProduct {
        edges {
          node {
            slug
          }
        }
      }
      notHome:allContentfulPage(filter: {slug: {ne: "home"}}) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  data.products.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: `/product/${slug}`,
      component: require.resolve(`./src/templates/product.js`),
      context: { slug: slug },
    })
  });

  data.notHome.edges.forEach(edge => {
    const slug = edge.node.slug
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page.js`),
      context: { slug: slug },
    })
  })
}
