import React from "react";
import { graphql } from "gatsby";
import Slider from "react-slick";
import Img from "gatsby-image";
import Layout from "../components/layout";
import ServicePresentation from "../components/service-presentation";
import ServiceCard from "../components/service-card";
import TestimonialCard from "../components/testimonial-card";
import Newsletter from "../components/newsletter";
import InlineCta from "../components/inline-cta";
import EmailListForm from "../components/email-list-form";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IndexPage = ({ data: { datoCmsHome, datoCmsNewsletter } }) => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
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
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false
        },
      },
    ],
  };
  return (
    <Layout>
      <div className="flex mx-8 sm:mx-0 pb-16 mt-16 sm:mt-0">
        <div className="sm:pt-32 sm:pb-24 sm:w-2/5">
          <div className="sm:pl-16">
            <h1 className="text-2xl md:text-6xl leading-tight mb-4 sm:home-hero">
              {datoCmsHome.heroTitle}
            </h1>
            <div>
              <p className="mb-8">{datoCmsHome.heroSubtitle}</p>
              <EmailListForm />
              <hr className="h-px bg-gray-300 my-8" />

              <InlineCta
                url={datoCmsHome.heroCtaLink}
                text={datoCmsHome.heroCtaText}
              />
            </div>
          </div>
        </div>
        <div className="hidden sm:block md:top-0 sm:right-0 sm:w-3/5 z-neg">
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
        <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-8 md:p-12 ">
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
