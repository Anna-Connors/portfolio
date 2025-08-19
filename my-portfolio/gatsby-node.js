const path = require('path')
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.allContentfulProject.nodes.forEach(project => {
    createPage({
      path: `/projects/${project.slug}`,
      component: path.resolve("./src/templates/ProjectTemplate.js"),
      context: {
        slug: project.slug,
      },
    })
  })

}
