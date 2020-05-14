import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import MainHeader from "./../components/main-header";
import Newsletter from "./../components/newsletter";

export default ({ data: { datoCmsServicio, datoCmsNewsletter } }) => {
  console.log(datoCmsServicio.content)
  return (
    <Layout>
      <MainHeader
        title={datoCmsServicio.heroTitle}
        subtitle={datoCmsServicio.heroSubtitle}
        ctaLink={datoCmsServicio.heroCtaLink}
        ctaText={datoCmsServicio.heroCtaText}
        image={datoCmsServicio.heroImage}
        pretitle={datoCmsServicio.heroPretitle}
      />

      <HelmetDatoCms seo={datoCmsServicio.seoMetaTags} />

      <div>
        {datoCmsServicio.content.map((block) => (
          <div key={block.id}>
            <h3>{block.title}</h3>
            <div>{block.text}</div>
            {/* <Img src={block.image} /> */}
          </div>
        ))}
      </div>

      <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0">
        <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-8 md:p-12 ">
          <Newsletter {...datoCmsNewsletter} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ServicioQuery($slug: String!) {
    datoCmsServicio(slug: { eq: $slug }) {
      heroTitle
      heroPretitle
      heroSubtitle
      heroImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      content {
        ... on DatoCmsBio {
          model {
            apiKey
          }
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
        ... on DatoCmsMainContent {
          model {
            apiKey
          }
          id
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
    datoCmsNewsletter {
      newsletterTitle
      newsletterText
      remoteTitle
      remoteText
    }
  }
`;
