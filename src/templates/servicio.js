import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import MainHeader from "./../components/main-header";
import Newsletter from "./../components/newsletter";
import Biography from "./../components/biography";
import ServiceMainContent from "./../components/service-main-content";
import VideoPreview from "./../components/video-preview";

export default ({ data: { datoCmsServicio, datoCmsNewsletter } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsServicio.seoMetaTags}>
        <title>{`SER+ | ${datoCmsServicio.slug}`}</title>
      </HelmetDatoCms>
      <MainHeader
        title={datoCmsServicio.heroTitle}
        subtitle={datoCmsServicio.heroSubtitle}
        ctaLink={datoCmsServicio.heroCtaLink}
        ctaText={datoCmsServicio.heroCtaText}
        image={datoCmsServicio.heroImage}
        pretitle={datoCmsServicio.heroPretitle}
      />
      <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0">
        <ServiceMainContent
          text={datoCmsServicio.mainTextNode}
          image={datoCmsServicio.mainImage}
        />
      </section>

      <section className="bg-sermas-gray-150 py-12 md:py-24 px-8 md:px-0 mb-16">
        <div className="mx-auto md:mb-0 md:w-4/5 container">
          <Biography
            title={datoCmsServicio.bioTitle}
            image={datoCmsServicio.bioImage}
            text={datoCmsServicio.bioTextNode}
          />
        </div>
      </section>

      <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0 ">
        <div className="p-8 md:p-16">
          <VideoPreview
            url={datoCmsServicio.videoUrl}
            image={datoCmsServicio.videoPreview}
          />
        </div>
      </section>

      <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0">
        <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-8 md:p-12 bg-white">
          <Newsletter {...datoCmsNewsletter} />
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ServicioQuery($slug: String!) {
    datoCmsServicio(slug: { eq: $slug }) {
      slug
      heroTitle
      heroPretitle
      heroSubtitle
      heroImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioText
      bioTextNode {
        childMarkdownRemark {
          html
        }
      }
      bioTitle
      bioImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      mainImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      mainText
      mainTextNode {
        childMarkdownRemark {
          html
        }
      }
      videoUrl
      videoPreview {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
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
