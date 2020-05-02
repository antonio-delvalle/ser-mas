import React from "react";
import Img from "gatsby-image";

const ServicePresentation = ({
  title,
  pretitle,
  text,
  imageType,
  ctaText,
  image,
  serviceLink,
}) => {
  if (imageType === "type_squared") {
    return (
      <div className="py-24 bg-sermas-green-100">
        <div className="container md:flex mx-auto">
          <div className="md:w-1/2 px-16">
            <Img className="object-cover" fluid={image.fluid} />
          </div>
          <div className="md:w-1/2 flex relative">
            <div className="ml-8 w-2/3">
              <h5 className="tracking-sermas mb-4">{pretitle}</h5>
              <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
              <p className="mb-4">{text}</p>
              <a href={`/servicios/${serviceLink.slug}`}>{ctaText}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (imageType === "type_full") {
    return (
      <div>
        <div className="md:flex mx-auto">
          <div className="py-24 md:w-1/2 md:flex relative">
            <div className="md:w-2/3">
              <h5 className="tracking-sermas mb-4">{pretitle}</h5>
              <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
              <p className="mb-4">{text}</p>
              <a href={`/servicios/${serviceLink.slug}`}>{ctaText}</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Img className="object-cover" fluid={image.fluid} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24">
      <div className="md:flex mx-auto">
        <div className="md:w-1/2 flex relative">
          <div className="md:w-2/3">
            <h5 className="tracking-sermas mb-4">{pretitle}</h5>
            <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
            <p className="mb-4">{text}</p>
            <a href={`/servicios/${serviceLink.slug}`}>{ctaText}</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <Img className="object-cover" fluid={image.fluid} />
        </div>
      </div>
    </div>
  );
};

export default ServicePresentation;
