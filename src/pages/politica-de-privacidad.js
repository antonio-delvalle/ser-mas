import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

const PoliticaDePrivacidad = ({ data: { politica } }) => (
  <Layout>
    <HelmetDatoCms seo={politica.seoMetaTags}>
      <title>SER+ | Política de privacidad</title>
    </HelmetDatoCms>
    <div className="container mx-auto py-24">
      <div className="w-full md:w-2/3 p-8 sm:ml-8 md:p-0">
        <h1 className="text-4xl mb-8">{politica.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: politica.contentNode.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  </Layout>
);

export default PoliticaDePrivacidad;

export const query = graphql`
  query PoliticaDePrivacidadQuery {
    politica: datoCmsPrivacyPolicy {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      contentNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
