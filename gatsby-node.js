/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

// setting up aliases:
const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@constants": path.resolve(__dirname, "src/constants"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@common": path.resolve(__dirname, "src/components/common"),
        "@canvas": path.resolve(__dirname, "src/components/canvas"),
        "@home": path.resolve(__dirname, "src/components/home"),
        "@public": path.resolve(__dirname, "public"),
      },
    },
  })
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.jsx"),
    context: {},
    defer: true,
  })
}
