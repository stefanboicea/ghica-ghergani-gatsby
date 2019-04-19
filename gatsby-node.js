const _ = require('lodash')

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const postTemplate = require.resolve('./src/templates/post.jsx')
  const categoryTemplate = require.resolve('./src/templates/category.jsx')
  const pageTemplate = require.resolve('./src/templates/page.jsx')

  const result = await wrapper(
    graphql(`
      {
        allPrismicPost {
          edges {
            node {
              id
              uid
              data {
                categories {
                  category {
                    document {
                      data {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)
  )



  const pagesResult = await wrapper(
    graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
            data {
              title {
                text
              }
              description
              coverimage {
                url
              }
            }
          }
        }
      }
    }
    `)
  )

  const pagesList = pagesResult.data.allPrismicPage.edges
  pagesList.forEach(edge => {
    if (edge.node.uid === 'index') {
      createPage({
        path: `/`,
        component: pageTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    }
    else {
      createPage({
        path: `${edge.node.uid}`,
        component: pageTemplate,
        context: {
          uid: edge.node.uid,
        },
      })
    }
  })

  const categorySet = new Set()
  const postsList = result.data.allPrismicPost.edges

  // Double check that the post has a category assigned
  postsList.forEach(edge => {
    if (edge.node.data.categories[0].category) {
      edge.node.data.categories.forEach(cat => {
        categorySet.add(cat.category.document[0].data.name)
      })
    }

    // The uid you assigned in Prismic is the slug!
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  const categoryList = Array.from(categorySet)

  categoryList.forEach(category => {
    createPage({
      path: `/blog/categorii/${_.kebabCase(category)}`,
      component: categoryTemplate,
      context: {
        category,
      },
    })
  })
}
