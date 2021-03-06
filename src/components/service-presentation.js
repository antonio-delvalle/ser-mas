import React from "react";
import Img from "gatsby-image";
import InlineCta from "./inline-cta";

const ServicePresentation = ({
  title,
  pretitle,
  textNode,
  imageType,
  ctaText,
  image,
  serviceLink,
}) => {
  const squared = () => (
    <div className="py-24 bg-sermas-green-100">
      <div className="container md:flex mx-auto">
        <div className="md:w-1/2 sm:px-16">
          <Img fluid={image.fluid} />
        </div>
        <div className="md:w-1/2 flex relative">
          <div className="mt-16 md:mt-0 ml-8 w-full md:w-2/3 mr-8 md:mr-0">
            <h2 className="tracking-sermas mb-4">{pretitle}</h2>
            <h3 className="text-2xl font-bold leading-tight mb-4">{title}</h3>
            <div
              className="mb-8 content"
              dangerouslySetInnerHTML={{
                __html: textNode.childMarkdownRemark.html,
              }}
            />
            <InlineCta url={`/servicio/${serviceLink.slug}`} text={ctaText} />
          </div>
        </div>
      </div>
    </div>
  );

  const full = () => (
    <div>
      <div className="md:flex mx-auto">
        <div className="px-8 sm:p-0 md:py-24 md:w-1/2 md:flex relative justify-end">
          <div className="mt-24 mb-8 md:mt-0 md:w-2/3 md:mr-16">
            <h2 className="tracking-sermas mb-4">{pretitle}</h2>
            <h3 className="text-2xl font-bold leading-tight mb-4">{title}</h3>
            <div
              className="mb-8 content"
              dangerouslySetInnerHTML={{
                __html: textNode.childMarkdownRemark.html,
              }}
            />
            <InlineCta url={`/servicio/${serviceLink.slug}`} text={ctaText} />
          </div>
        </div>
        <div className="md:w-1/2">
          <Img className="object-cover" fluid={image.fluid} />
        </div>
      </div>
    </div>
  );

  const regular = () => (
    <div className="py-24">
      <div className="md:flex mx-auto">
        <div className="px-8 sm:p-0 md:mt-0 md:w-1/2 flex relative justify-end">
          <div className="md:w-2/3 md:mr-16 mb-8">
            <h2 className="tracking-sermas mb-4">{pretitle}</h2>
            <h3 className="text-2xl font-bold leading-tight mb-4">{title}</h3>
            <div
              className="mb-8 content"
              dangerouslySetInnerHTML={{
                __html: textNode.childMarkdownRemark.html,
              }}
            />
            <InlineCta url={`/servicio/${serviceLink.slug}`} text={ctaText} />
          </div>
        </div>
        <div className="md:w-1/2">
          <Img className="object-cover" fluid={image.fluid} />
        </div>
      </div>
    </div>
  );

  if (imageType === "type_squared") return squared();

  if (imageType === "type_full") return full();

  return regular();
};

export default ServicePresentation;
