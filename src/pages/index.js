import React from "react";
import { graphql } from "gatsby";
import Slick from "react-slick";
import Img from "gatsby-image";
import Layout from "../components/layout";
import ServicePresentation from "../components/service-presentation";
import ServiceCard from "../components/service-card";
import TestimonialCard from "../components/testimonial-card";
import Newsletter from "../components/newsletter";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = ({ data: { datoCmsHome, datoCmsNewsletter } }) => {
  var settings = {
    dots: true,
    arrow: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          centerPadding: "600px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          className: "center",
          centerMode: false,
          centerPadding: "60px",
        },
      },
    ],
  };
  return (
    <Layout>
      <div className="flex pb-16">
        <div className="md:pt-32 md:pb-24 md:w-2/5">
          <div className="pl-16">
            <h1 className="text-3xl md:text-6xl leading-tight mb-4 md:home-hero">
              {datoCmsHome.heroTitle}
            </h1>
            <div>
              <p>{datoCmsHome.heroSubtitle}</p>
              <hr className="h-px bg-gray-300 my-8" />
              <a
                className="font-bold mt-2 block"
                href={datoCmsHome.heroCtaLink}
              >
                {datoCmsHome.heroCtaText}
              </a>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:top-0 md:right-0 md:w-3/5 z-neg">
          <Img fluid={datoCmsHome.heroImage.fluid} />
        </div>
      </div>

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

      <section className="container mx-auto md:w-3/4 mb-16 px-8 md:px-0">
        <h6 className="text-2xl font-bold leading-tight mb-16 text-center">
          Mas servicios
        </h6>
        <div className="md:grid grid-flow-col grid-cols-2 grid-rows-2 md:gap-16">
          {datoCmsHome.serviceCards.map((card) => (
            <ServiceCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto bg-sermas-green-200 mb-16">
        <Slick {...settings}>
          {datoCmsHome.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </Slick>
      </section>

      <section className="container mx-auto md:w-4/5 mb-16 px-8 md:px-0">
        <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-12 ">
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
          text
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
