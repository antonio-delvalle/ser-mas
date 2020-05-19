import React from "react";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Newsletter from "./../components/newsletter";
import Img from "gatsby-image";
import Clipboard from "react-clipboard.js";
import { graphql } from "gatsby";

const Contacto = ({ data: { contacto, newsletter } }) => {
  return (
    <Layout>
      <HelmetDatoCms seo={contacto.seoMetaTags}>
        <title>SER+ | Contacto</title>
      </HelmetDatoCms>
      <section className="container mx-auto pb-16">
        <header className="md:flex">
          <div className="md:w-1/2 px-4 md:px-8">
            <div className="mb-4 pt-8 md:pt-16">
              <h1 className="text-4xl font-bold mb-2">Contacto</h1>
              <p>Haz una cita o pregúntanos cualquier cosa</p>
            </div>
            <div id="address" className="flex justify-between">
              <p>
                Manuel E. Izaguirre 19 <br /> Cd. Satélite, Naucalpan <br />{" "}
                53100 <br /> Piso 5, oficina 500
              </p>
              <div>
                <div className="text-sm">
                  <Clipboard
                    className="p-2 bg-white hover:bg-sermas-green-100 rounded-lg border"
                    onClick={() => alert("Dirección copiada")}
                    data-clipboard-text="Manuel E. Izaguirre 19, Cd. Satélite, Naucalpan, Estado de México, 53100"
                  >
                    Copiar
                  </Clipboard>
                </div>
              </div>
            </div>
            <hr className="h-px bg-gray-300 my-8" />
            <div className="flex items-center my-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="tel:5562715211"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  className="text-2xl text-sermas-green-300 mr-4"
                  icon="phone"
                />
                Llama al{" "}
                <span className="ml-1 flex flex-col hover:text-sermas-green-200 font-bold">
                  55 6271 5211
                </span>
              </a>
            </div>
            <div className="flex items-center my-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  className="text-3xl text-sermas-green-300 mr-4"
                  icon={["fab", "whatsapp"]}
                />
                Envíanos un{" "}
                <span className="ml-1 flex items-center hover:text-sermas-green-200 font-bold">
                  <span>Whatsapp</span>{" "}
                  <FontAwesomeIcon
                    className="ml-2 text-sermas-green-300 text-xs"
                    icon="external-link-alt"
                  />
                </span>
              </a>
            </div>
            <div className="flex items-center my-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.waze.com/ul?place=ChIJeSLCltID0oURndI9f5nzPUY&ll=19.51314200%2C-99.23235820&navigate=yes"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  className="text-3xl text-sermas-green-300 mr-4"
                  icon={["fab", "waze"]}
                />
                Ir en{" "}
                <span className="ml-1 flex items-center hover:text-sermas-green-200 font-bold">
                  <span>Waze</span>{" "}
                  <FontAwesomeIcon
                    className="ml-2 text-sermas-green-300 text-xs"
                    icon="external-link-alt"
                  />
                </span>
              </a>
            </div>
            <div className="flex items-center my-6">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/SER%2B/@19.513142,-99.2345469,17z/data=!3m1!4b1!4m5!3m4!1s0x85d203d296c22279:0x463df3997f3dd29d!8m2!3d19.513142!4d-99.2323582"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  className="text-2xl text-sermas-green-300 mr-4"
                  icon="map-marked-alt"
                />
                Ir en{" "}
                <span className="ml-1 flex items-center hover:text-sermas-green-200 font-bold">
                  <span>Google Maps</span>{" "}
                  <FontAwesomeIcon
                    className="ml-2 text-sermas-green-300 text-xs"
                    icon="external-link-alt"
                  />
                </span>
              </a>
            </div>
            <div className="flex items-center my-6">
              <a href="mailto:contacto@ser-mas.mx" className="flex items-center">
                <FontAwesomeIcon
                  className="text-2xl text-sermas-green-300 mr-4"
                  icon="envelope"
                />
                Envíanos un{" "}
                <span className="ml-1 flex items-center hover:text-sermas-green-200 font-bold">
                  <span>email</span>{" "}
                  <FontAwesomeIcon
                    className="ml-2 text-sermas-green-300 text-xs"
                    icon="external-link-alt"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/place/SER%2B/@19.513142,-99.2345469,17z/data=!3m1!4b1!4m5!3m4!1s0x85d203d296c22279:0x463df3997f3dd29d!8m2!3d19.513142!4d-99.2323582"
            >
              <Img fluid={contacto.image.fluid} />
            </a>
          </div>
        </header>
      </section>

      <section className="container mx-auto md:w-4/5 mb-16 px-4 md:px-8 md:px-0">
        <div className="shadow-2xl rounded-lg mb-8 md:mb-0 p-8 md:p-12 bg-white">
          <Newsletter {...newsletter} />
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;

export const query = graphql`
  query ContactoQuery {
    contacto: datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      image {
        fluid(maxWidth: 800, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
    newsletter: datoCmsNewsletter {
      newsletterTitle
      newsletterText
      remoteTitle
      remoteText
    }
  }
`;
