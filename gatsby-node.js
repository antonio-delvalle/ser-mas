const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork {
          edges {
            node {
              slug
            }
          }
        }
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
        result.data.allDatoCmsWork.edges.map(({ node: work }) => {
          createPage({
            path: `works/${work.slug}`,
            component: path.resolve(`./src/templates/work.js`),
            context: {
              slug: work.slug,
            },
          });
        });

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
