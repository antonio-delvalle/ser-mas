import React, { useState } from "react";
import Img from "gatsby-image";

const ServiceCard = ({ data: { id, image, title, text } }) => {
  return (
    <div className="mx-auto shadow-2xl rounded-lg" key={id}>
      <div>
        <div className="h-64">
          <Img className="h-64 rounded-t-lg" fluid={image.fluid} />
        </div>
        <div className="flex relative p-8">
          <div className="">
            <h6 className="text-2xl font-bold leading-tight mb-4">{title}</h6>
            <p className="mb-4">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
