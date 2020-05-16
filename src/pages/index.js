import React from "react";
import { graphql } from "gatsby";
import Slider from "react-slick";

import Layout from "../components/layout";
import ServicePresentation from "../components/service-presentation";
import ServiceCard from "../components/service-card";
import TestimonialCard from "../components/testimonial-card";
import Newsletter from "../components/newsletter";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainHeader from "../components/main-header";

const IndexPage = ({ data: { datoCmsHome, datoCmsNewsletter } }) => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsHome.seoMetaTags}>
        <title>SER+</title>
      </HelmetDatoCms>
      <MainHeader
        title={datoCmsHome.heroTitle}
        subtitle={datoCmsHome.heroSubtitle}
        ctaLink={datoCmsHome.heroCtaLink}
        ctaText={datoCmsHome.heroCtaText}
        image={datoCmsHome.heroImage}
        pretitle=""
      />

      <section className="bg-sermas-green-100 py-24 px-8 md:px-0">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">
            Sesiones en línea grupales e individuales
          </h2>
          <p>Webinars gratuitos y sesiones individuales remotas</p>
        </div>
        <div className="mx-auto md:mb-0 md:w-4/5 container">
          <Newsletter {...datoCmsNewsletter} />
        </div>
      </section>

      <section className="mb-16">
        {datoCmsHome.servicePresentations.map((presentation) => (
          <ServicePresentation key={presentation.id} {...presentation} />
        ))}
      </section>

      <section className="container mx-auto md:w-3/4 mb-16 px-4 md:px-0">
        <h6 className="text-2xl font-bold leading-tight mb-16 text-center">
          Mas servicios
        </h6>
        <div className="md:grid grid-flow-col grid-cols-2 grid-rows-2 md:gap-16">
          {datoCmsHome.serviceCards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <section className="bg-sermas-green-200 mb-16">
        <div className="md:w-4/5 mx-auto">
          <Slider {...sliderSettings}>
            {datoCmsHome.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </Slider>
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
          textNode {
            childMarkdownRemark {
              html
            }
          }
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
          textNode {
            childMarkdownRemark {
              html
            }
          }
          title
          id
          ctaText
          image {
            url
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
      testimonials {
        ... on DatoCmsTestimonial {
          id
          name
          textNode {
            childMarkdownRemark {
              html
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
