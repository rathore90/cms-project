const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  const result1 = await graphql(`
    query {
      allSitePage {
        edges{
          node{
            id
          }
        } 
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }


  // if (result1.errors) {
  //   reporter.panicOnBuild(
  //     `There was an error loading your Contentful posts`,
  //     result.errors
  //   )
  //   return
  // }

  const posts = result.data.allContentfulBlogPost.nodes
  {result1}
  result1.data.allSitePage.edges.forEach(edge => {
    {edge}
    // createPage({
    //   path: `${edge.nodes.slug}`,
    //   context: {
    //     title: edge.nodes.title,
    //   },
    // })
  })


  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}
