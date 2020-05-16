import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Newsletter from "./../components/newsletter";

const Nosotros = ({ data: { nosotros, datoCmsNewsletter } }) => (
  <Layout>
    <HelmetDatoCms seo={nosotros.seoMetaTags}>
      <html lang="es" />
      <title>SER+ | Nosotros</title>
    </HelmetDatoCms>
    <section className="mx-auto mb-16 md:px-0 max-w-screen-xl">
      <Img
        className="nosotros-hero"
        imgStyle={{ objectPosition: "100% -40px" }}
        fluid={nosotros.heroImage.fluid}
      />
    </section>

    <section className="container mx-auto md:w-4/5 px-4 md:px-8 md:px-0">
      <h1 className="text-6xl text-center">{nosotros.title}</h1>
      <h5 className="text-center">{nosotros.subtitle}</h5>
    </section>

    <section className="py-24">
      <div className="md:flex mx-auto">
        <div className="mt-8 p-8 sm:p-0 md:mt-0 md:w-1/2 flex relative justify-end">
          <div className="md:w-2/3 md:mr-16">
            <h2 className="text-4xl font-bold mb-4">{nosotros.misionTitle}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: nosotros.misionTextNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <Img className="object-cover" fluid={nosotros.misionImage.fluid} />
        </div>
      </div>
    </section>

    <section className="py-24 bg-sermas-green-100">
      <div className="container md:flex mx-auto">
        <div className="md:w-1/2 sm:px-16">
          <Img className="object-cover" fluid={nosotros.visionImage.fluid} />
        </div>
        <div className="md:w-1/2 flex relative">
          <div className="mt-16 md:mt-0 md:ml-8 p-8 md:p-0 w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4">{nosotros.visionTitle}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: nosotros.visionTextNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto md:w-4/5 px-4 md:px-0 py-24">
      <h2 className="text-center text-4xl font-bold mb-16">
        {nosotros.valoresTitle}
      </h2>
      <div className=" md:flex">
        <div className="lg:w-1/2">
          <div
            dangerouslySetInnerHTML={{
              __html: nosotros.valoresTextLeftNode.childMarkdownRemark.html,
            }}
          />
        </div>
        <div className="lg:w-1/2">
          <div
            dangerouslySetInnerHTML={{
              __html: nosotros.valoresTextRightNode.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </section>

    <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0">
      <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-8 md:p-12 bg-white">
        <Newsletter {...datoCmsNewsletter} />
      </div>
    </section>
  </Layout>
);

export default Nosotros;

export const query = graphql`
  query NosotrostQuery {
    nosotros: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      heroImage {
        fluid(maxWidth: 1200, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
          ...GatsbyDatoCmsFluid
        }
      }
      misionTitle
      misionTextNode {
        childMarkdownRemark {
          html
        }
      }
      misionImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      visionTitle
      visionTextNode {
        childMarkdownRemark {
          html
        }
      }
      visionImage {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      valoresTitle
      valoresTextLeftNode {
        childMarkdownRemark {
          html
        }
      }
      valoresTextLeftNode {
        childMarkdownRemark {
          html
        }
      }
      valoresTextRightNode {
        childMarkdownRemark {
          html
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
