const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsServicio {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
      .then((result) => {
        result.data.allDatoCmsServicio.edges.map(({ node: servicio }) => {
          createPage({
            path: `servicio/${servicio.slug}`,
            component: path.resolve(`./src/templates/servicio.js`),
            context: {
              slug: servicio.slug,
            },
          });
        });

        resolve();
      })
  });
};
