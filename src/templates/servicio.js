import React from "react";
import Slider from "react-slick";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <article className="containerpx-1-5 py-4">
      <HelmetDatoCms seo={data.datoCmsServicio.seoMetaTags} />
      <div className="sheet__inner">
        <p>{data.datoCmsServicio.heroPretitle}</p>
        <h1 className="sheet__title">{data.datoCmsServicio.heroTitle}</h1>
        <h3>{data.datoCmsServicio.heroSubtitle}</h3>
        <div>
          {data.datoCmsServicio.content.map((block) => (
            <div key={block.id}>
              <h3>{block.title}</h3>
              <div>{block.text}</div>
              {/* <Img src={block.image} /> */}
            </div>
          ))}
        </div>
      </div>
    </article>
  </Layout>
);

export const query = graphql`
  query ServicioQuery($slug: String!) {
    datoCmsServicio(slug: { eq: $slug }) {
      heroTitle
      heroPretitle
      heroSubtitle
      content {
        ... on DatoCmsBio {
          model { apiKey }
          id
          title
          text
          image {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  } 
`;
