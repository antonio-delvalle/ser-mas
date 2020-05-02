import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import ServicePresentation from "../components/service-presentation";
import ServiceCard from "../components/service-card";

const IndexPage = ({ data: { datoCmsHome } }) => (
  <Layout>
    <div className="flex pb-16">
      <div className="md:pt-32 md:pb-24 w-2/5">
        <div className="pl-16">
          <h1 className="text-6xl leading-tight mb-4 home-hero">
            {datoCmsHome.heroTitle}
          </h1>
          <div>
            <p>{datoCmsHome.heroSubtitle}</p>
            <hr className="h-px bg-gray-300 my-8" />
            <a className="font-bold mt-2 block" href={datoCmsHome.heroCtaLink}>
              {datoCmsHome.heroCtaText}
            </a>
          </div>
        </div>
      </div>
      <div className="top-0 right-0 w-3/5 z-neg">
        <Img fluid={datoCmsHome.heroImage.fluid} />
      </div>
    </div>

    <section className="mb-16">
      {datoCmsHome.servicePresentations.map((presentation) => (
        <ServicePresentation data={presentation} />
      ))}
    </section>

    <section className="container mx-auto w-2/3">
      <h6 className="text-2xl font-bold leading-tight mb-16 text-center">Mas servicios</h6>
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-16">
        {datoCmsHome.serviceCards.map((card) => (
          <ServiceCard data={card} />
        ))}
      </div>
    </section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      heroSubtitle
      heroTitle
      heroCtaLink
      heroCtaText
      heroImage {
        url
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      servicePresentations {
        ... on DatoCmsServicePresentation {
          id
          ctaText
          serviceLink {
            slug
          }
          title
          text
          pretitle
          imageType
          image {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
      serviceCards {
        ... on DatoCmsServiceCard {
          text
          title
          ctaText
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
