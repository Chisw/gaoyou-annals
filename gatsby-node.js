const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const createPages = require('./gatsby-createPages')

exports.createPages = ({ graphql, actions }) => Promise.all([
  createPages.createRedirects({ actions }),
  createPages.createMarkdownPages({ graphql, actions }),
])


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // Disable source maps
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  // fix bizcharts 'document'
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@antv/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

};
