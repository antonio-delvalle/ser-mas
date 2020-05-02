import React, { useState } from "react";
import Img from "gatsby-image";

const ServicePresentation = ({
  data: { title, pretitle, text, imageType, id, ctaText, image, serviceLink },
}) => {
  if (imageType === "type_squared") {
    return (
      <div className="py-24 bg-sermas-green-100" key={id}>
        <div className="container flex mx-auto">
          <div className="w-1/2 px-16">
            <Img className="object-cover" fluid={image.fluid} />
          </div>
          <div className="w-1/2 mr-4 flex relative">
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
      <div key={id}>
        <div className="flex mx-auto">
          <div className="py-24 w-1/2 mr-4 flex relative">
            <div className="absolute right-0 w-2/3">
              <h5 className="tracking-sermas mb-4">{pretitle}</h5>
              <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
              <p className="mb-4">{text}</p>
              <a href={`/servicios/${serviceLink.slug}`}>{ctaText}</a>
            </div>
          </div>
          <div className="w-1/2">
            <Img className="object-cover" fluid={image.fluid} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24" key={id}>
      <div className="flex mx-auto">
        <div className="w-1/2 mr-4 flex relative">
          <div className="absolute right-0 w-2/3">
            <h5 className="tracking-sermas mb-4">{pretitle}</h5>
            <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
            <p className="mb-4">{text}</p>
            <a href={`/servicios/${serviceLink.slug}`}>{ctaText}</a>
          </div>
        </div>
        <div className="w-1/2">
          <Img className="object-cover" fluid={image.fluid} />
        </div>
      </div>
    </div>
  );
};

export default ServicePresentation;
